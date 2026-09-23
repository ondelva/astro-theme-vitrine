# Changelog

All notable changes to this theme are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the theme follows
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] — 2026-09-23

### Fixed

- A comment in the CI workflow was not in English.

## [1.0.0] — 2026-09-23

First release. The theme is unchanged since 0.9.0; what is new is everything around it —
the live demo at [vitrine-free.ondelva.com](https://vitrine-free.ondelva.com), the
screenshots in the README, and the link to Vitrine Pro.

## [0.9.0] — 2026-09-22

First snapshot of the free edition, cut from Vitrine Pro. The live demo and the
screenshots follow in 1.0.0.

### Added

- The plate grid: a 1px rule grid with objects set inside the cells, a caption above
  each cell and a cartellino (the museum wall label) below. Switch it off with
  `features.plate` for a plain spaced grid.
- Pages: home, catalogue with pagination, object entry, collections list and
  collection page, colophon, contact, privacy, terms, 404.
- Content collections for objects and collections, typed with zod in
  `src/content.config.ts`, 23 sample objects and 5 sample collections.
- Light and dark mode through `light-dark()` tokens and a three-state switcher
  (system, light, dark). Every token pair is checked against WCAG AA by
  `pnpm check:contrast`.
- RSS feed, sitemap, robots.txt, canonical URLs, Open Graph, Twitter cards and JSON-LD.
  An object page shares its own plate; every other page falls back to
  `public/og-default.jpg`.
- An analytics slot: Plausible, GA4 or Umami, off until `analytics.provider` is set.
- `AGENTS.md` for Claude Code, Cursor and other agents, with `CLAUDE.md` pointing at it.
- CI: `astro check`, ESLint, the contrast gate, a build, Lighthouse CI and an internal
  link check.
