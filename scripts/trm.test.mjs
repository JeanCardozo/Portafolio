import test from 'node:test';
import assert from 'node:assert/strict';
import { parseTrm } from './trm.mjs';

test('parses a valid datos.gov.co row', () => {
  assert.deepEqual(parseTrm([{ valor: '3505.92', vigenciadesde: '2026-11-24T00:00:00.000' }]), { cop: 3506, date: '2026-11-24', source: 'datos.gov.co 32sa-8pi3' });
});
test('rejects out-of-range, malformed or empty input', () => {
  assert.equal(parseTrm([{ valor: '35', vigenciadesde: '2026-11-24T00:00:00.000' }]), null);
  assert.equal(parseTrm([{ valor: '99999', vigenciadesde: '2026-11-24T00:00:00.000' }]), null);
  assert.equal(parseTrm([{ valor: 'abc', vigenciadesde: '2026-11-24' }]), null);
  assert.equal(parseTrm([{ valor: '3500' }]), null);
  assert.equal(parseTrm([]), null);
  assert.equal(parseTrm(null), null);
});
