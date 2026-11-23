// Post-build step: every link that leaves the site opens in a new tab, so the visitor never loses this page.
// Runs on the generated HTML, which covers every template and the WhatsApp links in one place.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const HINT = '<span class="sr-only"> (se abre en una pestaña nueva)</span>';

export function externalize(html, siteUrl) {
  const host = new URL(siteUrl).host;
  return html.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/g, (whole, attrs, inner) => {
    const href = /\shref="([^"]*)"/.exec(` ${attrs}`)?.[1];
    if (!href || !/^https?:\/\//i.test(href) || new URL(href).host === host) return whole;
    const keepMe = /\srel="[^"]*\bme\b[^"]*"/.test(` ${attrs}`);
    const clean = attrs.replace(/\s(target|rel)="[^"]*"/g, '');
    const label = inner.includes('se abre en una pestaña nueva') ? inner : inner + HINT;
    return `<a${clean} target="_blank" rel="${keepMe ? 'me ' : ''}noopener noreferrer">${label}</a>`;
  });
}

function htmlFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? htmlFiles(join(dir, e.name)) : e.name.endsWith('.html') ? [join(dir, e.name)] : []));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const siteUrl = process.env.SITE_URL ?? 'https://jeancrg.netlify.app';
  let changed = 0;
  for (const f of htmlFiles(new URL('../dist', import.meta.url).pathname)) {
    const before = readFileSync(f, 'utf8');
    const after = externalize(before, siteUrl);
    if (after !== before) { writeFileSync(f, after); changed++; }
  }
  console.log(`External links open in a new tab: ${changed} files updated`);
}
