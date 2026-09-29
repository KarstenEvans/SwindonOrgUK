# SwindonOrgUK Improve

**Purpose:** Reusable, task-based audit and improvement instructions for Swindon.org.uk. Use with Aletheia Improve to improve genuine search discovery (SEO), answerability (AEO), and machine/AI retrieval (GEO), without making claims about rankings or AI mentions that have not been measured.

**Aletheia Protocol:** https://github.com/KarstenEvans/aletheia-protocol — evidence, provenance, uncertainty, conflict register and receipts.  
**Thalia Protocol:** https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md — optional humour only where appropriate; never obscure a factual answer.  
**Status:** FUTURE WORK / AUDIT FIRST. Not approval to alter or publish production.  
**Home:** https://swindon.org.uk/  
**Source repository:** https://github.com/KarstenEvans/SwindonOrgUK  
**Companion backlog:** `tasks.md`

## Priority override — Atlas worldwide discovery (29 September 2026)

**Idea #001 / Task #001.** This is the owner's top initiative and supersedes any assumption below that Aletheia must be a Swindon-only or multi-city-clone publisher. Build one Aletheia location-aware and multilingual discovery interface (working names Atlas / Mystika; technical label Discover; final name not yet chosen). Swindon.org.uk remains the existing trusted local/home site and an entry point, but the Atlas service can research any chosen destination. Use `Discover [place]` rather than independent country/city sites. Follow `ideas.md` / `tasks.md` #001 and the app-side Atlas canonical specification.

First pilot the shared accessible sticky navigation without breaking hamburger/Roundabout or current links. Add explicit editable location (device geolocation only by consent), language/topic selectors, fast and honest search/handoff, real sources/dates, free-first results, dated events, social previews, SEO/AEO/GEO, and a single global editorial/blog/news stream with optional local filters. Do not generate thousands of thin city pages, fabricate researched stories, treat paid affiliate links as evidence or auto-publish without human review. Reconcile current PC/live version against this incomplete GitHub migration seed before editing production HTML. Status: specified/queued, not claimed live.

## When invoked

If supplied with a page, section, repository or site:

1. **Perform the requested task immediately.** Do not display HELP ahead of results.
2. Read `AGENTS.md`, `README.md`, `docs/swindonorguk-gui.md`, `docs/code.md`, `tasks.md`, applicable `pages/<page>.md`, current `site/` rendition, shared footer/JavaScript and exact assets/data. Check relevant canonical Aletheia knowledge/app specifications as needed.
3. Discover the actual live URL and source version. The GitHub mirror may be incomplete or older than the current local/production files. Compare, log conflicts and **do not overwrite newer material**.
4. Default to **AUDIT + PROPOSE**. Work in a copy/preview. Only implement changes when requested; only publish to production with explicit approval and verification. A GitHub commit is not evidence of live deployment.
5. Preserve the page's purpose, mobile behaviour, one primary task/search, useful result first, hamburger menu, Roundabout where specified, shared footer, relevant Awin disclosure/one MasterTag, existing working links, the 900×760 desktop secondary-window rule and mobile new-tab fallback.
6. Record what was **OBSERVED**, **MISSING FROM FETCHED HTML**, **UNVERIFIED**, or **PROPOSED**. Do not convert one crawler's failure into a site-wide factual claim.

## Source report and caution

The Rank Collective assessment of the homepage, observed **2026-09-27**, reported **31/100** rubric coverage and about **233 fetched visible words**:
https://therankcollective.com/audit/ed33b25e-03b5-4066-8e14-d520fa22bb0b

It detected title, meta description, H1, canonical and no noindex directive. It did **not** detect Organization identity markup, author attribution, Article or FAQ schema, Open Graph, JSON-LD or external HTTP anchors. It assessed **one fetched homepage**, not the website, competitors, actual indexing, traffic, AI citations, assistant recommendations or visibility. Its weights and 800-word threshold are editorial, not validated outcome measures. A homepage does not need Article or FAQ schema unless its actual content and eligibility justify them; verify whether external links are conventional HTML anchors before concluding they are absent. Treat this report as a lead sheet, **not a target score**.

## Modes

