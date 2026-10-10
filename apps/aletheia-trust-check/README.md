# Aletheia Trust Check — Swindon.org.uk

- [Aletheia Protocol](https://github.com/KarstenEvans/aletheia-protocol) — evidence, provenance, conflicts.
- [Thalia Protocol](https://github.com/KarstenEvans/thalia-protocol/blob/main/THALIA_PROTOCOL.md) — optional careful presentation.

**Ownership:** Swindon.org.uk source repository, not a new AI-provider-specific product.  
**Status:** feature/review branch; not merged, published or live-verified (2026-10-10).

## Files

- [`aletheia-trust-check-original-2026-10-10.md`](aletheia-trust-check-original-2026-10-10.md): exact, untouched backup of user-supplied v1 content.
- [`aletheia-trust-check.md`](aletheia-trust-check.md): proposed improved portable investigation contract, v0.2.
- [`aletheia-trust-check-page.md`](aletheia-trust-check-page.md): Swindon/Aletheia GUI/dev build and testing specification.
- [`aletheia-trust-check-improve.md`](aletheia-trust-check-improve.md): Aletheia Improve discovery, decisions and validation receipt.
- [`tasks.md`](tasks.md): remaining testing, reconciliation, deployment steps.
- [`site/apps/aletheia-trust-check/index.htm`](../../site/apps/aletheia-trust-check/index.htm): standalone Swindon-branded static handoff page.

## How it works

The user enters a company, product, offer, website or claim; chooses thorough/quick/technical/health/scam check and selected AI. A single Start click prepares the Aletheia research instructions and opens the selected AI. The user pastes those instructions. **This static HTML cannot independently search Reddit, Discord, Microsoft or official records and does not issue a trust verdict.** The receiving AI must actually verify evidence before giving one, or explicitly state missing access.

The Markdown is also an **optional composable add-on** to Swindon/Aletheia searches, preserving the primary search result and appending a compact trust section. There is no competing search box embedded in existing A2Z/AI4U pages.

## Scope / boundaries

Swindon.org.uk owns the local branded presentation; Aletheia common GUI/dev contracts govern the portable workflow. Do not duplicate its canonical engine in `aletheia-app`, alter existing live pages, or treat a GitHub commit as deployment. Before publish, reconcile the local Fasthosts /apps tree and any newer production style/components.

## Proposed route (not confirmed live)

`https://swindon.org.uk/apps/aletheia-trust-check/`

Reviewed branch: `feature/aletheia-trust-check-20261010`.
