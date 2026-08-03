# Threads-view fork handoff

Branch, build, and release process for this fork live in [`ROOMLIST_FORK.md`](./ROOMLIST_FORK.md);
this document covers only the threads work. Product work lands on `develop`.

## What changed

Upstream's Threads Activity Centre (TAC) was a popup in the space panel listing _rooms_ that
happened to contain unread threads. Finding a thread took two navigations — pick a room, then
find the thread in that room's panel — and the popup showed nothing about the conversations
themselves.

It is replaced by a full-page, scrollable feed of _individual threads_ across every room,
modelled on Slack's threads view. Each card shows the room it belongs to, who has spoken in
it, the thread root, and the most recent replies. Expanding a card in place reveals the
conversation and a composer; one card is expanded at a time.

The space panel keeps a threads button in the same position with the same notification
indicator, but it now navigates to the page instead of opening a menu.

### Deleted

- `ThreadsActivityCentre.tsx`, `ThreadsActivityCentreButton.tsx`, and the directory's
  `index.ts`.
- `ThreadsActivityCentre-test.tsx` and its snapshot.

`useUnreadThreadRooms.ts` survives, moved to `views/spaces/threads/`, and still drives the
nav button's indicator. Its 500 ms sync throttle and the `Notifications.tac_only_notifications`
setting it reads are both unchanged, so badge behaviour matches upstream.

## Why the feed is built the way it is

**Matrix has no cross-room threads endpoint.** `/threads` is per-room only, so the feed has
to aggregate client-side. It does so in two stages:

1. **Seed, no network.** Every visible room's `room.getThreads()` is read for threads already
   in memory from sync. This is what makes the page appear instantly.
2. **Progressive backfill.** Rooms are then fetched one batch at a time, ordered by most
   recent activity, driven by scrolling. On an account with ~1,000 rooms, eagerly fetching
   every room is a non-starter: `fetchRoomThreads()` issues two requests per room.

**Backfill is gated on `Thread.hasServerSideListSupport`.** This is the important one. When
that flag is unset, `Room.createThreadsTimelineSets()` falls through to
`getThreadListFilter()`, which **creates a persistent server-side filter**, and
`fetchRoomThreads()` then requests the room's entire history with
`limit: Number.MAX_SAFE_INTEGER`. Doing that across a large account would litter the account
with thousands of filters that every other client also syncs. Against such a server the feed
therefore stays limited to threads already in memory rather than backfilling. Do not remove
this gate.

**"Mentioned in" is read from the events, not from unread state.** Slack shows threads you
_follow_, and you follow a thread by replying to it or being @mentioned in it. Matrix has no
follow concept, and this fork may not persist one (see compatibility below), so membership is
derived: `hasParticipated()` plus `wasMentioned()`, the latter reading
`m.mentions.user_ids` off the thread's loaded events. Deriving it from the thread's notification
level instead — the obvious shortcut — is wrong twice over: a mention read in any client clears
the highlight and would silently drop the thread out of the feed, and `NotificationLevel.Unsent`
outranks `Highlight`, so a thread with a failed local echo would appear under "Mentions".

**Only rooms that changed are rescanned.** Entries are cached per room in `useThreadsFeed`.
Room-scoped events (`RoomEvent.Timeline`, `RoomEvent.Receipt`, `MatrixEventEvent.Decrypted`)
mark just their own room dirty and rescan it on a trailing 500 ms throttle. `ClientEvent.Sync`
names no room and is the only signal for the room list itself changing, so it drives a
whole-account rescan on a much longer 5 s throttle. Rebuilding the entire feed on every sync
meant a `determineUnreadState` call per thread per room twice a second, which is real
main-thread cost on a large account.

**Cards render `EventTile`s directly.** `TimelinePanel` owns a `ScrollPanel` plus its own SDK
listeners and pagination; one per card would be ruinous, and nesting scroll containers breaks
the single-scroll feel. The page is one scroll surface, as Slack's is.

**Each card owns its own reply and edit state.** This is subtle and easy to regress.
`EventTile`'s reply and edit controls identify their target with nothing but
`TimelineRenderingType.Thread`: upstream never has more than one thread timeline on screen, so
`RoomViewStore` skips thread replies outright and `ThreadView` claims them all. A feed has one
timeline per card, so `ThreadCard` claims only the actions whose `payload.event.getThread()?.id`
matches its own thread, and expands itself to show the composer. Without that check, a reply
started on one card is captured by whichever card has a composer open and sent to the wrong
thread.

**Only the expanded card gets a `RoomUploadContextProvider`.** A provider accepts any
`Action.ComposerFileInsert` whose `timelineRenderingType` is `Thread`, and the module API's
`openFileUploadConfirmation(files, { view: "thread" })` payload names no room or thread. One
provider per card therefore meant a module's files being uploaded into every thread in the feed
at once — a cross-room disclosure. One provider on the expanded card matches upstream's
one-thread-composer assumption exactly. It wraps the whole card body rather than just the
composer, because with `feature_wysiwyg_composer` enabled editing a message renders
`EditWysiwygComposer`, which needs the same context.