- `AUDIT` (default): inspect; evidence-backed findings and prioritised proposed changes; **no file writes** unless saving the requested audit.
- `PLAN`: add/refresh page-specific tasks and acceptance checks in `tasks.md` and canonical Markdown specs; no rendered-site changes.
- `IMPLEMENT`: make approved edits in a branch/copy, update canonical Markdown first or alongside HTML, inspect diffs; **do not auto-deploy production**.
- `VERIFY`: test a preview or approved live deployment and compare against recorded baseline; distinguish what cannot be measured.

## 1. Establish the baseline and front door (P0)

Create a dated inventory with URL, live/local/GitHub version, indexability evidence, HTML title/H1/meta/canonical, visible answer/content, author/publisher/date, source links, schema types, internal links, sitemap status and mobile behaviour.

Run Aletheia Site Audit Front Door Check for:
- `http://swindon.org.uk/`, `http://www.swindon.org.uk/`, `https://swindon.org.uk/`, `https://www.swindon.org.uk/`: record status, redirects, TLS, final URL and preferred canonical. Look for loops and accidental historical `/election/` landing routes.
- `/robots.txt`, `/sitemap.xml`, optional `/llms.txt`; confirm their actual HTTP content, correct canonical URLs, no accidental disallow/noindex, no preview/dead/duplicate URLs. `llms.txt` is supplemental, not a substitute for accessible HTML.
- Source HTML fetched without JavaScript **and** rendered browser output: verify real `<a href>` navigational/source links, crawlable H1, readable direct answers, accessibility, language, mobile, Android, Windows and Safari/WebKit.
- Distinguish crawler/provider access refusal from actual HTTP/DNS/TLS failure, and indexing from mere technical eligibility. Use dated PASS / PARTIAL / FAIL / INCONCLUSIVE receipts.

Inspect relevant Google Search Console/Bing Webmaster data **only if the user provides access or exports**. Never invent impressions, rankings, citation frequency or competitor visibility.

## 2. Per-page SEO, AEO and GEO editorial pass (P1)

Apply to Home, A2Z, What's On, Food, Jobs, Health, News, Meet, AI4U, Resources and substantive app/resource/knowledge front doors, adjusting by page type. Preserve useful interaction above explanatory prose. A search/tool page must remain a useful tool, not become a wall of SEO copy.

For each page record:
- **Intent:** the real visitor need, primary question/search wording and two or three natural variants if meaningful, including a spoken-language question.
- **Direct answer:** a concise, original, accurate answer visible in ordinary HTML near the top when the page claims to answer a question; then specific local details, steps/examples, limitations and relevant checked/updated date.
- **Related questions:** genuine follow-ups as clear H2/H3 question headings with distinct useful answers. No invented repetitive FAQ, duplicate boilerplate, hidden keyword blocks or mandatory word count.
- **Verification:** primary source links for factual/current/medical/legal/jobs/events assertions where appropriate; separate confirmed claims, opinions and uncertainty. Show author/publisher and review date truthfully. Recheck time-sensitive details.
- **Discovery:** distinctive page title, meta description, one H1, semantic sections, descriptive internal links, genuinely relevant neighbouring topic hubs, images with purposeful alt text, clean slug/canonical; keep public answers readable without depending on JavaScript.
- **Bridge:** where a real deeper destination exists, `Explore with Aletheia` linking to the relevant app/knowledge guide, and a sensible reciprocal link back. Do not mirror entire articles or make raw GitHub Markdown the main public route.
- **Go Deeper:** small, annotated authoritative reference links, visually distinct from advertisements/affiliate resources. Disclose commercial links near the links. Verify every target.

A reusable page pattern (adapt to context): **Question / direct answer / useful detail / limits and date / related questions / real sources / related Swindon pages / Explore with Aletheia / optional disclosed resource.**

## 3. Technical metadata and structured data (P1)

