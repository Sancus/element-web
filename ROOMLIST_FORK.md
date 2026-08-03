# Room-list fork handoff

This checkout is the working tree for the Element Web performance fork:

- Upstream: `https://github.com/element-hq/element-web.git` (`origin`)
- Fork: `https://github.com/Sancus/element-web.git` (`fork`)
- Branches: `develop` holds the product work (everything under "What changed"), rebased on
  upstream `develop`; `release` is `develop` plus the two commits that add the desktop build
  workflow, and every build and tag comes from there. Keeping the workflow off `develop` is
  what lets `develop` stay a clean feature diff against upstream. When `develop` moves,
  rebase `release` onto it (`git rebase develop release`) and force-push; the workflow file
  is new to this fork, so it can never conflict.
- Current published build: [`roomlist-fix-v6`](https://github.com/Sancus/element-web/releases/tag/roomlist-fix-v6),
  built from `roomlist-perf`, so it has neither the newer room list options nor encrypted search.

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

`.github/workflows/roomlist-fix-desktop.yml` is self-contained and intentionally separate
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
`pnpm-workspace.yaml`. After it, electron-builder can no longer map parts of the pnpm store
back to packages and quietly drops them, logging only:

```
• cannot find path for dependency  dependencies=["import-in-the-middle@3.3.2","@opentelemetry/api-logs@0.220.0","debug@4.4.3","ms@2.1.3"]
```

That is how `roomlist-fix-v7` shipped: Windows and macOS packages missing five transitive
`@sentry/node-core` dependencies, dying at startup with `ERR_MODULE_NOT_FOUND` for
`import-in-the-middle`. Linux escaped only because pnpm happened to reinstall the workspace
before packaging there. The workflow now always reinstalls before packaging, and the link
survives it because `pnpm link` put it in the lockfile.

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

Only once a candidate has been tested, create and push a new unique tag:

```bash
git tag -a roomlist-fix-v<N> -m "Describe the release"
git push fork roomlist-fix-v<N>
```

Watch the generated GitHub Actions run. A release is created only when the prepare job and
all three platform builds succeed. Update the release notes in the workflow's `release` job
first if the feature list has moved on; they are written inline there.

## Current release and distribution constraints

[`roomlist-fix-v6`](https://github.com/Sancus/element-web/releases/tag/roomlist-fix-v6)
published five artifacts:

- `Element-1.12.24-win.zip`
- `Element-1.12.24-universal.dmg`
- `Element-1.12.24-universal-mac.zip`
- `element-desktop_1.12.24_amd64.deb`
- `element-desktop-1.12.24.tar.gz`

These are deliberately unsigned:

- Windows shows a SmartScreen warning.
- macOS needs its quarantine attribute removed before opening:
  `xattr -dr com.apple.quarantine /Applications/Element.app`
- Linux packages have no signature.

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
4. Keep the release workflow unsigned unless signing credentials and a deliberate signing
   plan are supplied.
5. Leave the `release` job's tag gate in place. It is what lets a branch push build a
   testable candidate without publishing one.
6. Land product work on `develop` (`git fetch origin && git rebase origin/develop develop`
   to take upstream) and keep workflow changes on `release`. Mixing them is what the branch
   split exists to prevent.

One unrelated upstream issue remains: room-list item and section-header markup uses nested
interactive buttons. It predates this fork and needs a broader upstream UI refactor, rather
than a local change limited to per-section sorting.
