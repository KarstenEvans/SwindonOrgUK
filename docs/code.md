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
- secondary/external services may use a separate popup/new window;
- AI providers should open synchronously from the user's click before asynchronous work;
- the active Swindon.org.uk page remains underneath;
- do not duplicate slightly different popup code across pages.

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
