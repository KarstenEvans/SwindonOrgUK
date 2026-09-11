# SwindonOrgUK ideas

Living ideas register for **Swindon.org.uk**. Keep ideas here until they are promoted into a canonical page specification or shared component.

## Working architecture

- Swindon.org.uk remains the simple trusted front door.
- GitHub is the durable source/history.
- ChatGPT temporary site is a prototype/design workbench.
- Cloudflare Pages preview is the dress rehearsal.
- Cloudflare production serves the public domain when migration is complete.
- Specialist apps or experiments can live on GitHub Pages, Cloudflare Pages, Google Sites or another suitable free/static service and be linked from Swindon.org.uk.

## Markdown-first page memory

Principal pages should have page-specific Markdown build specifications. The purpose is not merely documentation: the `.md` source prevents AI-assisted rebuilds from forgetting navigation, behaviour, dependencies or distinctive components.

```text
page.md + shared GUI + shared code + data/assets -> page.htm
```

HTML is the rendition. Markdown is the durable reconstruction source.

## What's On + community noticeboard

Keep the public structure small rather than building a social network or database first.

Possible What's On sections:

- Cinema;
- This Week;
- Meet & Join;
- Local Noticeboard.

Initial Meet & Join candidates:

- **Dance Room**: recurring event/invite using the existing Synantisi/Jitsi direction;
- **Book Club**: simple recurring morning, afternoon or monthly event;
- **Chess**: verified local chess sessions plus optional Aletheia Chess practice;
- **Community Meet**: ordinary interest/community gatherings.

Changing invitations and small announcements should live in `data/notices.md` rather than being hard-coded into reusable apps.

## External community satellite

Swindon.org.uk may link to a separate experimental community/noticeboard site rather than absorbing all community functionality. Candidates include a free WordPress.com site, Google Sites or another simple hosted project. Treat it as a satellite, not the Swindon.org.uk source of truth.

Prefer the Git-backed Markdown noticeboard first. If browser-based editing becomes useful, evaluate a Git-backed editor such as Pages CMS before adding a traditional CMS/database.

## Synantisi / Meet separation

Reuse existing Synantisi online-room/event work. Keep reusable app logic separate from changing public invitations.

```text
reusable Synantisi app/templates
          ↓
Swindon.org.uk What's On / Meet
          ↓
current event invitation/provider
```

## Email direction

Likely model after DNS migration:

- one dedicated Gmail inbox for SwindonOrgUK;
- Cloudflare Email Routing for incoming `@swindon.org.uk` aliases such as `a2z@`, `food@`, `meet@` and `ai4u@`;
- decide later whether a dedicated outbound SMTP/custom-domain mail service is needed.

Do not publish credentials or mail secrets in this repository.

## Historical site material

The old `/election/` material dates from the 2010 SwindonOrgUK political/protest project. Treat it as historical/archive content unless deliberately revived. Do not let old election material become the default landing route or current-site description.

## Next work

1. reconcile the current live/local files into this repository;
2. add canonical Markdown specs for the principal pages;
3. restore/verify shared hamburger navigation and Roundabout components from source specifications;
4. add current `robots.txt`, `sitemap.xml` and `llms.txt` before production migration;
5. configure Cloudflare Pages preview and production;
6. verify HTTPS, Safari/Chrome/Firefox/Edge and crawler access before affiliate applications;
7. then expand What's On / Meet / noticeboard experiments.
