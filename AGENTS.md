# Swindon.org.uk agent router

This is a short repository entry point for coding/agent tools. It does not replace the page specifications or shared site guides.

## Read first

1. `README.md`
2. `docs/swindonorguk-gui.md`
3. `docs/code.md`
4. the target `pages/<page>.md` specification
5. the current rendered `site/` page, shared JavaScript/footer and exact data/assets it uses
6. `ideas.md` only when the request concerns future work

Aletheia Protocol source: `https://github.com/KarstenEvans/aletheia-protocol`

## Rules

- Markdown page specifications + shared GUI/code are the durable build source; HTML is the rendition.
- Inspect and preserve working navigation, hamburger menu, Roundabout and task behaviour before editing.
- Useful local result first. AI is optional and secondary.
- Main site navigation stays predictable in the current window. Secondary/external search/resources may open separately when that preserves current task state; use mobile/new-tab fallback and one click/one destination.
- Build mobile-first and feature-detect browser capabilities. Test Safari/WebKit rather than assuming a feature is absent because the device is Apple.
- Do not publish secrets, private profile data or credentials.
- For current listings, prices, vacancies, opening times or provider features, verify freshness and record when checked.
- Do not let a long agent run be the only place progress exists. Save coherent changes/checkpoints into the repository and make later runs resume from current files.
- Do not claim production/live success until the deployed URL was actually checked.

## Finish

Run relevant syntax/static/browser checks, inspect the changed paths, update the appropriate page spec/shared guide when behaviour changed, and state what still needs device/live verification.
