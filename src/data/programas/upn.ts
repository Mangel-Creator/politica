import type { ResumenPrograma } from '../tipos';

/** UPN, generales 23J 2023. PDF de 6 páginas, resumido entero. */
export const ProgramaUPN: ResumenPrograma = {
  partidoId: 'upn',
  eleccion: '23J 2023',
  nota: 'Programa breve (6 páginas), centrado en Navarra. Están todas sus medidas.',
  ideasClave: [
    { texto: 'Que el Gobierno de España no dependa de EH Bildu ni de los independentistas.', pagina: 2 },
    { texto: 'Suprimir la Disposición Transitoria Cuarta de la Constitución ("Navarra es permanente").', pagina: 2 },
    { texto: 'Bajar impuestos y deflactar la tarifa del IRPF.', pagina: 2 },
    { texto: 'Derogar la Ley de Vivienda.', pagina: 6 },
    { texto: 'Terminar el Canal de Navarra, el tren de alta velocidad y la autovía a Madrid.', pagina: 2 },
  ],
  enfoques: {
    territorio: {
      texto:
        'Defender a Navarra como comunidad foral diferenciada dentro de España y que solo sus representantes negocien sus competencias.',
      pagina: 2,
    },
    impuestos: { texto: 'Bajar impuestos y aliviar la inflación en el bolsillo de los ciudadanos.', pagina: 2 },
    seguridad: {
      texto: 'Bajo el epígrafe «Libertades», medidas sobre ETA, sus víctimas y la Guardia Civil en Navarra.',
      pagina: 3,
    },
    democracia: {
      texto: 'Denunciar lo que contravenga la ética pública y derogar o cambiar normas aprobadas por el «sanchismo».',
      pagina: 2,
    },
    economia: {
      texto:
        'Terminar las grandes infraestructuras pendientes de Navarra y apoyar a autónomos, industria y exportación.',
      pagina: 3,
    },
    educacion: {
      texto: 'Libertad de los padres para elegir centro y que no se imponga el euskera.',
      pagina: 2,
    },
    social: {
      texto: 'Bajo el epígrafe «A favor de la vida»: familia, cuidados paliativos, dependencia y discapacidad.',
      pagina: 4,
    },
    rural: {
      texto: 'Defensa del mundo rural, sus actividades y tradiciones, y lucha contra la despoblación.',
      pagina: 5,
    },
    vivienda: { texto: 'Proteger la propiedad privada y respetar las competencias de Navarra en vivienda.', pagina: 6 },
  },
  temas: {
    territorio: [
      { texto: 'Suprimir la Disposición Transitoria Cuarta de la Constitución.', pagina: 2 },
      {
        texto:
          'Impedir que el independentismo vasco y partidos sin representantes de Navarra negocien competencias de la Comunidad Foral.',
        pagina: 2,
      },
      { texto: 'Defender las competencias de Navarra frente a leyes estatales que las invadan.', pagina: 2 },
      {
        texto: 'Reflejar en los Presupuestos del Estado la aportación de Navarra por el Convenio Económico.',
        pagina: 2,
      },
      { texto: 'Que Navarra asuma las competencias de I+D+i y de becas.', pagina: 2 },
      { texto: 'Mantener la Agrupación de Tráfico de la Guardia Civil en las carreteras navarras.', pagina: 3 },
      {
        texto:
          'Derogar el apartado de la Ley del Deporte que permite selecciones autonómicas en competiciones internacionales.',
        pagina: 6,
      },
    ],
    impuestos: [
      { texto: 'Reducir impuestos.', pagina: 2 },
      { texto: 'Deflactar la tarifa del IRPF para combatir la inflación.', pagina: 2 },
    ],
    seguridad: [
      { texto: 'Cambios legales para acabar con los homenajes y el enaltecimiento de ETA y sus miembros.', pagina: 3 },
      { texto: 'Igualar las indemnizaciones de las víctimas con y sin sentencia judicial.', pagina: 3 },
      { texto: 'Revisar los beneficios penitenciarios de los presos sin arrepentimiento.', pagina: 3 },
      { texto: 'Colaborar en el esclarecimiento de los atentados sin resolver.', pagina: 3 },
      { texto: 'Que los terroristas condenados por delitos de sangre no puedan ocupar cargos públicos.', pagina: 3 },
    ],
    democracia: [
      { texto: 'Derogar la Ley de Memoria Democrática.', pagina: 3 },
      {
        texto: 'Derogar o modificar las normas del «sanchismo» contrarias a los principios de UPN.',
        pagina: 3,
      },
      { texto: 'Lucha contra la corrupción y denuncia de los incumplimientos de promesas electorales.', pagina: 2 },
    ],
    economia: [
      { texto: 'Segunda fase del Canal de Navarra.', pagina: 3 },
      { texto: 'Terminar la autovía de Tudela a Medinaceli y conectar Navarra con Soria.', pagina: 3 },
      {
        texto:
          'Tren de alta velocidad hasta Pamplona conectado con la «Y vasca», con parada en Tudela y nuevas estaciones.',
        pagina: 3,
      },
      { texto: 'Tramitar con urgencia la conexión ferroviaria con el País Vasco por Ezkio y con Zaragoza.', pagina: 3 },
      { texto: 'Estudiar sacar del casco urbano de Tudela las vías y la estación del tren.', pagina: 3 },
      { texto: 'Desdoblar la carretera N-121-A.', pagina: 3 },
      { texto: 'Prolongar la gratuidad del peaje de la AP-15.', pagina: 3 },
      {
        texto: 'Planta de baterías en Volkswagen Navarra y defensa del sector del automóvil y del transporte.',
        pagina: 5,
      },
      {
        texto:
          'Convenio con el Ministerio de Economía para mejorar el suministro eléctrico y el acceso a servicios financieros en pueblos pequeños y para personas vulnerables.',
        pagina: 5,
      },
      { texto: 'Plan de Iniciación a la Exportación, con un convenio con el ICEX.', pagina: 5 },
      { texto: 'Medidas y ayudas para emprender y para los autónomos.', pagina: 5 },
      { texto: 'Mejores conexiones aéreas y ferroviarias de Navarra con los centros económicos.', pagina: 5 },
      { texto: 'Un Parador de Turismo en un edificio histórico, preferiblemente en el Camino de Santiago.', pagina: 5 },
      {
        texto:
          'Apoyo a los proyectos del Centro Nacional de Energías Renovables y del Centro Técnico Nacional de Conservas Vegetales.',
        pagina: 6,
      },
      {
        texto:
          'Cofinanciar los centros de investigación médica y científica de Navarra y facilitar el retorno y la contratación de investigadores.',
        pagina: 6,
      },
      {
        texto:
          'Restaurar patrimonio (catedral de Tudela, monasterio de Irache, colegiata de Roncesvalles) y el edificio «Sementales» de Tudela.',
        pagina: 6,
      },
      {
        texto: 'Promoción turística del Camino de Santiago, el Bocal de Fontellas, los Pirineos y las Bardenas Reales.',
        pagina: 6,
      },
      { texto: 'Una pista cubierta de atletismo en Pamplona.', pagina: 6 },
    ],
    educacion: [
      {
        texto:
          'Libertad de los padres para elegir centro, público o concertado, sin limitar los conciertos por modelo lingüístico.',
        pagina: 4,
      },
      { texto: 'Derogar la LOMLOE.', pagina: 4 },
      { texto: 'No imponer el euskera.', pagina: 2 },
      {
        texto:
          'Impulsar la FP dual, la atención a la diversidad, los idiomas (sobre todo inglés) y la educación especial.',
        pagina: 4,
      },
      {
        texto: 'Impedir libros de texto contrarios a la Constitución o a la realidad institucional de Navarra.',
        pagina: 4,
      },
      { texto: 'Que Navarra asuma la competencia de becas.', pagina: 4 },
    ],
    sanidad: [{ texto: 'Garantizar una sanidad de calidad.', pagina: 3 }],
    social: [
      { texto: 'Adaptar las normas para defender la vida con políticas de familia y cuidados paliativos.', pagina: 4 },
      { texto: 'Plan Nacional de Prevención del Suicidio.', pagina: 4 },
      { texto: 'Una ley para las personas con enfermedades raras y ELA.', pagina: 4 },
      { texto: 'Cumplir la financiación de la Ley de Dependencia.', pagina: 4 },
      {
        texto: 'Medidas para la integración de las personas con discapacidad y cumplir las normas de accesibilidad.',
        pagina: 4,
      },
      { texto: 'Llevar a las Cortes las demandas de las asociaciones sociales de Navarra.', pagina: 4 },
    ],
    empleo: [
      {
        texto: 'Contratos-programa del Ministerio de Trabajo con el Servicio Navarro de Empleo para políticas activas.',
        pagina: 4,
      },
      { texto: 'Plan Nacional de Empleo Juvenil.', pagina: 4 },
      { texto: 'Medidas legales para la reinserción laboral de quienes cobran ayudas públicas.', pagina: 4 },
    ],
    pensiones: [{ texto: 'Un sistema de pensiones que perdure, con pensiones dignas y sin recortes.', pagina: 4 }],
    rural: [
      { texto: 'Defensa de la agricultura, la ganadería, la caza, la pesca y la tauromaquia.', pagina: 5 },
      { texto: 'Más cobertura de los seguros agrarios.', pagina: 5 },
      { texto: 'Respetar los usos, costumbres y tradiciones de los pueblos.', pagina: 5 },
      { texto: 'Acciones para hacer atractiva la vida rural y frenar la despoblación.', pagina: 5 },
      { texto: 'Que los agricultores paguen el canon del Canal de Navarra en 50 años en vez de 30.', pagina: 3 },
    ],
    energia: [
      { texto: 'Apuesta por las energías renovables.', pagina: 5 },
      {
        texto:
          'Solución para las 9.000 familias navarras que invirtieron en renovables y a las que se cambió la normativa.',
        pagina: 5,
      },
      { texto: 'Vías verdes en Navarra y un corredor peatonal y ciclista junto al río Arga.', pagina: 5 },
      { texto: 'Limpieza y adecuación de los cauces de los ríos.', pagina: 5 },
    ],
    vivienda: [
      { texto: 'Normas que garanticen la propiedad privada de la vivienda y combatan la ocupación ilegal.', pagina: 6 },
      { texto: 'Derogar la Ley de Vivienda y respetar las competencias de Navarra en la materia.', pagina: 6 },
    ],
  },
};
