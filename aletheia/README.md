# Aletheia public site

This folder is the proposed public website surface for **Aletheia**.

Canonical public hostname:
`https://aletheia.swindon.org.uk/`

It is intentionally a separate public identity from Swindon.org.uk even though both may be maintained in the same Git repository.

## Role

Aletheia is the worldwide AI / knowledge / tools front door.

It should:

- explain Aletheia simply;
- index the strongest public Aletheia apps and knowledge collections;
- expose topic hubs and answer-ready pages;
- link to runnable specialist apps;
- link to deeper Aletheia Knowledge;
- link back to relevant Swindon.org.uk pages where the local implementation adds value;
- keep protocols/source links available but secondary for ordinary visitors.

It should not:

- inherit Swindon.org.uk branding or local-navigation assumptions;
- duplicate entire app/knowledge repositories;
- publish the same page at both the subdomain and a Swindon subfolder;
- turn GitHub source files into the primary visitor interface.

## Canonical source relationships

```text
aletheia.swindon.org.uk        public discovery/index layer
        ↓
KarstenEvans/aletheia-app      runnable specialist apps
KarstenEvans/aletheia-knowledge portable source-traced knowledge
KarstenEvans/aletheia-protocol canonical protocol
KarstenEvans/thalia-protocol   humour protocol
        ↕
swindon.org.uk                 first local implementation / reciprocal discovery
```

## Deployment

Preferred: a separate Cloudflare Pages project using this folder as its root/build output, connected to the same `KarstenEvans/SwindonOrgUK` repository.

Use `aletheia.swindon.org.uk` as the canonical public hostname.

If `https://swindon.org.uk/aletheia/` is ever exposed, redirect it to the canonical subdomain instead of serving a duplicate copy.

## Start here

Read:

1. `index-page.md`;
2. root `README.md`;
3. root `docs/swindonorguk-gui.md` only for shared technical/accessibility principles, not Swindon branding;
4. current Aletheia app/knowledge/protocol repositories before linking or describing their capabilities.

