import type { ResumenPrograma } from '../tipos';

/** Coalición Canaria, generales 23J 2023. Manifiesto de 14 páginas con 52 compromisos. */
export const ProgramaCC: ResumenPrograma = {
  partidoId: 'cc',
  eleccion: '23J 2023',
  nota: 'Manifiesto (14 páginas, 52 compromisos) firmado por CC y varias formaciones canarias.',
  ideasClave: [
    { texto: 'Formar un Grupo Canario en el Congreso y el Senado.', pagina: 1 },
    {
      texto: 'No apoyar Presupuestos del Estado que incumplan el Régimen Económico y Fiscal canario (REF).',
      pagina: 4,
    },
    {
      texto: 'Mantener el 75 % de descuento a residentes en vuelos y barcos, y precios máximos de referencia.',
      pagina: 4,
    },
    {
      texto: 'Que todas las comunidades se impliquen en la acogida de menores migrantes que llegan a Canarias.',
      pagina: 13,
    },
    { texto: 'Educación infantil de 0 a 3 años gratuita.', pagina: 6 },
  ],
  temas: {
    territorio: [
      { texto: 'Máximo autogobierno para Canarias "dentro de un consensuado estado plurinacional".', pagina: 3 },
      { texto: 'Exigir que el Gobierno cumpla la "Agenda Canaria" y el Estatuto de 2018.', pagina: 4 },
      { texto: 'No apoyar Presupuestos que incumplan el REF; garantizar la inversión media en las islas.', pagina: 4 },
      { texto: 'Nueva financiación autonómica separada de los recursos del REF.', pagina: 5 },
      { texto: 'Presencia propia de Canarias en las negociaciones con Marruecos (aguas y migración).', pagina: 5 },
    ],
    economia: [
      { texto: 'Actualizar las ayudas al transporte de mercancías para abaratar la cesta de la compra.', pagina: 4 },
      { texto: 'Exención de Canarias de la nueva tasa verde europea a los vuelos.', pagina: 5 },
      { texto: 'Diversificar más allá del turismo: industria, I+D y sector primario.', pagina: 9 },
      { texto: 'Mantener la deducción fiscal al cine rodado en Canarias.', pagina: 9 },
      {
        texto: 'Plan de telecomunicaciones y acabar con el cobro de IVA en vez de IGIC en compras digitales.',
        pagina: 11,
      },
    ],
    impuestos: [{ texto: 'Ampliar diez años la bonificación del 60 % del IRPF a residentes en La Palma.', pagina: 5 }],
    social: [
      {
        texto:
          '100 % de bonificación para guaguas y tranvías más allá de 2023; trenes de Gran Canaria y Tenerife en ADIF.',
        pagina: 5,
      },
      { texto: 'Financiación del REF contra la pobreza mientras Canarias esté por encima de la media.', pagina: 7 },
      { texto: 'El Estado debe pagar el 50 % de la dependencia y reformar la Ley 39/2006.', pagina: 7 },
      {
        texto: 'Ayuda a la crianza para todas las familias y comedor escolar gratis bajo el umbral de pobreza.',
        pagina: 13,
      },
    ],
    empleo: [
      { texto: 'Mantener el Plan Integral de Empleo de Canarias.', pagina: 6 },
      { texto: 'Bonificar cotizaciones por contratos indefinidos a jóvenes, mayores de 45 y mujeres.', pagina: 6 },
    ],
    educacion: [
      { texto: 'Gran Pacto social por la Educación.', pagina: 6 },
      { texto: 'Educación de 0 a 3 años gratuita con plazas públicas suficientes.', pagina: 6 },
      { texto: 'Plan de infraestructuras educativas de al menos 42 M€ al año.', pagina: 6 },
      { texto: 'Desarrollar la FP Dual y becas para estudiar fuera de la isla.', pagina: 7 },
    ],
    pensiones: [
      { texto: 'Pensiones actualizadas con el coste de la vida y menor brecha de género.', pagina: 7 },
      { texto: 'Pacto de Estado de pensiones en el Pacto de Toledo.', pagina: 7 },
    ],
    sanidad: [
      { texto: 'Sanidad pública y universal con financiación estatal específica.', pagina: 8 },
      { texto: 'Compensar el sobrecoste de la insularidad y más fondos para salud mental.', pagina: 8 },
    ],
    igualdad: [
      { texto: 'Oponerse a cualquier retroceso en las leyes contra la violencia de género.', pagina: 8 },
      { texto: 'Medidas contra la trata y la prostitución.', pagina: 8 },
      { texto: 'Mejores permisos de maternidad y paternidad.', pagina: 8 },
      { texto: 'Medidas contra la LGTBIfobia.', pagina: 9 },
    ],
    rural: [
      { texto: 'Financiar al 100 % la parte nacional del POSEI (ayudas agrarias de las islas).', pagina: 10 },
      { texto: 'Abaratar el agua desalada y de riego hasta igualarla con la Península.', pagina: 10 },
      { texto: 'Al menos el 12 % de la cuota nacional de atún rojo para la flota canaria.', pagina: 10 },
    ],
    energia: [
      { texto: 'Medidas específicas para acelerar la transición energética en las islas.', pagina: 12 },
      { texto: 'Canarias como laboratorio de tecnología marina y buque oceanográfico propio.', pagina: 12 },
    ],
    inmigracion: [
      { texto: 'Más coordinación europea en el rescate en el mar.', pagina: 13 },
      { texto: 'Más cooperación con países de origen y tránsito contra la inmigración irregular.', pagina: 13 },
      { texto: 'Reparto de la acogida de menores no acompañados entre todas las comunidades.', pagina: 13 },
    ],
    seguridad: [{ texto: 'Financiación estatal de plazas de la Policía Canaria.', pagina: 13 }],
    exterior: [
      { texto: 'Defender los derechos de las regiones ultraperiféricas (RUP) en la UE.', pagina: 5 },
      { texto: 'Canarias como plataforma atlántica y de cooperación con África Occidental.', pagina: 13 },
    ],
  },
};
