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

## Aletheia wording / slogan idea

Aletheia is not only about Markdown files. It is also about getting important project words, names, cues and concepts into durable places where an AI has a better chance of retrieving them later, including less visible memory/index/database layers as well as explicit files.

Candidate slogan:

> **Aletheia: Put the right words where AI can find them.**

Supporting thought:

> **Make memory findable.**

The useful distinction is that Aletheia does not need to preserve every conversation verbatim. It should preserve enough durable cues, vocabulary, meanings and relationships for a later AI session to reconstruct the working context.

## Thalia ASCII mark idea — `T-)`

**Status:** TEST / PROPOSED

Use **`T-)`** as a lightweight ASCII signature for a Thalia humour intervention.

Why it may fit:

- `T` identifies Thalia;
- `-)` reads as a sideways smile/wink;
- plain ASCII survives Markdown, HTML, terminals, READMEs and AI-to-AI handoffs;
- unlike an image asset, it stays portable and searchable;
- the mark can flag playful reinterpretation without replacing factual meaning.

Possible experimental variants:

- `T-)` — default Thalia smile;
- `T-?` — questioning/playfully puzzled;
- `T-!` — spotted something absurd;
- `T-/` — sceptical;
- `T-P` — cheekier variant.

Keep the mark optional. Do not use it in serious, dangerous, grieving or otherwise humour-inappropriate contexts merely for branding.

If testing works, propose it to the canonical Thalia Protocol rather than silently treating it as already canonical.

## Free-first affection / repair idea

A useful line from the Aletheia Love Translator work:

> **The better free repair gifts are things like a handwritten note, making tea, doing a hated chore, picking a flower from your own garden, a photo, a playlist, a walk, or simply giving someone twenty uninterrupted minutes. T-)**

Potential reusable principle:

> **Attention can be a gift without becoming a purchase.**

Useful examples include handwritten notes hidden in lunch boxes or everyday objects, small visual jokes such as smiley faces made from food, tea made the way somebody likes it, phone-free time, shared photos and memory-linked playlists.

The “free” rule means no purchase is required. It does not mean taking flowers or objects without permission.

## Aletheia Love Analyst / relationship-guidance expansion

**Status:** BUILD ON LOVE TRANSLATOR

Extend Aletheia Love Translator beyond translating sentences. Add a **Relationship Analyst** layer that can describe both words and actions, while keeping every interpretation provisional.

Useful inputs include repeated questioning, silence, delayed answers, fixing/problem-solving, listening, requests for space, gifts, touch, repeated apologies and repair attempts.

Candidate output:

```text
OBSERVATION
POSSIBLE INTERACTION PATTERN
WHAT MAY BE BEHIND IT
WHAT EACH PERSON MAY MISREAD
LOVE CHANNEL vs COMMUNICATION TIMING
WARNING
SMALL EXPERIMENT
REPAIR
CALIBRATE
```

Important example: an immediate clarifier paired with a person who needs five or ten minutes to formulate an answer can create a self-reinforcing loop: more questioning increases pressure, more pressure increases withdrawal, and withdrawal triggers more questioning. Treat this as an interaction pattern, not a diagnosis of either person.

Future resource/book bridge: after useful analysis, optionally link to one relevant book or evidence category rather than a generic shopping wall. Examples: conflict/repair -> *Fight Right*; apology -> *Why Won't You Apologize?*; love-channel vocabulary -> *The 5 Love Languages*. Advice and evidence come first; commercial links remain secondary and disclosed.

Possible longer-term direction: a broader **Aletheia Relationship Analyst** using responsiveness, listening, repair, communication timing and repeated interaction loops, while keeping Love Translator as the simple front door.

## Historical site material

The old `/election/` material dates from the 2010 SwindonOrgUK political/protest project. Treat it as historical/archive content unless deliberately revived. Do not let old election material become the default landing route or current-site description.

## Aletheia AI Easy as a portable local front door

**Status:** PROPOSED / DEVELOP NEXT

Develop Aletheia AI Easy as a small bootstrap into the wider Aletheia ecosystem. A user should be able to give one portable Markdown bootstrap file to a capable AI, choose or state their location, and discover/run suitable Aletheia applications without depending on Swindon.org.uk being reachable.

The system should point to, rather than duplicate, independently useful modules such as Aletheia Site Audit, Trust Check, Name Check, Aletheia 007 Agent, privacy/incognito tooling and the portable A2Z/local-search application. Swindon.org.uk remains a useful human-facing front door and resource layer, but the applications should continue to work from GitHub/Markdown when practical.

The local layer should be reusable outside Swindon: a user could initialise it for Northampton, Oxford, London, Hammersmith or another location. Provider-specific entry files may make free ChatGPT, Claude, Gemini, Copilot, DeepSeek or other capable systems easier to start, but the core bootstrap should remain provider-neutral and should not assume that any provider is trustworthy or untrustworthy without current evidence.

This creates two complementary routes:

```text
human -> Swindon.org.uk/resources -> Aletheia app
human -> Aletheia AI Easy bootstrap -> AI -> Aletheia app / local A2Z
```

Keep the bootstrap small. It should act as a map and loader, not grow into a copy of every application.

## Next work

1. reconcile the current live/local files into this repository;
2. add canonical Markdown specs for the principal pages;
3. restore/verify shared hamburger navigation and Roundabout components from source specifications;
4. add current `robots.txt`, `sitemap.xml` and `llms.txt` before production migration;
5. configure Cloudflare Pages preview and production;
6. verify HTTPS, Safari/Chrome/Firefox/Edge and crawler access before affiliate applications;
7. then expand What's On / Meet / noticeboard experiments.
