# Discover Anywhere page specification

**Aletheia Protocol:** https://github.com/KarstenEvans/aletheia-protocol — provenance, checked evidence, uncertainty.  
**Thalia Protocol:** https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md — optional humour, never a substitute for sourced facts.

**Status:** review-staged, 29 September 2026; not confirmed deployed.  
**Priority:** Idea #001 / Task #001.  
**Route:** `https://swindon.org.uk/discover/` when deployed; source output `site/discover/index.html` (use `index.html` for portable folder-default routing).  
**Public brand:** Discover Anywhere with Aletheia. Atlas / Mystika naming remains undecided.  
**Source rules:** `AGENTS.md`, `README.md`, `docs/swindonorguk-gui.md`, `docs/code.md`, `SwindonOrgUK-improve.md`.  
**App cousin:** `KarstenEvans/aletheia-app/aletheia-discover/`, on a separate review branch when this was written.

## Purpose
A new independent Swindon.org.uk front-door page for worldwide Aletheia discovery. Swindon is the default/example home but visitors can explore any location and choose the answer language. A single discovery interface, no city clones. The old homepage's local A2Z task is not replaced.

## Page order and actual layout
1. Skip link; sticky Swindon brand with ordinary desktop nav and real `details/summary` mobile hamburger, plus horizontally scrolling topic links. The Roundabout is **not** a component of this page; do not remove it from any page that already requires it.
2. Original H1 and brief worldwide scope statement.
3. One main form: place (default Swindon, required), optional region (default UK), chosen subject, answer-language text, optional interest and free-first checkbox.
4. On submit: external search-route anchors built with DOM and encoded user query, status explaining they are unverified search links.
5. Secondary Aletheia prompt created from the query; choose provider, click Copy brief & open AI, then manually paste. Details/textarea + Copy fallback; not an autonomous research result. The shared `/assets/js/site.js` popup/copy helper is used when loaded, with browser fallbacks. Do not silently transmit text, call paid APIs, or claim current research was performed.
6. Useful Swindon page bridges; visible question/answer section explaining international scope, evidence boundary, language and cost.
7. Small bottom-of-page Resources/AI4U/Knowledge links with no paid/affiliate products on the discovery page itself.
8. Shared footer fallback, replaced by `/footer.html` when shared script is available.

## Data, privacy, safety
Client-only and no user-account, key, cookies, storage, geolocation or newsletter form. Optional `?place=` changes only the place field; reset region so supplied place isn't silently paired with United Kingdom. Never infer physical location from user-chosen destination. Text passed to clipboard solely by click and pasted by the visitor. External search and AI provider privacy terms apply after explicit click. Search links are suggestions, not verified claims. Source/evidence links are not monetised.

## Metadata and eventual publication
Draft has `noindex,nofollow`, intended canonical `https://swindon.org.uk/discover/`, accurate title/description/OG title-description-url and Twitter summary fallback. No unverified OG image URL or bogus structured data. Before release make a real original and accessible social preview asset (prefer 1200x630 PNG/JPG), test final deployment/canonical and remove noindex deliberately; amend sitemap only after actual route responds. Add true WebApplication schema only if justified by the actual final public capabilities, and avoid auto-generating pages for every query location.

## Shared navigation
`site/footer.html` includes concise Discover link next to Resources on the same branch, so it will not be an empty destination when merged/deployed. On fallback/offline, page includes its own footer. The homepage itself is **not** edited from incomplete migration seed; link from its primary Aletheia zone only after source reconciliation with live/PC version.

## Acceptance
- One query in Swindon and one elsewhere, e.g. `Ayutthaya, Thailand`, requested language `Norsk`, free first, and special characters such as `&` generate valid source-search links and distinct prompt.
- Required blank place cannot submit; changing `?place=` clears UK default; topic/language are reflected in brief.
- Source links open one destination per click without claiming verification, with ordinary anchor semantics.
- AI button copies/opens synchronously on normal supported browser; error reveals manual copy field; no premature auto-sending.
- Mobile hamburger keyboard accessible, sticky bar doesn't cover hash targets, focus visible, no mobile page-width overflow, reduced-motion respected.
- Shared fallback footer works when `site.js` missing; live shared footer replaces it exactly once when present.
- Static syntax/metadata/link tests, then actual Android/desktop/Safari, and finally deployed URL check. Mark only observed test levels done; neither GitHub write nor unrendered source equals live release.

## SEO/AEO/GEO editorial rule
Use natural visible questions and truthful answers, meaningful internal references to /resources/, /ai4u/ and local sections, and canonical normal HTML anchors. No thin country/city duplication, hidden keyword stuffing, fake reviews, invented source dates or unsupported FAQ rich-result promises. Resource links are unobtrusive, contextual and normally at bottom. Keep one Aletheia-wide future blog/newsletter rather than one per location.

## Change note
29 September 2026: first static Discover page staged in SwindonOrgUK review branch; root-level global homepage unchanged.