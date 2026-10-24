# Discover Anywhere: SwindonOrgUK immediate integration guide

**Aletheia Protocol:** https://github.com/KarstenEvans/aletheia-protocol — receipts, source verification and uncertainty.  
**Thalia Protocol:** https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md — optional considered humour.

**Status:** REVIEW-STAGED, not a production change; 29 September 2026.  
**Priority:** Idea #001 / Task #001.  
**Reference:** https://secretldn.com/food-drink/ for navigational/editorial patterns, not source text/branding.  
**App pilot:** https://github.com/KarstenEvans/aletheia-app/tree/feature/discover-worldwide-mvp-20260929/aletheia-discover

## Ownership and safe next step
Keep Swindon.org.uk the existing local information front door; offer one visible link to a *worldwide* Aletheia Discover system rather than converting Swindon into hundreds of city-specific pages. This GitHub site's homepage rendition is an incomplete migration seed: compare against the newer live site and PC copy before touching the homepage, shared footer, hamburger or Roundabout. Do not publish a link to the Discover branch's HTML until it has passed review, been merged/deployed and fetched successfully at its actual public Pages URL.

## P0: drop-in visual behaviour, after inspecting actual live selectors
Keep exactly one main task/search on the homepage. Add a clearly labelled secondary action near Aletheia search such as "Discover anywhere with Aletheia", not a second competing home-page search form. Preserve the existing Swindon Search and local results first, and make a selected remote destination independent of the visitor's actual location.

For an established site header with the **actual matching class or ID**, a baseline style is:

~~~css
/* Adopt into the real shared site.css only after selector reconciliation. */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
}
.topic-nav {
  display: flex;
  gap: .5rem;
  overflow-x: auto;
  white-space: nowrap;
  overscroll-behavior-inline: contain;
}
.topic-nav a { display: inline-flex; align-items: center; min-height: 44px; }
html { scroll-padding-top: 115px; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
~~~

Do **not** apply the CSS blindly if the current header or hamburger uses a different selector, a fixed overlay, transform, scroll container or Roundabout element. Test sticky behaviour at phone width, 200% zoom and mobile browser toolbar changes. Navigation remains ordinary functional anchors, not JavaScript-only pills.

## P1: preview and answer-ready publication
Inspect current HTML before changing, and add missing relevant meta: distinct title and description, exact canonical URL, OG title/description/type/url, a **real original** 1200×630 image served via public HTTPS, Twitter large-summary card and meaningful alt text on visible page images. Do not invent a preview image URL. Confirm the live Facebook/LinkedIn shared link displays correctly after cache refresh. Use actual WebSite/Organization identity markup only if the details are true and visible. FAQPage and Article types must describe genuine corresponding visible content; never deploy generic SEO boilerplate.

Keep an actual human-readable summary near each guide's top; use genuine question headings and useful sourced answers. The existing Swindon homepage should stay short, task-first and locally useful.

## P1: source and freshness template
For newly researched/discovered information, distinguish:
- SOURCE (original direct link; publisher; original language; published/updated time if known);
- CHECKED (date/time and location, including source-local event time zone);
- STATUS (confirmed on original page / independent corroboration / disputed / snippet-only lead / unavailable);
- TRANSLATION (requested output language, without concealing source language);
- COMMERCIAL (optional approved affiliate link clearly disclosed beside it, never masquerading as source).

Expire past events according to local start/end and cancellations, or say that status is unverified. Free information and free-entry choices appear ahead of optional commercial add-ons when relevant. Never claim dynamic fresh events without a live provider that actually ran.

## One editorial stream, not a city-site factory
One Aletheia blog/newsletter/RSS stream with optional place/topic/language filters. Swindon may be a filtered view; user opt-in before mail delivery. No auto-generated city landing pages, affiliate-driven editorial decisions or automatic posting without human approval.

## Checklist before production
- [ ] Reconcile PC/live HTML against GitHub seed; document conflicts and preserve newer site.
- [ ] Review/merge/test standalone Discover pilot and confirm exact live app URL.
- [ ] Add ONE home-page/AI4U bridge to that tested URL, and a reciprocal link to Swindon.
- [ ] Verify Android Chrome, desktop and Safari/WebKit; keyboard focus, hamburger and Roundabout remain functional.
- [ ] Test HTTPS/canonical/robots/sitemap/links and actual social-card image loading.
- [ ] Remove prototype noindex only after approved release; verify deployed content.
- [ ] Track checked source dates, correct time-zone events and close human review gate before blog/news content is published.

GitHub draft and passing syntax checks are not evidence that Swindon production has changed.

## Implementation checkpoint (29 September 2026)

A standalone `site/discover/index.html` and canonical `pages/discover.md` are now staged on this PR branch, with one unobtrusive `/discover/` link in the shared `site/footer.html`. Uses a real HTML mobile details menu, sticky topical strip, manual global place/language/topic/free-first search links, selected-provider copy/open AI handoff and visible FAQ/resource links. Draft noindex remains until release. Reconcile the newer production homepage before adding its Discover CTA. Review device/browser, source link and OG image checks before merge/deployment; static code is not live verification.
