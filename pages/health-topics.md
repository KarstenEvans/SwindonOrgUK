# Health Topics — canonical page and help-window specification

**Status:** DRAFT REVIEW, GitHub feature branch only. **Date:** 2026-11-10.
**Hub preview source:** `site/health/topics/index.htm`
**Topic source:** `data/help-topics.json` (17 health entries)
**Renditions:** `site/health/topics/*.htm`.
**Shared JS:** `site/assets/js/site.js` is the existing popup owner; `site/assets/js/help-topics.js` is a thin selector adapter.
**Shared CSS:** `site/assets/css/help-topics.css`.

## User-facing contract
- Preserve the existing /health/ top-level navigation, hamburger, existing /health/diabetes/ article, footer and Aletheia identity.
- Add a compact Health Topics selector BELOW the existing page's main action/navigation, not as an intrusive takeover.
- On choosing a topic (or using the Open Help Topic button), open one named resizable 900×760 desktop window **swindonHelpTopic**. Choosing another item navigates that same window. If manually closed, another choice reopens it. The window can be dragged aside.
- On narrow/mobile viewports open a normal browser tab; if blocked, reveal a direct anchor. Do not navigate the parent page.
- Always show ordinary server-rendered href links to all substantive topics for no-JS, accessibility, crawling, sharing and direct links. Selector is an enhancement only.
- User-facing heading, short direct answer, 3 useful points, sensible caveat, actual external sources, related topics and date.
- Type 1/2 remain distinct; a separate overview links both and the existing live /health/diabetes/ guide.
- Related links in the same named popup may navigate there, preserving the parent page.
- External evidence sources are not affiliate links; do not run Awin Convert-a-Link on NHS, NICE or research citations. No merchant links or MasterTag in these draft pages.
- Accessible label, keyboard controls and mobile menu required. Responsive, reduced-motion friendly; avoid dependence on JavaScript for the actual evidence.
- Never silently replace live /health/ content with this incomplete GitHub mirror.

## Public-health editorial gate
- No private case histories, user chat summaries, prescriptions or personally identifying examples.
- Claims: established / emerging / disputed / unsupported; source attribution and conflicting evidence.
- No diagnosis, antibiotic prescriptions, claims that doxycycline causes type 2 diabetes, or promotion of antibiotics for non-infectious back pain.
- For Modic changes, document both the low-grade C. acnes hypothesis and the larger negative AIM trial, not selectively the original positive trial.
- Groin lesions can reflect hidradenitis suppurativa; they do not diagnose spinal infection.
- Antibiotic-related microbiome effects do NOT justify recommending routine vinegar/inulin/GOS/butyrate/protein regimens as proven countermeasures.
- Flag red-flag neurological, systemic or diabetes foot symptoms prominently.
- Human editorial and relevant clinical review BEFORE any public production deployment. Confirm sources when finalising.

## Migration/integration contract
The current production `/health/` page is live but **absent** from this GitHub migration seed (checked 2026-11-10). Do not create a replacement `site/health/index.htm` until the deployed and local sources have been compared. After reconciliation, insert a compact selector using the shared CSS/JS and link to `/health/topics/index.htm`. Ensure .htm paths resolve on the chosen host and update the sitemap only after final routing and approval.

## Acceptance
- [ ] Topic catalogue and static preview pages agree.
- [ ] All HTML contains readable answers, original sources and normal href links.
- [ ] Existing popup names for other resources remain unchanged.
- [ ] One active desktop named Help Topic window is reused; closing it then reopening works.
- [ ] Mobile tab and blocked-popup fallback are tested, also keyboard and Safari.
- [ ] No existing live Health or Jobs page overwritten.
- [ ] Editorial and clinical reviews completed before publishing.
- [ ] Actual production URL checked; never infer deployment from GitHub.
