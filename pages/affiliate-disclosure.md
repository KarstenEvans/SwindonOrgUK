# Affiliate Disclosure page specification

**Canonical URL:** `/resources/affiliate-disclosure.htm`  
**Rendered file:** `/resources/affiliate-disclosure.htm`  
**Compatibility URL:** `/resources/affiliate-disclosure.html`  
**Status:** working specification

## Purpose

Explain clearly how Swindon.org.uk uses advertising and affiliate links, including Awin and other affiliate programmes, without mixing commercial material into the canonical Aletheia protocols.

The page is a site-wide transparency page. It does not replace the short, prominent disclosure required on an individual resource page that contains affiliate advertising.

## Required wording and principles

The page must explain in plain English that:

- some Swindon.org.uk resource pages contain advertising or affiliate links;
- when a visitor follows an affiliate link and completes a qualifying purchase or action, Swindon.org.uk can receive a commission from the retailer, advertiser or affiliate network;
- commercial links should be clearly identified on the relevant page, using a clear label such as **AD** rather than relying on the word **affiliate** alone;
- affiliate relationships do not buy favourable editorial treatment;
- affiliate networks and programmes may include **Awin**, **Bookshop.org** and others disclosed on the relevant page;
- Awin's Publisher MasterTag and Convert-a-Link may be used to convert eligible ordinary links into tracked affiliate links;
- links belonging to another affiliate programme may be excluded from Awin automatic conversion;
- affiliate providers may process click/referral and transaction-attribution information according to their own technology, privacy rules and consent settings;
- visitors can read the Swindon.org.uk Privacy page for privacy information and use Contact for questions.

Do not promise that every affiliate purchase is always at "no extra cost" unless that is known to be true for the specific programme and offer.

## Page layout

1. compact SwindonOrgUK header;
2. page title;
3. short summary;
4. What an affiliate link means;
5. How Swindon.org.uk marks advertising;
6. Networks and programmes;
7. Awin automatic link conversion;
8. Tracking and privacy;
9. Editorial independence;
10. contact;
11. shared footer.

Keep the design small, pale, readable and consistent with `docs/swindonorguk-gui.md`.

## Popup behaviour

The shared footer link to this disclosure page should use the standard Swindon popup behaviour:

- width: **900px**;
- height: **760px**;
- resizable;
- scrollable;
- leave the original Swindon.org.uk page underneath.

The disclosure page itself should provide a compact **Close window** control.

## Shared footer

The site-wide footer is loaded from:

`/footer.html`

Pages using the shared footer should include:

```html
<div data-site-footer></div>
<script src="/assets/js/site.js"></script>
```

The shared JavaScript loads the footer and applies the popup behaviour.

## Individual affiliate-page disclosure

A page that actually contains affiliate advertising should show a clear notice before or beside the commercial links, for example:

> **AD – Affiliate links:** If you buy through an affiliate link on this page, Swindon.org.uk can receive a commission from the retailer or affiliate network.

The site-wide Affiliate Disclosure page is supporting detail, not a substitute for that page-level notice.
