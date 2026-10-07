import type { ResumenPrograma } from '../tipos';

/** EH Bildu, generales 23J 2023. Documento de compromisos de 16 páginas, resumido entero. */
export const ProgramaEHBildu: ResumenPrograma = {
  partidoId: 'eh-bildu',
  eleccion: '23J 2023',
  nota: 'Documento de compromisos (16 páginas), no un programa extenso. Están todas sus medidas.',
  ideasClave: [
    { texto: 'Jornada de 32 horas semanales sin bajar el sueldo.', pagina: 3 },
    { texto: 'Salario mínimo de 1.200 € y un salario mínimo propio vasco.', pagina: 3 },
    { texto: 'Pensiones mínimas de 1.080 € y no subir la edad de jubilación.', pagina: 5 },
    { texto: 'Hacer permanentes los impuestos a la banca, las energéticas y las grandes fortunas.', pagina: 8 },
    { texto: 'Reconocer Euskal Herria como nación y el derecho a decidir.', pagina: 14 },
  ],
  enfoques: {
    empleo: {
      texto:
        'Recuperar lo que la última reforma laboral dejó fuera y que los convenios y el salario mínimo se decidan en el ámbito vasco y navarro.',
      pagina: 3,
    },
    vivienda: {
      texto: 'Proteger a inquilinos e hipotecados frente a la subida de precios y de tipos de interés.',
      pagina: 4,
    },
    pensiones: {
      texto: 'Subir las pensiones mínimas, no endurecer la jubilación y traspasar la Seguridad Social.',
      pagina: 5,
    },
    impuestos: {
      texto: 'Más carga fiscal a la banca, las energéticas, las grandes fortunas y la gran distribución.',
      pagina: 8,
    },
    economia: {
      texto: 'Contener los precios, rechazar la austeridad y reorientar la industria hacia las pymes y la innovación.',
      pagina: 8,
    },
    sanidad: { texto: 'Reforzar la sanidad pública y ampliar lo que cubre.', pagina: 6 },
    social: { texto: 'Ampliar la protección social y hacer permanentes las ayudas al transporte.', pagina: 7 },
    energia: {
      texto: 'Adelantar la neutralidad climática a 2040 y restar poder de mercado a las grandes eléctricas.',
      pagina: 9,
    },
    igualdad: {
      texto: 'Defender los avances feministas y LGTBIQ+ y acabar con la discriminación de las mujeres en el trabajo.',
      pagina: 10,
    },
    inmigracion: { texto: 'Garantizar todos los derechos de las personas migrantes.', pagina: 11 },
    democracia: {
      texto:
        'Derogar la «Ley Mordaza» y ampliar la memoria a todas las víctimas, incluidas las de la tortura y el terrorismo de Estado.',
      pagina: 12,
    },
    territorio: {
      texto:
        'Una solución política negociada al «conflicto» con el Estado, basada en el derecho a decidir de la ciudadanía vasca, y más autogobierno.',
      pagina: 14,
    },
  },
  temas: {
    empleo: [
      { texto: 'Recuperar el despido de 45 días por año trabajado.', pagina: 3 },
      { texto: 'Recuperar los salarios de tramitación.', pagina: 3 },
      { texto: 'Prioridad de los convenios vascos, provinciales y autonómicos sobre los estatales.', pagina: 3 },
      { texto: 'Jornada de 32 horas semanales sin reducción salarial ni cambio de condiciones.', pagina: 3 },
      {
        texto:
          'Medidas para mujeres y jóvenes contra la brecha salarial, la precariedad, la temporalidad y la parcialidad.',
        pagina: 3,
      },
      {
        texto: 'Salario mínimo de 1.200 € y capacidad para fijar uno propio, con el 60 % del salario medio como guía.',
        pagina: 3,
      },
      { texto: 'Reconocer el Marco Vasco y Navarro de Relaciones Laborales para la negociación colectiva.', pagina: 4 },
      {
        texto: 'Traspasar la Inspección de Trabajo y, mientras tanto, convocar plazas para ampliar su plantilla.',
        pagina: 4,
      },
      { texto: 'Traspasar las políticas pasivas de empleo (las prestaciones).', pagina: 4 },
    ],
    vivienda: [
      {
        texto: 'Recuperar de forma indefinida la prórroga automática de los alquileres con la misma renta.',
        pagina: 4,
      },
      {
        texto:
          'Congelar con carácter retroactivo las cuotas de hipotecas de menos de 250.000 €, con una subida máxima del 15 %, hasta que bajen los tipos.',
        pagina: 4,
      },
      {
        texto: 'Hacer obligatorio el Código de Buenas Prácticas bancario y abrirlo a más personas con dificultades.',
        pagina: 4,
      },
    ],
    pensiones: [
      { texto: 'Pensiones mínimas de 1.080 € de inmediato, con capacidad propia para complementarlas.', pagina: 5 },
      { texto: 'Nueva subida de las pensiones mínimas de viudedad y de las no contributivas.', pagina: 5 },
      { texto: 'No subir la edad de jubilación ni ampliar el periodo de cálculo de la pensión.', pagina: 5 },
      {
        texto: 'Traspasar el régimen económico de la Seguridad Social a las instituciones vascas y navarras.',
        pagina: 5,
      },
    ],
    impuestos: [
      {
        texto:
          'Subir la carga fiscal y hacer permanentes los impuestos a banca, energéticas y grandes fortunas, gestionados por las haciendas forales.',
        pagina: 8,
      },
      { texto: 'Impuesto especial a los beneficios de las grandes cadenas de alimentación.', pagina: 8 },
      { texto: 'IVA superreducido para los productos de higiene menstrual.', pagina: 6 },
    ],
    economia: [
      {
        texto: 'Más control y más inspectores en la cadena alimentaria para asegurar precios justos a los productores.',
        pagina: 5,
      },
      {
        texto:
          'Extender a todas las grandes cadenas las rebajas de productos básicos, protegiendo al pequeño comercio.',
        pagina: 5,
      },
      {
        texto: 'Prorrogar indefinidamente el tope al gas y la contención del precio de la electricidad.',
        pagina: 5,
      },
      { texto: 'Hacer efectiva y accesible la tarifa TUR4 para calderas comunitarias.', pagina: 6 },
      { texto: 'Más inversión en los trenes de Renfe y Feve en Euskadi y Navarra y más horarios.', pagina: 6 },
      { texto: 'Exigir al BCE que revierta la subida de tipos de interés iniciada en julio de 2022.', pagina: 8 },
      { texto: 'Rechazar la vuelta de las reglas fiscales y cualquier política de austeridad.', pagina: 8 },
      { texto: 'Derogar la reforma del artículo 135 de la Constitución, que prioriza pagar la deuda.', pagina: 8 },
      { texto: 'Impulsar el PERTE de economía social y cooperativa.', pagina: 8 },
      {
        texto:
          'Nueva Ley de Industria centrada en las pymes y la innovación, que obligue a devolver las ayudas si la empresa se deslocaliza.',
        pagina: 8,
      },
    ],
    sanidad: [
      { texto: 'Más plazas MIR para cubrir todas las necesarias y reforzar la Atención Primaria.', pagina: 6 },
      { texto: 'Derogar la Ley 15/1997, que permite externalizar servicios sanitarios.', pagina: 6 },
      {
        texto:
          'Multiplicar el presupuesto de salud mental y las plazas PIR, con atención psicológica pública y gratuita.',
        pagina: 6,
      },
      { texto: 'Incluir servicios básicos de dentista y oftalmología en la sanidad pública.', pagina: 6 },
      { texto: 'Productos de higiene menstrual gratis en farmacias para personas vulnerables.', pagina: 6 },
    ],
    social: [
      { texto: 'Hacer permanentes por ley la gratuidad y los descuentos del transporte público.', pagina: 6 },
      {
        texto:
          'Prohibir siempre los cortes de suministros básicos a familias vulnerables y ampliar el Suministro Mínimo Vital.',
        pagina: 7,
      },
      { texto: 'Actualizar el IPREM con el IPC cuando este supere el 2,5 %.', pagina: 7 },
      { texto: 'Subir un 15 % los límites de renta para ser considerado «persona vulnerable».', pagina: 7 },
      {
        texto:
          'Ingreso Mínimo Vital para más personas, al menos un 12 % más alto y con trámites más sencillos y presenciales.',
        pagina: 7,
      },
      { texto: 'Garantizar la atención presencial en la Administración para todos los trámites.', pagina: 7 },
    ],
    energia: [
      {
        texto:
          'Revisar la Ley de Cambio Climático para endurecer los objetivos de 2030 y lograr la neutralidad en 2040.',
        pagina: 9,
      },
      { texto: 'Más inversión en renovables con una planificación respetuosa con cada territorio.', pagina: 9 },
      {
        texto:
          'Cambiar en la UE el sistema marginalista de precios de la electricidad por precios según el coste real.',
        pagina: 9,
      },
      { texto: 'Facilitar la creación de empresas públicas de comercialización de electricidad.', pagina: 9 },
      { texto: 'Nueva política contra la sequía que asegure el agua a la población y al campo.', pagina: 9 },
      { texto: 'Más control y sanciones a las eléctricas que usen de forma irregular los embalses.', pagina: 9 },
    ],
    igualdad: [
      { texto: 'Defender los avances feministas y el derecho a decidir sobre el propio cuerpo.', pagina: 10 },
      { texto: 'Reforzar la lucha contra la violencia machista.', pagina: 10 },
      {
        texto: 'Acabar con la discriminación de las mujeres en el empleo, el salario, las pensiones y los cuidados.',
        pagina: 10,
      },
      { texto: 'Defender los derechos LGTBIQ+ y combatir los discursos y delitos de odio.', pagina: 11 },
      { texto: 'Espacios de representación institucional para el colectivo LGTBIQ+.', pagina: 11 },
      { texto: 'Ley Integral contra el Racismo y todas las formas de discriminación.', pagina: 11 },
    ],
    inmigracion: [
      {
        texto:
          'Derogar la Ley de Extranjería y sustituirla por una que garantice derechos y acceso a servicios públicos.',
        pagina: 11,
      },
      { texto: 'Vías seguras para migrantes, empezando por reabrir los pasos entre Irun y Hendaia.', pagina: 11 },
      { texto: 'Garantizar el asilo y la asistencia a todas las personas migrantes.', pagina: 11 },
      { texto: 'Fin de las devoluciones en caliente, por tierra o por mar.', pagina: 11 },
    ],
    democracia: [
      {
        texto: 'Derogar la «Ley Mordaza», empezando por las sanciones por «faltas de respeto» y «desobediencia».',
        pagina: 12,
      },
      { texto: 'Prohibir las pelotas de goma.', pagina: 12 },
      { texto: 'Un mecanismo externo e independiente que supervise e investigue la actuación policial.', pagina: 12 },
      {
        texto:
          'Ampliar la Ley de Memoria Democrática a las víctimas del franquismo, la tortura, el terrorismo de Estado y los grupos ultraderechistas.',
        pagina: 12,
      },
      {
        texto: 'Sustituir la Ley de Secretos Oficiales para esclarecer casos como el 3 de Marzo de Gasteiz.',
        pagina: 13,
      },
    ],
    territorio: [
      { texto: 'Reconocer el carácter plurinacional del Estado y Euskal Herria como nación.', pagina: 14 },
      { texto: 'Reconocer el carácter político del conflicto y buscarle una solución política.', pagina: 14 },
      { texto: 'Reconocer el derecho a decidir de la ciudadanía vasca.', pagina: 14 },
      {
        texto: 'Que el Estado respete los acuerdos de los parlamentos vasco y navarro ratificados por la ciudadanía.',
        pagina: 14,
      },
      {
        texto: 'Garantizar el uso del euskera en la Administración del Estado y que sus trabajadores lo conozcan.',
        pagina: 15,
      },
      { texto: 'Blindar los modelos educativos propios y sus características lingüísticas.', pagina: 15 },
      { texto: 'Más euskera en el ámbito digital y audiovisual.', pagina: 15 },
      { texto: 'Mismo respeto para el catalán, el gallego, el asturiano o el aragonés.', pagina: 15 },
      {
        texto:
          'Traspasar todas las competencias pendientes: Seguridad Social, Inspección, prestaciones, I+D+i, becas, Cercanías, migración, puertos y aeropuertos.',
        pagina: 15,
      },
      { texto: 'Traspaso completo de los trenes de Cercanías a las instituciones vascas.', pagina: 6 },
      { texto: 'Que toda nueva ley que afecte a sus competencias se transfiera de inmediato.', pagina: 16 },
      { texto: 'Negociar el Concierto y el Convenio Económico «de igual a igual».', pagina: 16 },
    ],
  },
};
