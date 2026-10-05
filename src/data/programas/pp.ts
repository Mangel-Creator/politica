import type { ResumenPrograma } from '../tipos';

/** PP, generales 23J 2023. Programa de 112 páginas con 365 medidas. */
export const ProgramaPP: ResumenPrograma = {
  partidoId: 'pp',
  eleccion: '23J 2023',
  ideasClave: [
    {
      texto:
        'Deflactar el IRPF, eliminar el impuesto a las grandes fortunas y bajar temporalmente el IVA de carne y pescado.',
      pagina: 23,
    },
    {
      texto: 'Derogar la Ley de Vivienda y avales para que menores de 35 años financien hasta el 95 % de la hipoteca.',
      pagina: 34,
    },
    { texto: 'Desalojos de okupas en un máximo de 24 horas y hasta 3 años de cárcel por usurpación.', pagina: 82 },
    { texto: 'Recuperar el delito de sedición y la malversación anterior a 2022.', pagina: 72 },
    { texto: 'Que los jueces elijan a los 12 vocales judiciales del CGPJ.', pagina: 75 },
  ],
  temas: {
    impuestos: [
      {
        texto:
          'Corregir la inflación en el IRPF (deflactar) y bajar temporalmente el IVA de carne, pescado y conservas.',
        pagina: 23,
      },
      { texto: 'Eliminar el impuesto a las grandes fortunas y simplificar IRPF y Sociedades para pymes.', pagina: 23 },
      { texto: 'Estatuto del Contribuyente con "derecho al error".', pagina: 23 },
      { texto: 'Mejor régimen fiscal para nuevos residentes que vengan a invertir.', pagina: 23 },
      { texto: 'Auditar al empezar las cuentas públicas y reforzar la AIReF.', pagina: 23 },
    ],
    economia: [
      { texto: '"Una norma nueva, tres eliminadas" y declaración responsable en lugar de licencias.', pagina: 15 },
      { texto: 'Ampliar el silencio administrativo positivo para abrir negocios.', pagina: 15 },
      { texto: 'Auditar los fondos europeos y gestionarlos con comunidades y ayuntamientos.', pagina: 25 },
      { texto: 'Que la industria llegue al 20 % del PIB con una estrategia de reindustrialización.', pagina: 26 },
      { texto: 'Pacto de Estado sobre la vivienda y plan de choque en Cercanías.', pagina: 33 },
    ],
    empleo: [
      { texto: 'Reforma de las políticas activas de empleo, con más libertad para elegir formación.', pagina: 19 },
      { texto: 'Actualizar el salario mínimo dentro del diálogo social.', pagina: 19 },
      { texto: 'Ingreso Mínimo Vital más compatible con trabajar y ligado a itinerarios de inserción.', pagina: 19 },
      { texto: 'Cuentas individuales para los trabajadores, portables entre empleos.', pagina: 20 },
      { texto: 'Tarifa 0 el primer año para nuevos autónomos y aplazar hasta 3 cuotas al año.', pagina: 20 },
    ],
    pensiones: [
      { texto: 'Revalorizar las pensiones según el Pacto de Toledo y reforzar la contributividad.', pagina: 19 },
      { texto: 'Facilitar a cada trabajador una estimación de su pensión futura.', pagina: 20 },
    ],
    igualdad: [
      { texto: 'Plan para reducir a la mitad la brecha de empleo entre hombres y mujeres.', pagina: 21 },
      { texto: 'Cumplir el Pacto de Estado contra la Violencia de Género.', pagina: 62 },
      { texto: 'Ley orgánica integral contra la trata con fines de explotación sexual.', pagina: 62 },
      { texto: 'Nueva ley de derechos de las personas trans "nacida del diálogo".', pagina: 64 },
      { texto: 'Revisar la ley del "solo sí es sí" dentro de una reforma del Código Penal.', pagina: 72 },
    ],
    vivienda: [
      { texto: 'Derogar la Ley de Vivienda.', pagina: 34 },
      { texto: 'Avales a menores de 35 años para hipotecas de hasta el 95 % del precio.', pagina: 34 },
      { texto: 'Movilizar suelo público para vivienda en alquiler asequible.', pagina: 34 },
      { texto: 'Desalojos de okupas en 24 horas y que no puedan empadronarse.', pagina: 82 },
    ],
    energia: [
      {
        texto: 'Alargar la vida de las centrales nucleares, si lo aprueba el Consejo de Seguridad Nuclear.',
        pagina: 38,
      },
      { texto: 'Eliminar las intervenciones excepcionales del mercado eléctrico.', pagina: 39 },
      { texto: 'Un Bono Social Único que sustituya a los bonos eléctrico y térmico.', pagina: 38 },
      { texto: 'Agilizar los permisos de renovables con una "tasa por hito" pagada por el promotor.', pagina: 38 },
      { texto: 'Pacto Nacional del Agua y plan de inversión en infraestructuras hidráulicas.', pagina: 37 },
    ],
    rural: [
      { texto: 'Ley de Desarrollo Rural para todo el país.', pagina: 32 },
      { texto: 'Bonificar impuestos (ITP, IBI) por comprar vivienda en el medio rural.', pagina: 32 },
      { texto: 'Rebajar costes laborales en Soria, Cuenca y Teruel.', pagina: 32 },
      { texto: 'Regadío moderno y seguros agrarios más sólidos.', pagina: 29 },
    ],
    sanidad: [
      { texto: 'Plan de choque en Atención Primaria con 1.000 plazas más de medicina familiar en 2024.', pagina: 45 },
      { texto: 'Jubilación activa de médicos de familia y pediatras hasta los 72 años.', pagina: 45 },
      { texto: 'Crear la especialidad de urgencias y emergencias.', pagina: 45 },
      { texto: 'Consentimiento de los padres para el aborto de menores.', pagina: 47 },
      { texto: 'Garantizar la objeción de conciencia de los sanitarios.', pagina: 47 },
      { texto: 'Blindar por ley la ayuda a los afectados por ELA.', pagina: 49 },
    ],
    educacion: [
      { texto: 'Reformar la LOMLOE y buscar un acuerdo social por la educación.', pagina: 50 },
      { texto: 'Educación de 0 a 3 años universal y gratuita, pagada al 50 % por Estado y comunidades.', pagina: 53 },
      { texto: 'En comunidades bilingües, ambas lenguas vehiculares.', pagina: 51 },
      { texto: 'Libertad de los padres para elegir centro público, privado o concertado.', pagina: 51 },
      { texto: 'Selectividad (EBAU) común en toda España.', pagina: 52 },
    ],
    social: [
      {
        texto: 'Pacto de Estado por la conciliación y la familia; prestación por hijo desde el 5.º mes de embarazo.',
        pagina: 53,
      },
      { texto: 'Título de familia numerosa hasta que el último hijo cumpla 26 años.', pagina: 53 },
      { texto: 'Estrategia nacional contra la soledad no deseada y más plazas residenciales.', pagina: 58 },
      { texto: 'Reformar la Constitución para quitar la palabra "disminuidos".', pagina: 60 },
    ],
    democracia: [
      {
        texto: 'Reformar la ley del Tribunal Constitucional: sin vínculos políticos en los últimos 5 años.',
        pagina: 71,
      },
      {
        texto: 'Jefes de AIReF, INE, CIS o Tribunal de Cuentas sin cargos políticos en los 5 años previos.',
        pagina: 71,
      },
      { texto: 'Derogar la Ley de Memoria Democrática y hacer otra "consensuada".', pagina: 72 },
      { texto: 'Limitar el uso de decretos ley y del procedimiento de urgencia.', pagina: 73 },
      { texto: 'Fiscal General con mandato de 5 años y desvinculado del Gobierno.', pagina: 75 },
      { texto: 'Que los jueces elijan a los 12 vocales judiciales del CGPJ; 1.000 jueces y fiscales más.', pagina: 75 },
    ],
    territorio: [
      { texto: 'Recuperar el delito de sedición y castigar referendos no autorizados.', pagina: 72 },
      { texto: 'Nueva financiación autonómica negociada con todas las comunidades.', pagina: 79 },
      { texto: 'Delimitar mejor las competencias de cada administración.', pagina: 79 },
      { texto: 'Más apoyo y financiación propia para Ceuta y Melilla.', pagina: 79 },
    ],
    seguridad: [
      { texto: 'Culminar la equiparación salarial de Policía Nacional y Guardia Civil.', pagina: 80 },
      {
        texto: 'Imprescriptibilidad de los delitos de terrorismo e investigar los 379 crímenes de ETA sin resolver.',
        pagina: 80,
      },
      { texto: 'Que los condenados por terrorismo no puedan ser candidatos sin arrepentimiento.', pagina: 81 },
      { texto: 'Ampliar la prisión permanente revisable a asesinatos con ocultación del cadáver.', pagina: 81 },
      { texto: 'Endurecer las penas por multirreincidencia en hurtos y estafas.', pagina: 81 },
    ],
    inmigracion: [
      { texto: 'Agilizar las órdenes de retorno de inmigrantes irregulares.', pagina: 81 },
      { texto: 'Más control fronterizo y coordinación con Frontex.', pagina: 81 },
      { texto: 'Equipos conjuntos de investigación migratoria con países africanos.', pagina: 81 },
      { texto: 'Pacto Europeo de Migración y Asilo.', pagina: 99 },
      { texto: 'Programa para atraer talento extranjero cualificado.', pagina: 16 },
    ],
    exterior: [
      { texto: 'Gastar el 2 % del PIB en defensa, como acordó la OTAN.', pagina: 103 },
      { texto: 'Llegar a 140.000 militares en dos legislaturas.', pagina: 103 },
      { texto: 'Reforzar relaciones con Estados Unidos e Iberoamérica.', pagina: 101 },
      { texto: 'Autonomía estratégica de la UE complementaria con la OTAN.', pagina: 99 },
    ],
  },
};
