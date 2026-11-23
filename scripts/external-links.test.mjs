import test from 'node:test';
import assert from 'node:assert/strict';
import { externalize } from './external-links.mjs';

const SITE = 'https://jeancrg.netlify.app';

test('external links open in a new tab with noopener noreferrer and a screen-reader hint', () => {
  const out = externalize('<a class="btn" href="https://wa.me/57301?text=Hola" data-track="x">Escribir</a>', SITE);
  assert.match(out, /target="_blank"/);
  assert.match(out, /rel="noopener noreferrer"/);
  assert.match(out, /se abre en una pestaña nueva/);
  assert.match(out, /data-track="x"/);
});
test('internal, anchor, mailto and own-origin links are untouched', () => {
  for (const html of ['<a href="/casos/">x</a>', '<a href="#cotizador">x</a>', '<a href="mailto:a@b.co">x</a>', `<a href="${SITE}/guias/">x</a>`]) {
    assert.equal(externalize(html, SITE), html);
  }
});
test('rel=me is kept and old target/rel are replaced', () => {
  const out = externalize('<a href="https://github.com/x" rel="me noopener" target="_self">GitHub</a>', SITE);
  assert.match(out, /rel="me noopener noreferrer"/);
  assert.equal((out.match(/target=/g) ?? []).length, 1);
});
test('is idempotent', () => {
  const once = externalize('<a href="https://example.com">x</a>', SITE);
  assert.equal(externalize(once, SITE), once);
});
