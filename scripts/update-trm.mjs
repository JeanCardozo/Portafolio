// Runs before every build: fetches today's official TRM and writes src/data/trm.json.
// On any failure the committed value stays, so a build never breaks because of the network.
import { writeFileSync } from 'node:fs';
import { parseTrm } from './trm.mjs';

const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Bogota' });
const qs = new URLSearchParams({ $where: `vigenciadesde <= '${today}T23:59:59'`, $order: 'vigenciadesde DESC', $limit: '1' });

try {
  const res = await fetch(`https://www.datos.gov.co/resource/32sa-8pi3.json?${qs}`, { signal: AbortSignal.timeout(8000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const trm = parseTrm(await res.json());
  if (!trm) throw new Error('unexpected response');
  writeFileSync(new URL('../src/data/trm.json', import.meta.url), `${JSON.stringify(trm)}\n`);
  console.log(`TRM ${trm.cop} COP/USD (${trm.date})`);
} catch (e) {
  console.warn(`TRM update skipped, keeping the committed value: ${e.message}`);
}
