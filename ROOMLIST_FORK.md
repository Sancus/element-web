# Room-list fork handoff

This checkout is the working tree for the Element Web performance fork:

- Upstream: `https://github.com/element-hq/element-web.git` (`origin`)
- Fork: `https://github.com/Sancus/element-web.git` (`fork`)
- Current published build: [`threads-v2`](https://github.com/Sancus/element-web/releases/tag/threads-v2),
  tagged at the tip of `release` and so an ancestor of it, unlike its predecessor.

### Branches

Three, each strictly downstream of the last, so a change belongs to exactly one of them.

**`develop`** — the product work, everything under "What changed", rebased on upstream `develop`.
App and feature changes only: nothing about building, packaging or deploying anywhere. That is what
keeps it a clean feature diff to read against upstream.

**`release`** — `develop` plus the CI for both targets: `desktop-builds.yml`, its release assets and
dependency verifier, `deploy-chat-thunderbird.yml`, the deploy-time `apps/web/thunderbird/` config,
and the `electron-builder.ts` signing gates. **Every desktop build and tag comes from here**, and
the packages it produces are
Element-branded. When `develop` moves, rebase (`git rebase develop release`) and force-push; the CI
files are new to this fork, so they cannot conflict.

**`chat-deploy`** — `release` plus the Thunderbird wording and icons, and the branch
`chat.thunderbird.net` is deployed from. It exists as a separate branch rather than as part of
`release` for one concrete reason: the desktop workflow copies `apps/web/webapp` wholesale and
overrides only `config.json`, so anything compiled into the bundle instead of read from config ends
up inside Element Desktop. Two cases actually bite — the `<title>`, which Electron's window title
follows until `MatrixChat.setPageSubtitle` replaces it from `brand`, and the static error pages,
which `src/vector/index.ts:260` iframes when the app fails to load. Holding that branding one branch
downstream means desktop packages never see it. Rebase onto `release` to pick up app changes.

Everything else in the rebrand is config-driven and therefore safe on `release`: the desktop build
overwrites `config.json` with `apps/desktop/element.io/release/config.json`, which sets
`brand: "Element"` and carries no `branding` key, so the wordmark, the auth background, the
homeserver and the integrations manager all revert to Element's own for desktop builds.

One consequence to know about: `apps/web/thunderbird/config.json` sits on `release` and points
`branding.auth_header_logo_url` and `welcome_background_url` at images that only exist on
`chat-deploy`. Deploying the web app from `release` would therefore serve an Element-worded app with
two broken images. Deploy from `chat-deploy`, which is what the workflow triggers on.

The latest release contains Windows, universal macOS, and Linux packages. The local
untracked `element-desktop-roomlist-fix-20260802.zip` and `perf-harness/` directory are
investigation artifacts; do not accidentally add them to a release commit.

## What changed

### Room-list scroll performance

The virtualized room list uses `react-virtuoso`, but each visible row used to retain
multiple closed Compound tooltips. Closed label tooltips still ran Floating-UI
`autoUpdate`, multiplying scroll listeners, resize observers, and layout reads while the
list scrolled.

The fork addresses that at two layers:

1. `pnpm-workspace.yaml` pins `@vector-im/compound-web` to the
   [`tooltip-perf`](https://github.com/Sancus/compound-web/tree/tooltip-perf) fork commit
   `7b355b4c4517466da78f01e7866ff87c01d432e6`. Its closed label tooltips do not create a
   floating element, so they do not retain an `autoUpdate` loop.
2. Room-list rows only mount the hover menu and avatar badge tooltip during a real pointer
   interaction. The code uses `onMouseMove`, rather than `onMouseEnter`, because scrolling
   beneath a stationary pointer synthesizes enter events and would remount every menu.

The original drag benchmark on an account with roughly 1,000 rooms recorded listener
registrations falling from 30,574 to 946. The v6 release notes describe the resulting
scroll improvement as roughly 4–5x.

The release workflow checks the packed `webapp.asar` for both the Compound fix and
row-level avatar gating before any platform package is built.

### Per-section room sorting

Each room-list section now exposes a menu with:

- Global default
- Latest activity
- Unread first
- A–Z

An unset override follows the list-wide `RoomList.preferredSorting` setting. Overrides are
stored at device scope in `RoomList.SectionSorting`, keyed by section tag. The store uses a
cached sorter for a section that is pinned to a different algorithm, while sections using
the global default retain the skip-list order.

Relevant implementation locations:

- `apps/web/src/stores/room-list-v3/section.ts` — override persistence, validation, and
  cleanup when a custom section is deleted.
- `apps/web/src/stores/room-list-v3/RoomListStoreV3.ts` — per-section re-sorting and sorter
  cache.
- `apps/web/src/viewmodels/room-list/RoomListSectionHeaderViewModel.ts` — view-model
  mapping between persisted algorithms and menu choices.
- `packages/shared-components/src/room-list/VirtualizedRoomListView/RoomListSectionHeaderView/`
  — menu UI, accessibility label, and tests.

Persisted unknown algorithm values are treated as no override, preventing the UI from
claiming a section follows the global order while the store silently falls back to recency.
Deleted custom sections also clear their now-unreachable override.

The known performance trade-off is intentional: pinning a section to recency or unread
while the global list is alphabetical re-sorts that section on list updates. A 1,000-room
benchmark measured about 10.4 ms per update in that asymmetric case.

### Compact layout (commits `5d6ac1fc0c`, `8b2b234120`)

A "Compact layout" checkbox in the room list options menu shrinks the row from 52px to 32px
tall and the avatar from 32px to 26px. Message previews are forced off while it is on (the
preview checkbox shows disabled; the underlying preview setting is preserved for when the
compact layout goes back off). Stored at device scope as `RoomList.compactLayout`; the value
flows through the room-list view-model snapshot to a `data-density="compact"` attribute on
the list container, which `RoomListItemView.module.css` targets to set
`--room-list-avatar-size`. The app stylesheet feeds that into `--room-avatar-size` and
`--cpd-avatar-size`, and `_RoomAvatarView.pcss` derives the presence dot and public/video
badge sizes from the avatar so the decorations scale with it.

The setting was briefly `RoomList.highDensity` (padding only, avatars untouched) and then
`RoomList.density` with three avatar sizes to choose between; 26px won, so the other two are
gone. Anyone who set either of the old settings comes back on the default row.

### "People" section (commits `324764ae23`, `8b2b234120`)

A section that collects the DMs that would otherwise land in Chats, restoring the old room
list's People behaviour without leaving the new room list, plus any room moved into it by
hand. It sits directly above Chats, is not editable or reorderable, supports per-section
sorting, and recomputes when `m.direct` changes. Toggled by the device-scope
`RoomList.showDmSection` setting (default on), shown as "Show People section" in the options
menu.

The two membership sources need more than the tag-and-exclusion composition the other
sections use, so `PeopleSectionFilter` expresses them directly: a room tagged into another
section is spoken for, otherwise the section takes it if it carries the People tag or is a
DM. Chats excludes the People tag alongside the section tags, and with the section disabled
those rooms fall back to Chats. Rooms move in from the "Move to section" submenu or by being
dropped on the header, like any other section.

The People tag is the one piece of fork state that reaches the server: it is written as an
`m.tag` of `element.io.people_section`. An upstream build doesn't recognise it, so those
rooms show up in Chats and the membership survives a round trip; re-filing such a room on
upstream leaves the tag behind, since upstream only removes the tag it knows about. The tag
is namespaced but deliberately outside `element.io.section.`, which would make the code read
it as a user-created custom section.

## Desktop release workflow

`.github/workflows/desktop-builds.yml` is self-contained and intentionally separate
from Element's upstream desktop workflows, which check out the upstream repository and rely
on upstream signing infrastructure.

### Trigger

- Push the `release` branch to build a candidate. The run stops at the uploaded artifacts,
  so packages can be downloaded from the Actions tab and tested without publishing
  anything.
- Push an annotated tag matching `roomlist-fix-*` to build and publish a release. The
  `release` job is the only difference between the two, gated on `github.ref_type == 'tag'`,
  and it is the only job granted `contents: write`.
- `workflow_dispatch` is also declared, but a push is the dependable trigger when the
  workflow is not on GitHub's default branch.

### Build process

1. The `prepare` job runs on Ubuntu, installs with `pnpm install --frozen-lockfile`, and
   builds `apps/web` once with `NX_DAEMON=false`.
2. It copies `apps/web/webapp` into `apps/desktop`, removes `update_base_url` from
   `config.json`, packages `webapp.asar`, and verifies the two shipped tooltip fixes inside
   the archive.
3. The verified archive is passed to three parallel packaging jobs, each of which first
   compiles `matrix-seshat` through hak for its platform:
    - Linux x64 on Ubuntu 22.04: `tar.gz` and `deb`
    - macOS universal: `dmg` and `zip`
    - Windows x64: portable `zip`
4. Each job restores the dependency tree, then asserts that the package it produced contains
   seshat and everything else the main process imports (see below) before uploading it.
5. On a tag, the release job gathers the five output artifacts and creates the GitHub Release.

The workflow uses the desktop's pinned Node version (`24.18.0`) and pnpm's lockfile, and
disables macOS identity discovery.

### Seshat (encrypted search) builds

Earlier `roomlist-fix-*` releases stubbed out `matrix-seshat`, so encrypted rooms were not
searchable in them. The native-module build was proven platform by platform on the
throwaway `seshat-ci` branch — [actions run 30804998604](https://github.com/Sancus/element-web/actions/runs/30804998604),
all three green — and those steps now live in the workflow on `release`, which verifies the
packaged module both ways: its metadata inside `app.asar` and the native `.node` binary
under `app.asar.unpacked`.

Platform notes learned there:

- Linux builds in upstream's Bullseye build container with `SQLCIPHER_BUNDLED=1` (static
  SQLCipher); the container leaves root-owned `node_modules` behind, so the workflow
  repairs ownership recursively afterwards.
- macOS universal packages need both Rust target architectures built through hak before
  linking, plus Xcode and Quartz setup.
- Windows needs Rust/MSVC, Tcl/Tk, and NASM.

The hak build is cached per platform (`apps/desktop/.hak`, keyed on the lockfile and the hak
scripts) and saved before packaging, so a packaging failure does not force sqlcipher and
seshat to be recompiled on the next attempt. GitHub does not share caches between sibling
branches, so the first run on any new branch pays the full Rust compile again.

### Why the tree is reinstalled after the native build

hak finishes by running `pnpm link` on the module it built. That adds `matrix-seshat` to the
**workspace root** `package.json`, rewrites `pnpm-lock.yaml`, and reformats
`pnpm-workspace.yaml`. electron-builder decides what to package from that lockfile, and
against the rewritten one it can no longer place some packages, so it quietly drops them and
logs only:

```
• cannot find path for dependency  dependencies=["import-in-the-middle@3.3.2","@opentelemetry/api-logs@0.220.0","debug@4.4.3","ms@2.1.3"]
```

That is how `roomlist-fix-v7` shipped: Windows and macOS packages missing five transitive
`@sentry/node-core` dependencies, dying at startup with `ERR_MODULE_NOT_FOUND` for
`import-in-the-middle`. Linux escaped only because pnpm happened to reinstall the whole
workspace before packaging there.

The workflow now restores `package.json`, `pnpm-lock.yaml` and `pnpm-workspace.yaml` from the
checkout and reinstalls, so packaging always runs against the committed lockfile. Reinstalling
without restoring those files is not enough — that was tried, and the packages came out broken
in exactly the same way. Dropping the link costs nothing: electron-builder takes the module
from `.hak/hakModules`, and `tsc` uses the declaration in `apps/desktop/src/@types`.

`.github/scripts/verify-packaged-deps.mjs` is the backstop: it walks the production
dependency graph inside the packaged `app.asar` and fails the build on anything unresolvable,
because electron-builder treats a missing package as a warning. Run it by hand against any
downloaded build with:

```sh
cd apps/desktop && node ../../.github/scripts/verify-packaged-deps.mjs /path/to/app.asar matrix-seshat
```

### Test a candidate

Push the branch and download the packages from that run's Actions page:

```bash
git rebase develop release && git push --force-with-lease fork release
```

The three `dist-*` artifacts hold the platform packages. Nothing is published.

### Publish a new build

Only once a candidate has been tested, create and push a new unique tag. Both prefixes the workflow
listens for work; `threads-*` is the current series:

```bash
git tag -a threads-v<N> -m "Describe the release"
git push fork threads-v<N>
```

Watch the generated GitHub Actions run. A release is created only when the prepare job and
all three platform builds succeed. Update the release notes in the workflow's `release` job
first if the feature list has moved on; they are written inline there.

Expect the tag build to take roughly twice as long as the candidate that preceded it, even on an
identical commit — about 19 minutes against 11 for `threads-v2`. Actions scopes its cache by ref, so
a tag cannot read what a branch push saved, and `hak` therefore recompiles sqlcipher and
matrix-seshat from scratch on all three platforms rather than restoring `apps/desktop/.hak`. It is
wasted time, not a fault, and the `cache-hit != 'true'` steps running is how you tell.

## Web deployment (chat.thunderbird.net)

On `chat-deploy` only. Element Web routes entirely through the URL hash — `src/vector/routing.ts`
never touches the history API — so serving it as a static site needs no rewrite rules. Element
itself deploys `app.element.io` to Cloudflare Pages. What a deployment does need is a runtime
`config.json`, cache headers, and enough branding work that it does not present itself as
Element.

Deployment-specific files live in `apps/web/thunderbird/`, kept out of `res/` so they are
obviously not part of a build: `config.json`, `_headers`, and `generate-assets.py`.

### Homeserver and login

`mozilla.modular.im`, `server_name` `mozilla.org`, which delegates authentication under MSC2965
to a Matrix Authentication Service at `https://chat.mozilla.org/`. There is no static client ID
to be had, so the client registers itself dynamically on first login. That was checked against
the live service before anything else was built, because a rejection there would have ruled out
the homeserver: POSTing the metadata `BasePlatform.getOAuthClientMetadata()` produces returns
`201` with a `client_id`, including the `urn:ietf:params:oauth:grant-type:device_code` grant
that `OAuth2.registerClient` adds when the service advertises it (it does).

Two things follow from that service's published metadata:

- `prompt_values_supported` is `["login"]`, with no `create`. Element hides its "Create account"
  button when `create` is absent, so **nobody can register an account through this client** —
  they must already have one on `mozilla.org`. `UIFeature.registration` is off to match, rather
  than leaving a button that cannot work.
- The js-sdk drops `tos_uri`, `policy_uri` and `logo_uri` from the registration request unless
  they share a host, or a subdomain of it, with `client_uri` (`urlHasCommonBase` in the js-sdk's
  `oauth/register.ts`). Thunderbird's canonical terms and privacy pages are on `mozilla.org`, so
  they are stripped and will not show on Mozilla's consent screen. `oidc_metadata.client_uri` is
  still set to `https://thunderbird.net` so that equivalents published under `*.thunderbird.net`
  later would survive. `logo_uri` defaults to `chat.thunderbird.net/vector-icons/1024.png`, which
  is a subdomain of neither problem and does survive.

### What config.json turns off, and why

Every default that would otherwise reach Element's infrastructure or misdescribe the deployment:

- `integrations_ui_url`, `integrations_rest_url` and `integrations_widgets_urls` are `null`, the
  documented way to disable integrations. Otherwise the client uses `scalar.vector.im`, which is
  Element's hosted integration manager. Widgets already present in rooms still render — the
  integration manager only provisions them — so this costs the "add widgets, bridges & bots"
  panel and nothing else.
- `bug_report_endpoint_url` is `local`, so rageshakes download instead of posting to
  `rageshakes.element.io`. No `posthog` or `sentry` block, so neither is initialised.
- `UIFeature.locationSharing` is off because no `map_style_url` is configured and Mozilla does
  not advertise `m.tile_server`; left on, location sharing would fail against Element's MapTiler
  key or not at all.
- `UIFeature.passwordReset` and `UIFeature.deactivate` are off: both are the identity provider's
  business, and it exposes its own account management UI.
- `desktop_builds.available` is `false` and `mobile_guide_toast` is `false`, so the app stops
  advertising Element's downloads.
- `enable_presence_by_hs_url` marks `mozilla.modular.im` as not serving presence, matching what
  `chat.mozilla.org` configures.

Deliberately left alone:

- **Jitsi.** `jitsi.preferred_domain` keeps its `meet.element.io` default, matching
  `chat.mozilla.org` exactly, so Thunderbird users behave like any other user of that homeserver
  and can join Jitsi widgets already in Mozilla rooms. Contrary to what it looks like, this is
  not a phone-home: `Jitsi.start()` only reads config and well-known, and `getJitsiAuth()` — the
  one thing that fetches from the domain — is reached only from `WidgetUtils.addJitsiWidget`,
  i.e. when somebody actually starts a Jitsi call.
- **`enable_client_well_known_lookups`.** Already `true` in `SdkConfig`'s defaults, and it must
  stay true: `CallStore` reads `org.matrix.msc4143.rtc_foci` from the homeserver's well-known,
  which is how Element Call finds Mozilla's LiveKit focus.
- **`help_encryption_url` and `help_key_storage_url`** still point at `element.io/help`. They are
  accurate documentation for this software and there is no Thunderbird equivalent to send people
  to.
- **`m.identity_server` is `https://vector.im`**, which is Element's identity server and looks
  like exactly the kind of dependency the rest of this removes. It stays because it is what
  `mozilla.org/.well-known/matrix/client` itself advertises for its own users, so this is
  honouring the homeserver's declaration rather than inventing a dependency. It cannot simply be
  dropped either: `app.tsx` builds `validated_server_config` from `default_server_config` without
  fetching the real well-known, so removing the line would leave `isUrl` unset and lose
  email-based invites and lookup that a `chat.mozilla.org` user has. `UIFeature.identityServer` is
  left on for the same reason.

Worth knowing rather than acting on: the LiveKit focus Mozilla advertises in that same well-known
is `https://jwt.call.element.io`, so Element Call on `mozilla.org` runs through Element-operated
infrastructure by Mozilla's own configuration. Nothing in this deployment can change that, and a
Thunderbird-hosted client is in no different a position than `chat.mozilla.org` is.

### Branding

Name and a text wordmark only. Element's own themes and colours are untouched, and the
Thunderbird bird is not used — it denotes the mail client, and a community chat deployment is not
in a position to claim it.

`brand` is `Thunderbird Chat`; `branding.auth_header_logo_url` points at
`res/vector-icons/wordmark.svg`, which `HomePage.tsx` uses as well as the auth header, so one
asset covers both. `index.html`'s title and its `apple-mobile-web-app-title` /
`application-name` metas are retitled, `res/manifest.json` is renamed and its
`related_applications` (Element's App Store and Play Store listings) dropped, and
`RIOT_OG_IMAGE_URL` is set at build time because the `og:image` default is an image hosted on
`app.element.io`.

The icons in `res/vector-icons/` and the auth background are **placeholders** generated by
`apps/web/thunderbird/generate-assets.py` — a speech bubble on a rounded tile, and a light
gradient. They exist so that no build ships Element's logo, not because they are a design.
Replacing them is a matter of overwriting the same filenames, which are fixed by
`res/manifest.json` and `index.html`.

### Code changes this needs

Four, all on `chat-deploy` rather than `release`, because each is compiled into the bundle instead
of read from config and would otherwise ship inside Element Desktop — see "Branches" above:

1. **The mobile redirect is removed** from `src/vector/index.ts`. Upstream sends every iOS and
   Android browser to `mobile_guide/`, an Element-branded page advertising Element X on the app
   stores. It is not the same thing as `mobile_guide_toast`, which only governs a toast, and it
   could not have been configured away regardless: it runs _before_ `loadConfig()`. Mobile
   browsers now get the web app, and the workflow does not upload `mobile_guide/` at all.
2. **`res/apple-app-site-association` and `res/.well-known/assetlinks.json` are emptied.** As
   shipped they delegate universal-link and App-Link handling for whatever domain serves them to
   Element's iOS and Android apps, and `webcredentials` scopes Element's saved passwords to it.
   On `chat.thunderbird.net` that would hand link handling for a Thunderbird domain to a third
   party's apps. They are emptied rather than deleted because webpack copies both by name and
   fails the build if they are missing.
3. **`AuthHeaderLogo.tsx`** had `alt="Element"` hardcoded next to a configurable logo; it now
   reads `brand`, as `HomePage.tsx` already did. Existing snapshots initialise `SdkConfig` with
   Element's defaults, so they are unaffected.
4. **The two static error pages under `src/vector/static/` are retitled.** These are the plain-HTML
   pages shown when the app cannot load or the browser is unsupported, so they are not reached by
   `brand` or any other config: both said "Element" and both offered a "Go to element.io" link, at
   exactly the moment a stuck user is most likely to click an escape hatch. They now name
   Thunderbird Chat and link to `thunderbird.net`, and `incompatible-browser.html` loses the "Use
   Element on mobile" column — 587 lines of App Store and Play Store badges for Element's apps.
   The React equivalent, `ErrorView.tsx`, needs no edit: it takes its name from `brand`, and its
   app links are suppressed because `desktop_builds.available` is false and `mobile_builds`' fields
   are nulled.

`index.html`'s `<noscript>` is retitled too, being the one string a visitor with JavaScript
disabled ever sees.

Two loose ends left deliberately:

- Webpack still builds the `mobileguide` entry, so `mobileguide.js` and `.css` ship as orphans
  with no page to load them, and `MobileGuideToast` still points at `mobile_guide/`. Harmless
  while `mobile_guide_toast` is false, but flipping it would give a toast linking to a 404.
  Removing the entry means editing `webpack.config.ts`, which is not worth the rebase surface for
  two unreferenced files.
- Ten strings in `i18n/en_EN.json` still say "Element". Seven are the name of Element Call, which
  is a distinct product this deployment genuinely embeds, so they are correct as they stand. The
  other three are `error/misconfigured`, `error/invalid_json` and a developer console note, all of
  which appear only when the deployment is broken. They could be overridden without a rebuild via
  the `custom_translations_url` config option, but that only covers whichever languages the
  override file lists, and the same strings are hardcoded across the other sixty-odd translations.
  Not worth a hosted file for three error messages.

An audit of what actually ships is worth repeating after any upstream rebase, since these are
scattered and easy to reintroduce:

```sh
rg -l 'element\.io|apps\.apple\.com|play\.google\.com' _deploy --glob '*.html' --glob '*.json'
```

That should return nothing at all. Searching for the bare word `Element` instead is noisier and
needs judgement: `_deploy/widgets/element-call/` and the `i18n/` files are the expected hits
described above, and `mx_PersistedElement_container` in `index.html`, `React.createElement` in
`decoder-ring/`, and the explanatory comment in `usercontent/index.html` are a CSS class name, an
API call and a comment respectively.

### The workflow

`.github/workflows/deploy-chat-thunderbird.yml`. The file lives on `release` alongside the desktop
workflow so both pipelines are described in one place, but it triggers on **`chat-deploy`**, which
is the branch with a branded app to deploy. Pushing `chat-deploy` deploys staging; production is
`workflow_dispatch` only. It builds from the checkout rather than downloading a release tarball the
way upstream's `deploy.yml` does, since this fork publishes no GPG-signed tarball, which also
removes the GPG import and the `element-hq` download.

- `VERSION` is set explicitly to `<package version>-tb.<run number>`. The running app polls
  `/version` and compares it against the version compiled into it, so a deploy that does not
  move it offers nobody the update.
- Webpack emits bundles under `bundles/<hash>/` and a build contains only its own hash, so a
  session open across a deploy can ask for a chunk that no longer exists. The previous build's
  bundles are cached per site and merged into the upload. Only _freshly built_ bundles go back
  into the cache, which holds it at two generations instead of compounding every deploy.
- `_headers` carries `.github/cfp_headers`' security headers, plus explicit `no-cache` on `/`,
  `/index.html`, `/version`, `/config*` and `/i18n/*` and a year of immutable caching on
  `/bundles/*`. `WebPlatform.getMostRecentVersion()` fetches with `cache: "no-cache"` so version
  polling does not depend on those headers, but `index.html` does — see the comment in
  `startUpdater()` about Firefox not always obeying it.
- The upload is checked before it is sent: `config.json` parses, `version` matches, and the file
  count is under Cloudflare Pages' 20,000 limit. A `config.json` that fails to parse leaves the
  app silently on its Element defaults, which is exactly the failure worth catching in CI.

### The live deployment

`chat.thunderbird.net` is up and a full login round trip has been done through it.

Two Cloudflare Pages projects in the `thunderbird.net` account (`407a3cd7b36b3ec71bf765856c90ae8c`),
both direct-upload with a production branch of `main`: **`thunderbird-chat-prod`** and
**`thunderbird-chat-stage`**. The names follow the `stormbox-prod` / `stormbox-stage` pair already
in that account rather than the `-staging` suffix this file first proposed; the workflow was
changed to match.

`chat.thunderbird.net` is a proxied `CNAME` to `thunderbird-chat-prod.pages.dev`, with a Google
Trust Services certificate. **Pages did not create that record itself** even though the zone lives
in the same account, so it was added by hand; expect to do the same for any further hostname. The
domain sat at `pending` for about two minutes and the certificate took a few more.

One trap worth knowing before anyone smoke-tests this. The `thunderbird.net` zone runs Super Bot
Fight Mode with `definitely_automated: managed_challenge`, and **`curl` is definitely automated**:
requests for HTML and JSON come back `403` with Cloudflare's "Just a moment..." interstitial, while
static images pass. Nothing is wrong with the deployment when that happens. Real browsers are
classified normally and are unaffected, which was confirmed by loading the app, watching
`fetch('/version')` and `fetch('/config.json')` succeed from page context, and logging in. The
audit command above is subject to this too, so run it against the local `_deploy` directory rather
than the live site.

Verified in a browser on the live domain: the Thunderbird Chat title and wordmark, `mozilla.org` as
the only homeserver, `no-cache` with `text/plain` on `/version`, `public, max-age=31536000,
immutable` on `/bundles/*`, the service worker registering, and the only third-party origins being
`mozilla.modular.im`, `chat.mozilla.org` and `vector.im`. No `scalar.vector.im`, no
`meet.element.io`, no `api.maptiler.com`.

Two things seen during that check that are outside this deployment's control:

- Login hands off from `chat.mozilla.org` to Mozilla's Auth0 tenant at
  `auth.mozilla.auth0.com`, whose browser tab reads **"Log in | Element Matrix"** — the name
  Mozilla gave their own Auth0 application. Their identity provider offers LDAP, Google, GitHub
  and Mozilla Accounts.
- `map_style_url` is deliberately unset and Mozilla advertises no `m.tile_server`, so
  `findMapStyleUrl` throws `MapStyleUrlNotConfigured` and location sharing fails rather than
  falling back to a tile server. That is the intended outcome: Element's `config.json` ships a
  MapTiler URL with Element's own API key, and this avoids spending it.

### Not done yet

- **CI cannot deploy yet.** `CF_PAGES_TOKEN` and `CF_PAGES_ACCOUNT_ID` are not set as repository
  secrets and the branch has not been pushed, so every deploy so far has been a local `wrangler
pages deploy` of a local build. Note the account uses a legacy global API key; the workflow wants
  a scoped API token with Pages edit permission, which is worth minting rather than reusing the
  global key.
- **Nobody has asked Mozilla.** Pointing a publicly reachable, Thunderbird-branded client at
  `mozilla.org` accounts and their LiveKit and Jitsi capacity needs the homeserver operators'
  agreement, and they may prefer to issue a static `client_id` over dynamic registration. This is
  now more pressing, not less, because the thing is live.
- Element Call against their focus has not been exercised, nor file download through the
  `usercontent` iframe.
- The signup gap is still open for anyone without an account. One existing account logs in fine,
  but whether Mozilla's provider will create a Matrix account for a new Google or GitHub identity
  is untested, and `prompt_values_supported` still advertises only `login`, so there is no
  "Create Account" button in the client either way.
- No `embedded_pages.welcome_url`, so `login_for_welcome` sends people straight to a login page
  that does not explain that a `mozilla.org` account is required.
- No privacy or terms pages under `*.thunderbird.net`, so `privacy_policy_url` and
  `terms_and_conditions_links` are unset and there is no discoverable AGPL source offer beyond the
  footer's "Source code" link.

## Current release and distribution constraints

[`threads-v2`](https://github.com/Sancus/element-web/releases/tag/threads-v2) published five
artifacts, about 1.0 GB in total:

- `Element-1.12.24-win.zip`
- `Element-1.12.24-universal.dmg`
- `Element-1.12.24-universal-mac.zip`
- `element-desktop_1.12.24_amd64.deb`
- `element-desktop-1.12.24.tar.gz`

macOS is signed with an Apple Developer ID and notarized, so the DMG opens without a Gatekeeper
detour. The workflow does that in a macOS-only build step reading `CSC_LINK`, `CSC_PASSWORD`,
`APPLE_ID`, `APPLE_ID_PASSWORD` and `APPLE_TEAM_ID` from repository secrets, and then verifies its
own output with `codesign`, `spctl` and `xcrun stapler validate` against the mounted DMG rather than
trusting the build to have done it. `electron-builder.ts` gates the behaviour on those variables:
`notarize` follows `NOTARIZE`, `forceCodeSigning` follows `REQUIRE_CODE_SIGNING`, and the ad-hoc
Darwin signature is only reset when neither `CSC_LINK` nor `APPLE_TEAM_ID` is set, so an unsigned
local build still launches.

Windows and Linux are unsigned: Windows shows a SmartScreen warning on first run, and Linux
packages have no signature to check.

This is easy to lose. The signing work is one commit (`Sign and notarize macOS desktop builds`)
touching only the workflow and `electron-builder.ts`, and rebasing `release` has already dropped it
once — `threads-v1` is not an ancestor of `release`, so the tag kept signing while the branch
silently regressed to unsigned. After any rebase of `release`, diff the desktop CI against the last
published tag before tagging again.

Auto-update is disabled in all fork builds so an official Element update cannot overwrite
the fixes. Use `--profile roomlist-fix` to keep the fork's local data separate from an
official Element installation.

The code is AGPL-licensed, but Element branding is separately trademarked. Public releases
are labelled unofficial; consider a custom desktop variant before wider redistribution.

## Before changing or rebasing

1. Preserve the pinned Compound fork unless upstream Compound has incorporated the tooltip
   fix and the replacement has been verified.
2. Re-run the room-list unit/component and Playwright coverage after changing sort behavior.
3. Confirm the workflow's `webapp.asar` verification still finds both fixes after build
   output changes.
4. Check the macOS signing step and its `electron-builder.ts` gates survived, by diffing the
   desktop CI against the last published tag. A rebase has dropped that commit before.
5. Leave the `release` job's tag gate in place. It is what lets a branch push build a
   testable candidate without publishing one.
6. Land product work on `develop` (`git fetch origin && git rebase origin/develop develop`
   to take upstream) and keep workflow changes on `release`. Mixing them is what the branch
   split exists to prevent.

One unrelated upstream issue remains: room-list item and section-header markup uses nested
interactive buttons. It predates this fork and needs a broader upstream UI refactor, rather
than a local change limited to per-section sorting.
