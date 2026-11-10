# SwindonOrgUK tasks

**Status:** Future backlog, not scheduled and not permission to publish. Run `SwindonOrgUK-improve.md` with the relevant page/section when ready.

Aletheia Protocol: https://github.com/KarstenEvans/aletheia-protocol  
Thalia Protocol: https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md

## PRIORITY TASK #001 — Aletheia Atlas worldwide discovery and common navigation

**Priority:** P0 / NUMBER ONE. **Status:** IN PROGRESS — specification and backlog, not verified public release. Name not decided: Atlas / Mystika / Discover working label. **Date:** 29 September 2026. **Owner direction:** worldwide location-aware multilingual Aletheia, never a separate cloned site per city. Related: `ideas.md` Idea #001; app repository Atlas task/spec.

- [x] Confirm the owner direction: one worldwide AI discovery system; Swindon is the starting/front-door implementation, not a geographic limit.
- [x] Record a canonical Atlas scope and cross-project division; provisional name only.
- [ ] Reconcile the current live website and newer PC clone with GitHub migration seed before touching homepage/shared shell. Preserve hamburger, Roundabout, footer, 900 × 760 secondary-window rule, Awin once where applicable.
- [ ] Build/test accessible sticky header + horizontal mobile topic menu without overlays; preserve normal anchors, location-independent global identity and Discover action.
- [ ] Add Discover [chosen place]: explicit place selection with ambiguity handling; optional consent-gated coarse location; preferred language; location-aware topic/search controls; no city-specific copies.
- [ ] Implement free-first current results with official/local independent source links, evidence/uncertainty, original language, checked date and clear status when web/provider is unavailable. Search/handoff fallback must never masquerade as verified returned results.
- [ ] Audit real HTML on Home/Discover and substantive pages for unique title, concise useful answer, canonical, OG/social preview, publisher and authored/reviewed dates, useful sources, correct locale/hreflang only where actual equivalent translations exist, and truthful eligible JSON-LD.
- [ ] Implement events with verified source/time zone/start/end and expired-item filtering; mark unknown/cancelled events accurately.
- [ ] Design one worldwide Aletheia blog/newsletter/editorial stream with optional location/topic/language filters and an optional Swindon view. No cloned per-city newsletters.
- [ ] Separate evidence links from optional approved affiliate/resource links, show clear nearby disclosure, free-first choice and no subscription/paywall for core features.
- [ ] Human review gate for original authored pages and shares, anti-repeat checking, source/author/date receipts, copyright and no generated fake local reporting.
- [ ] Pilot chosen places and languages (Swindon, Ayutthaya, Oslo, Cardiff; EN/NB/TH as sources allow); desktop, Android, Safari/WebKit, keyboard/zoom/reduced-motion, offline/provider-failure and crawlable static fallback.
- [ ] Only after explicit publication approval: deploy and verify actual production URL and social previews; record dated PASS/PARTIAL/FAIL receipts and amend sitemap/canonical inventory if necessary.

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

## Affiliate Tools public cross-link (2026-09-29)

Linked the single Aletheia Affiliate Tools URL from `site/resources/index.htm` and registered it as an external resource in `site/resources/resources.json`. The canonical HTML belongs to `KarstenEvans/aletheia-app/aletheia-site-audit/affiliate-tools.htm`, also in the Site Audit hamburger menu. It is a free-first website/keyword/affiliate research directory, not a live Google/Bing login integration or a locally duplicated HTML page.

- [x] Source link and resource manifest updated.
- [ ] Confirm deployed Swindon.org.uk Resources source follows the repository copy after the site migration; do not claim the production path is synced from a source commit alone.
- [ ] When the actual AI4U page source is present and reconciled, optionally add one `Affiliate Tools` entry pointing to the same shared URL. Do not create a dead `/ai4u/` route or duplicate the tool content while the production front door is uncertain.
- [ ] Add one shared `Tools → Affiliate Tools` item to Aletheia Discover when that worldwide Priority #001 app is actually built.

## Proposed AI visibility front door (20 October 2026)

