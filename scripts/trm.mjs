// Parses the datos.gov.co TRM response (Banco de la República, dataset 32sa-8pi3).
// Bounds guard against a malformed or hijacked response: a bad value would reprice the whole site.
export function parseTrm(rows) {
  const row = Array.isArray(rows) ? rows[0] : null;
  const cop = Math.round(Number(row?.valor));
  const date = String(row?.vigenciadesde ?? '').slice(0, 10);
  if (!Number.isFinite(cop) || cop < 2000 || cop > 8000 || !/^\d{4}-\d{2}-\d{2}$/.test(date)) return null;
  return { cop, date, source: 'datos.gov.co 32sa-8pi3' };
}
