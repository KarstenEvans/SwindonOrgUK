# Resources page specification

**Canonical URL:** `/resources/`  
**Rendered file:** `/resources/index.htm`  
**Status:** working specification

## Purpose

Provide one simple SwindonOrgUK directory for useful human-facing resource pages and Aletheia applications. The public visitor should see the useful resource first; GitHub/source/protocol links are supporting transparency and developer links.

## Page order

1. shared header/navigation;
2. page title and short introduction;
3. featured Aletheia apps/resources;
4. books, guides and supporting resources where useful;
5. protocol/source links;
6. affiliate disclosure note where commercial links exist;
7. footer.

## Featured entry — Aletheia Love Translator

Show a card headed **Aletheia Love Translator**.

Description:

> Discover which forms of affection tend to land, translate loving intent between styles, and use the Repair Dictionary when communication goes wrong.

Primary link:

- **Open Love Translator** → `https://karstenevans.github.io/aletheia-app/aletheia-love-translator/aletheia-love-translator.htm`

HELP/resource link:

- **HELP · books · evidence · gifts** → `https://swindon.org.uk/resources/aletheia-love-translator-rsc.htm`

Supporting links:

- **App source** → `https://github.com/KarstenEvans/aletheia-app/tree/main/aletheia-love-translator`
- **Aletheia Protocol** → `https://github.com/KarstenEvans/aletheia-protocol`
- **Thalia Protocol** → `https://github.com/KarstenEvans/thalia-protocol`

The GitHub copy of `aletheia-love-translator-rsc.htm` is a mirror/recovery copy. The canonical public resource URL remains the Swindon.org.uk URL.

## Protocol/source section

Keep a compact **How it works / Source** section near the bottom with:

- Aletheia Protocol;
- Thalia Protocol `T-)`;
- Aletheia Apps repository;
- SwindonOrgUK repository.

Do not make GitHub the primary navigation route for ordinary users.

## HELP rule

Every featured app card should expose a visible HELP/resource action when a matching resource page exists.

For Love Translator:

```text
App
  ↔
https://swindon.org.uk/resources/aletheia-love-translator-rsc.htm
  ↓
books / evidence / repair resources / protocol links / source
```

## Link behaviour

- ordinary internal site links stay in the current window;
- runnable specialist apps may open separately where preserving Swindon.org.uk underneath is useful;
- GitHub and external sources open separately;
- never use a GitHub `/blob/` URL as the ordinary runnable app link;
- use `karstenevans.github.io` for runnable GitHub Pages apps.

## Acceptance checks

- [ ] Love Translator appears in the public Resources directory;
- [ ] primary app link uses `karstenevans.github.io`;
- [ ] HELP points to the canonical Swindon.org.uk `-rsc.htm` page;
- [ ] Aletheia and Thalia protocol links are present;
- [ ] app source link is present but secondary;
- [ ] affiliate/commercial links remain on resource pages rather than contaminating canonical protocols;
- [ ] shared navigation and footer rules are preserved.


## Controlled folder index

`/resources/` is the human landing page for the Resources folder.

A small manifest at:

`/resources/resources.json`

lists the public resource pages that should appear in the directory. The index page loads this manifest in the browser and renders a compact **All resource pages** list. Keep a small HTML fallback list so the directory remains useful if JavaScript is unavailable.

This is a controlled manifest, not raw server directory listing.

## Affiliate Disclosure

Canonical disclosure:

`https://swindon.org.uk/resources/affiliate-disclosure.htm`

Compatibility address:

`https://swindon.org.uk/resources/affiliate-disclosure.html`

The shared site footer opens the disclosure in the standard **900 × 760** popup.