- [x] Add `pages/ai-visibility.md` build specification and `site/ai-visibility.htm` preview HTML to a review branch.
- [ ] Reconcile the repository mirror with production Fasthosts source before publishing or adding navigation.
- [ ] Check real production robots.txt, sitemap.xml, HTTP/HTTPS host redirects, TLS and named bot responses with logs or owner webmaster tools.
- [ ] Correct only evidenced crawler/security conflicts, preserving public/private boundaries. Do not infer a domain-wide blacklist or a Fasthosts-wide block from one failed AI visit.
- [ ] Once published, test canonical URL, menu link, sitemap, mobile readability and AI citation accuracy. The page is not yet deployed by this branch.

Source research: `KarstenEvans/aletheia-knowledge/knowledge/aletheia-ai-visibility-trust-gate.md`; worldwide explainer: `KarstenEvans/aletheia/ai-visibility/index.html` (proposed).

## Health Topics + reusable Help Topic window (2026-11-10)

**Status:** REVIEW BRANCH BUILT, NOT PUBLISHED. **Branch:** `feature/health-help-topics-2026-11`. **Scope:** `pages/health-topics.md`, `pages/jobs-topics.md`, `data/help-topics.json`, `data/help-topic-agents.json`, `data/help-topic-image-queue.json`, `site/health/topics/`, `site/jobs/topics/`, `site/assets/js/help-topics.js`, `site/assets/css/help-topics.css`.

- [x] Read Swindon AGENTS/README/shared GUI/code, Aletheia overview/protocol, ideas and tasks.
- [x] Observe existing production Health page at https://www.swindon.org.uk/health/; confirm GitHub repo does not currently contain its corresponding original /health/ page file.
- [x] Research public-health sources and third-party UK demand indicators, recording data limitations.
- [x] Write 17 non-personal public health article drafts, 3 job guide drafts, permanent HTML anchors and 2 topic hubs.
- [x] Build named reusable 900×760 Help Topic selector adapter with mobile new-tab and blocked-popup link fallback; use shared popup function.
- [x] Define 20 separate role instances (17 health, 3 jobs). **These are configured tasks only; none is an autonomous running background service.**
- [x] Queue 17 illustration prompts; no generated or licensed image assets were claimed.
- [ ] P0: Reconcile newest local PC/live Fasthosts /health/ and /jobs/ source with this incomplete GitHub mirror; do not overwrite newer live files.
- [ ] P0: Clinical/editorial review of all medical articles, especially Modic/C. acnes, antibiotics/diabetes associations, Type 1 insulin risks and diabetes foot red flags. Correct drafts and check up-to-date evidence.
- [ ] P1: Human review of job drafts and internal links; add interview, CV, LinkedIn and employer-research refinements.
- [ ] P1: Integrate a compact selector into each actual production page *after* preserving existing page headers, buttons, navigation, search and Roundabout as relevant. Put Jobs help AFTER live vacancy results.
- [ ] P1: Test named window reuse after switching and manually closing, moved-aside window behaviour, popup-blocked fallback, desktop Chrome/Edge/Firefox, Android Chrome, iOS/macOS Safari and no-JS links.
- [ ] P1: Validate .htm routing/canonical/robots/sitemap on selected host; update sitemap and navigation only once routes exist.
- [ ] P1: Run independent per-topic agent go-walkabout passes with conflict logs and review receipts; revise articles where better evidence warrants it; keep human signoff for medical content.
- [ ] P2: Have an authorised illustration process generate **original** images from the queue; review anatomy, licensing, alt text and image weight before inclusion.
- [ ] P2: Acquire real UK search demand from permitted keyword datasets, Google Trends export and/or Search Console, then reprioritise. Current third-party reports are *signals*, not verified site traffic or a Google top-keyword ranking.
- [ ] P2: Consider reciprocal **Explore with Aletheia** links only to verified related public apps; avoid article duplication or linking raw repository code to visitors.
- [ ] After explicit production approval: deploy, verify actual live URL, record PASS/PARTIAL/FAIL and dated screenshots/receipts.

**Safety:** No personal medical history used. No proof that doxycycline causes diabetes. No recommendation to use antibiotics to treat Modic changes; AIM trial found no clinically meaningful effect. Fibres, vinegar, GOS or butyrate are not a validated antibiotic antidote. No automated medical or affiliate publication.

**Review link:** https://github.com/KarstenEvans/SwindonOrgUK/pull/6 (draft pull request; not deployed).
