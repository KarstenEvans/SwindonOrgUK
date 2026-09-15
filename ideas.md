# SwindonOrgUK ideas

Living ideas register for **Swindon.org.uk**. Keep ideas here until they are promoted into a canonical page specification or shared component.

## Working architecture

- Swindon.org.uk remains the simple trusted front door for the Swindon implementation.
- GitHub is the durable source/history.
- ChatGPT temporary site is a prototype/design workbench.
- Cloudflare Pages preview is the dress rehearsal.
- Cloudflare production serves the public domain when migration is complete.
- Specialist apps or experiments can live on GitHub Pages, Cloudflare Pages, Google Sites or another suitable free/static service and be linked from Swindon.org.uk.

## Aletheia system / repository split

**Status:** PROPOSED ARCHITECTURE

Aletheia has grown beyond one memory protocol and one local website. Keep the parts distinct rather than turning one repository into a cupboard where every cable lives.

Proposed ownership:

```text
KarstenEvans/aletheia-protocol
    canonical rules, memory/provenance behaviour, conformance

KarstenEvans/aletheia-app
    portable/runnable Aletheia apps and matching specifications

KarstenEvans/aletheia          [proposed, not yet required]
    main human-facing Aletheia website
    Aletheia AI Easy bootstrap/setup
    app discovery/manifest
    learning/onboarding
    provider adapters/instructions

KarstenEvans/SwindonOrgUK
    first real-world local implementation
    Swindon A2Z / What's On / Food / Jobs / News / Meet / Resources
    local reference/test case for reusable Aletheia tools
```

Use the public name **Aletheia**, not "Aletheia Hub". The absence of "Hub" also suits the distributed design: the system should keep working when no central Aletheia server exists.

Swindon.org.uk can demonstrate the local pattern without baking Swindon into reusable Aletheia logic. A user-selected locality can instead be a variable such as Swindon, Northampton, Bognor Regis, Bangkok or Ayutthaya.

Odysseus and other orchestration/agent systems may be useful adapters, but Aletheia's basic Markdown/static-HTML route should survive if any one external project disappears.

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

## Roundabout menu refinement

**Status:** REFINE, DO NOT REPLACE

The Creator College "What's your why?" graphic and the Swindon roundabout menu share a useful radial-navigation idea, but the Swindon design should remain its own work and continue to evoke the Magic Roundabout.

Possible visual improvements without copying their artwork:

- keep the nine-arm Swindon structure and colourful roads;
- use more empty space around each destination;
- shorten secondary labels where possible;
- consider small `01`-`09` destination numbers;
- use cleaner, fatter destination cards/buttons;
- reduce decorative clutter around the roads;
- test a calmer cream/off-white background as well as the current light design;
- retain a clear centre identity rather than changing to the Creator College wording/layout.

A universal Aletheia version could reuse the radial-navigation concept with the centre asking **"What do you want to do?"**, while every optional module remains user-selected.

## External learning / link-out library

**Status:** BUILD CAREFULLY

Swindon.org.uk and Aletheia do not need to recreate every useful public tutorial. If another creator has already explained something well, linking can be better than duplicating it.

Working rule:

- link to the authorised public source;
- credit the creator/platform;
- say why it is useful;
- use the official YouTube embed where embedding is enabled, optionally privacy-enhanced;
- keep enough of our own explanation/checklist that the page remains useful if the link disappears;
- never reproduce paid course videos, templates, slides, PDFs or paywalled material without permission;
- do not use pirated mirrors;
- do not let affiliate commission determine educational ranking.

Creator College is the first research case. Working notes live at `docs/research/creator-college.md`.

Potential Swindon/Aletheia resource-card fields:

```text
TITLE
CREATOR
WHY IT IS USEFUL
PUBLIC SOURCE
CHECKED DATE
AFFILIATE? yes/no + disclosure
ALETHEIA NOTE / WHAT TO VERIFY
```

## Aletheia AI Easy as a portable local front door

**Status:** BUILDING

Aletheia AI Easy should be short onboarding, not a manufactured five-day course.

Core flow:

```text
What do you want AI to help with?
        ↓
optional local setup form
        ↓
aletheia-memory.md owned by the user
        ↓
provider adapter/instructions
        ↓
choose only the Aletheia apps wanted
        ↓
normal AI use + portable checkpoint/handover
```

The setup form should optionally collect:

- what the AI should call the user;
- display name/nickname/handle;
- coarse home area and country/region;
- common AI tasks/searches;
- preferred response/humour style;
- regularly wanted Aletheia apps;
- user boundaries/approval rules.

