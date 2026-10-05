import type { ResumenPrograma } from '../tipos';

/** EH Bildu, generales 23J 2023. Documento de compromisos de 16 páginas. */
export const ProgramaEHBildu: ResumenPrograma = {
  partidoId: 'eh-bildu',
  eleccion: '23J 2023',
  nota: 'Documento de compromisos (16 páginas), no un programa extenso.',
  ideasClave: [
    { texto: 'Jornada de 32 horas semanales sin bajar el sueldo.', pagina: 3 },
    { texto: 'Salario mínimo de 1.200 € y un salario mínimo propio vasco.', pagina: 3 },
    { texto: 'Pensiones mínimas de 1.080 € y no subir la edad de jubilación.', pagina: 5 },
    { texto: 'Hacer permanentes los impuestos a la banca, las energéticas y las grandes fortunas.', pagina: 8 },
    { texto: 'Reconocer Euskal Herria como nación y el derecho a decidir.', pagina: 14 },
  ],
  temas: {
    empleo: [
      { texto: 'Recuperar el despido de 45 días por año y los salarios de tramitación.', pagina: 3 },
      { texto: 'Prioridad de los convenios vascos y navarros sobre los estatales.', pagina: 3 },
      { texto: 'Jornada de 32 horas sin reducción salarial.', pagina: 3 },
      { texto: 'Salario mínimo de 1.200 € y capacidad para fijar uno propio (60 % del salario medio).', pagina: 3 },
      { texto: 'Marco Vasco y Navarro de Relaciones Laborales y traspaso de la Inspección de Trabajo.', pagina: 4 },
    ],
    vivienda: [
      { texto: 'Prórroga automática e indefinida de los alquileres con la misma renta.', pagina: 4 },
      { texto: 'Congelar cuotas de hipotecas de menos de 250.000 €, con subida máxima del 15 %.', pagina: 4 },
      { texto: 'Código de Buenas Prácticas bancario obligatorio y para más personas.', pagina: 4 },
    ],
    pensiones: [
      { texto: 'Pensiones mínimas de 1.080 € de inmediato.', pagina: 5 },
      { texto: 'Nueva subida de pensiones de viudedad y no contributivas.', pagina: 5 },
      { texto: 'No subir la edad de jubilación ni ampliar el periodo de cálculo.', pagina: 5 },
      { texto: 'Traspasar el régimen económico de la Seguridad Social a Euskadi y Navarra.', pagina: 5 },
    ],
    impuestos: [
      { texto: 'Subir la carga fiscal y hacer permanentes los impuestos a banca, energéticas y grandes fortunas.', pagina: 8 },
      { texto: 'Impuesto especial a los beneficios de las grandes cadenas de alimentación.', pagina: 5 },
    ],
    economia: [
      { texto: 'Más control de la cadena alimentaria y rebajas de productos básicos.', pagina: 5 },
      { texto: 'Prorrogar el tope al gas y la contención del precio de la luz.', pagina: 5 },
      { texto: 'Exigir al BCE que revierta la subida de tipos y rechazar las reglas fiscales de austeridad.', pagina: 8 },
      { texto: 'Derogar la reforma del artículo 135 de la Constitución (prioridad del pago de deuda).', pagina: 8 },
      { texto: 'Ley de Industria centrada en pymes; devolver ayudas si la empresa se deslocaliza.', pagina: 8 },
    ],
    sanidad: [
      { texto: 'Más plazas MIR y refuerzo de la Atención Primaria.', pagina: 6 },
      { texto: 'Derogar la Ley 15/1997, que permite externalizar servicios sanitarios.', pagina: 6 },
      { texto: 'Multiplicar el presupuesto de salud mental y atención psicológica pública gratuita.', pagina: 6 },
      { texto: 'Dentista y oftalmología básicos en la sanidad pública.', pagina: 6 },
      { texto: 'Productos de higiene menstrual gratis para personas vulnerables e IVA superreducido.', pagina: 6 },
    ],
    social: [
      { texto: 'Transporte público gratuito o con descuento de forma permanente, por ley.', pagina: 6 },
      { texto: 'Prohibir siempre los cortes de luz, agua y gas a familias vulnerables.', pagina: 7 },
      { texto: 'Actualizar el IPREM con el IPC cuando supere el 2,5 %.', pagina: 7 },
      { texto: 'Ingreso Mínimo Vital para más personas y al menos un 12 % más alto.', pagina: 7 },
    ],
    energia: [
      { texto: 'Neutralidad climática en 2040.', pagina: 9 },
      { texto: 'Cambiar el sistema marginalista de fijación del precio de la electricidad en la UE.', pagina: 9 },
      { texto: 'Empresas públicas de comercialización eléctrica.', pagina: 9 },
      { texto: 'Nueva política contra la sequía y más sanciones por mal uso de embalses.', pagina: 9 },
    ],
    igualdad: [
      { texto: 'Defender los avances feministas y el derecho a decidir sobre el propio cuerpo.', pagina: 10 },
      { texto: 'Defender los derechos LGTBIQ+ y combatir los delitos de odio.', pagina: 10 },
      { texto: 'Ley Integral contra el Racismo.', pagina: 11 },
    ],
    inmigracion: [
      { texto: 'Derogar la Ley de Extranjería y sustituirla por otra.', pagina: 11 },
      { texto: 'Vías seguras para migrantes, empezando por reabrir los pasos entre Irun y Hendaia.', pagina: 11 },
      { texto: 'Fin de las devoluciones en caliente.', pagina: 11 },
    ],
    democracia: [
      { texto: 'Derogar los artículos de la "Ley Mordaza" sobre faltas de respeto y desobediencia.', pagina: 12 },
      { texto: 'Prohibir las pelotas de goma y crear un control independiente de la actuación policial.', pagina: 12 },
      { texto: 'Ampliar la Ley de Memoria Democrática a víctimas de tortura y de terrorismo de Estado.', pagina: 12 },
      { texto: 'Sustituir la Ley de Secretos Oficiales.', pagina: 13 },
    ],
    territorio: [
      { texto: 'Reconocer Euskal Herria como nación y el derecho a decidir.', pagina: 14 },
      { texto: 'Uso del euskera en la Administración del Estado y blindar los modelos educativos propios.', pagina: 15 },
      { texto: 'Traspasar Seguridad Social, Cercanías, migración, puertos y aeropuertos, becas e I+D+i.', pagina: 15 },
      { texto: 'Negociar el Concierto y el Convenio Económico "de igual a igual".', pagina: 16 },
    ],
  },
};
