# Aletheia SwindonOrgUK GUI

> **Purpose:** Keep Swindon.org.uk pages simple, familiar and consistent.
>
> **Rule:** **KISS unless it's cool B-)**
>
> **Primary UX rule:** The useful result comes first. Explanations, previews, caveats, streams and secondary features come later.

## 0. Canonical page-source rule

For the small set of principal Swindon.org.uk pages, the page-specific `.md` file is the **canonical build specification**. The `.htm` file is the rendered/published rendition.

The source chain is:

```text
PAGE.md
  + docs/swindonorguk-gui.md
  + docs/code.md
  + declared assets/data/apps
        ↓
     PAGE.htm
```

A page Markdown must be sufficiently specific that a capable AI in a fresh conversation can recreate the important page without relying on the previous chat. It should declare page purpose/order, required components, behaviours, dependencies, assets, links and page-specific exceptions.

**Persistence rule:** if a feature is required for that page, state it in the page Markdown or a declared shared dependency. Do not rely on conversational memory. This includes navigation behaviours such as the hamburger menu and distinctive components such as the Swindon Roundabout where applicable.

The ChatGPT-hosted development site is a **workbench/prototype**, not the only source. When a prototype change is accepted, fold it back into the canonical Markdown/shared code before treating the generated HTML as authoritative.

If an `.htm` rendition conflicts with the canonical Markdown + declared shared specifications, repair the source specification and regenerate/reconcile the HTML.

## 1. Standard page order

1. Shared header/navigation
2. Page title
3. One primary search/action
4. Immediate local results
5. Wider/local-current search options
6. Optional Aletheia/AI expansion
7. Supporting/browse content
8. Swindon Stream
9. Footer

Do not put statistics, previews, promotional cards or long explanations between the main action and its results.

## 2. One search window

Use **one main search box for the page task**. Do not repeat a second competing search box in the header and again in the page body.

For the home page and A2Z, the main search control is the site search:

```text
[ Search Swindon...                         ] [ Search ]
☐ Search AI with Aletheia   [ Google Gemini ▼ ]
```

The search field should be useful without being enormous. On desktop, keep it comfortably wide but bounded; on mobile it may use the full available width.

The **Search** button is enough. There must not normally be a second visible Copy/Open-AI button.

## 3. Search parameters

Preferred parameter:

```text
?q=plumber
```

Also accept:

```text
?query=plumber
?search=plumber
```

On page load:

1. read `q`, then `query`, then `search`;
2. put the value into the visible search field;
3. once local A2Z Markdown is available, run the local search automatically;
4. if the Markdown arrives after an initial fallback result, re-check against the Markdown and refresh/merge the local result list.

### Public search status

Do not expose implementation-route text such as parser names, fallback names or cache/index status on the public page. These are developer diagnostics, not useful search results. Only show a user-facing message when an actual error needs action.

For place/service searches, the first wider-search action should normally be **Google Maps**. It must open separately and leave Swindon.org.uk underneath.

## 4. Canonical local data and parser order

The canonical portable A2Z data remains Markdown. Do not turn a small JavaScript index into the canonical directory.

Use more than one route where practical:

1. PHP 8 search endpoint as the normal server parser where hosting supports it;
2. Perl CGI parser as a parallel/fallback implementation where available;
3. browser-loaded Markdown parser as a client-side fallback and fast local source once loaded;
4. browser JavaScript A2Z index as the final fast fallback/cache, not the source of truth.

A failed server parser must not stop the local browser search.

## 5. Search-button behaviour

When the user presses **Search**:

1. parse the query;
2. search already-loaded local Markdown immediately if available;
3. otherwise use the browser A2Z index immediately;
4. display local results without navigating away;
5. merge/use better local results when they arrive;
6. show wider-search buttons below the local results;
7. if **Search AI with Aletheia** is ticked, perform the hidden copy and open the selected AI from the same Search click.

## 6. Aletheia / AI behaviour

AI is optional and secondary.

Standard AI choices:

- Google Gemini
- Microsoft Copilot
- ChatGPT
- DeepSeek
- Claude

When **Search AI with Aletheia** is ticked and Search is pressed:

1. Swindon.org.uk performs its immediate local search first.
2. The query, local result names and Aletheia search instructions are assembled into a hidden/off-screen text buffer.
3. JavaScript selects/copies that hidden text from the **same user click**.
4. The selected AI opens in a **separate smaller browser window**, roughly **900 × 760**, resizable and scrollable.
5. The current Swindon.org.uk page stays underneath.
6. The user pastes into the AI.

Do not delay the popup until after an asynchronous network request because that can lose browser user-activation and cause popup/clipboard blocking.

If copy fails, do not fail silently. Reveal only a small fallback Copy control/message when needed.

### Result-first Aletheia startup

If a query or task accompanies the Markdown, execute it immediately. Do not display HELP before the requested result. HELP is shown when asked for, or when the app is loaded without a task and guidance is useful.

### Manual handoff fallback

A small **Show Aletheia handoff text** disclosure may remain near the bottom of the page as a manual fallback, after results/supporting content. It must never interrupt results.

### Optional Trust Check

Aletheia search pages may offer one compact secondary option:

```text
☐ Search AI with Aletheia   [ Google Gemini ▼ ]   ☐ Add Trust Check
```

