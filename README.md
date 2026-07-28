# Inner Bloom Psychiatry — Website

Marketing landing page for [Inner Bloom Psychiatry](https://theinnerbloompsychiatry.com), a
telehealth psychiatric practice serving Texas. Built with [Astro](https://astro.build) +
TypeScript, styled with Tailwind CSS v4.

## Stack

- **Astro** — static-site generation. The whole page is plain HTML/CSS at build time, no
  client-side framework needed, which keeps it fast and fully crawlable by search engines and
  AI answer engines (SEO/AEO).
- **Tailwind CSS v4** via `@tailwindcss/vite`.
- **TypeScript** in strict mode (`astro/tsconfigs/strict`).
- `@astrojs/sitemap` generates `sitemap-index.xml` automatically at build time.

## Content

All practice facts (services, insurance, pricing, contact info, FAQ copy) live in one typed
file: [`src/data/practice.ts`](./src/data/practice.ts). Update copy there rather than in the
`.astro` components.

**Booking links are placeholders.** See the `TODO(booking-links)` comment in
`src/data/practice.ts` — the exact Headway and SimplePractice URLs still need to be confirmed
and swapped in before launch.

## Commands

| Command           | Action                                      |
| ------------------ | -------------------------------------------- |
| `npm install`       | Install dependencies                         |
| `npm run dev`        | Start local dev server at `localhost:4321`   |
| `npm run build`       | Type-check (`astro check`) then build to `./dist/` |
| `npm run preview`      | Preview the production build locally         |

## SEO / AEO notes

- `src/layouts/BaseLayout.astro` sets per-page title/description, canonical URL, and Open
  Graph/Twitter card tags (including a generated `public/images/og-cover.png`).
- `src/components/StructuredData.astro` emits JSON-LD (`MedicalBusiness` + `FAQPage`) so search
  engines and AI assistants can read practice details and FAQ answers directly.
- `public/llms.txt` gives AI crawlers a plain-text summary of the practice, mirroring the
  emerging `llms.txt` convention.
- `public/robots.txt` and the auto-generated sitemap are wired to the production domain.

## Sensitive data policy

This is a real medical practice's public website. Do **not** add DEA numbers, individual state
license numbers, CAQH IDs, revenue/capacity figures, or the private practice address anywhere
in this repo — only publish fields the practice has explicitly cleared for public/directory use.
