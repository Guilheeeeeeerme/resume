# Guilherme Ferreira — Résumé

React résumé site with a polished website mode and a one-page print/PDF layout. Deployed to GitHub Pages.

**Live:** https://guilheeeeeeerme.github.io/resume/

## Features

- Responsive résumé website (light / dark / system theme)
- Expandable experience details (website only)
- Print / Save as PDF → exactly one page on **A4** and **US Letter**
- Content driven by `src/data/resume.ts` (typed model)

## Develop

```bash
npm install
npm run dev
```

Open the local Vite URL (base path is `/resume/`).

## Build

```bash
npm run build
npm run preview
```

Production assets use Vite `base: '/resume/'` for GitHub Pages project hosting.

## Print validation

Build and preview, then run Playwright checks:

```bash
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

In another terminal:

```bash
npx playwright install chromium   # first time only
npm run print:test                # A4 + Letter
npm run print:a4
npm run print:letter
```

PDFs and `report.json` land in `print-output/` (gitignored).

Manual check: open the site → **Print résumé** (or Ctrl/Cmd+P) → confirm one page, light background, no toolbar / “More details”.

## Deploy

Push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) (GitHub Pages).

Or dispatch the workflow manually from the Actions tab.

GitHub repo **Settings → Pages** should use **GitHub Actions** as the source.

## Content updates

1. Edit `src/data/resume.ts` only for factual content.
2. Put print-critical bullets in `printHighlights`.
3. Put website-only depth in `extendedHighlights`.
4. Record ambiguities in `RESUME_CLARIFICATIONS.md` (not published).
5. Re-run `npm run print:test` after meaningful content changes.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Typecheck + production build |
| `npm run preview` | Serve `dist/` |
| `npm run lint` | oxlint |
| `npm run print:a4` | Validate A4 PDF (1 page) |
| `npm run print:letter` | Validate Letter PDF (1 page) |
| `npm run print:test` | Both formats |
