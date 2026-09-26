# Aletheia public home page specification

**Canonical URL:** `https://aletheia.swindon.org.uk/`  
**Rendered file:** `index.html`  
**Status:** proposed public-site specification  
**Brand:** Aletheia, not Swindon.org.uk

## Purpose

Provide a worldwide, simple public front door to Aletheia's useful AI tools, knowledge, learning and projects.

A visitor should understand in a few seconds:

1. what Aletheia is;
2. what they can do with it;
3. where to search/browse;
4. how to open the relevant tool or knowledge page.

## Page order

1. Aletheia identity and one-line purpose.
2. One primary search / "What do you want to do?" control.
3. Immediate categories / topic hubs.
4. Featured Aletheia tools and knowledge.
5. Answer-ready discovery content / latest useful guides where justified.
6. Explore by topic.
7. Swindon.org.uk as the first local implementation / case study, kept secondary.
8. Protocol/source/about links.
9. Footer.

Do not place affiliate panels, protocol detail or technical GitHub material above the useful task/navigation.

## Primary navigation

Initial high-level routes may include:

- AI & Assistants
- Knowledge
- Improve / Check
- Create
- Learn
- Privacy
- Work & Jobs
- Home & Life
- Stories & Fun

Keep the number small. Add a category only when it contains useful real destinations.

## Search/discovery behaviour

The public index should search/browse a controlled manifest rather than trying to enumerate GitHub at runtime.

Each registered destination should carry, where useful:

- title;
- one-line purpose;
- type: app / knowledge / guide / story / protocol / local implementation;
- topic tags;
- public URL;
- matching Swindon.org.uk front-door/resource URL where one genuinely exists;
- checked date.

Search should return public runnable pages, never raw Markdown by default.

## Answer-ready pattern

For explanatory public content:

```text
QUESTION / TOPIC
DIRECT ANSWER
3 KEY POINTS where useful
EVIDENCE / HOW
LIMITS
RELATED TOPICS
EXPLORE WITH ALETHEIA
GO DEEPER SOURCES
```

Use ordinary crawlable HTML.

## Cross-pollination

Aletheia and Swindon.org.uk have different jobs.

- Aletheia: worldwide/deeper tool and knowledge discovery.
- Swindon.org.uk: local Swindon implementation and concise local/public front doors.

Where both have relevant pages, link reciprocally.

Do not clone long-form content between them.

## Topic hubs

Create a public topic hub only when several substantive destinations genuinely belong together.

Examples:

- Garden Wildlife
- Windows
- AI Privacy
- AI for Work
- Swindon History

A hub needs a short original explanation and curated routes. It must not be an empty tag archive.

## Branding

The page must not display the Swindon Roundabout, "SwindonOrgUK" masthead or local Swindon navigation as its main identity.

Shared underlying accessibility, mobile, popup/fallback and security rules may be reused.

## Canonical / duplicate rule

The canonical home is the subdomain root.

Do not serve the same Aletheia home page as an indexable copy at `swindon.org.uk/aletheia/`.

If a path alias is needed, use a permanent redirect to the subdomain.

## Initial acceptance checks

- public Aletheia identity is visually independent from Swindon.org.uk;
- one primary task/search is obvious on mobile;
- every featured link resolves to a public runnable destination;
- no raw GitHub Markdown is a primary visitor route;
- reciprocal Swindon links exist only where useful;
- canonical URL points to `https://aletheia.swindon.org.uk/`;
- direct answers and navigation work without JavaScript where practical;
- no duplicate public home exists under a second hostname/path;
- Android, Windows and Safari/WebKit tests are recorded separately;
- live deployment is not claimed until the subdomain is actually configured and fetched.
