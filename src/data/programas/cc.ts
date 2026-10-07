import type { ResumenPrograma } from '../tipos';

/** Coalición Canaria, generales 23J 2023. Manifiesto de 14 páginas con 52 compromisos, resumido entero. */
export const ProgramaCC: ResumenPrograma = {
  partidoId: 'cc',
  eleccion: '23J 2023',
  nota: 'Manifiesto (14 páginas, 52 compromisos) firmado por CC y varias formaciones canarias. Están todos sus compromisos.',
  ideasClave: [
    { texto: 'Formar un Grupo Canario en el Congreso y el Senado.', pagina: 1 },
    {
      texto: 'No apoyar Presupuestos del Estado que incumplan el Régimen Económico y Fiscal canario (REF).',
      pagina: 4,
    },
    {
      texto: 'Mantener el 75 % de descuento a residentes en vuelos y barcos, y precios máximos de referencia.',
      pagina: 11,
    },
    {
      texto: 'Que todas las comunidades se impliquen en la acogida de menores migrantes que llegan a Canarias.',
      pagina: 13,
    },
    { texto: 'Educación infantil de 0 a 3 años gratuita.', pagina: 6 },
  ],
  enfoques: {
    territorio: {
      texto:
        'Contribuir a la gobernabilidad «desde la moderación», sin depender de partidos estatales, y exigir que Madrid cumpla lo pactado con Canarias.',
      pagina: 3,
    },
    economia: {
      texto: 'Compensar los sobrecostes de la insularidad y diversificar la economía más allá del turismo.',
      pagina: 9,
    },
    empleo: {
      texto:
        'Mantener políticas de empleo específicas para Canarias mientras su tasa de empleo esté por debajo de la media.',
      pagina: 6,
    },
    educacion: {
      texto: 'Un gran pacto social por la educación y recuperar la desventaja histórica canaria.',
      pagina: 6,
    },
    pensiones: {
      texto: 'Pensiones dignas, actualizadas con el coste de la vida, mediante un Pacto de Estado.',
      pagina: 7,
    },
    social: { texto: 'Que el Estado financie lo que le corresponde en pobreza, dependencia y crianza.', pagina: 7 },
    sanidad: { texto: 'Sanidad pública y universal, con su financiación estatal separada y transparente.', pagina: 8 },
    igualdad: { texto: 'No retroceder en las leyes contra la violencia de género y avanzar en igualdad.', pagina: 8 },
    rural: {
      texto: 'Que el sector primario gane peso dentro de las políticas agraria y pesquera europeas.',
      pagina: 10,
    },
    energia: {
      texto:
        'Que España trate a Canarias como la región más sensible al cambio climático y acelere su transición energética.',
      pagina: 12,
    },
    exterior: {
      texto: 'Canarias como plataforma atlántica y de paz para la cooperación con África Occidental.',
      pagina: 13,
    },
    inmigracion: {
      texto: 'Que la migración y los menores no acompañados sean una prioridad de Estado y de la UE.',
      pagina: 13,
    },
  },
  temas: {
    territorio: [
      {
        texto: 'Respetar la Constitución y el Estatuto, sin «rendir pleitesía» a ningún partido de ámbito estatal.',
        pagina: 3,
      },
      { texto: 'Máximo autogobierno para Canarias «dentro de un consensuado estado plurinacional».', pagina: 3 },
      {
        texto:
          'Primera medida: un acuerdo de todas las fuerzas para que el Gobierno respete el fuero canario y la «Agenda Canaria».',
        pagina: 3,
      },
      { texto: 'Vigilar y denunciar cualquier incumplimiento del Estatuto de 2018 y del REF.', pagina: 4 },
      { texto: 'No apoyar Presupuestos que incumplan el REF e iniciar acciones legales si hace falta.', pagina: 4 },
      {
        texto:
          'Impedir reformas «por la puerta de atrás» del REF y garantizar la inversión media del Estado en las islas.',
        pagina: 4,
      },
      {
        texto: 'Desarrollar el Estatuto de 2018, cuyas competencias de costas solo se han traspasado a medias.',
        pagina: 4,
      },
      {
        texto: 'Nueva financiación autonómica suficiente para los servicios básicos, separada de los recursos del REF.',
        pagina: 5,
      },
      {
        texto: 'Representación propia de Canarias en las negociaciones con Marruecos sobre aguas y migración.',
        pagina: 5,
      },
    ],
    economia: [
      { texto: 'Actualizar ya las ayudas al transporte de mercancías para abaratar la cesta de la compra.', pagina: 4 },
      { texto: 'Exención de Canarias de la nueva tasa verde europea a los vuelos internacionales.', pagina: 5 },
      {
        texto: 'Incluir los trenes de Gran Canaria y Tenerife en la red de ADIF, con financiación estatal y europea.',
        pagina: 5,
      },
      { texto: 'Mantener la deducción fiscal para el cine rodado en Canarias.', pagina: 9 },
      { texto: 'Prolongar la financiación de la estrategia de resiliencia turística.', pagina: 9 },
      { texto: 'Diversificar la economía hacia la industria, la I+D y el sector primario.', pagina: 9 },
      {
        texto:
          'Compensar los sobrecostes de la industria canaria y facilitar su acceso a los Incentivos Económicos Regionales.',
        pagina: 10,
      },
      {
        texto: 'Impulsar la I+D en astrofísica y espacio, ciencias marinas y biotecnología ligada a la biodiversidad.',
        pagina: 11,
      },
      { texto: 'Plan Específico de Telecomunicaciones de Canarias.', pagina: 11 },
      {
        texto:
          'Acabar con los sobrecostes del comercio electrónico y con el cobro de IVA en vez de IGIC en compras digitales.',
        pagina: 11,
      },
      {
        texto:
          'Precios máximos de referencia en las rutas aéreas de servicio público y vigilancia de abusos en las tarifas.',
        pagina: 11,
      },
      {
        texto: 'Línea marítima de servicio público con precio máximo entre La Palma, El Hierro y La Gomera.',
        pagina: 12,
      },
      { texto: 'Que el Estado cumpla el convenio de carreteras y transfiera ya los fondos.', pagina: 12 },
      { texto: 'Una ley que dé a Canarias un papel decisivo en la gestión de sus aeropuertos.', pagina: 12 },
      {
        texto:
          'Más participación de las empresas canarias en los programas estatales de exportación e inversión (ICEX, FIEM, ICO, Cofides).',
        pagina: 13,
      },
      { texto: 'Promover Canarias como plataforma atlántica para atraer inversión exterior.', pagina: 13 },
    ],
    social: [
      { texto: 'Mantener el 75 % de descuento para residentes en el transporte aéreo y marítimo.', pagina: 11 },
      {
        texto:
          'Prorrogar más allá de 2023 la gratuidad total de guaguas y tranvías, o al menos para quien más lo necesite.',
        pagina: 5,
      },
      { texto: 'Bonificación del 60 % del IRPF durante diez años para los residentes en La Palma.', pagina: 5 },
      { texto: 'Que el Estado cumpla sus compromisos de reconstrucción de La Palma.', pagina: 5 },
      { texto: 'Financiación del REF para luchar contra la pobreza mientras sea mayor que la media.', pagina: 7 },
      {
        texto: 'Que el Estado financie el 50 % de la dependencia, integrada en la financiación autonómica.',
        pagina: 7,
      },
      { texto: 'Revisar la Ley de Dependencia para adaptarla y garantizar su sostenibilidad.', pagina: 7 },
      {
        texto:
          'Más corresponsabilidad en la conciliación: escolarización de 0 a 3 años y mejores permisos de paternidad y maternidad.',
        pagina: 8,
      },
      {
        texto:
          'Ayudas a la crianza que lleguen automáticamente a todas las familias, sobre todo a las de menos ingresos.',
        pagina: 13,
      },
      {
        texto: 'Comedor escolar gratuito con el umbral de pobreza como renta común en toda España.',
        pagina: 14,
      },
      {
        texto:
          'Recuperar las ayudas a la movilidad de artistas y deportistas de las islas y financiar sus desplazamientos.',
        pagina: 9,
      },
    ],
    empleo: [
      { texto: 'Políticas activas, FP y contratos orientados a empleo estable y de calidad.', pagina: 5 },
      { texto: 'Mantener la partida del Plan Integral de Empleo de Canarias.', pagina: 6 },
      { texto: 'Programa especial de formación para el empleo en servicios avanzados, como prevé el REF.', pagina: 6 },
      {
        texto: 'Mantener los incentivos a la contratación indefinida de jóvenes por microempresas y autónomos.',
        pagina: 6,
      },
      {
        texto:
          'Bonificar las cotizaciones por contratos indefinidos de jóvenes de 16 a 30 años, mayores de 45 y mujeres en sectores masculinizados.',
        pagina: 6,
      },
    ],
    educacion: [
      { texto: 'Un gran Pacto social por la Educación.', pagina: 6 },
      { texto: 'Mantener el convenio de infraestructura educativa con al menos 42 millones al año.', pagina: 6 },
      { texto: 'Educación infantil de 0 a 3 años gratuita y con plazas públicas suficientes.', pagina: 6 },
      { texto: 'Desarrollar la normativa de la FP dual.', pagina: 7 },
      {
        texto: 'Becas específicas para quien no tenga en su isla los estudios que busca y becas de desplazamiento.',
        pagina: 7,
      },
      { texto: 'Detectar antes al alumnado vulnerable y extender el refuerzo educativo.', pagina: 14 },
    ],
    pensiones: [
      { texto: 'Pensiones actualizadas según el coste de la vida y menor brecha de género.', pagina: 7 },
      { texto: 'Financiar pensiones con los Presupuestos del Estado para blindarlas.', pagina: 7 },
      { texto: 'Un Pacto de Estado de pensiones tramitado en el Pacto de Toledo.', pagina: 7 },
    ],
    sanidad: [
      { texto: 'Defender una sanidad pública y universal como derecho fundamental.', pagina: 8 },
      { texto: 'Financiación sanitaria estatal específica, no diluida en la autonómica.', pagina: 8 },
      { texto: 'Revisar el sobrecoste sanitario de la insularidad y la lejanía.', pagina: 8 },
      { texto: 'Más dinero del Estado para la salud mental en Canarias y más profesionales.', pagina: 8 },
    ],
    igualdad: [
      { texto: 'Oponerse a cualquier retroceso en las leyes contra la violencia de género.', pagina: 8 },
      {
        texto: 'Aplicar en toda España el Convenio de Estambul y el Pacto de Estado contra la Violencia de Género.',
        pagina: 8,
      },
      { texto: 'Medidas legales contra la trata con fines de explotación sexual y la prostitución.', pagina: 8 },
      { texto: 'Cumplir las leyes contra las brechas de género en empleo, salario y pensiones.', pagina: 8 },
      {
        texto:
          'Medidas contra la feminización de la pobreza y la discriminación de mujeres con discapacidad, migrantes y empleadas del hogar.',
        pagina: 8,
      },
      {
        texto:
          'Contra la LGTBIfobia: apoyo para denunciar, igualdad laboral, protocolos contra el acoso escolar y atención sanitaria adecuada.',
        pagina: 9,
      },
    ],
    rural: [
      {
        texto:
          'Que los Presupuestos garanticen el 100 % de la aportación nacional al POSEI, las ayudas agrícolas europeas.',
        pagina: 10,
      },
      {
        texto: 'Defender los seguros agrarios y las subvenciones de hasta el 100 % al transporte de mercancías.',
        pagina: 10,
      },
      {
        texto: 'Compensación estatal para que el agua desalada y la de riego cuesten como en el resto de España.',
        pagina: 10,
      },
      { texto: 'Mejorar la inspección fitosanitaria contra las plagas.', pagina: 10 },
      {
        texto: 'Al menos el 12 % de la cuota nacional de atún rojo para la flota canaria y más cuota de patudo.',
        pagina: 10,
      },
    ],
    energia: [
      {
        texto: 'Seguir el modelo de Gorona del Viento (El Hierro) y de los proyectos Chira-Soria y Güímar.',
        pagina: 12,
      },
      { texto: 'Series temporales fijas de datos para medir el cambio climático en Canarias.', pagina: 12 },
      { texto: 'Medidas específicas para acelerar la transición energética en las islas.', pagina: 12 },
      { texto: 'Canarias como laboratorio natural para ensayar tecnología marina sostenible.', pagina: 12 },
      { texto: 'Financiación para un buque oceanográfico con base en Canarias.', pagina: 12 },
    ],
    exterior: [
      {
        texto:
          'Durante la presidencia española de la UE, reforzar la alianza con Portugal y Francia por las regiones ultraperiféricas.',
        pagina: 5,
      },
      { texto: 'Planes estratégicos y consorcios como Casa África o la ZEC.', pagina: 13 },
      { texto: 'Canarias como «Plataforma de Paz» para cooperar con África Occidental.', pagina: 13 },
    ],
    inmigracion: [
      { texto: 'Más coordinación europea y apoyo de la UE en el rescate de migrantes en el mar.', pagina: 13 },
      {
        texto: 'Más cooperación europea con los países de origen y tránsito contra la inmigración irregular.',
        pagina: 13,
      },
      {
        texto:
          'Cambios legales para que todas las comunidades acojan a los menores no acompañados que llegan a Canarias.',
        pagina: 13,
      },
    ],
    seguridad: [
      {
        texto: 'Que el Estado financie las plazas de la Policía Canaria como hace con otros cuerpos autonómicos.',
        pagina: 13,
      },
    ],
  },
};
