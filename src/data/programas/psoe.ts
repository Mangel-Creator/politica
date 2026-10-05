import type { ResumenPrograma } from '../tipos';

/**
 * PSOE, generales 23J 2023. Programa de 272 páginas.
 * Gran parte del texto repasa lo hecho en el Gobierno; aquí solo van compromisos nuevos.
 */
export const ProgramaPSOE: ResumenPrograma = {
  partidoId: 'psoe',
  eleccion: '23J 2023',
  nota: 'Buena parte del documento repasa la gestión del Gobierno 2018-2023; aquí solo se recogen compromisos.',
  ideasClave: [
    { texto: 'Universidad y FP superior gratis para quien apruebe las asignaturas a la primera.', pagina: 116 },
    { texto: 'Transporte público urbano gratis para niños y estudiantes hasta 24 años.', pagina: 131 },
    { texto: 'Llegar al 20 % de vivienda pública en alquiler.', pagina: 222 },
    { texto: 'Blindar el poder adquisitivo de las pensiones en la Constitución.', pagina: 170 },
    { texto: 'Listas de espera máximas por ley: 120 días para operarse y 60 para el especialista.', pagina: 201 },
  ],
  temas: {
    empleo: [
      { texto: 'Pacto por el Pleno Empleo con los agentes sociales.', pagina: 25 },
      { texto: 'Prácticas en empresa con el SMI y la Seguridad Social cubiertos.', pagina: 26 },
      {
        texto: 'Plan de trabajo flexible: jornadas híbridas y posibilidad de concentrar la semana en 4 días.',
        pagina: 143,
      },
      { texto: 'Seguir con el piloto de reducción de jornada sin merma salarial en la industria.', pagina: 50 },
      { texto: 'Que los salarios ganen poder adquisitivo según el acuerdo de negociación colectiva.', pagina: 32 },
    ],
    impuestos: [
      { texto: 'Evaluar la prórroga de los gravámenes temporales a banca y energéticas.', pagina: 39 },
      {
        texto:
          'Evaluar el impuesto a las grandes fortunas y debatir la tributación de la riqueza dentro de la financiación autonómica.',
        pagina: 39,
      },
      { texto: 'Subir el mínimo por hijos y dependientes en el IRPF.', pagina: 33 },
      { texto: 'Plan contra el fraude fiscal pactado con todas las fuerzas políticas.', pagina: 38 },
      { texto: 'Herramienta para que cada persona vea a qué se destinan sus impuestos.', pagina: 39 },
    ],
    economia: [
      { texto: 'Completar los proyectos de los fondos europeos (PERTE).', pagina: 28 },
      { texto: 'Ampliar el Kit Digital a pymes de más de 50 trabajadores.', pagina: 31 },
      { texto: 'Ampliar a rentas de hasta 37.800 € las ayudas por la subida de la hipoteca.', pagina: 32 },
      {
        texto:
          'Eliminar las comisiones por sacar efectivo en ventanilla y garantizar el efectivo en todo el territorio.',
        pagina: 33,
      },
      { texto: 'Estrategia Española de Impulso Industrial 2030.', pagina: 49 },
    ],
    vivienda: [
      {
        texto: 'Alcanzar el 20 % de vivienda pública en alquiler, como Francia, Países Bajos o Alemania.',
        pagina: 222,
      },
      { texto: 'Desarrollar las medidas de contención de precios de la Ley de Vivienda.', pagina: 221 },
      {
        texto:
          'Consolidar el Bono Alquiler Joven y avales del 20 % de la hipoteca para jóvenes (unas 50.000 viviendas).',
        pagina: 226,
      },
      { texto: 'El 30 % de la vivienda asequible promovida, para jóvenes de 18 a 35 años.', pagina: 131 },
      { texto: 'Desalojo de okupas ilegales en un máximo de 48 horas.', pagina: 251 },
    ],
    pensiones: [
      { texto: 'Blindar en la Constitución la revalorización de las pensiones con el IPC.', pagina: 170 },
      { texto: 'Seguir subiendo las pensiones mínimas y no contributivas.', pagina: 170 },
      { texto: 'Un año de cotización por cada hijo a cada progenitor.', pagina: 171 },
      { texto: 'Nuevas formas de jubilación parcial y activa; anticipada en trabajos penosos.', pagina: 171 },
      { texto: 'Fondo de reserva de más de 20.000 millones en 2027.', pagina: 172 },
    ],
    sanidad: [
      { texto: 'Tiempos máximos por ley: 120 días para operarse, 60 para el especialista.', pagina: 201 },
      { texto: 'Atención en salud mental en un máximo de 15 días para menores de 21 años.', pagina: 203 },
      { texto: 'Hasta un 15 % más de plazas de Medicina y 30 % más de plazas de salud mental.', pagina: 202 },
      { texto: 'Jubilación activa hasta los 72 años en especialidades con falta de médicos.', pagina: 202 },
      { texto: 'Crear la Agencia Estatal de Salud Pública.', pagina: 200 },
      { texto: 'Ampliar los cribados de cáncer (pulmón, próstata).', pagina: 203 },
    ],
    educacion: [
      { texto: 'Universidad y FP superior gratis para quien vaya aprobando a la primera.', pagina: 116 },
      { texto: 'Programa de gratuidad de libros de texto con las comunidades.', pagina: 109 },
      { texto: 'Escolarización universal de 0 a 18 años, sin hacerla obligatoria.', pagina: 103 },
      { texto: 'Inversión en I+D+i del 1,25 % del PIB en 2030.', pagina: 118 },
    ],
    social: [
      { texto: 'Permiso por nacimiento de 20 semanas.', pagina: 143 },
      { texto: 'Prestación por crianza para familias con menores.', pagina: 173 },
      { texto: 'Ley de Familias.', pagina: 173 },
      {
        texto:
          'Mejorar el acceso al Ingreso Mínimo Vital y llegar a un millón de menores con el complemento de infancia.',
        pagina: 182,
      },
      { texto: 'Erradicar el sinhogarismo de calle en 2030.', pagina: 190 },
      { texto: 'Transporte público urbano gratis para niños y estudiantes hasta 24 años.', pagina: 131 },
    ],
    igualdad: [
      { texto: 'Abolir la prostitución con un marco legal integral.', pagina: 158 },
      { texto: 'Oposición a los vientres de alquiler.', pagina: 159 },
      {
        texto: 'Blindar como derechos fundamentales el aborto, la eutanasia y el matrimonio igualitario.',
        pagina: 235,
      },
      { texto: 'Familias monoparentales consideradas familia numerosa.', pagina: 144 },
    ],
    democracia: [
      {
        texto:
          'Blindar derechos (aborto, eutanasia, pensiones, sanidad, agua) para que no los derogue una mayoría coyuntural.',
        pagina: 235,
      },
      { texto: 'Ley de Lobbies con registro público.', pagina: 243 },
      { texto: 'Ley de incompatibilidades contra las puertas giratorias.', pagina: 243 },
      { texto: 'Debates electorales obligatorios.', pagina: 247 },
      { texto: 'Más jueces y fiscales para acercarse a la media europea.', pagina: 248 },
      { texto: 'Resignificar el Valle de Cuelgamuros como lugar de memoria.', pagina: 253 },
    ],
    territorio: [
      { texto: 'Nuevo sistema de financiación autonómica.', pagina: 228 },
      { texto: 'Ley de Cohesión Territorial y más coordinación entre administraciones.', pagina: 231 },
      { texto: 'Servicios públicos básicos a menos de 30 minutos en el medio rural.', pagina: 94 },
    ],
    inmigracion: [
      { texto: 'Más capacidad del sistema de acogida, con gestión pública.', pagina: 255 },
      { texto: 'Más vías de migración regular y circular.', pagina: 256 },
      { texto: 'Simplificar los trámites de extranjería.', pagina: 256 },
      { texto: 'Facilitar que los migrantes que ya están en España se incorporen al trabajo.', pagina: 256 },
    ],
    energia: [
      {
        texto: 'Ley para identificar las zonas idóneas para renovables, con las comunidades y municipios.',
        pagina: 74,
      },
      { texto: 'Cierre ordenado y progresivo de las centrales nucleares.', pagina: 75 },
      { texto: 'Revisar al alza los compromisos climáticos de España.', pagina: 87 },
      { texto: 'Proteger el 30 % del territorio terrestre y marino en 2030.', pagina: 90 },
      { texto: 'Fondo estatal para el transporte público urbano y metropolitano.', pagina: 77 },
    ],
    exterior: [
      { texto: 'Apoyo a Ucrania y a su integración europea.', pagina: 259 },
      { texto: 'Acuerdo sobre Gibraltar con una zona de prosperidad compartida.', pagina: 260 },
      { texto: 'Ayuda al desarrollo del 0,7 % de la renta nacional en 2030.', pagina: 261 },
      { texto: 'Reforma de las reglas fiscales europeas.', pagina: 34 },
    ],
    rural: [
      { texto: 'Programa "Campus Rural" y más de 210 M€ al año para el relevo generacional en el campo.', pagina: 134 },
      { texto: 'Normas para garantizar servicios públicos de proximidad en el medio rural.', pagina: 66 },
    ],
  },
};
