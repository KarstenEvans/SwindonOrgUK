# Swindon.org.uk shared code library

> **Status:** migration seed. Reconcile against the fuller local `code.md` before Cloudflare production.
>
> Purpose: stop public pages drifting into different copies of the same navigation, Roundabout, footer, popup behaviour and search controls.

A reusable component belongs here when changing one copy but not another would create a site-wide inconsistency.

## Canonical routes

Use folder URLs in navigation:

```text
Home        /
A2Z         /a2z/
What's On   /whats-on/
Food        /food/
Jobs        /jobs/
Health      /health/
News        /news/
Meet        /meet/
AI4U        /ai4u/
Resources   /resources/
```

Do not hard-code physical default filenames into the main menu.

## Main menu / hamburger

Every public page using the standard shell must preserve:

- SwindonOrgUK brand/home link;
- About and Contact access;
- desktop navigation to the canonical sections;
- a mobile hamburger menu containing the same primary destinations;
- root-relative links.

A regenerated page that silently loses the hamburger has failed the reconstruction test.

## Roundabout menu

**Component name:** `roundabout-menu`

The Swindon Roundabout is a reusable visual-navigation component and part of the site identity.

Canonical asset:

```text
/assets/images/roundabout-menu.jpg
```

The picture must not contain the only navigation mechanism. Use normal accessible HTML links/hotspots over the image for Home, A2Z, What's On, News, Food, Meet, Jobs, Resources, Health and AI4U.

The Roundabout is available but not mandatory on every page. Where a page specification calls for it, reuse the canonical component rather than inventing a new version.

## Standard page shell

```html
<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="PAGE DESCRIPTION">
  <link rel="canonical" href="https://swindon.org.uk/PAGE-URL/">
  <title>PAGE TITLE | Swindon.org.uk</title>
  <link rel="stylesheet" href="/assets/css/site.css">
</head>
<body>
  <!-- shared header/navigation -->
  <main class="page" id="main">
    <!-- page-specific content -->
  </main>
  <!-- shared footer -->
  <script src="/assets/js/site.js"></script>
</body>
</html>
```

Do not leave documentation placeholders unresolved in a finished public page.

## Answer / discovery bridge component

For a factual/resource page that also acts as a public discovery front door, keep the structure simple and crawlable:

```html
<section class="answer-summary">
  <h1>Specific question or topic</h1>
  <p class="direct-answer">Concise answer in ordinary HTML.</p>
  <ul class="key-points">
    <li>Key point one</li>
    <li>Key point two</li>
    <li>Key point three</li>
  </ul>
</section>

<nav class="related-topics" aria-label="Related topics">
  <!-- a small number of real internal Swindon.org.uk topic links -->
</nav>

<p class="aletheia-bridge">
  <a href="ALETHEIA_PUBLIC_APP_URL">Explore with Aletheia</a>
</p>

<section class="go-deeper">
  <h2>Go deeper</h2>
  <!-- authoritative source links with one-sentence reasons -->
</section>
```

Rules:

- Do not require JavaScript to reveal the direct answer or source links.
- Use the Aletheia bridge only when a real deeper app/knowledge destination exists.
- The deeper Aletheia destination should reciprocate with the matching Swindon.org.uk resource/front-door URL when practical.
- Keep factual/source links out of affiliate conversion.
- Related-topic lists are curated navigation, not a keyword cloud.
- If two pages become substantially duplicate, choose one primary/canonical public version rather than publishing cloned copy.
- Generate/edit SEO titles, descriptions and query variants as planning aids, then measure actual performance after publication.

## Search controls

Use one primary task/search box per page. For Aletheia-enabled search pages the compact pattern is:

```text
[ Search Swindon... ] [ Search ]
☐ Search AI with Aletheia   [ provider ▼ ]   ☐ Add Trust Check
```

AI remains optional and secondary. Useful local results appear first.

## Popup rule

