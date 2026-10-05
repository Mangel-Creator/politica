/**
 * Fechas en AAAA-MM-DD tratadas como días del calendario local, sin horas, para que
 * el cambio de hora o la zona del móvil no muevan un día de sitio.
 */

const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];
const DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

function partes(iso: string) {
  const [a, m, d] = iso.split('-').map(Number);
  return { a, m, d };
}

/** Número de día absoluto (UTC) para restar fechas sin líos de horario de verano. */
function numeroDeDia(iso: string) {
  const { a, m, d } = partes(iso);
  return Date.UTC(a, m - 1, d) / 86_400_000;
}

/** Hoy en AAAA-MM-DD según el reloj del dispositivo. */
export function hoyISO(ahora = new Date()) {
  const m = String(ahora.getMonth() + 1).padStart(2, '0');
  const d = String(ahora.getDate()).padStart(2, '0');
  return `${ahora.getFullYear()}-${m}-${d}`;
}

/** Días que faltan desde `desde` hasta `hasta` (negativo si ya pasó). */
export function diasEntre(desde: string, hasta: string) {
  return numeroDeDia(hasta) - numeroDeDia(desde);
}

/** "29 de noviembre" (o "29 de noviembre de 2026" con `conAnio`). */
export function fechaLarga(iso: string, conAnio = false) {
  const { a, m, d } = partes(iso);
  return `${d} de ${MESES[m - 1]}${conAnio ? ` de ${a}` : ''}`;
}

/** "domingo" */
export function diaSemana(iso: string) {
  const { a, m, d } = partes(iso);
  return DIAS[new Date(Date.UTC(a, m - 1, d)).getUTCDay()];
}

/** "Del 13 al 27 de noviembre", "Del 30 de octubre al 2 de noviembre" o "29 de noviembre". */
export function rango(inicio: string, fin?: string) {
  if (!fin) return fechaLarga(inicio);
  const i = partes(inicio);
  const f = partes(fin);
  const primera = i.m === f.m ? String(i.d) : fechaLarga(inicio);
  return `Del ${primera} al ${fechaLarga(fin)}`;
}

/** "05/10/2026" para fechas de consulta de fuentes. */
export function fechaCorta(iso: string) {
  const { a, m, d } = partes(iso);
  return `${String(d).padStart(2, '0')}/${String(m).padStart(2, '0')}/${a}`;
}
