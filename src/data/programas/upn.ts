import type { ResumenPrograma } from '../tipos';

/** UPN, generales 23J 2023. PDF de 6 páginas. */
export const ProgramaUPN: ResumenPrograma = {
  partidoId: 'upn',
  eleccion: '23J 2023',
  nota: 'Programa breve (6 páginas), centrado en Navarra.',
  ideasClave: [
    { texto: 'Que el Gobierno de España no dependa de EH Bildu ni de los independentistas.', pagina: 2 },
    { texto: 'Suprimir la Disposición Transitoria Cuarta de la Constitución ("Navarra es permanente").', pagina: 2 },
    { texto: 'Bajar impuestos y deflactar la tarifa del IRPF.', pagina: 2 },
    { texto: 'Derogar la Ley de Vivienda.', pagina: 6 },
    { texto: 'Terminar el Canal de Navarra, el tren de alta velocidad y la autovía a Madrid.', pagina: 2 },
  ],
  temas: {
    territorio: [
      { texto: 'Suprimir la Disposición Transitoria Cuarta de la Constitución.', pagina: 2 },
      { texto: 'Que ningún partido sin diputados por Navarra negocie competencias de la Comunidad Foral.', pagina: 2 },
      {
        texto: 'Reflejar en los Presupuestos del Estado la aportación de Navarra por el Convenio Económico.',
        pagina: 2,
      },
      { texto: 'Que Navarra asuma las competencias de I+D+i y becas.', pagina: 6 },
      { texto: 'Mantener la Agrupación de Tráfico de la Guardia Civil en las carreteras navarras.', pagina: 3 },
    ],
    impuestos: [{ texto: 'Reducir impuestos y deflactar la tarifa del IRPF frente a la inflación.', pagina: 2 }],
    seguridad: [
      { texto: 'Cambios legales para acabar con los homenajes a terroristas de ETA.', pagina: 3 },
      { texto: 'Igualar indemnizaciones a víctimas con y sin sentencia judicial.', pagina: 3 },
      { texto: 'Revisar beneficios penitenciarios a presos sin arrepentimiento.', pagina: 3 },
      { texto: 'Que los condenados por delitos de sangre no puedan ocupar cargos públicos.', pagina: 3 },
    ],
    democracia: [
      { texto: 'Derogar la Ley de Memoria Democrática.', pagina: 3 },
      { texto: 'Lucha contra la corrupción y denuncia de incumplimientos de promesas electorales.', pagina: 2 },
    ],
    economia: [
      { texto: 'Segunda fase del Canal de Navarra.', pagina: 3 },
      { texto: 'Autovía Tudela–Medinaceli, tren de alta velocidad a Pamplona y desdoblar la N-121-A.', pagina: 3 },
      { texto: 'Mantener gratis el peaje de la AP-15.', pagina: 3 },
      { texto: 'Planta de baterías en Volkswagen Navarra y apoyo al sector del automóvil.', pagina: 5 },
      { texto: 'Ayudas al emprendimiento y a los autónomos; plan de exportación con el ICEX.', pagina: 5 },
    ],
    educacion: [
      { texto: 'Libertad de los padres para elegir centro, público o concertado; derogar la LOMLOE.', pagina: 4 },
      { texto: 'No imponer el euskera.', pagina: 2 },
      { texto: 'Impulsar la FP dual, el inglés y la educación especial.', pagina: 4 },
      {
        texto: 'Impedir libros de texto contrarios a la Constitución o a la realidad institucional de Navarra.',
        pagina: 4,
      },
    ],
    social: [
      { texto: 'Defensa de la vida y la familia; impulso a los cuidados paliativos.', pagina: 4 },
      { texto: 'Plan Nacional de Prevención del Suicidio y ley para ELA y enfermedades raras.', pagina: 4 },
      { texto: 'Financiar del todo la Ley de Dependencia y mejorar la accesibilidad.', pagina: 4 },
    ],
    empleo: [
      { texto: 'Plan Nacional de Empleo Juvenil.', pagina: 4 },
      { texto: 'Medidas para la reinserción laboral de quienes cobran ayudas públicas.', pagina: 4 },
    ],
    pensiones: [{ texto: 'Pensiones dignas, sin recortes, en un sistema que perdure.', pagina: 4 }],
    rural: [
      { texto: 'Defensa de la agricultura, la ganadería, la caza, la pesca y la tauromaquia.', pagina: 5 },
      { texto: 'Más cobertura de los seguros agrarios.', pagina: 5 },
      { texto: 'Que los agricultores paguen el canon del Canal de Navarra en 50 años en vez de 30.', pagina: 3 },
    ],
    energia: [
      {
        texto:
          'Apuesta por las renovables y solución para 9.000 familias navarras afectadas por el cambio de normativa.',
        pagina: 5,
      },
      { texto: 'Vías verdes y limpieza de cauces de ríos.', pagina: 5 },
    ],
    vivienda: [
      { texto: 'Proteger la propiedad privada y luchar contra la ocupación ilegal.', pagina: 6 },
      { texto: 'Derogar la Ley de Vivienda.', pagina: 6 },
    ],
  },
};
