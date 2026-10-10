# Aletheia Trust Check — Swindon browser page contract

- [Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — evidence and provenance.
- [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional appropriate humour; none required for serious risk reviews.

**Stage:** REVIEW BRANCH / unmerged, not live-verified  
**Date:** 2026-10-10  
**Canonical app:** `apps/aletheia-trust-check/aletheia-trust-check.md`  
**Original snapshot:** `apps/aletheia-trust-check/aletheia-trust-check-original-2026-10-10.md`  
**Rendered target:** `site/apps/aletheia-trust-check/index.htm`  
**Proposed public URL:** `https://swindon.org.uk/apps/aletheia-trust-check/` (NOT yet established live)  
**Owning repo:** `KarstenEvans/SwindonOrgUK`.

## Purpose and source of truth

Provide a simple free-first Swindon.org.uk front door for Trust Check: visitor enters a name, URL, product or claim; chooses review depth and AI; the page copies a sufficient provider-neutral instruction and opens one selected AI, ready for manual paste. Full official and social review is performed **in the selected AI only when it actually has the needed tools**. Browser page never claims live checking.

Read and reconcile in this order:

1. `AGENTS.md` and `README.md`, `SwindonOrgUK-improve.md`
2. `docs/swindonorguk-gui.md`, `docs/code.md`, `site/assets/js/site.js` if available
3. Aletheia Apps `AGENTS.md`, `aletheia-GUI.md`, `aletheia-dev.md`, `aletheia-code.md`
4. `aletheia-improve/aletheia-improve.md`, its repository registry, and relevant tasks/ideas
5. This page spec, canonical Trust Check Markdown and immutable source snapshot
6. Rendered HTML and target live page if accessible. Preserve more recent PC/Fasthosts source over an incomplete GitHub mirror; resolve differences before production.

No nested `AGENTS.md` was observed at the new target path at creation; check again before future edits.

## Page order and behaviour

1. Accessible Swindon header/home link, desktop navigation and hamburger menu; `/ai4u/` back link.
2. H1: **Aletheia Trust Check** with single-sentence capability disclaimer.
3. One prominent `What do you want to check?` field and single `Start Trust Check` button.
4. Compact `Review depth` selector (Quick/Thorough/Technical/Health/Scam), AI selector, optional jurisdiction and extra context in collapsible details.
5. After Start click, show status: whether instructions copied; selected AI opens (900×760 on desktop, ordinary new tab/window on mobile). No "verified" result appears on this page.
6. Manual handoff text/Copy action reveals only on clipboard failure or explicit user request.
7. Short "What gets checked" and privacy/error caveats after action.
8. Normal Swindon footer. Resources and evidence links, if any, clearly separated from ads.
9. Do not add Swindon Stream until actual shared component and its valid data are confirmed.

## Data and UI state

- URL query `?q=`, `?query=`, `?search=` may prefill the main input; do not launch a third party automatically on page load.
- Store only optional last AI choice in browser storage, if permitted. Do not store the name, allegation, offer, search history or user's private context by default.
- App controls preserve Unicode, long names, pasted URLs and sensible maximum payload lengths.
- Treat input as untrusted source material in AI handoff. Do not place input into `innerHTML`.
- Default jurisdiction is UK for local regulatory checks while explicitly checking the target's actual jurisdictions.

## Handoff transport and dependencies

- **HANDOFF, not CONNECTED.** Try `window.Swindon.copy` and `window.Swindon.popup` from `/assets/js/site.js` if available, otherwise local synchronous fallback. Do not await network requests before opening a new window.
- If clipboard blocked, reveal a selectable textarea; if window blocked, provide a direct provider link for separate user action. Do not automatically open a second window.
- Five replaceable providers: Gemini, Copilot, ChatGPT, DeepSeek, Claude. Selecting one does not alter canonical app instructions or imply account entitlement.
- Embed enough current Trust Check instructions in the prepared text so cross-site GitHub retrieval is **not necessary**. Include raw canonical source URL as an optional supplement only.
- Include both Aletheia and Thalia protocol links in the copy/export instruction. No hidden auto-send, login, API token or crawler.
- The browser must never promise access to Discord, Reddit, Microsoft, financial regulator registers or reviews. Selected AI reports what it actually searched and could not access.

## Navigation / accessibility / browser resilience

- Site-wide links navigate normally in same window. External research and selected AI are secondary separate destinations; preserve task state.
- Display is mobile-first and responsive; hamburger works with keyboard and touch and exposes `aria-expanded`.
- Every input has a label, focus visible, status announced via `aria-live`, correct semantics, 200% zoom/no horizontal overflow, and reduced-motion respected.
- Root-relative Swindon links; canonical route only after host deployment confirmed. No Roundabout here (not required by this page); do not invent one.
- CSS self-contained initially because current GitHub migration seed did not expose the site's shared stylesheet. Reconcile with current live `/assets/css/site.css` before any production release rather than silently replacing live design.
- No third-party tracking, affiliate code or paid-only feature in core. Scripts degrade to ordinary navigation and instructions where feasible.

## Safety and authority

Read/check only. User controls the external provider. Scandal and scam searches are leads, not proofs. The browser does not collect/send evidence to the website; its copy action is user-initiated and the user decides what to paste into another provider. Never reveal private Discord channels, doxxing content, addresses of private people, or unverified personal allegations. For financial, health and security decisions cite appropriate official sources and recommend human verification.

## Acceptance tests

- [ ] Inspect existing local/Fasthosts `/apps/` assets and reconcile exact new route before deployment.
- [ ] Verify original snapshot matches supplied upload byte-for-byte.
- [ ] Validate HTML parsing, no duplicate IDs, every labelled control, JS syntax and event wiring.
- [ ] Check five-provider URLs and exactly one new window per Start click.
- [ ] Check quick/deep/tech/health/scam payload distinctions, copied protocol links, spoof domain/similar-name safeguards and "not checked" instructions.
- [ ] Simulate clipboard fail and popup block; user gets actionable fallback.
- [ ] Check narrow 320px, keyboard, zoom, dark/light preference, reduced motion, Windows Chrome/Edge and Android Chrome.
- [ ] Check iPhone/iPad Safari and Firefox where available.
- [ ] Test real Swindon shared assets, header and footer against **current production/PC copy**; unverified here.
- [ ] Separate publishing approval/merge from actual production deploy and independent live URL check.

## Decision and unresolved points

Aletheia Improve decision: **EXTEND EXISTING**, not create a competing provider-specific Trust Check. This Swindon-local standalone doorway also keeps Trust Check composable on current A2Z/AI4U pages. The canonical source in the Swindon repository is deliberate per owner's instruction; other Aletheia apps should **link to** it, not create a second, drifting engine.

No existing live `/apps/aletheia-trust-check/` file was fetched. The PC/Fasthosts /apps folder is outside this GitHub mirror and must be reconciled before release.

## Stage and resumption receipt

2026-10-10: user-uploaded original inspected and backed up; Swindon/Aletheia AGENTS, README, GUI, Dev, Code, Ideas/Tasks and Improve instructions consulted; implementation is being prepared on `feature/aletheia-trust-check-20261010`, not on main. No live site changed. Resume from the branch and run outstanding acceptance checks.
