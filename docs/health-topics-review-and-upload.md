# Swindon Health Topics: download, test and later upload

**Date:** 10 November 2026  
**Status:** Review only. Do NOT overwrite live `/health/` yet.  
**PR:** https://github.com/KarstenEvans/SwindonOrgUK/pull/6

## Easiest test: single standalone file

1. Open [health-topics-standalone-preview.htm](../site/health/health-topics-standalone-preview.htm).
2. Use **Raw** and save the file on your Windows PC as `health-topics-standalone-preview.htm`. Alternatively use the direct raw GitHub link:
   https://raw.githubusercontent.com/KarstenEvans/SwindonOrgUK/refs/heads/feature/health-help-topics-2026-11/site/health/health-topics-standalone-preview.htm
3. Double-click it to open in Chrome/Edge. It contains all 17 source-linked draft topic summaries, the selector, styles and JavaScript in one file.
4. Choose **Diabetes**, move the **Help Topic** window aside, then choose **Back and neck** or **Modic changes**. The same named window should update. Close it and choose another topic. If popup blocking prevents a window, the topic should appear inline.
5. Check keyboard/zoom/mobile presentation and that external NHS/NICE/research source links work. The local preview remains useful offline, but external links require internet.

The standalone preview is **not the crawlable final set of public topic URLs**. It embeds article text for a fast functional test.

## Actual separate article source files
- Main collection: [site/health/topics/](../site/health/topics/)
- Collection selector: [site/health/topics/index.htm](../site/health/topics/index.htm)
- Every separate article: `site/health/topics/<slug>.htm` (17 files)
- Site stylesheet: `site/assets/css/help-topics.css`
- Selector adapter: `site/assets/js/help-topics.js`
- Existing shared popup: `site/assets/js/site.js` (present in the repository seed; **do not overwrite any newer production copy**)
- Canonical spec: `pages/health-topics.md`
- Evidence catalogue: `data/help-topics.json`

## Proposed upload map after review and reconciliation

| Repository branch path | Target on Swindon host |
| --- | --- |
| `site/health/topics/index.htm` | `/health/topics/index.htm` |
| `site/health/topics/*.htm` | `/health/topics/*.htm` |
| `site/assets/css/help-topics.css` | `/assets/css/help-topics.css` |
| `site/assets/js/help-topics.js` | `/assets/js/help-topics.js` |

**Do not upload a replacement `/health/index.htm` or `/health/index.html` at this stage.** The live site has existing `/health/` and `/health/diabetes/` content that is newer than the incomplete GitHub migration copy. After obtaining that real source, add a compact Health Topics control after the existing Health navigation. It should point to `/health/topics/index.htm` and the individual topic files. Keep the hamburger, existing diabetes/wellbeing/procrastination sections, footer and disclosure unchanged.

The static topic pages refer to root-relative `/assets/` paths. Opening those **separate** GitHub files directly from your disk will therefore not load site assets until placed under the server root. Use the standalone test file for offline interaction.

## Link and publishing checklist

- [ ] Medical/editorial review complete, including any uncertain science.
- [ ] All NHS/NICE/research links and urgent warning statements checked.
- [ ] Current Fasthosts/PC Health source reconciled with GitHub.
- [ ] Server serves explicit `.htm` URLs; canonical URLs match final host/route.
- [ ] On production, selector reuses the same popup; new/closed/moved-aside case tested.
- [ ] Mobile/Safari new-tab fallback and no-JavaScript links pass.
- [ ] No personal patient histories, affiliate substitutions of reference links or unsupported claims.
- [ ] Sitemap updated only for live URLs after rollout.
- [ ] Aletheia mirror held until user checks and approves Swindon version. Then adapt brand, navigation, metadata and canonical URLs for `https://karstenevans.github.io/aletheia/health/`, without referencing Swindon from user-facing Aletheia pages; avoid identical duplicate-indexed articles without an editorial/canonical decision.

## Affiliate note
Awin Ava's Craftiosity vouchers, Townsend Music programme and other partner suggestions are separate commercial leads, not endorsements or evidence for the health articles. Verify current offer dates/terms and insert only approved, clearly disclosed links on contextually appropriate resource pages after editorial review. Do not put unreviewed supplement advertising beside treatment claims or emergency warnings.
