import { F } from './fuentes';
import type { MiembroDelGobierno } from './tipos';

/**
 * Gobierno a 06/10/2026, tal como lo publica La Moncloa. A propuesta de qué partido está
 * cada ministro sale de Wikipedia (La Moncloa no lo dice). Hasta las elecciones el Gobierno
 * sigue con plenas funciones; pasa a estar en funciones después del 29N.
 */
export const GobiernoPSOE: MiembroDelGobierno[] = [
  { nombre: 'Pedro Sánchez Pérez-Castejón', cargo: 'Presidente del Gobierno' },
  {
    nombre: 'Carlos Cuerpo Caballero',
    cargo: 'Vicepresidente primero y ministro de Economía, Comercio y Empresa',
    partido: 'Independiente',
  },
  {
    nombre: 'Sara Aagesen Muñoz',
    cargo: 'Vicepresidenta tercera y ministra para la Transición Ecológica y el Reto Demográfico',
    partido: 'Independiente',
  },
  { nombre: 'José Manuel Albares Bueno', cargo: 'Ministro de Asuntos Exteriores, Unión Europea y Cooperación' },
  { nombre: 'Félix Bolaños García', cargo: 'Ministro de la Presidencia, Justicia y Relaciones con las Cortes' },
  { nombre: 'Margarita Robles Fernández', cargo: 'Ministra de Defensa', partido: 'Independiente' },
  { nombre: 'Arcadi España García', cargo: 'Ministro de Hacienda' },
  { nombre: 'Fernando Grande-Marlaska Gómez', cargo: 'Ministro del Interior', partido: 'Independiente' },
  { nombre: 'Óscar Puente Santiago', cargo: 'Ministro de Transportes y Movilidad Sostenible' },
  { nombre: 'Milagros Tolón Jaime', cargo: 'Ministra de Educación, Formación Profesional y Deportes' },
  { nombre: 'Jordi Hereu Boher', cargo: 'Ministro de Industria y Turismo', partido: 'PSC' },
  { nombre: 'Luis Planas Puchades', cargo: 'Ministro de Agricultura, Pesca y Alimentación' },
  { nombre: 'Ángel Víctor Torres Pérez', cargo: 'Ministro de Política Territorial y Memoria Democrática' },
  { nombre: 'Isabel Rodríguez García', cargo: 'Ministra de Vivienda y Agenda Urbana' },
  { nombre: 'Diana Morant Ripoll', cargo: 'Ministra de Ciencia, Innovación y Universidades' },
  { nombre: 'Ana Redondo García', cargo: 'Ministra de Igualdad' },
  {
    nombre: 'Elma Saiz Delgado',
    cargo: 'Ministra de Inclusión, Seguridad Social y Migraciones y portavoz del Gobierno',
  },
  { nombre: 'Óscar López Águeda', cargo: 'Ministro para la Transformación Digital y de la Función Pública' },
];

export const GobiernoSumar: MiembroDelGobierno[] = [
  { nombre: 'Yolanda Díaz Pérez', cargo: 'Vicepresidenta segunda y ministra de Trabajo y Economía Social' },
  { nombre: 'Ernest Urtasun Domènech', cargo: 'Ministro de Cultura' },
  { nombre: 'Mónica García Gómez', cargo: 'Ministra de Sanidad' },
  { nombre: 'Pablo Bustinduy Amador', cargo: 'Ministro de Derechos Sociales, Consumo y Agenda 2030' },
  { nombre: 'Sira Rego', cargo: 'Ministra de Juventud e Infancia' },
];

export const FuentesGobierno = [F.moncloaGobierno, F.wikiTercerGobierno];
