# JeanCRG portfolio

Commercial portfolio and quote page for Jean Cardozo (JeanCRG): websites, online stores, WhatsApp AI assistants and custom software for businesses in Colombia. Live at https://jeancrg.netlify.app.

Static site built with Astro 7. No client-side framework, no cookies, no third-party requests; fonts are self-hosted.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
npm run preview  # serves dist/
```

Requires Node 22 (see `netlify.toml`).

## Structure

```
src/
  data/site.ts        contact data, prices (USD), TRM, quote tiers and add-ons
  data/services.ts    copy, FAQ and JSON-LD source for each /servicios/<slug>/ page
  layouts/            Base (head, SEO, header, footer) and Legal
  pages/              home (quote form), servicios/[slug], privacidad, terminos, cookies, 404, robots.txt
  styles/global.css   design tokens and styles
public/               favicon, OG image, case screenshots, CV PDF, Netlify _headers
cv/                   HTML source of the CV (the PDF in public/ is generated from it)
```

To change a price, phone number or TRM, edit `src/data/site.ts`; the quote form, price tables and WhatsApp messages update from there.

## Environment variables

See `.env.example`. Both are optional and non-secret.

## Deploy

Netlify, from the command line by the owner (`netlify deploy --prod --dir=dist`). Set `SITE_URL` when building if the domain changes.

## Rights

Source is visible as a portfolio sample. Texts, brand, logo, screenshots and client names belong to their owners; no reuse license is granted.
