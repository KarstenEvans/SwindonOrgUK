# Meet page specification

**Canonical URL:** `/meet/`  
**Rendered file:** `/meet/index.htm`  
**Status:** working specification

## Purpose

Help people find practical, interest-based ways to meet others in Swindon. Keep useful local activity information first and place experimental Aletheia/Synantisi material afterwards.

The page may also contain a small **Love & Relationships** area for tools that help people communicate once they have actually met one another. Keep this secondary to real local activities.

## Page order

1. shared header/navigation;
2. short practical introduction;
3. current Swindon groups, activities and volunteering resources;
4. **Meet & Join** items fed from the What's On / noticeboard data;
5. optional books/resources;
6. **Love & Relationships** with Aletheia Love Translator;
7. concise Synantisi explanation and link to its dedicated app/specification;
8. Swindon Stream / supporting material;
9. footer.

## Meet & Join candidates

- Dance Room;
- Book Club;
- Chess, including verified local sessions and an optional link to Aletheia Chess;
- Community Meet.

Do not present a large menu of technologies. Show a small number of understandable current activities.

## Love & Relationships

Add one compact card/section headed **Love & Relationships**.

Purpose:
- provide a light, practical communication tool rather than generic relationship advice;
- keep it optional and clearly separate from finding local groups or dates;
- link to the Aletheia Love Translator and its HELP/resources.

Suggested visitor-facing text:

> **Aletheia Love Translator** helps two people discover which forms of affection tend to land, translate loving intent between styles, and repair crossed signals after communication goes wrong.

Primary action:

- **Open Love Translator** → `https://karstenevans.github.io/aletheia-app/aletheia-love-translator/aletheia-love-translator.htm`

Secondary actions:

- **HELP / books / evidence / gifts** → `https://swindon.org.uk/resources/aletheia-love-translator-rsc.htm`
- **Aletheia Protocol** → `https://github.com/KarstenEvans/aletheia-protocol`
- **Thalia Protocol** → `https://github.com/KarstenEvans/thalia-protocol`
- **App source** → `https://github.com/KarstenEvans/aletheia-app/tree/main/aletheia-love-translator`

Rules:
- ordinary users should normally open the runnable GitHub Pages app, not a GitHub `/blob/` page;
- HELP/resources should point to the canonical Swindon.org.uk resource URL;
- protocol/source links are supporting transparency links, not primary calls to action;
- external/supporting links open separately so the Meet page remains underneath;
- retain the app's independent/non-official wording regarding *The 5 Love Languages* framework.

## Event separation rule

Changing invitations belong in `data/notices.md` or another declared current-event source. Do not hard-code weekly room links into the reusable Synantisi application.

```text
Synantisi / reusable app work
        ↓
Swindon.org.uk What's On + Meet
        ↓
current invitation / event provider
```

## Existing work to reuse

Before creating another Meet/Dance implementation, check the existing Aletheia/Synantisi material, including the online handover, room/event template and current Synantisi app work.

For relationship/communication tools, reuse the existing Love Translator app. Do not build a second competing quiz into the Meet page.

## Shared dependencies

Use:

- `docs/swindonorguk-gui.md` for site-wide behaviour and presentation;
- `docs/code.md` for shared components;
- `data/notices.md` for changing community/event listings;
- `site/resources/aletheia-love-translator-rsc.htm` as the repository copy of the Love Translator resource page.

## HELP behaviour

The Love Translator card should expose an obvious **HELP / Resources** action. It must lead to:

`https://swindon.org.uk/resources/aletheia-love-translator-rsc.htm`

The resource page in turn should link back to:

- the runnable Love Translator;
- the Aletheia Protocol repository;
- the Thalia Protocol repository;
- the Aletheia Apps repository/source.

This creates a simple loop:

```text
Meet
  ↓
Love Translator
  ↔
Swindon.org.uk/resources/aletheia-love-translator-rsc.htm
  ↓
GitHub source / Aletheia / Thalia protocols
```

## Acceptance checks

- [ ] local usefulness appears before experimental technology;
- [ ] Meet & Join contains only a small number of current understandable items;
- [ ] changing invitations are data rather than app code;
- [ ] current local times/venues are verified before publication;
- [ ] Aletheia Chess is optional practice, not a substitute for local club information;
- [ ] Love Translator appears only as an optional secondary relationship/communication resource;
- [ ] Love Translator HELP points to the canonical `swindon.org.uk/resources/` page;
- [ ] app links use `karstenevans.github.io`, not GitHub `/blob/` pages;
- [ ] Aletheia and Thalia protocol/source links are present as supporting transparency links;
- [ ] shared navigation/components are inherited from the canonical GUI/code specifications.
