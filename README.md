# Upside — *Same Buildings. Better Returns.*

Marketing site for **Upside**, an operating-expense recovery firm for
real-estate portfolios. Built with Next.js 16 (App Router), React 19 and
Tailwind CSS v4.

## Positioning

Upside audits what a portfolio already spends — electric and gas, water and
sewer, waste, telecom, vendor service contracts, insurance, processing fees
and unclaimed incentives — recovers what was overbilled, and reduces the
go-forward run rate. Work is contingency-based: no retainer, no capital
outlay, no fee unless savings are realised.

The site argues in owner terms rather than vendor terms: a recovered dollar
of recurring opex is a permanent dollar of NOI, and it capitalises into
asset value at the owner's own cap rate.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Structure

```
src/app/                  6 routes: /, /what-we-recover, /how-it-works,
                          /who-we-serve, /results, /contact
src/components/ui/        Primitives — Button, Card, Logo, StatTile, Accordion…
src/components/layout/    TopBar, Header, MobileMenu, Footer, StickyMobileCTA
src/components/home/      Homepage-only sections
src/components/sections/  Sections reused across pages
src/data/                 All copy and figures live here, not in components
src/lib/constants.ts      Brand, contact details, navigation
```

## Design system

Tokens are defined in `src/app/globals.css` under `@theme inline`.

| Token | Value | Contrast on cream | Notes |
|---|---|---|---|
| `forest-400` | `#4A7764` | 4.82:1 | Lightest step safe for caption text |
| `forest-500` | `#2C5C42` | 7.29:1 | Secondary prose |
| `forest-800` | `#10301F` | 13.53:1 | Primary type + main dark surface |
| `forest-900` | `#071A12` | 17.02:1 | Deepest surface (hero, chart) |
| `gold-400` | `#E8B33C` | 1.81:1 | The mark colour — **forest surfaces only** |
| `gold-700` | `#8C5E15` | 5.32:1 | Gold *text* on light surfaces |
| `cream-100` | `#FBF8F2` | — | Page background |

`forest-300` and lighter are decorative only and must never carry type.

**Contrast rule:** `gold-400` measures 1.81:1 against cream and fails
contrast on light surfaces. It may carry meaning only on forest. Use
`gold-700` for gold-coloured text on light backgrounds. The compounding
chart is rendered on `forest-900` for exactly this reason — there gold-400
and gold-600 clear 10.0:1 and 5.3:1 and separate by 16.9 ΔE under CVD
simulation.

Type: **Fraunces** for display, **Inter** for everything else — including
every figure, since a display face on a number reads as decoration.

## ⚠️ Before launch

These are deliberately flagged in code:

- `src/lib/constants.ts` — phone, email and domain are placeholders. The
  phone uses the `555-01xx` range reserved for fiction.
- `src/data/results.ts` — every figure is illustrative. The
  `FIGURES_ARE_ILLUSTRATIVE` flag renders a disclosure banner site-wide;
  replace the data, then set it to `false`.
- `src/data/clients.ts` — named clients need written permission to be
  referenced publicly. Set `SHOW_NAMED_CLIENTS = false` to fall back to
  unnamed descriptors until each is confirmed.
- `src/components/ui/ContactForm.tsx` — the submit handler is a local stub.
  Point it at a route handler or form service.
