# SwindonOrgUK tasks

**Status:** Future backlog, not scheduled and not permission to publish. Run `SwindonOrgUK-improve.md` with the relevant page/section when ready.

Aletheia Protocol: https://github.com/KarstenEvans/aletheia-protocol  
Thalia Protocol: https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md

## PRIORITY TASK #001 — Aletheia Atlas worldwide discovery and common navigation

**Priority:** P0 / NUMBER ONE. **Status:** IN PROGRESS — specification and backlog, not verified public release. Name not decided: Atlas / Mystika / Discover working label. **Date:** 29 September 2026. **Owner direction:** worldwide location-aware multilingual Aletheia, never a separate cloned site per city. Related: `ideas.md` Idea #001; app repository Atlas task/spec.

- [x] Confirm the owner direction: one worldwide AI discovery system; Swindon is the starting/front-door implementation, not a geographic limit.
- [x] Record a canonical Atlas scope and cross-project division; provisional name only.
- [ ] Reconcile the current live website and newer PC clone with GitHub migration seed before touching homepage/shared shell. Preserve hamburger, Roundabout, footer, 900 × 760 secondary-window rule, Awin once where applicable.
- [x] Stage a non-destructive Discover integration guide (`docs/discover-quick-wins.md`): sticky-header CSS pattern, single-home-CTA placement, OG/social preview requirements, sources/freshness, release QA. In review branch `feature/discover-quick-wins-20260929`; NOT applied to live/PC HTML.
- [x] Stage new standalone `site/discover/index.html` with sticky header, mobile menu, normal source searches, anywhere/place/language inputs, free-first toggle, AI copy/open handoff and bottom resources; static source only. Actual device/live verification pending; page retains draft `noindex`.
- [x] Add manual Discover [chosen place] + optional region, topic, preferred answer language; no city clones or geolocation dependency. Source handoff is a pilot, not live autonomous research. Coarse consent-based geolocation remains optional future work.
- [ ] Implement free-first current results with official/local independent source links, evidence/uncertainty, original language, checked date and clear status when web/provider is unavailable. Search/handoff fallback must never masquerade as verified returned results.
- [ ] Audit real HTML on Home/Discover and substantive pages for unique title, concise useful answer, canonical, OG/social preview, publisher and authored/reviewed dates, useful sources, correct locale/hreflang only where actual equivalent translations exist, and truthful eligible JSON-LD.
- [ ] Implement events with verified source/time zone/start/end and expired-item filtering; mark unknown/cancelled events accurately.
- [ ] Design one worldwide Aletheia blog/newsletter/editorial stream with optional location/topic/language filters and an optional Swindon view. No cloned per-city newsletters.
- [ ] Separate evidence links from optional approved affiliate/resource links, show clear nearby disclosure, free-first choice and no subscription/paywall for core features.
- [ ] Human review gate for original authored pages and shares, anti-repeat checking, source/author/date receipts, copyright and no generated fake local reporting.
- [ ] Pilot chosen places and languages (Swindon, Ayutthaya, Oslo, Cardiff; EN/NB/TH as sources allow); desktop, Android, Safari/WebKit, keyboard/zoom/reduced-motion, offline/provider-failure and crawlable static fallback.
- [ ] Only after review/approval: merge Discover + footer as one change, reconcile homepage from PC/live source, remove draft noindex, deploy and verify actual `/discover/` URL, link from homepage/AI4U, social-preview image and sitemap. Record dated PASS/PARTIAL/FAIL receipts; GitHub commit is not production proof.

**Implementation checkpoint (29 Sep):** `pages/discover.md`, `site/discover/index.html` and a quiet `site/footer.html` Discover link staged together on `feature/discover-quick-wins-20260929` / draft PR #2. No production home overwrite. Static checks separate from actual browser/deployment checks.

**Release gate:** working prototype is not a live AI/web verifier. No auto-publishing. No replacing the existing production homepage from an incomplete GitHub mirror.

## SEO / AEO / GEO work package, from 27 September 2026 homepage rubric

Source: https://therankcollective.com/audit/ed33b25e-03b5-4066-8e14-d520fa22bb0b

The single-page report scored 31/100 on an editorial markup rubric; **not** actual AI visibility or search rankings. Its ~233-word home page, missing detected JSON-LD/identity/Open Graph and unobserved external anchors are audit leads, not established site-wide faults. No universal 800-word target; Article/FAQ schema must fit real visible content.

- [ ] **P0** Reconcile current live/PC clone with GitHub and canonical page Markdown. Record actual revision for each public URL; preserve newer work.
- [ ] **P0** Run Aletheia Site Audit Front Door Check: four hostname/protocol combinations, HTTPS, redirects, canonical, accidental /election/ route, robots.txt, sitemap.xml, optional llms.txt and real server responses. Differentiate site failure from crawler refusal.
- [ ] **P0** Test public page HTML without JS and in browser: actual `href` internal/external/source links, headings, discoverable direct answers, broken links and mobile/Safari behaviour. Investigate the reported absence of external HTTP links.
- [ ] **P1** Homepage: accurate publisher identity and About/Contact; appropriate WebSite and Organization or Person JSON-LD; correct title/H1/meta/canonical; Open Graph/social image; useful concise section descriptions without padding.
- [ ] **P1** Inventory and improve Home, A2Z, What's On, Food, Jobs, Health, News, Meet, AI4U, Resources and genuine Aletheia resource pages **one at a time**. Preserve useful action/results first.
- [ ] **P1** For each information page: real search question, direct answer in visible HTML, natural related questions with distinct answers when useful, local details, limitations/checked date and primary source links. Apply truthful author/publisher provenance.
- [ ] **P1** Review unique titles/descriptions, H1/H2, alt text, internal links, Go Deeper source links, reciprocal Explore with Aletheia routes and duplicate/canonical risks.
- [ ] **P1** Add and validate content-appropriate structured data: homepage identity/Website; Article/TechArticle for real guides; FAQPage only for real eligible visible Q&A; optional breadcrumbs where interface supports them. Never fabricate ratings or credentials.
- [ ] **P1** Check Aletheia subdomain, if deployed, has separate identity/canonical/sitemap and is not duplicated at an indexable path.
- [ ] **P2** Get actual indexed-page/query/traffic baselines from Search Console/Bing only when authorised. Record observed AI referrals/citations separately from hypothetical prompts.
- [ ] **P2** Pilot on a few pages; validate code, preview, desktop/mobile/Safari, record before/after and expand only if the change improves visitor value or measurable discovery.

**Acceptance:** Every changed page remains usable, source specs stay in sync with rendition, links/answer/source metadata are crawlable, no SEO boilerplate or fabricated schema appears, approval precedes publication, and production is checked before any claim of success.

**Related site specifications:** `AGENTS.md`, `docs/swindonorguk-gui.md` (answer-ready, cross-pollination, front door), `docs/code.md`, `ideas.md`.