No field should be mandatory merely to make the form look complete. No optional app is silently enabled. Material portable-memory changes require the user's approval.

Recommended durable storage is a user-created `Aletheia` folder under Documents, or an equivalent folder in a phone/tablet Files app or chosen cloud drive. Downloads is only a convenient landing zone, not the long-term source of truth.

Provider-specific routes may make ChatGPT, Gemini, Claude, Copilot, DeepSeek and other systems easier to start, while the core bootstrap stays vendor-neutral.

The user-facing explanation can be five **short setup videos**, not five days of lessons. The same setup must remain possible entirely from text.

## Aletheia guide/avatar idea

**Status:** EXPERIMENT

Create an original recurring Aletheia presenter using the Aletheia Avatar work rather than depending on a human presenter for every video.

Direction:

- friendly eccentric digital professor/bobblehead;
- approachable science/engineering flavour;
- expressive enough for short instructional clips;
- an original face/identity, not a direct Albert Einstein copy;
- optional small Aletheia/octopus visual cue;
- generated with free/local tools where quality is adequate;
- text-to-speech + captions + transcript;
- easy to regenerate when provider interfaces change.

Use the five AI Easy setup videos as the first real production test for Aletheia Avatar.

## Aletheia learning - real courses, not instructions stretched into courses

**Status:** CURATE

A course is justified when the learner needs practice, examples, exercises or a useful final result. A two-minute setup step is documentation, not a course.

Strong candidates:

- Aletheia AI Starter - beginner AI without the fog;
- Search, Sources and Trust Check;
- Portable Memory and Handover;
- Local AI - Build Your Own A2Z;
- AI for Job Search and Employment;
- Build a Simple Website with AI;
- Storytelling and Content with AI;
- AI for a Local Business;
- Privacy / Digital Footprint / Aletheia 007;
- Free Automation without a Server Bill;
- Create Your Own Portable Aletheia App;
- Home Energy - solar, batteries and tariffs.

Prefer short modules with a concrete output. Link to strong public third-party teaching when it adds value instead of rebuilding the internet one tutorial at a time.

## Home & Energy / Octopus direction

**Status:** DEVELOP AS RESOURCE IDEA

Create a future **Aletheia Home Energy** guide/app covering, where relevant:

- solar PV;
- home batteries;
- insulation;
- heat pumps;
- EV charging;
- smart tariffs/time-of-use tariffs;
- current grants/eligibility;
- quote comparison;
- realistic payback assumptions;
- source/trust checks and dated prices.

The analysis must remain supplier-neutral. Commercial/referral links belong on clearly disclosed human-facing resource pages rather than inside canonical Aletheia logic.

For Swindon.org.uk, a discreet global footer item such as **Home & Energy** could lead to a neutral resource page. That page, not the footer itself, is the better place for a disclosed Octopus link alongside useful energy information and alternatives.

For Royal Orchid Thai Massage, a supplier referral is more coherent as a small **Useful links / Customer offers** item near the footer/contact area than inside massage treatments or the booking journey. Any Octopus copy/link must follow the business's actual current programme approval/terms rather than being improvised.

## Thalia ASCII mark idea - `T-)`

**Status:** TEST / PROPOSED

Use **`T-)`** as a lightweight ASCII signature for a Thalia humour intervention.

Why it may fit:

- `T` identifies Thalia;
- `-)` reads as a sideways smile/wink;
- plain ASCII survives Markdown, HTML, terminals, READMEs and AI-to-AI handoffs;
- unlike an image asset, it stays portable and searchable;
- the mark can flag playful reinterpretation without replacing factual meaning.

Possible experimental variants:

- `T-)` - default Thalia smile;
- `T-?` - questioning/playfully puzzled;
- `T-!` - spotted something absurd;
- `T-/` - sceptical;
- `T-P` - cheekier variant.

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

## Next work

1. reconcile the current live/local files into this repository;
2. add canonical Markdown specs for the principal pages;
3. restore/verify shared hamburger navigation and Roundabout components from source specifications;
4. test the proposed cleaner Roundabout visual treatment without losing the Magic Roundabout identity;
5. add current `robots.txt`, `sitemap.xml` and `llms.txt` before production migration;
6. configure Cloudflare Pages preview and production;
7. verify HTTPS, Safari/Chrome/Firefox/Edge and crawler access before affiliate applications;
8. surface Aletheia AI Easy from the appropriate AI4U/Aletheia page once its setup flow is tested;
9. design the neutral Home & Energy resource page before adding any commercial energy referral;
10. then expand What's On / Meet / noticeboard experiments.
