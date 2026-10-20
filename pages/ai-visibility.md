# Swindon.org.uk | AI visibility and the accessible front door

**Status:** Source proposal only, NOT verified on the production Fasthosts site  
**Target rendition:** `site/ai-visibility.htm`  
**Audience:** independent local organisations, businesses and website owners  
**Canonically related:** Aletheia Worldwide AI site `ai-visibility/`; canonical research `aletheia-knowledge/knowledge/aletheia-ai-visibility-trust-gate.md`  
**Reviewed:** 2026-10-20

## Purpose

Explain why a secure public website may be inaccessible to crawlers without implying its owner is dishonest. **Before any AI-visibility optimisation, do a proportionate Aletheia Trust Check, then an Aletheia Site Audit.** Keep site ownership / credibility, HTTPS security, public HTTP reachability, crawl/index permission and AI answers as separate dimensions.

## Visitor-first content

1. One plain-English answer at the top: Can AI actually read your public website?
2. Brief gated-community analogy and correction: HTTPS is beneficial, not the cause.
3. The five-stage check: identity, browser reachability, verified crawler fetch, search index eligibility, answerability/citation.
4. Distinguish OAI-SearchBot (search) from GPTBot (training) with official OpenAI document.
5. State current site-specific evidence: Swindon.org.uk homepage and sections have been retrieved by one external web search tool; production robots.txt, actual server logs and different named bots remain untested.
6. Link to portable Trust Check and Site Audit and full source-traced Aletheia research; link home to Swindon.org.uk.

## Technical/accessibility

Use semantic HTML with real text, H1/H2 hierarchy, viewport, descriptive title/meta, one canonical URL only **after the production route is deployed and chosen**; in preproduction avoid falsely assigning a canonical. No JavaScript required; no tracking script; no affiliate content. Simple contrast and mobile layout.

**Do not claim the new page is live.** The GitHub repository is not automatically synchronised with the Fasthosts production host. Add to the appropriate production Resources/AI4U navigation only after the owner reconciles source and tests the deployed URL.

## Acceptance tests

- File exists, HTML parses, links are not malformed, accessible from local/static preview.
- Aletheia sources link correctly after their PRs are merged.
- No invented HTTP status, Fasthosts bot-block allegation, AI blacklist, indexing figure or proof of recommendation.
- Obtain explicit owner-side HTTP, TLS, robots, Search Console/Bing and host/CDN log receipts before declaring production results.
- If publication begins, verify canonical, sitemap and measured crawler access using the current Site Audit.