Review first, add only types supported by visible real content:
- Home: accurate `WebSite` and `Organization` **or** `Person` identity as appropriate to the real publisher, consistent name/URL/logo/About/Contact; add appropriate Open Graph/social cards.
- Articles/guides: `Article` or `TechArticle` only for actual authored articles, with truthful author, publisher and dates.
- FAQs: visible question/answer content may use valid `FAQPage` **where eligible and helpful**. Do not assume Google offers general FAQ rich results; do not apply Article/FAQ schema site-wide merely to please the audit rubric.
- Other types, e.g. `BreadcrumbList`, only when they match the actual interface/content. No invented reviews, ratings, business attributes, job offers, events or credentials.
- Test JSON-LD syntax, consistency with on-page text, canonical/OG URL, social image resolution and duplicate/conflicting declarations. Set a self-referencing canonical where appropriate, with one clearly preferred live hostname.

Preserve link discoverability: standard anchor `href` for important routes and factual sources; JavaScript popups can enhance these links, not be their only address.

## 4. Site architecture and usability (P1)

- Keep local Swindon content and the worldwide Aletheia brand distinct. If using `aletheia.swindon.org.uk`, ensure its own sitemap, robots, metadata and canonical identity. Avoid duplicate indexable copies under `/aletheia/`.
- Improve homepage section descriptions **where useful**, but do not pad it to 800 words. Add navigation to high-value question-led resource pages and curated topic hubs only when they have real content.
- Check no lost hamburger/Roundabout, broken search, broken browser fallback, duplicated search inputs, intrusive affiliate panels, empty link cards or source URLs implemented only through script.
- Maintain privacy, accessibility and performance; do not load excessive scripts to win synthetic SEO points.

## 5. Measure and report, not promise (P2)

Where access is provided, establish and date Search Console/Bing baselines: indexed and excluded canonical URLs, impressions, clicks, actual queries/landing pages, broken links, sitemap processing and referrals. Record genuine observed AI citation/referral examples separately from untested prompts or simulated predictions. Test a small number of representative pages, then compare after publication over a meaningful period. The goal is improved usefulness and discoverability; neither structured data nor a third-party score guarantees search rank or AI citation.

## Priority task order

1. Reconcile **live/local/GitHub** before touching the site.
2. Front Door Check: hostname, redirects, HTTPS, robots, sitemap, llms (optional), crawlable answers/links.
3. Homepage identity, accurate schema, title/canonical/Open Graph, meaningful concise descriptions.
4. Page-by-page direct questions and answers, real citations, provenance/dates and contextual links.
5. Valid content-specific JSON-LD and reciprocal Aletheia discovery bridges.
6. Preview and cross-device verification; measure outcomes rather than chasing the report's score.

## Required output from each Aletheia Improve run

Start with **Useful findings**, not HELP:
1. **Scope / date / sources / access limits:** identify exact versions and URLs, distinguish live observations from repo-only evidence.
2. **Findings table:** URL; observed evidence; defect or opportunity; severity P0/P1/P2; confidence; proposed fix; acceptance test.
3. **Page question matrix:** page; actual user question; short proposed direct answer (mark drafts and verify facts); useful follow-ups; source; metadata/schema fit; related/internal/Aletheia links.
4. **Smallest safe change set:** affected canonical MD and HTML/asset files, preserved UX behaviours, risks and approval needed.
5. **Validation receipts:** HTTP status/redirects; HTML-anchor/crawler tests; markup validation; desktop/mobile/Safari where possible; result PASS / PARTIAL / FAIL / INCONCLUSIVE with dated evidence.
6. **Checkpoint:** update `tasks.md` with completed/incomplete work, owner decision and next action. If implementation approved, give a diff/commit/preview URL; production remains unchanged until expressly authorised.

### Do not

- Invent visibility, competitor scores, AI recommendations, author identities, citations or dates.
- Claim a crawler failure proves page absence; claim a GitHub commit proves production success.
- Turn every page into an 800-word article or add irrelevant FAQ/Article schema to chase a synthetic score.
- Replace newer live/local content with an incomplete repository mirror.
- Hide facts in JavaScript-only interaction or turn source links into affiliate links.
- Publish, redirect the domain, change hosting/DNS or install tracking without approval.

**Success:** a first-time visitor can find and use a genuine answer or task quickly; an ordinary crawler can retrieve the same meaningful public content and follow its real links; facts are attributable and uncertainty is visible; measurable issues are recorded and repaired without breaking the working site.
