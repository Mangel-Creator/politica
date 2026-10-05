import type { ResumenPrograma } from '../tipos';

/** Sumar, generales 23J 2023. Programa "Un programa para ti", 182 páginas. */
export const ProgramaSumar: ResumenPrograma = {
  partidoId: 'sumar',
  eleccion: '23J 2023',
  ideasClave: [
    {
      texto:
        'Jornada máxima de 37,5 horas por ley en 2024 y diálogo social para llegar a 32 horas, sin bajar el sueldo.',
      pagina: 7,
    },
    {
      texto: '"Herencia universal" de 20.000 € a los 23 años, pagada con un impuesto a las grandes fortunas.',
      pagina: 15,
    },
    { texto: 'Impuesto permanente a las grandes fortunas con tipos de al menos el 4 %.', pagina: 16 },
    { texto: 'Invertir el 1 % del PIB al año durante diez años en vivienda.', pagina: 76 },
    { texto: 'Prestación universal de 200 € al mes por hijo.', pagina: 93 },
  ],
  temas: {
    empleo: [
      { texto: 'Jornada máxima de 37,5 horas en 2024 y camino hacia las 32, sin reducción de salario.', pagina: 7 },
      { texto: 'Subir el salario mínimo por encima del IPC cada año.', pagina: 7 },
      { texto: 'Contrato indefinido a tiempo completo como forma normal de contratación.', pagina: 7 },
      { texto: 'Despido con sistema "restaurativo y disuasorio" y más causalidad.', pagina: 27 },
      { texto: 'Currículum ciego (sin foto, edad ni sexo) y auditoría de algoritmos laborales.', pagina: 26 },
      { texto: 'Permiso anual retribuido para formación.', pagina: 29 },
    ],
    impuestos: [
      { texto: 'Impuesto permanente a grandes fortunas (al menos 4 %) y mínimo estatal en Sucesiones.', pagina: 16 },
      { texto: 'Tipo mínimo efectivo del 15 % en Sociedades.', pagina: 16 },
      { texto: 'Mantener los impuestos a energéticas y banca.', pagina: 16 },
      {
        texto: 'IRPF: nuevos tramos desde 120.000 € hasta un 52 % a partir de 300.000 €; capital hasta el 30 %.',
        pagina: 17,
      },
      { texto: 'Acabar con el régimen fiscal especial de las SICAV y SOCIMI.', pagina: 16 },
      { texto: 'Impuesto a bebidas azucaradas y ultraprocesados.', pagina: 91 },
    ],
    economia: [
      { texto: 'Crear un banco público de inversión (BINE) y convertir la SEPI en agencia industrial.', pagina: 11 },
      { texto: 'Limitar el poder de los oligopolios, sobre todo el eléctrico.', pagina: 12 },
      { texto: 'Regular la remuneración de los depósitos y recortar comisiones bancarias.', pagina: 13 },
      { texto: 'I+D+i hasta el 2,1 % del PIB.', pagina: 14 },
      { texto: 'Cesta de la compra básica a precios asequibles.', pagina: 9 },
      { texto: 'Bono de emergencia para hipotecas variables y portabilidad obligatoria de hipotecas.', pagina: 8 },
    ],
    vivienda: [
      { texto: 'Invertir el 1 % del PIB anual durante diez años en vivienda pública.', pagina: 76 },
      { texto: 'Gravar el suelo urbanizable ocioso y prohibir vender suelo y vivienda pública.', pagina: 76 },
      { texto: 'Limitar el alquiler turístico, de habitaciones y de temporada.', pagina: 77 },
      { texto: 'Contratos de alquiler más largos, tendiendo a indefinidos.', pagina: 77 },
      { texto: 'Alquiler social obligatorio para grandes tenedores y dación en pago.', pagina: 77 },
      { texto: 'Convertir la SAREB en herramienta pública de vivienda.', pagina: 77 },
      { texto: 'Reserva del 30 % para vivienda protegida en suelo urbano consolidado.', pagina: 79 },
    ],
    pensiones: [
      { texto: 'Mantener la revalorización con el IPC.', pagina: 15 },
      { texto: 'Subir mínimas y no contributivas por encima del IPC hasta el umbral de la pobreza.', pagina: 15 },
      { texto: 'Reforma constitucional que blinde el derecho a la Seguridad Social.', pagina: 34 },
    ],
    social: [
      { texto: 'Prestación universal por hijo de 200 € al mes.', pagina: 93 },
      { texto: 'Prestación por crianza hasta los 18 años.', pagina: 15 },
      { texto: 'Educación de 0 a 3 años gratuita y universal.', pagina: 154 },
      { texto: 'Comedores escolares gratuitos, de forma progresiva.', pagina: 94 },
      { texto: 'Permiso parental retribuido de diez semanas.', pagina: 94 },
      { texto: 'Prohibir los cortes de agua, luz y calefacción a familias vulnerables.', pagina: 20 },
      { texto: 'Ley de Cuidados con derecho universal al cuidado.', pagina: 87 },
    ],
    sanidad: [
      { texto: 'Subir el gasto sanitario medio punto del PIB al año hasta la media europea.', pagina: 89 },
      { texto: 'Nuevas prestaciones públicas y fin de las listas de espera.', pagina: 89 },
      { texto: 'Plan de choque en Atención Primaria y en salud mental.', pagina: 90 },
      { texto: 'Empresa farmacéutica pública.', pagina: 91 },
      { texto: 'Regular el cannabis y los clubes de autoconsumo.', pagina: 92 },
      { texto: 'Incluir en la sanidad pública a quienes hoy reciben asistencia a través de mutualidades.', pagina: 92 },
    ],
    educacion: [
      { texto: 'Gratuidad de todas las etapas en centros públicos.', pagina: 157 },
      { texto: 'Matrícula universitaria más barata hasta la gratuidad progresiva.', pagina: 160 },
      { texto: 'Bajar las ratios de alumnos por aula.', pagina: 157 },
      { texto: 'Universidades: cumplir el 1 % del PIB que fija la LOSU.', pagina: 164 },
      { texto: 'Voto a los 16 años.', pagina: 102 },
    ],
    energia: [
      { texto: 'Más ambición en la Ley de Cambio Climático.', pagina: 41 },
      { texto: 'Parar nuevas inversiones y subvenciones al gas y otros fósiles.', pagina: 42 },
      { texto: 'Mantener el calendario de cierre nuclear.', pagina: 48 },
      { texto: 'Fondo público de inversión en renovables y tarifa eléctrica progresiva.', pagina: 45 },
      { texto: 'Recuperar para lo público las centrales hidroeléctricas al acabar sus concesiones.', pagina: 48 },
      { texto: 'Financiación estatal del transporte público de al menos el 0,25 % del PIB.', pagina: 82 },
    ],
    rural: [
      { texto: '"Territorio 30 minutos": servicios esenciales a no más de media hora.', pagina: 58 },
      { texto: 'PAC que priorice explotaciones familiares y la transición agroecológica.', pagina: 60 },
      { texto: 'Protección de la ganadería extensiva.', pagina: 60 },
      { texto: 'Derogar la ley que protege la tauromaquia como patrimonio cultural.', pagina: 56 },
      { texto: 'IVA de los veterinarios al 10 %.', pagina: 56 },
    ],
    igualdad: [
      { texto: 'Reducir la brecha salarial y la de pensiones.', pagina: 108 },
      { texto: 'Blindar el Pacto de Estado contra la Violencia de Género.', pagina: 111 },
      { texto: 'Garantizar los derechos sexuales y reproductivos.', pagina: 111 },
      { texto: 'Defender la autodeterminación de género de las personas trans.', pagina: 116 },
      { texto: 'Pacto de Estado contra los discursos de odio.', pagina: 114 },
    ],
    inmigracion: [
      { texto: 'Reformar la Ley y el Reglamento de Extranjería.', pagina: 104 },
      { texto: 'Ley integral contra el racismo.', pagina: 104 },
      { texto: 'Cerrar los CIE.', pagina: 105 },
      { texto: 'Acceso universal a la sanidad pública para migrantes.', pagina: 105 },
      { texto: 'Abandonar las devoluciones sumarias en frontera.', pagina: 149 },
    ],
    territorio: [
      { texto: 'Pacto territorial que reconozca una España "plurinacional".', pagina: 120 },
      { texto: 'Más competencias y financiación para las comunidades.', pagina: 121 },
      { texto: 'Mesa de diálogo entre el Gobierno y la Generalitat de Cataluña.', pagina: 121 },
      { texto: 'Reformar la financiación autonómica y local.', pagina: 18 },
    ],
    democracia: [
      { texto: 'Renovar el CGPJ y el Tribunal Constitucional.', pagina: 129 },
      { texto: 'Suprimir la justicia militar.', pagina: 129 },
      { texto: 'Recuperar la justicia universal.', pagina: 129 },
      { texto: 'Desarrollar la Ley de Memoria Democrática y una ley de "bebés robados".', pagina: 134 },
    ],
    seguridad: [
      { texto: 'Desmilitarizar la Guardia Civil y darle libertad sindical.', pagina: 131 },
      { texto: 'Prohibir las pelotas de goma.', pagina: 132 },
      { texto: 'Limitar las identificaciones policiales.', pagina: 132 },
      { texto: 'Ley de prevención y convivencia.', pagina: 130 },
    ],
    exterior: [
      {
        texto: 'Revertir el cambio de posición sobre el Sáhara Occidental; solución justa en Palestina y Ucrania.',
        pagina: 141,
      },
      { texto: 'Reforma de los tratados europeos para blindar la Europa social.', pagina: 143 },
      { texto: 'Superar el Pacto de Estabilidad europeo.', pagina: 144 },
      { texto: 'Liderar un nuevo pacto de migración y asilo en el Mediterráneo.', pagina: 149 },
    ],
  },
};
