# Meet page specification

**Canonical URL:** `/meet/`
**Rendered file:** `/meet/index.htm`
**Status:** working specification

## Purpose

Help people find practical, interest-based ways to meet others in Swindon. Keep the useful local activity information first and place experimental Aletheia/Synantisi material afterwards.

## Page order

1. short practical introduction;
2. current Swindon groups, activities and volunteering resources;
3. **Meet & Join** items fed from the What's On / noticeboard data;
4. optional books/resources;
5. concise Synantisi explanation and link to its dedicated app/specification;
6. Swindon Stream / supporting material.

## Meet & Join candidates

- Dance Room;
- Book Club;
- Chess, including verified local sessions and an optional link to Aletheia Chess;
- Community Meet.

Do not present a large menu of technologies. Show a small number of understandable current activities.

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

## Shared dependencies

Use:

- `docs/swindonorguk-gui.md` for site-wide behaviour and presentation;
- `docs/code.md` for shared components;
- `data/notices.md` for changing community/event listings.

## Acceptance checks

- [ ] local usefulness appears before experimental technology;
- [ ] Meet & Join contains only a small number of current understandable items;
- [ ] changing invitations are data rather than app code;
- [ ] current local times/venues are verified before publication;
- [ ] Aletheia Chess is optional practice, not a substitute for local club information;
- [ ] shared navigation/components are inherited from the canonical GUI/code specifications.