**The feed is not virtualized.** Cards vary widely in height, change height when expanded,
and contain focusable controls including a composer — all of which fight both height
measurement and the roving-focus model that the room list's `FlatVirtualizedList` implements
for uniform rows. Instead the feed renders a bounded window of cards and grows it as the user
scrolls, which keeps DOM size bounded without either problem. `react-virtuoso` is also not a
dependency of `apps/web` today.

## Compatibility with the upstream client

A profile used with this fork has to stay usable in stock Element and alongside other Matrix
clients. Unlike the People section, which does write an `m.tag` (see `ROOMLIST_FORK.md`), the
threads work writes **no shared state at all**:

- **No new account data event types.** Nothing is written under `m.*`, `im.vector.*`, or
  `io.element.*`, and nothing is added to the account-level `im.vector.web.settings` event.
- **No account-level settings.** The filter selection is component state and is not persisted
  at all. If persistence is ever wanted, use `SettingLevel.DEVICE` only: that writes to the
  `mx_local_settings` localStorage blob, which stock Element reads and ignores unknown keys
  from. An account-level setting would sync to every client.
- **`#/threads` degrades gracefully.** Stock Element has no such screen, and
  `MatrixChat.showScreen()` sends unrecognised screens to `home`. A profile left on the
  threads page opens on Home in stock Element.
- **`mx_last_room_id` is never written by the threads page.** That key is shared with stock
  Element, which has no threads screen to restore, so `viewThreads()` deliberately leaves it
  pointing at the last real room.
- **Read receipts are ordinary threaded receipts.** Expanding a card sends a normal
  `m.read`/`m.read.private` receipt scoped to the thread root, exactly as opening the thread
  panel would. Nothing fork-specific is involved.

The one shared-schema compromise is analytics: `InteractionName` and `ScreenName` are closed
unions from `@matrix-org/analytics-events`, so the nav button reuses upstream's
`WebThreadsActivityCentreButton` interaction name, and the threads page has no screen name.
`PosthogTrackers.trackPage()` now skips the `$pageview` when a page type has no mapped screen
name, rather than reporting `$current_url: undefined` — which also fixes that same latent
problem for module-provided pages.

## Implementation locations

- `apps/web/src/viewmodels/threads/threadsFeed.ts` — pure selection, ordering, and filtering.
  Which threads qualify lives here: participated in, or mentioned in.
- `apps/web/src/viewmodels/threads/useThreadsFeed.ts` — listeners, per-room caching and
  throttling, and the backfill queue. Note it subscribes only to events the client actually
  re-emits; `ThreadEvent.*` is emitted on `Room` and never reaches the client, so new replies
  are picked up via `RoomEvent.Timeline`.
- `apps/web/src/components/structures/ThreadsView.tsx` — page shell and render window.
- `apps/web/src/components/views/threads/ThreadCard.tsx` — a card, collapsed and expanded,
  plus `makeThreadRelation()`.
- `apps/web/src/components/views/threads/useThreadCardRoomContext.ts` — the per-room
  `RoomContext` that `EventTile` needs outside a `RoomView`.
- `apps/web/src/components/views/spaces/threads/ThreadsNavButton.tsx` — space panel entry.
- Routing: `PageTypes.ts`, `dispatcher/actions.ts`, `MatrixChat.tsx` (`viewThreads`,
  `showScreen`), `LoggedInView.tsx`.

## Known trade-offs

- **The render window only grows.** Scrolling far enough eventually mounts every card, and each
  mounted card's `EventTile`s carry their own listeners. Scoping the upload provider to the
  expanded card removed the largest per-card cost, but a session that scrolls the whole feed
  still accumulates DOM. Virtualizing is the real fix and was rejected for the reasons above; a
  cheaper alternative is to unmount cards well above the viewport.
- **Mention detection only sees loaded events.** `wasMentioned()` reads `m.mentions` from a
  thread's loaded timeline, so a mention in an unpaginated reply, or one from a client predating
  `m.mentions`, is missed. Such threads still reach the feed while they carry an unread
  highlight, which is why that clause is kept in `collectRoomEntries()`.
- Expanding a card paginates that thread's timeline through
  `client.paginateEventTimeline()`. One page is fetched automatically on expand so the
  "Show N more replies" count is not immediately replaced by a "Load earlier replies" button,
  but reading a very long thread is still several round trips behind that button rather than the
  seamless scrollback `TimelinePanel` gives in the thread panel.
- A backfill request that fails is retried once and then skipped, so a room that errors twice
  contributes no threads until the page is reopened.

## Before changing

1. Keep the `Thread.hasServerSideListSupport` gate on backfill. Removing it creates
   server-side filters per room on older homeservers.
2. Do not persist threads-view state at account level, and do not introduce a new account
   data event type, without revisiting the compatibility section above.
3. Re-run `apps/web/test/unit-tests/viewmodels/threads/` and
   `apps/web/playwright/e2e/spaces/threads/` after changing selection or ordering.
4. Validate against the ~1,000-room benchmark account before widening the backfill batch
   sizes or loosening the throttle.
