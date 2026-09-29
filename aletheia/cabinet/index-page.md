# The Cabinet of Curiosities — page reconstruction specification

**Aletheia Protocol:** https://github.com/KarstenEvans/aletheia-protocol — evidence, attribution, uncertainty and receipts.  
**Thalia Protocol:** https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md — optional creative humour.

**Status:** review-staged first online collection, 29 September 2026, not yet deployed.  
**Intended canonical URL:** `https://aletheia.swindon.org.uk/cabinet/`.  
**Rendered output:** `aletheia/cabinet/index.html`.  
**Shared style:** `aletheia/assets/style.css`.  
**Curated inventory:** `aletheia/collections.json` with `collection=cabinet`.  
**Visual concept preservation:** `aletheia/collection-identities.md`.  
**Future physical cabinet story:** `aletheia/cabinet/toomorrowman-cabinet-story-seed.md`.

## Intent
The online Aletheia Cabinet is the creative collection. Exact approved intro: **Our illustrated history presentations, animated HTML stories, unusual discoveries, interactive experiments and future seasonal productions.** It is not a shop: practical/books/downloads will primarily live under Aletheia Emporium. The actual physical cabinet is not yet photographed or its contents known, and is not presented as fact.

## Actual page
Static accessible main/H1 and overview with small original CSS/emoji decorative illustration (NOT one of the earlier example photos); one simple open-Cabinet jump; curated static HTML cards for AI history story, Weird History, Storyteller, Three.js animation, Swindon Town facts and Song Catchphrases; optional JS filters by category; visible FAQ answering what it is, fiction versus fact, practical resources, physical cabinet; source links to real existing Aletheia Apps/Knowledge and Swindon. Normal static anchors make all six original destinations crawlable and useful without JavaScript.

## Provenance / assets
The owner liked the two earlier dynamic example images and captions. Preserve their visual brief in `collection-identities.md`, but do NOT claim the actual image bytes were saved or licensed. This draft instead includes original lightweight cabinet-shaped CSS/emoji decorative art with an honest alt/role description saying it is not a photograph. Replace with user-owned/licensed or newly commissioned original art after review. For public social cards use a real 1200x630 saved asset and verified URL, not an invented reference. Avoid copying third-party book covers, articles or licensed screenshots.

## SEO, AEO, GEO
Meaningful unique title/H1/meta description, correct intended canonical, original visible Q&A, source/original publication links, accurate static copy and bottom related resources. Remain `noindex,nofollow` until the actual public subdomain, source links, favicon/OG assets, robots/sitemap/canonical and site identity are configured and tested. Do not invent ratings or FAQ rich-result promises. Once public, use a single canonical page and avoid mirrored indexable copy on the local Swindon path.

## Interaction and tests
- All content and six cards available without JavaScript; filter buttons enhance, never gate content.
- Active filter has `aria-pressed`, result count `aria-live`; responsive cards, visible focus, sticky nav/scroll padding and reduced-motion.
- Verify no fake delivery statement. Story seed identifies fiction separately.
- Inspect all six original public URLs individually before release, remove or mark inaccessible links; do not imply a GitHub source file proves live deployment.
- Run syntax, metadata, anchor and duplicate-ID checks; separately record desktop, Android and Safari/WebKit observations.
- On approval, deploy Aletheia public site root and this folder in the same subdomain, verify `/cabinet/` resolves, then add quiet bottom/footer links from Swindon and other relevant pages.

## Next additions
Upload/confirm visual reference images or original illustration, optional ToomorrowMan story *after actual physical cabinet photographs*, and new original HTML presentations as produced. Add items by editing canonical inventory and static cards together (or generate static HTML at build time), not by a client-only feed with invisible links.