Trust Check is an add-on, not a second search box. Keep the useful answer first and put trust findings afterwards.

## 7. Aletheia handoff contents

The hidden payload should contain:

- original search term;
- local Swindon.org.uk/A2Z matches already found;
- instruction to verify and expand current information;
- local-first source order;
- instruction not to invent businesses, services or facts.

The payload is temporary handoff data. Markdown remains the durable/portable knowledge source.

## 8. Local-first search order

Search and display Swindon.org.uk/A2Z data first.

For wider searches, prioritise useful local discovery and authoritative sources before high-volume national directories:

1. Swindon.org.uk / A2Z
2. Google Maps for location-based businesses/services
3. Swindon Borough Council
4. strong current local Swindon sources
5. GOV.UK / NHS / official national sources
6. useful specialist/national directories
7. wider web where still useful
8. AI expansion

National directories should not dominate simply because they contain many listings.

## 9. External links and searches

External services should open separately where appropriate. Never replace the current Swindon.org.uk results page with an external service.

## 10. Results before explanation

Do not put these before results:

- record counts;
- developer/debug text;
- repeated verification badges;
- giant Aletheia handoff panels;
- directory previews;
- Swindon Stream;
- advertising;
- affiliate panels.

Put quiet provenance/source notes after useful content.

## 11. Directory browse content

Do not fill a search page with a grid of non-clickable preview boxes. If browse access is useful, make it an explicit action near the end of the page and preserve the current page.

## 12. Swindon Stream

Swindon Stream is supporting content. On task pages, place it near the bottom after the main task and results.

## 13. Jobs page pattern

The Jobs page follows the same result-first design. The public page should express the rule simply as **Live vacancies only**. The Aletheia handoff should verify the individual advert and prefer direct/employer application pages.

Specialist search buttons should be contextual rather than appearing for unrelated searches.

## 14. Visual consistency

Keep:

- white/pale backgrounds;
- dark charcoal text;
- muted teal/green primary actions;
- pastel navigation pills;
- compact rounded controls;
- mobile-first layout;
- minimal panels;
- comfortable whitespace.

Avoid:

- oversized AI panels;
- giant gradients;
- dense dashboards;
- duplicate search boxes;
- excessively wide fields;
- long checkbox labels;
- developer-facing status text.

## 15. Navigation identity

The Swindon Roundabout is a distinctive site/brand component. Where a page specification calls for it, use the canonical shared Roundabout component and image rather than recreating a different version.

Mobile navigation must preserve the hamburger menu. A regenerated page that silently drops the hamburger or required Roundabout has failed the reconstruction test.

## 16. One-line test

A Swindon.org.uk page is probably right when a first-time visitor can immediately see **where to type, what to click, and the useful result without scrolling through clutter**.

## 17. Source links

Where a named source is shown, make it a real link rather than display-only text. Open secondary/external material without destroying the current Swindon.org.uk task state.

## 18. Local-result completion

For Aletheia-assisted local searches, finding a name is not enough. Where reasonably available, verify current location/contact details, official link and relevant opening information. When availability, vacancies, prices or opening status matter, verify them separately and state when checked. Never invent missing contact details.

Also perform a duplicate/alias check where two results appear to share the same trading identity.

## 19. Per-result map action

For local A2Z business results, a compact **Google Maps ↗** action is useful. Build the query from the business name plus best available local address/location. Do not let the map action dominate the local result.

## 20. Aletheia → A2Z feedback

Verified searches may discover material current information absent from, or conflicting with, supplied A2Z data. Public results still come first. Any proposed correction remains subject to human review before changing public data.

Primary feedback destination may be `a2z@swindon.org.uk` once mail routing is deliberately configured.

### Machine-facing Markdown rule

A task page must not open its raw Aletheia `.md` as the user's result. Markdown is machine-facing instruction/payload. Keep the Swindon.org.uk page open and open the selected AI separately. Raw Markdown remains an optional manual/developer action.


## 21. Browser capability and device rule

Public task pages should be designed mobile-first and tested proportionately on:

- Windows Chrome/Edge;
- Android Chrome;
- macOS Safari;
- iPhone/iPad Safari;
- Firefox where practical.

Use **feature detection**, not operating-system assumptions. A failed Three.js/WebGL/file-picker/clipboard/fullscreen feature on one device is evidence about that session/configuration until the underlying capability is tested.

Optional enhancements must fail usefully. If an AI handoff popup, graphics library, CDN or browser API is unavailable, keep the core Swindon page/results/navigation working and show a concise fallback.

### Window decision

The existing separate-window pattern remains useful for AI providers, maps, source material and resources when leaving the page would destroy search/task state.

However:

- do not force a desktop-sized popup on mobile;
- one click opens one destination;
- main site navigation remains in the current window;
- downloads/anchors/`mailto:`/`tel:` keep normal browser behaviour;
- use an ordinary new tab when the browser blocks/disallows the child-window pattern.

## 22. Long AI work must leave checkpoints

Do not make a site build depend on one uninterrupted agent/Work run.

For substantial AI-assisted work, save coherent progress into the repository after inventory/research/specification/implementation stages. A later run should read current files and continue from the latest verified state rather than starting the entire site again.

This is especially important for usage-capped agent products and is a design rule even when a particular provider currently has generous limits.
