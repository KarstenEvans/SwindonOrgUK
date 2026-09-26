# SwindonOrgUK

Source, page specifications and static-site files for **Swindon.org.uk**.

**SwindonOrgUK** is the human-facing brand name used by the site and Roundabout identity. Technical filenames and paths should normally stay lowercase for portability and consistency.

## Purpose

Swindon.org.uk is an independent local guide and launchpad for useful Swindon information, including the A2Z directory, What's On, Food, Jobs, Health, News, Meet, AI4U and Resources.

The site should stay small and understandable. Specialist tools and experiments may live elsewhere, such as GitHub Pages or other free/static services, and be linked from Swindon.org.uk rather than absorbed into the main site.

## Start here for AI-assisted changes

- `AGENTS.md` — short repository-agent router.
- `docs/swindonorguk-gui.md` — user-interface and behaviour contract.
- `docs/code.md` — shared code/component rules.
- target `pages/<page>.md` — page-specific build contract.

## Canonical source rule

For the principal pages, Markdown is the durable build specification and HTML is the published rendition.

```text
pages/<page>.md
  + docs/swindonorguk-gui.md
  + docs/code.md
  + declared assets/data/apps
        ↓
site/<page>.htm
```

A page specification must contain enough information for a capable AI in a fresh conversation to reconstruct the important page without relying on chat memory.

If generated HTML conflicts with the canonical Markdown and shared specifications, repair the source specification and regenerate/reconcile the HTML.

## Repository layout

```text
/
├── README.md
├── ideas.md
├── docs/
│   ├── swindonorguk-gui.md
│   └── code.md
├── pages/
│   └── meet.md
├── aletheia/
│   ├── README.md
│   └── index-page.md
├── data/
│   └── notices.md
├── assets/
└── site/
```

More page specifications will be added as the existing site is reconciled.

## Publishing model

- **GitHub**: source of truth, history and recovery.
- **ChatGPT temporary site**: design/prototyping workbench.
- **Cloudflare Pages preview**: test deployment.
- **Swindon.org.uk**: production site.
- **Aletheia apps/knowledge/protocol**: remain maintained in their specialist repositories as their canonical technical/content sources.
- **Aletheia public website**: may live as a separate `/aletheia/` source tree in this same repository and deploy independently to `https://aletheia.swindon.org.uk/`.

Production Swindon.org.uk should be indexable. Preview/test deployments should not be treated as the public canonical site.

## KISS rules

- Useful result first.
- Keep public pages simple.
- Reuse shared components instead of quietly reinventing them.
- Keep changing notices/events as data, not hard-coded into apps.
- Do not rely on conversational memory for required navigation or components.
- Never commit passwords, FTP credentials, API keys, SMTP credentials, affiliate secrets or other private configuration.

## File conventions

- Technical filenames: lowercase where practical.
- Public static pages: `.htm` by default.
- Human-facing brand: **SwindonOrgUK**.
- Domain: **swindon.org.uk**.

## Status

Rebuild/migration in progress. Existing live Fasthosts/FileZilla content will be reconciled into this repository before Cloudflare becomes the production host.


## Two-site monorepo direction

The preferred public architecture is one Git repository with two independently deployable static site surfaces:

```text
KarstenEvans/SwindonOrgUK
├── site/          → https://swindon.org.uk/
└── aletheia/      → https://aletheia.swindon.org.uk/
```

Swindon.org.uk remains the local Swindon guide. Aletheia is a worldwide AI/knowledge/tools site with its own visual identity, navigation, metadata and home page.

Cloudflare Pages supports multiple projects from one monorepo with different root/build directories. Use separate Pages projects/build watch paths so changing one site need not rebuild the other.

Do not publish identical Aletheia pages at both `swindon.org.uk/aletheia/` and `aletheia.swindon.org.uk/`. If the path form is exposed publicly, redirect it permanently to the chosen canonical subdomain while preserving the path where practical.

The existing `aletheia-app`, `aletheia-knowledge` and `aletheia-protocol` repositories remain the canonical specialist sources. The public Aletheia website is an index/discovery layer over them rather than a reason to duplicate all source content.