Shared popup behaviour belongs in `/assets/js/site.js`.

- main site navigation remains in the current window;
- **all ordinary resource-page links and secondary/external service links open in a 900 × 760 resizable, scrollable popup/new window**;
- this includes text links as well as styled buttons;
- the popup should be centred where practical and should open as a disposable child window/tab rather than replacing the main page;
- download links keep normal download behaviour and are not forced into the popup;
- AI providers should open synchronously from the user's click before asynchronous work;
- the active Swindon.org.uk page remains underneath;
- do not duplicate slightly different popup sizes or behaviours across pages.

### Browser fallback

- On mobile/tablet or when popup creation is blocked, fall back to the browser's normal new-tab/new-window behaviour.
- One click must open only one target; do not attach duplicate popup handlers.
- Primary site navigation remains in the current page.
- Feature-detect optional APIs/libraries. Never disable a capability merely because the device is Apple/Android/Windows.
- A failed optional feature must not remove the local results/navigation underneath it.

## Swindon Stream

Swindon Stream is supporting navigation/content and belongs near the bottom of task pages, after the primary useful action/results.

## Footer

The shared footer should link to:

- Swindon.org.uk home;
- About;
- Contact;
- Privacy;
- Affiliate disclosure.

## Source-of-truth rule

Before rebuilding a page:

1. read `docs/swindonorguk-gui.md`;
2. read the page's `pages/<page>.md` specification;
3. read this shared code file;
4. reuse shared components;
5. add only page-specific content/data;
6. audit navigation and links;
7. if a reusable component changes, update the shared specification first and propagate deliberately.

## Migration note

The established local project contains a fuller `code.md` with the existing HTML/CSS/JS snippets. Bring that fuller file into this repository and reconcile it with this structure before treating Cloudflare output as production-complete. Do not discard the local version merely because this migration seed exists.


## Canonical shared footer fragment

Runtime fragment: `/footer.html`.

The footer is deliberately unobtrusive and normally stays to one line on desktop:

`Home · Resources · About · Contact · Privacy · Affiliate Disclosure`

`/assets/js/site.js` loads the fragment and:
- replaces an existing `footer.site-footer` when one is present;
- fills `[data-site-footer]` when a page provides a footer slot;
- appends the footer when neither exists;
- leaves the page's existing footer untouched if the shared fragment cannot be fetched.

This allows old static pages to keep a safe fallback while future footer changes are made once in `footer.html`.

The **Affiliate Disclosure** link opens `/resources/affiliate-disclosure.htm` in the standard 900 × 760 resizable, scrollable popup.

Pages containing actual affiliate advertising still require a clear page-level advertising disclosure near the relevant commercial links.


## Awin Publisher MasterTag / Convert-a-Link

**Publisher ID:** `3182162`

Pages that contain affiliate advertising, merchant links intended for Awin Convert-a-Link, or resource-page commercial links must load the Awin Publisher MasterTag **once** near the end of the document, immediately before `</body>`:

```html
<script src="https://www.dwin2.com/pub.3182162.min.js"></script>
</body>
</html>
```

Rules:

- Do not place the MasterTag inside the visible footer fragment.
- Do not add it more than once to the same document.
- The tag must be present on the actual page containing the merchant link. Loading it on a separate index page does not carry it across navigation.
- Keep source/reference links non-commercial. Where a page deliberately contains a merchant-domain link that must not be converted, use the Awin ignore mechanism already adopted by the project (`data-awinignore`) where supported.
- A page containing actual affiliate advertising still needs a clear disclosure near the commercial links; the MasterTag does not replace disclosure.
- Aletheia Knowledge Markdown remains free of affiliate tracking code. Affiliate conversion belongs only to the HTML/resource layer.

This rule applies to Swindon.org.uk resource pages, Aletheia Knowledge resource pages, and any other page intentionally carrying affiliate-capable merchant links.
