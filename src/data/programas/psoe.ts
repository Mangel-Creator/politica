import type { ResumenPrograma } from '../tipos';

/**
 * PSOE, generales 23J 2023. Programa de 272 páginas, resumido entero. Gran parte del texto
 * repasa lo hecho en el Gobierno; aquí van todos los compromisos, sin el balance.
 */
export const ProgramaPSOE: ResumenPrograma = {
  partidoId: 'psoe',
  eleccion: '23J 2023',
  nota: 'Buena parte del documento repasa la gestión del Gobierno 2018-2023; aquí se recogen todos sus compromisos, resumidos y agrupados por tema. Los que se repiten en varias partes del programa aparecen una sola vez.',
  ideasClave: [
    { texto: 'Universidad y FP superior gratis para quien apruebe las asignaturas a la primera.', pagina: 116 },
    { texto: 'Transporte público urbano gratis para niños y estudiantes hasta 24 años.', pagina: 131 },
    { texto: 'Llegar al 20 % de vivienda pública en alquiler.', pagina: 222 },
    { texto: 'Blindar el poder adquisitivo de las pensiones en la Constitución.', pagina: 170 },
    { texto: 'Listas de espera máximas por ley: 120 días para operarse y 60 para el especialista.', pagina: 201 },
  ],
  enfoques: {
    vivienda: {
      texto:
        'Consolidar la vivienda como «quinto pilar» del Estado del bienestar, con mucha más vivienda pública de alquiler.',
      pagina: 221,
    },
    empleo: {
      texto: 'Un Pacto por el Pleno Empleo para bajar el paro a la media europea, con formación y diálogo social.',
      pagina: 25,
    },
    impuestos: {
      texto:
        'Una fiscalidad «justa» que ayude a las clases medias y trabajadoras y reparta mejor el coste de las crisis.',
      pagina: 37,
    },
    sanidad: {
      texto: 'Reforzar la sanidad pública y su equidad, con esperas máximas garantizadas por ley.',
      pagina: 200,
    },
    pensiones: {
      texto:
        'Mantener el poder adquisitivo de las pensiones y seguir subiendo las mínimas, con más ingresos para el sistema.',
      pagina: 170,
    },
    educacion: {
      texto:
        'Educación como «ascensor social»: escolarización gratuita de 0 a 18 años, más becas y una FP para millones de personas.',
      pagina: 102,
    },
    inmigracion: {
      texto: 'Reducir las llegadas irregulares y salvar vidas, con más vías de migración legal y ordenada.',
      pagina: 239,
    },
    territorio: {
      texto: 'Cooperación entre administraciones y un nuevo sistema de financiación autonómica.',
      pagina: 231,
    },
    democracia: {
      texto:
        'Más transparencia, una administración cercana y sin cita previa obligatoria y desarrollar la memoria democrática.',
      pagina: 240,
    },
    seguridad: {
      texto: 'Más agentes y medios para las Fuerzas de Seguridad, también en el medio rural.',
      pagina: 237,
    },
    igualdad: {
      texto:
        'Igualdad plena entre mujeres y hombres: en el empleo, paridad, lucha contra la violencia machista y abolición de la prostitución.',
      pagina: 139,
    },
    social: {
      texto: 'Más protección a familias, infancia, mayores y dependencia, y erradicar la pobreza.',
      pagina: 173,
    },
    energia: {
      texto:
        'Acelerar las renovables y la transición justa, con el transporte público y el tren como columna vertebral.',
      pagina: 74,
    },
    economia: {
      texto:
        'Crecer con los fondos europeos, la digitalización y una política industrial, manteniendo la consolidación fiscal.',
      pagina: 24,
    },
    rural: {
      texto: 'Un campo más rentable y sostenible y cerrar la brecha entre el medio rural y el urbano.',
      pagina: 66,
    },
    exterior: {
      texto: 'España como «motor de Europa», apoyo a Ucrania y una cooperación que llegue al 0,7 %.',
      pagina: 259,
    },
  },
  temas: {
    vivienda: [
      {
        texto:
          'Ampliar a rentas de hasta 37.800 € las ayudas a hipotecados: alargar el plazo hasta 7 años y congelar la cuota un año.',
        pagina: 32,
      },
      {
        texto: 'Pactar con la banca facilitar la amortización anticipada, pasar a tipo fijo y la dación en pago.',
        pagina: 32,
      },
      { texto: 'Rehabilitación energética de barrios compatible con más vivienda asequible.', pagina: 93 },
      { texto: 'Plan estratégico de vivienda rural y parques públicos de alquiler social en los pueblos.', pagina: 95 },
      { texto: 'Consolidar y ampliar el Bono Alquiler Joven para que llegue a toda la población joven.', pagina: 130 },
      { texto: 'Reforzar las ayudas directas al alquiler de los Planes Estatales de Vivienda.', pagina: 130 },
      {
        texto:
          'Avales del ICO de 2.500 millones: el Estado avala el 20 % de la hipoteca de la primera vivienda de menores de 35 años (unas 50.000 viviendas).',
        pagina: 130,
      },
      {
        texto: 'Aplicar la Ley de Vivienda para llegar al 20 % de parque público de alquiler, como Francia o Alemania.',
        pagina: 130,
      },
      {
        texto: 'Que el 30 % de las viviendas del Plan de Alquiler Asequible sean para jóvenes de 18 a 35 años.',
        pagina: 131,
      },
      { texto: 'Apoyo a los jóvenes para comprar vivienda en municipios de menos de 10.000 habitantes.', pagina: 131 },
      { texto: 'Ayudas directas para la vivienda en cooperativa o «cohousing».', pagina: 131 },
      { texto: 'Construir 183.000 viviendas públicas de alquiler, la mitad para jóvenes.', pagina: 131 },
      { texto: 'Más vivienda pública de alquiler priorizando renta e infancia.', pagina: 184 },
      {
        texto: 'Ayudas para accesibilidad y eficiencia en las viviendas de familias con hijos y pocos ingresos.',
        pagina: 184,
      },
      {
        texto: 'Diversificar los contratos de alquiler, sobre todo los temporales usados como primera vivienda.',
        pagina: 222,
      },
      {
        texto:
          'Plan de Alquiler Asequible: 15.000 viviendas con comunidades, 10.000 con ayuntamientos, 50.000 de Sepes y 63.000 con fondos europeos.',
        pagina: 222,
      },
      {
        texto: 'Más reserva de suelo para vivienda social y que la plusvalía urbanística financie la vivienda.',
        pagina: 223,
      },
      { texto: 'Derecho de superficie para promover alquiler asequible con el sector privado.', pagina: 223 },
      { texto: 'Prohibir descalificar o vender vivienda social, también a fondos de inversión.', pagina: 223 },
      {
        texto: 'Que al menos el 50 % del suelo reservado para vivienda protegida sea para alquiler social y asequible.',
        pagina: 223,
      },
      { texto: 'Acuerdos con la banca para movilizar viviendas vacías hacia uso social.', pagina: 223 },
      { texto: 'Incentivos a la rehabilitación para poner viviendas en alquiler asequible.', pagina: 223 },
      {
        texto: '50.000 viviendas de la Sareb para alquiler social y 11.000 del Fondo Social de Viviendas de la banca.',
        pagina: 223,
      },
      { texto: 'Viviendas en suelos dotacionales públicos, con los ayuntamientos.', pagina: 223 },
      { texto: 'Rehabilitar más de 500.000 viviendas en la legislatura.', pagina: 225 },
      { texto: 'Permitir cambios de uso para convertir edificios sin utilizar en viviendas.', pagina: 225 },
      { texto: 'Un clúster de industrialización y prefabricación de vivienda.', pagina: 225 },
      {
        texto:
          'Regular el «cohousing», los apartamentos dotacionales, las viviendas intergeneracionales y las cooperativas de cesión de uso.',
        pagina: 225,
      },
      {
        texto:
          'Una cuenta de ahorro vivienda para menores de 39 años, exenta de IRPF hasta 2.000 € al año y 30.000 € en total.',
        pagina: 226,
      },
      {
        texto: 'Incentivos de alquiler para empleados públicos en zonas con difícil acceso a la vivienda.',
        pagina: 243,
      },
      { texto: 'Reforma para desalojar a los ocupantes ilegales en un máximo de 48 horas.', pagina: 251 },
    ],
    empleo: [
      {
        texto:
          'Un Pacto por el Pleno Empleo con los agentes sociales para bajar el paro estructural al 8 %, la media europea.',
        pagina: 25,
      },
      {
        texto: 'Integrar los sistemas del SEPE y la Seguridad Social con IA para casar vacantes y parados.',
        pagina: 25,
      },
      { texto: 'Microacreditaciones: cursos cortos de recualificación para la economía verde y digital.', pagina: 26 },
      { texto: 'Plan de choque contra el paro juvenil: «formación + empleo» en 12 meses.', pagina: 26 },
      {
        texto:
          'Prácticas en empresa con el salario mínimo y la Seguridad Social cubiertos para jóvenes con un año en paro.',
        pagina: 26,
      },
      {
        texto: 'Fijar en el Estatuto de los Trabajadores que el salario mínimo se acompase al 60 % del salario medio.',
        pagina: 26,
      },
      {
        texto:
          'Reformar la protección de los parados de larga duración e incentivar el empleo de quien cobra subsidios o el IMV.',
        pagina: 26,
      },
      { texto: 'Dotar el mecanismo RED para recualificar trabajadores en crisis.', pagina: 27 },
      {
        texto: 'Aplicar el acuerdo de negociación colectiva para que los salarios ganen poder adquisitivo.',
        pagina: 32,
      },
      { texto: 'Armonizar la protección laboral de las camareras de piso.', pagina: 43 },
      {
        texto: 'Seguir con el proyecto piloto de reducción de jornada sin bajar el sueldo en la industria.',
        pagina: 50,
      },
      { texto: 'Acompañar a los trabajadores afectados por la inteligencia artificial.', pagina: 58 },
      { texto: 'Más de 700.000 empleos ligados a la transición verde.', pagina: 75 },
      { texto: 'Plan para facilitar el carnet de camión y atraer jóvenes y mujeres a la profesión.', pagina: 81 },
      { texto: 'Aprobar el Estatuto del Becario pactado con los agentes sociales.', pagina: 128 },
      { texto: 'Más ayudas para preparar oposiciones a menores de 35 años.', pagina: 129 },
      { texto: 'Reformar la Ley de Prevención de Riesgos Laborales con perspectiva de género.', pagina: 140 },
      {
        texto:
          'Reconocer enfermedades profesionales de trabajos feminizados, como camareras de piso, dependencia o limpieza.',
        pagina: 140,
      },
      { texto: 'Revalorizar los empleos de cuidados y sus salarios.', pagina: 144 },
      { texto: 'Planes para retener el talento sénior y prevenir el edadismo en la contratación.', pagina: 178 },
      { texto: 'Un nuevo marco legal de empleo de las personas con discapacidad.', pagina: 193 },
      {
        texto: 'Investigar las muertes en el trabajo por causas no traumáticas y prevenir los riesgos psicosociales.',
        pagina: 205,
      },
      { texto: 'Revisar el cuadro de enfermedades profesionales con perspectiva de género.', pagina: 206 },
      { texto: 'Mejorar el derecho a la desconexión digital de los trabajadores.', pagina: 236 },
      { texto: 'Más becas para opositores, material gratuito y exámenes descentralizados.', pagina: 243 },
    ],
    impuestos: [
      { texto: 'Subir en el IRPF el mínimo por hijos y personas dependientes.', pagina: 33 },
      { texto: 'Reforma fiscal para las familias: más incentivos por hijo y por dependencia.', pagina: 38 },
      { texto: 'Mejor fiscalidad para autónomos y pymes que inviertan en la transición verde y digital.', pagina: 38 },
      { texto: 'Un Pacto de Estado contra el Fraude Fiscal y más plantilla en la Agencia Tributaria.', pagina: 38 },
      { texto: 'Impulsar en la UE una tributación mínima de Sociedades para las multinacionales.', pagina: 39 },
      { texto: 'Evaluar la prórroga de los gravámenes temporales a la banca y las energéticas.', pagina: 39 },
      {
        texto:
          'Evaluar el impuesto de grandes fortunas y debatir la tributación de la riqueza en la financiación autonómica.',
        pagina: 39,
      },
      { texto: 'Fiscalidad verde («quien contamina paga») con compensaciones a las clases medias.', pagina: 39 },
      { texto: 'Una herramienta para que cada contribuyente sepa a qué se destinan sus impuestos.', pagina: 39 },
      {
        texto: 'Igualar las deducciones fiscales de las artes escénicas y la música con las del cine y las series.',
        pagina: 125,
      },
      {
        texto: 'Universalizar la deducción por hijo a cargo, también para quien no la puede aplicar en el IRPF.',
        pagina: 182,
      },
      {
        texto: 'Que las confesiones religiosas tengan el mismo régimen fiscal que las entidades sin ánimo de lucro.',
        pagina: 254,
      },
    ],
    sanidad: [
      {
        texto:
          'Que centros y empresas españolas produzcan al menos 10 nuevas terapias avanzadas para la sanidad pública.',
        pagina: 119,
      },
      { texto: 'Un Pacto de Estado por la Salud Mental con atención especial a los jóvenes.', pagina: 131 },
      { texto: 'Una estrategia nacional contra el suicidio juvenil.', pagina: 131 },
      {
        texto: 'Regular los vapeadores y los productos de tabaco con sabores y ampliar los espacios sin humo.',
        pagina: 131,
      },
      { texto: 'Preservativos y anticonceptivos gratis para jóvenes, en lugares que frecuentan.', pagina: 132 },
      { texto: 'Modernizar los programas contra las adicciones.', pagina: 132 },
      { texto: 'Una Estrategia de Salud con perspectiva de género del Sistema Nacional de Salud.', pagina: 161 },
      {
        texto:
          'Investigación sobre sesgos de género en el diagnóstico, menopausia y endometriosis, y un informe sobre la menopausia.',
        pagina: 161,
      },
      { texto: 'Una estrategia contra la sobremedicalización que afecta sobre todo a las mujeres.', pagina: 161 },
      {
        texto: 'Un catálogo de las diferencias de síntomas entre mujeres y hombres en las enfermedades más frecuentes.',
        pagina: 162,
      },
      { texto: 'Dentista, salud mental, gafas y audífonos para todos los menores.', pagina: 183 },
      { texto: 'Plan contra la obesidad infantil y el programa «Patios Abiertos».', pagina: 183 },
      {
        texto: 'Aprobar la Ley de Equidad: universalidad, cartera común y prohibir nuevos copagos sanitarios.',
        pagina: 200,
      },
      { texto: 'Crear la Agencia Estatal de Salud Pública y un plan ante amenazas sanitarias.', pagina: 200 },
      { texto: 'Diagnóstico genómico en todo el sistema, empezando por el cáncer.', pagina: 201 },
      { texto: 'Una Ley de donantes vivos.', pagina: 201 },
      { texto: 'Ayudas para el gasto energético de pacientes con terapias electrodependientes.', pagina: 201 },
      {
        texto: 'Red Estatal de Vigilancia en Salud Pública que incluya cáncer y enfermedades cardiovasculares.',
        pagina: 201,
      },
      { texto: 'Protocolo interministerial para pacientes con ELA y sus familias.', pagina: 201 },
      {
        texto: 'Fijar por ley esperas máximas de 120 días para operar, 60 para el especialista y 30 para pruebas.',
        pagina: 201,
      },
      { texto: 'Revisar el Estatuto Marco del personal sanitario.', pagina: 201 },
      { texto: 'Jubilación activa hasta los 72 años en especialidades con falta de médicos.', pagina: 202 },
      {
        texto: 'Hasta un 15 % más de plazas en el grado de Medicina y una asignatura de atención primaria.',
        pagina: 202,
      },
      { texto: 'Enfermería de Práctica Avanzada.', pagina: 202 },
      { texto: 'Un «Erasmus rural» para estudiantes de Medicina y Enfermería.', pagina: 202 },
      { texto: 'Nuevas especialidades: urgencias, enfermedades infecciosas, deporte y genética.', pagina: 202 },
      { texto: 'Acreditación en cuidados paliativos.', pagina: 202 },
      { texto: 'Espera máxima de 15 días en salud mental para menores de 21 años.', pagina: 203 },
      {
        texto: 'Hasta un 30 % más de plazas de formación en salud mental y más profesionales en la línea 024.',
        pagina: 203,
      },
      { texto: 'Atención psicológica a pacientes de cáncer y enfermedades raras desde el diagnóstico.', pagina: 203 },
      { texto: 'Ayudas o IVA superreducido para la dieta sin gluten.', pagina: 203 },
      { texto: 'Atención a los afectados por la polio, según la Ley de Memoria Democrática.', pagina: 203 },
      { texto: 'Historia clínica accesible en todo el territorio y receta electrónica europea.', pagina: 203 },
      { texto: 'Desarrollar el derecho al olvido oncológico.', pagina: 203 },
      { texto: 'Ampliar los cribados de cáncer, incluidos pulmón, próstata y gástrico tras su estudio.', pagina: 203 },
      { texto: 'Normas contra el intrusismo sanitario y más control de los centros de cirugía estética.', pagina: 204 },
      { texto: 'Empastes e implantes dentales en la sanidad pública, empezando por mayores de 75 años.', pagina: 204 },
      { texto: 'Ayudas para gafas y lentillas a menores de familias con menos recursos.', pagina: 204 },
      { texto: 'Una autoridad independiente que evalúe la financiación y el precio de los medicamentos.', pagina: 204 },
      { texto: 'Una nueva ley farmacéutica y apoyo a genéricos y biosimilares.', pagina: 204 },
      {
        texto:
          'Reducir el copago farmacéutico a rentas de menos de 18.000 € y mantener la gratuidad a los vulnerables.',
        pagina: 204,
      },
      { texto: 'Uso terapéutico del cannabis.', pagina: 204 },
      { texto: 'Nutricionistas en los ayuntamientos.', pagina: 204 },
      { texto: 'Una red estatal de escuelas saludables para 300.000 alumnos.', pagina: 205 },
      { texto: 'Poner fin a la pandemia del VIH en 2030 y contra el estigma.', pagina: 205 },
      { texto: 'Una ley para proteger a los menores del alcohol.', pagina: 206 },
      { texto: 'Estrategia Nacional de Adicciones 2025-2032.', pagina: 206 },
      { texto: 'Mejor etiquetado nutricional y promoción de la dieta mediterránea.', pagina: 211 },
      { texto: 'Formación de profesionales contra el «chemsex».', pagina: 216 },
      { texto: 'Estrategia Nacional contra el sedentarismo.', pagina: 220 },
      {
        texto:
          'Recuperar la asistencia sanitaria de los españoles en el exterior, derogando la retirada de la tarjeta a los 90 días.',
        pagina: 267,
      },
    ],
    pensiones: [
      { texto: 'Seguir llenando la «hucha» de las pensiones.', pagina: 25 },
      { texto: 'Desarrollar los fondos de pensiones de empleo como segundo pilar.', pagina: 25 },
      { texto: 'Reconocer a cada progenitor un año cotizado por cada hijo.', pagina: 143 },
      { texto: 'Seguir subiendo la pensión mínima hasta la media europea.', pagina: 163 },
      { texto: 'Blindar en la Constitución el poder adquisitivo de las pensiones.', pagina: 170 },
      { texto: 'Seguir subiendo las pensiones mínimas y no contributivas.', pagina: 170 },
      { texto: 'Subir un 10 % adicional el complemento contra la brecha de género en 2026-2027.', pagina: 171 },
      { texto: 'Nuevas jubilaciones parcial y activa, con relevistas indefinidos.', pagina: 171 },
      { texto: 'Regular la jubilación anticipada en trabajos especialmente penosos.', pagina: 171 },
      { texto: 'Mejorar las pensiones de orfandad y las de viudedad de las viudas vulnerables.', pagina: 171 },
      {
        texto:
          'Que el Estado asuma todos los gastos impropios y un Fondo de Reserva de más de 20.000 millones en 2027.',
        pagina: 172,
      },
    ],
    educacion: [
      { texto: 'Educación financiera en bachillerato y FP, también sobre criptoactivos.', pagina: 34 },
      {
        texto: 'Universalizar la escolarización de 0 a 18 años con plazas públicas gratuitas, sin hacerla obligatoria.',
        pagina: 103,
      },
      { texto: 'Apoyo a la escuela rural para mantenerla en los pueblos más pequeños.', pagina: 103 },
      { texto: 'Refuerzo educativo extraescolar y más orientadores en centros de complejidad social.', pagina: 103 },
      { texto: 'Becas para intercambios internacionales en bachillerato y FP de grado medio.', pagina: 103 },
      { texto: 'Reforzar el programa Código Escuela 4.0 de robótica y programación.', pagina: 103 },
      { texto: 'Entornos escolares pacificados y caminos escolares seguros.', pagina: 104 },
      { texto: 'Una Ley de Ordenación de las Enseñanzas Artísticas.', pagina: 104 },
      { texto: 'Reforzar la educación de adultos.', pagina: 104 },
      {
        texto: 'Tolerancia cero con el acoso escolar y reforzar el Observatorio Estatal para la Convivencia.',
        pagina: 104,
      },
      { texto: 'Mediación escolar y un coordinador de bienestar en todos los centros.', pagina: 105 },
      { texto: 'Más especialistas en salud mental en los centros.', pagina: 105 },
      { texto: 'Bajar la ratio de alumnos en los centros con proyecto de mejora.', pagina: 105 },
      {
        texto: 'Educación inclusiva con recursos en centros ordinarios, respetando la elección de educación especial.',
        pagina: 105,
      },
      { texto: 'Climatizar centros y renaturalizar patios.', pagina: 105 },
      { texto: 'Fomentar vocaciones científicas, sobre todo entre las niñas.', pagina: 105 },
      { texto: 'Planes de lectura y de mejora de las matemáticas.', pagina: 106 },
      { texto: 'Premios nacionales de educación ambiental.', pagina: 106 },
      {
        texto: 'Educación afectivo-sexual frente a la pornografía y educación emocional en el currículo.',
        pagina: 107,
      },
      { texto: 'Un Instituto de Desarrollo Curricular.', pagina: 107 },
      {
        texto: 'Combatir la segregación actualizando los módulos de la concertada para que no haya cuotas ocultas.',
        pagina: 107,
      },
      { texto: 'Nueva carrera docente y Estatuto del Docente.', pagina: 107 },
      { texto: 'Menos burocracia para el profesorado.', pagina: 107 },
      {
        texto: 'Equiparar los niveles profesionales de los cuerpos docentes y reformar la formación inicial.',
        pagina: 108,
      },
      {
        texto: 'Formación del profesorado en igualdad, educación afectivo-sexual y violencia contra la infancia.',
        pagina: 108,
      },
      { texto: 'Cambiar el acceso a la función docente para seleccionar mejor.', pagina: 108 },
      {
        texto: 'Programa de conciliación: actividades extraescolares y refuerzo gratuitos en los centros públicos.',
        pagina: 109,
      },
      { texto: 'Ayudas de comedor y apertura ampliada de los centros.', pagina: 109 },
      { texto: 'Gratuidad de libros de texto y ayudas para material escolar.', pagina: 109 },
      { texto: 'Más becas, exención de tasas de la prueba de acceso y eliminar la cuantía variable.', pagina: 109 },
      { texto: 'Un Observatorio de la Equidad Educativa.', pagina: 109 },
      { texto: 'Más participación del alumnado y escuelas de ciudadanía democrática.', pagina: 110 },
      { texto: 'Nuevas titulaciones de FP para perfiles emergentes y microformaciones.', pagina: 112 },
      { texto: 'Ayudas a las empresas, sobre todo pymes, que colaboren en la FP dual.', pagina: 113 },
      { texto: 'Ayudas de transporte para alumnos de FP a más de 20 km del centro.', pagina: 113 },
      { texto: 'Formación profesional para 3 millones de personas al año y más plazas públicas.', pagina: 113 },
      { texto: 'Acreditar a todos los trabajadores las competencias adquiridas trabajando.', pagina: 114 },
      { texto: 'La orientación profesional como nuevo derecho, con unidades en los ayuntamientos.', pagina: 114 },
      { texto: 'Centros de FP del siglo XXI con realidad virtual, simuladores y viveros de empresas.', pagina: 114 },
      {
        texto:
          'Universidad y FP superior gratis para quien apruebe a la primera: crédito aprobado, crédito gratis el curso siguiente.',
        pagina: 116,
      },
      { texto: 'Más becas, más Erasmus y reducir las tasas universitarias.', pagina: 116 },
      { texto: 'Más empleo público y menos temporalidad del personal universitario.', pagina: 116 },
      { texto: 'Un registro único de plazas universitarias y acreditaciones más rápidas.', pagina: 116 },
      { texto: 'Unidades de igualdad y prevención del acoso en las universidades.', pagina: 116 },
      {
        texto: 'Vigilar que las universidades privadas cumplan los requisitos de calidad e investigación.',
        pagina: 117,
      },
      { texto: 'Reconocer títulos de forma casi automática, sobre todo los europeos.', pagina: 117 },
      {
        texto: 'Un plan para que las clases particulares y las extraescolares no aumenten la desigualdad.',
        pagina: 129,
      },
      { texto: 'Bonos para que los jóvenes estudien idiomas en el extranjero.', pagina: 129 },
      { texto: 'Universalizar la educación de 0 a 3 años.', pagina: 143 },
      { texto: 'Reforzar la educación sexual según la LOMLOE e informar a las familias.', pagina: 157 },
      { texto: 'Becas según la renta del hogar y no solo según las notas.', pagina: 183 },
      { texto: 'Becas de inglés para menores de familias con pocos recursos.', pagina: 183 },
      {
        texto:
          'Comedor escolar para todos los niños, también en infantil y secundaria, priorizando zonas de menor renta.',
        pagina: 183,
      },
      { texto: 'Programa escolar de fruta, verdura y leche.', pagina: 183 },
      { texto: 'Plan de educación inclusiva con recursos para el alumnado con discapacidad.', pagina: 192 },
    ],
    inmigracion: [
      { texto: 'Una política migratoria que reduzca las llegadas irregulares y salve vidas.', pagina: 239 },
      { texto: 'Desmantelar en origen las mafias de tráfico de personas.', pagina: 239 },
      { texto: 'Reforzar la Oficina de Asilo y Refugio.', pagina: 239 },
      { texto: 'Agilizar la obtención de la nacionalidad.', pagina: 250 },
      { texto: 'Más capacidad y gestión pública estable del sistema de acogida.', pagina: 255 },
      { texto: 'Perspectiva de género en la acogida y centros para quien pida asilo por LGTBIfobia.', pagina: 255 },
      { texto: 'Más vías de migración regular, como los convenios de migración circular.', pagina: 256 },
      { texto: 'Simplificar los procedimientos y cambiar el modelo de las oficinas de extranjería.', pagina: 256 },
      {
        texto: 'Facilitar el trabajo a los inmigrantes que ya están en España, compatibilizando estudios y empleo.',
        pagina: 256,
      },
      { texto: 'Programas de acogida educativa para el alumnado extranjero.', pagina: 257 },
    ],
    territorio: [
      { texto: 'Nuevas sedes de organismos del Estado fuera de Madrid, como en Soria, Teruel o Cuenca.', pagina: 96 },
      { texto: 'Una Ley de Cohesión Territorial para la cooperación entre administraciones.', pagina: 231 },
      { texto: 'Seguir trasladando sedes de organismos públicos fuera de Madrid.', pagina: 231 },
      {
        texto: 'Conferencia de Presidentes como máximo órgano de cogobernanza y conferencias sectoriales coordinadas.',
        pagina: 231,
      },
      { texto: 'Programa «La Administración cerca de ti» en más de 3.000 municipios.', pagina: 232 },
      { texto: 'Reformar a fondo la Ley de Bases de Régimen Local y mejorar la financiación local.', pagina: 232 },
      { texto: 'Un Estatuto de Municipios de Menor Población que simplifique sus trámites.', pagina: 232 },
      { texto: 'Aprobar en un año un nuevo sistema de financiación autonómica.', pagina: 234 },
      {
        texto:
          'Que la financiación autonómica impulse un gasto de al menos el 7 % del PIB en sanidad, el 5 % en educación y el 2 % en servicios sociales.',
        pagina: 234,
      },
      {
        texto:
          'Reconocer en la financiación el mayor coste de la población, la superficie o la insularidad y reforzar la corresponsabilidad fiscal.',
        pagina: 234,
      },
      {
        texto: 'Más rapidez y más dinero en las ayudas por catástrofes naturales, sobre todo en zonas rurales.',
        pagina: 234,
      },
    ],
    democracia: [
      {
        texto: 'Incorporar la Carta de Derechos Digitales a la ley, con atención a menores y neurotecnologías.',
        pagina: 29,
      },
      { texto: 'Planes contra la desinformación que afecte a la seguridad o a las instituciones.', pagina: 54 },
      { texto: 'Un marco de datos abiertos de las administraciones.', pagina: 59 },
      { texto: 'Reforzar el acceso a la información, la participación y la justicia ambiental.', pagina: 87 },
      { texto: 'Asesoramiento científico al Gobierno y al Parlamento.', pagina: 120 },
      {
        texto:
          'Blindar como derechos fundamentales el matrimonio igualitario, el aborto, la muerte digna, las pensiones públicas, la sanidad y el agua.',
        pagina: 235,
      },
      { texto: 'Aplicar el II Plan Nacional de Derechos Humanos.', pagina: 235 },
      { texto: 'Regular el testamento digital.', pagina: 236 },
      {
        texto: 'Una cartera básica de servicios públicos en lenguaje claro y una agenda ciudadana individual.',
        pagina: 240,
      },
      {
        texto:
          'Atención presencial sin cita previa obligatoria y un punto presencial de todas las administraciones en cada municipio de menos de 5.000 habitantes.',
        pagina: 240,
      },
      { texto: 'Tiempo máximo de respuesta por ley: 30 días para el paro o la dependencia.', pagina: 240 },
      {
        texto:
          'Un asistente personal para ayudar en los trámites a quien tenga dificultades y atención preferente a mayores de 65.',
        pagina: 241,
      },
      { texto: 'Carrera profesional y relevo generacional en la función pública.', pagina: 241 },
      { texto: 'Ofertas de empleo público plurianuales y terminar la estabilización de interinos.', pagina: 242 },
      { texto: 'Aprobar la Ley de Función Pública con evaluación del desempeño y retribución variable.', pagina: 242 },
      { texto: 'Puesto de trabajo digital, teletrabajo y desconexión para los empleados públicos.', pagina: 242 },
      { texto: 'Convertir el INAP en la gran agencia del empleo público.', pagina: 242 },
      { texto: 'Reservar el 10 % de las plazas públicas a personas con discapacidad.', pagina: 242 },
      {
        texto: 'Una Ley de Lobbies con registro público y una ley de incompatibilidades contra las puertas giratorias.',
        pagina: 243,
      },
      { texto: 'V Plan de Gobierno Abierto.', pagina: 243 },
      { texto: 'Un informe anual sobre el cumplimiento de los derechos de la Constitución.', pagina: 244 },
      { texto: 'Oposiciones territorializadas para no tener que cambiar de provincia.', pagina: 244 },
      {
        texto:
          'Culminar la reforma de la Ley de Transparencia y publicar de oficio las agendas, los viajes, los bienes y las compatibilidades de los altos cargos.',
        pagina: 246,
      },
      { texto: 'Suprimir los aforamientos en lo que no tenga que ver con el ejercicio del cargo.', pagina: 246 },
      { texto: 'Un nuevo Estatuto del Consejo de Transparencia.', pagina: 246 },
      {
        texto: 'Estrategia Nacional Anticorrupción y poner en marcha la Autoridad de Protección del Informante.',
        pagina: 246,
      },
      { texto: 'Estrategia Nacional contra las campañas de desinformación.', pagina: 246 },
      { texto: 'Laboratorios de participación y procesos de democracia deliberativa.', pagina: 246 },
      { texto: 'Huella normativa con participación ciudadana, también de menores.', pagina: 247 },
      { texto: 'Renovar el CGPJ con el sistema actual, de doble legitimación.', pagina: 248 },
      { texto: 'Debates electorales obligatorios por ley.', pagina: 247 },
      { texto: 'Reforzar el Pacto Antitransfuguismo.', pagina: 247 },
      { texto: 'Desarrollar el Plan Justicia 2030 y la Carta de Derechos ante la Justicia.', pagina: 248 },
      { texto: 'Más justicia gratuita y mejor turno de oficio y aprobar la Ley de Derecho de Defensa.', pagina: 248 },
      { texto: 'Mediación y justicia restaurativa.', pagina: 248 },
      { texto: 'Más jueces y fiscales para acercarse a la media europea.', pagina: 248 },
      { texto: 'Más becas para acceder a las carreras judiciales y fiscales.', pagina: 249 },
      { texto: 'Leyes de Eficiencia del Servicio Público de Justicia: organizativa, procesal y digital.', pagina: 249 },
      { texto: 'Todos los juzgados conectados digitalmente y «papel cero» en esta legislatura.', pagina: 249 },
      { texto: 'Una Carpeta Justicia para consultar expedientes desde cualquier dispositivo.', pagina: 249 },
      { texto: 'Oficinas de Justicia en los municipios en lugar de los Juzgados de Paz.', pagina: 250 },
      { texto: 'Reforma integral de la Ley de Enjuiciamiento Criminal.', pagina: 250 },
      {
        texto:
          'Exhumar todas las fosas localizadas antes del final de la legislatura, con un Banco Estatal de ADN y un censo de víctimas.',
        pagina: 252,
      },
      {
        texto:
          'Retirar los símbolos franquistas y extinguir las fundaciones o ilegalizar las asociaciones que hagan apología del franquismo.',
        pagina: 253,
      },
      {
        texto:
          'Reconocer el papel de las mujeres en la conquista de la democracia y la represión específica que sufrieron.',
        pagina: 253,
      },
      { texto: 'Culminar la resignificación del Valle de Cuelgamuros con un centro de interpretación.', pagina: 253 },
      {
        texto:
          'Reconocer el exilio republicano y a los españoles de los campos nazis y crear un gran Centro de la Memoria Democrática.',
        pagina: 253,
      },
      { texto: 'Neutralidad religiosa en los actos públicos del Estado.', pagina: 254 },
      { texto: 'Avanzar con la Iglesia católica en su compromiso de autofinanciarse.', pagina: 254 },
    ],
    seguridad: [
      {
        texto: 'Estrategia «visión cero» de seguridad vial y carreteras 2+1 con carril de adelantamiento.',
        pagina: 83,
      },
      { texto: 'Reforzar el salvamento marítimo y la lucha contra la contaminación marina.', pagina: 83 },
      { texto: 'Rehabilitar al menos 160 cuarteles de la Guardia Civil en municipios rurales.', pagina: 96 },
      { texto: 'Seguir aumentando los efectivos de la Guardia Civil.', pagina: 96 },
      { texto: 'Más agentes, medios y formación en ciberseguridad para las Fuerzas de Seguridad.', pagina: 237 },
      {
        texto: 'Especialidades de la Guardia Civil en ciberseguridad y violencia de género también en zonas rurales.',
        pagina: 237,
      },
      { texto: 'Combatir las mafias de la ocupación de viviendas.', pagina: 238 },
      { texto: 'Políticas de reinserción en prisiones para evitar la reincidencia.', pagina: 238 },
      { texto: 'Actualizar la regulación de la seguridad privada.', pagina: 238 },
      {
        texto: 'Reforzar el Sistema Nacional de Protección Civil y las ayudas a afectados por catástrofes.',
        pagina: 238,
      },
      { texto: 'Igualdad entre mujeres y hombres en la Policía y la Guardia Civil.', pagina: 239 },
      {
        texto: 'Una Ley integral contra la trata y la explotación de seres humanos, incluida la esclavitud.',
        pagina: 250,
      },
      { texto: 'Plan contra los delitos de odio, sobre todo en internet.', pagina: 250 },
      {
        texto: 'Ley de Equipos Conjuntos de Investigación y agentes encubiertos para asesinatos y desapariciones.',
        pagina: 251,
      },
      { texto: 'Más medios contra el crimen organizado.', pagina: 251 },
      { texto: 'Reforzar la defensa europea y la participación en los proyectos PESCO.', pagina: 269 },
      { texto: 'Mantener las misiones internacionales, como la del Líbano.', pagina: 269 },
      { texto: 'Más presupuesto de Defensa según los compromisos internacionales.', pagina: 270 },
      {
        texto:
          'Mantener los programas de vehículos 8x8, fragatas F-110, submarinos S-80, FCAS, cazas Halcón y drones Euromale.',
        pagina: 270,
      },
      {
        texto:
          'Centro de I+D de defensa en Jaén (220 millones y 2.500 empleos) y una unidad de drones de la UME en León.',
        pagina: 270,
      },
      {
        texto: 'Salidas profesionales para los militares de tropa y marinería y conciliación en las Fuerzas Armadas.',
        pagina: 271,
      },
    ],
    igualdad: [
      {
        texto: 'Un fondo de impacto social de 400 millones para el emprendimiento de mujeres en el territorio.',
        pagina: 96,
      },
      { texto: 'Un Observatorio de Igualdad de Género en la cultura.', pagina: 124 },
      {
        texto:
          'Educación afectivo-sexual frente a la pornografía y a la «pseudoprostitución» (sugardaddismo, loverboy).',
        pagina: 132,
      },
      { texto: 'Puntos violeta y ocio seguro en fiestas y eventos.', pagina: 132 },
      { texto: 'Más campañas contra la LGTBIfobia entre jóvenes.', pagina: 132 },
      {
        texto: 'Eliminar la brecha salarial con transparencia salarial, más inspecciones y más sanciones.',
        pagina: 140,
      },
      { texto: 'Una Oficina Estatal contra la discriminación en la Inspección de Trabajo.', pagina: 140 },
      {
        texto:
          'Plan para incorporar a las mujeres a los empleos de la economía digital y verde y financiar su emprendimiento.',
        pagina: 141,
      },
      { texto: 'Reservas de plazas para mujeres en los planes de reconversión.', pagina: 142 },
      {
        texto:
          'Ley de Paridad: listas cremallera, Gobierno paritario y 40 % de mujeres en consejos de administración y colegios profesionales.',
        pagina: 146,
      },
      { texto: 'Estadísticas públicas que midan mejor la desigualdad de género.', pagina: 147 },
      { texto: 'Más investigadoras, con los criterios de género de Horizonte Europa.', pagina: 147 },
      {
        texto: 'Planes contra los estereotipos de género en profesiones industriales, tecnológicas y de cuidados.',
        pagina: 148,
      },
      { texto: 'Certificar algoritmos de IA sin sesgos de género.', pagina: 149 },
      {
        texto:
          'Que la titularidad compartida de las explotaciones sea efectiva y apoyo a las asociaciones de mujeres rurales.',
        pagina: 150,
      },
      { texto: 'Recuperar los consejos locales de participación de las mujeres.', pagina: 151 },
      { texto: 'Un plan contra la violencia de género en el medio rural.', pagina: 151 },
      { texto: 'Cribado universal de violencia de género en los centros de salud.', pagina: 151 },
      { texto: 'Renovar el Pacto de Estado contra la Violencia de Género.', pagina: 152 },
      {
        texto: 'Unidades de Valoración Forense y juzgados de violencia contra la mujer en todo el territorio.',
        pagina: 152,
      },
      { texto: 'Más recursos contra la violencia que sufren las mujeres y niñas con discapacidad.', pagina: 152 },
      {
        texto: 'Que los huérfanos de la violencia de género tengan acceso a recursos como víctimas hasta los 26 años.',
        pagina: 153,
      },
      { texto: 'Un plan contra la violencia de género en internet.', pagina: 153 },
      {
        texto:
          'Incluir la ciberviolencia, la prostitución y los vientres de alquiler en el delito europeo de violencia de género.',
        pagina: 153,
      },
      {
        texto: 'Que las grandes plataformas retiren de inmediato el material íntimo difundido sin consentimiento.',
        pagina: 154,
      },
      { texto: 'Más atención a las víctimas de sumisión química.', pagina: 154 },
      { texto: 'Más presencia policial y judicial y ventanilla única para víctimas en los pueblos.', pagina: 154 },
      { texto: 'Programas para implicar a hombres y jóvenes en la prevención de la violencia machista.', pagina: 155 },
      { texto: 'Empleo para mujeres víctimas de violencia de género.', pagina: 155 },
      {
        texto:
          'Recursos para desarrollar la Ley de Libertad Sexual y atención especializada a víctimas de violencia sexual.',
        pagina: 155,
      },
      {
        texto:
          'Abolir la prostitución: ley que prohíba el proxenetismo en todas sus formas, incluida la tercería locativa.',
        pagina: 158,
      },
      {
        texto:
          'Un marco integral para que las víctimas de trata y prostitución puedan salir, con un estatuto de víctima.',
        pagina: 158,
      },
      { texto: 'Aprobar la ley integral contra la trata con fines de explotación sexual.', pagina: 158 },
      { texto: 'Actuar contra las agencias de gestación subrogada y que la UE la considere delito.', pagina: 159 },
      {
        texto:
          'Garantizar el aborto en todas las comunidades, también en el medio rural, con método quirúrgico y farmacológico.',
        pagina: 160,
      },
      {
        texto: 'Zonas de seguridad alrededor de las clínicas de aborto y perseguir el acoso a las mujeres.',
        pagina: 160,
      },
      { texto: 'Campañas sobre anticoncepción para jóvenes.', pagina: 160 },
      { texto: 'Un Pacto de Estado contra la LGTBIfobia.', pagina: 215 },
      { texto: 'Tipificar como delito las terapias de conversión.', pagina: 215 },
      { texto: 'Libre circulación de las familias LGTBI en la UE.', pagina: 215 },
      { texto: 'Memoria histórica LGTBI.', pagina: 216 },
      { texto: 'Un Pacto de Estado contra los delitos de odio.', pagina: 217 },
      { texto: 'Poner en marcha la Autoridad Independiente para la Igualdad de Trato.', pagina: 217 },
      { texto: 'Un Plan contra el Racismo.', pagina: 217 },
      {
        texto:
          'Desarrollar el Pacto de Estado contra el Antigitanismo y una comisión de memoria y reconciliación con el pueblo gitano.',
        pagina: 219,
      },
      { texto: 'Más agentes contra la violencia de género y reforzar VioGén.', pagina: 239 },
    ],
    social: [
      { texto: 'Un grupo de trabajo para regular el acceso de los menores a internet y redes sociales.', pagina: 29 },
      { texto: 'Ayudas directas focalizadas a las familias más vulnerables por la inflación.', pagina: 32 },
      {
        texto: 'Plan Nacional de conciliación: jornadas híbridas, horarios flexibles y semana de cuatro días.',
        pagina: 33,
      },
      { texto: 'Atención bancaria presencial y prioritaria a mayores y personas con discapacidad.', pagina: 33 },
      { texto: 'Reforzar los programas de turismo y termalismo del IMSERSO.', pagina: 44 },
      { texto: 'Crear el Consejo Digital Joven.', pagina: 54 },
      { texto: 'Transporte público urbano gratis para niños y estudiantes hasta 24 años.', pagina: 78 },
      { texto: 'Garantizar el acceso al agua a los consumidores vulnerables.', pagina: 87 },
      { texto: 'Mantener el Bono Cultural Joven y crear un comité asesor juvenil en Cultura.', pagina: 124 },
      { texto: 'Accesibilidad de la cultura para personas con discapacidad.', pagina: 124 },
      { texto: 'Mantener el cine a 2 € para mayores de 65 años.', pagina: 127 },
      { texto: 'Un plan de choque contra la soledad juvenil no deseada.', pagina: 132 },
      {
        texto: 'Perspectiva joven en todas las políticas y laboratorios de innovación pública con jóvenes.',
        pagina: 132,
      },
      { texto: 'Reforzar la red pública de cuidados con acompañamiento psicosocial a quien cuida.', pagina: 143 },
      { texto: 'Ampliar el permiso por nacimiento a 20 semanas, con parcialidad desde la semana 16.', pagina: 143 },
      { texto: 'Permisos retribuidos de cuidados a lo largo de la vida, en el diálogo social.', pagina: 143 },
      {
        texto:
          'Más centros de día y de cuidados de larga duración, unidos a la estrategia contra la soledad no deseada.',
        pagina: 144,
      },
      {
        texto: 'Incentivos a las empresas que ofrezcan escuelas infantiles o centros de día a sus plantillas.',
        pagina: 144,
      },
      { texto: 'Considerar familia numerosa a las monoparentales.', pagina: 144 },
      { texto: 'Un Pacto Social por la Racionalización de los Horarios y una Ley de usos del tiempo.', pagina: 145 },
      { texto: 'Un plan estatal sobre el impacto de las redes sociales en los menores.', pagina: 155 },
      {
        texto: 'Una ley para impedir que los menores accedan a la pornografía en internet, con bloqueo y verificación.',
        pagina: 157,
      },
      { texto: 'Facilitar la adopción nacional e internacional.', pagina: 159 },
      {
        texto: 'Una estrategia de lucha contra la pobreza 2030 centrada en la pobreza de las mujeres y la infantil.',
        pagina: 162,
      },
      { texto: 'Una norma marco de ingresos mínimos para todos los mayores de 18 años.', pagina: 162 },
      { texto: 'Tarjetas monedero para alimentos que eviten estigmatizar a las familias vulnerables.', pagina: 162 },
      { texto: 'Atender el sinhogarismo de las mujeres ligado a la violencia de género.', pagina: 163 },
      { texto: 'Aprobar la Ley de Familias que reconoce los distintos tipos de familia.', pagina: 173 },
      { texto: 'Trámites de nacimiento desde el hospital, de una sola vez.', pagina: 173 },
      { texto: 'Una prestación por crianza para familias con menores.', pagina: 173 },
      { texto: 'Un marco estatal de apoyo a los primeros 1.000 días de vida.', pagina: 173 },
      { texto: 'Mejorar el Fondo de Garantía de Pago de Alimentos.', pagina: 174 },
      { texto: 'Una nueva ley de Servicios Sociales con una cartera común.', pagina: 175 },
      { texto: 'Un sistema estatal de información de servicios sociales y menos trámites.', pagina: 175 },
      { texto: 'Que los profesionales de los servicios sociales sean autoridad.', pagina: 175 },
      { texto: 'Financiación suficiente de la dependencia y acabar con la lista de espera.', pagina: 176 },
      { texto: 'Una prestación para personas electrodependientes que pague su coste energético.', pagina: 176 },
      { texto: 'La teleasistencia como derecho subjetivo.', pagina: 176 },
      {
        texto: 'Máximo de 30 días para recibir las prestaciones sociales más importantes, como la dependencia.',
        pagina: 176,
      },
      { texto: 'Mejor calidad en las residencias públicas y privadas y nuevas residencias públicas.', pagina: 176 },
      { texto: 'Un Pacto de Estado por los derechos de las personas mayores.', pagina: 178 },
      { texto: 'Plan nacional de alfabetización digital de mayores.', pagina: 178 },
      { texto: 'Un Plan Nacional Anticaídas para personas mayores.', pagina: 179 },
      {
        texto:
          'Consolidar el IMV y el Complemento de Ayuda a la Infancia hasta llegar al menos a un millón de menores.',
        pagina: 182,
      },
      { texto: 'Eliminar trabas burocráticas para las ayudas a familias con hijos.', pagina: 183 },
      { texto: 'Atención temprana garantizada para menores de 6 años.', pagina: 183 },
      { texto: 'Casas «Barnahus» para atender a menores víctimas de violencia y abuso sexual.', pagina: 184 },
      { texto: 'Reducir los menores en acogimiento residencial y favorecer el familiar.', pagina: 184 },
      { texto: 'Reconocer al Tercer Sector como interlocutor y desarrollar la Ley del Voluntariado.', pagina: 185 },
      { texto: 'Simplificar el acceso al IMV, con atención presencial.', pagina: 189 },
      {
        texto:
          'Integrar en el IMV las prestaciones no contributivas, con complementos por menores, discapacidad o edad.',
        pagina: 189,
      },
      { texto: 'Un Fondo de Inclusión Social de más de 2.500 millones.', pagina: 189 },
      {
        texto: 'Erradicar el sinhogarismo de calle en 2030 con la estrategia nacional y el modelo «Housing First».',
        pagina: 190,
      },
      {
        texto: 'Un plan para erradicar el chabolismo y los asentamientos segregados, con participación gitana.',
        pagina: 191,
      },
      {
        texto: 'Culminar la reforma del artículo 49 de la Constitución sobre las personas con discapacidad.',
        pagina: 192,
      },
      {
        texto:
          'Reconocer por ley la atención temprana de 0 a 6 años como derecho, con apoyo a familias con niños con autismo.',
        pagina: 192,
      },
      {
        texto:
          'Más asistencia personal y teleasistencia para la vida independiente y un Centro Estatal de Accesibilidad Cognitiva.',
        pagina: 193,
      },
      { texto: 'Un Observatorio de la Inclusión Digital y capacitación digital para los excluidos.', pagina: 195 },
      { texto: 'Una Estrategia Nacional contra la soledad no deseada.', pagina: 195 },
      { texto: 'Facilitar la adopción a parejas del mismo sexo y su acceso a la acogida de menores.', pagina: 215 },
      {
        texto: 'Una agencia que gestione las prestaciones sociales con la experiencia de la Agencia Tributaria.',
        pagina: 244,
      },
    ],
    energia: [
      {
        texto:
          'Una ley para fijar, con comunidades y ayuntamientos, las zonas idóneas para renovables y que los vecinos se beneficien.',
        pagina: 74,
      },
      { texto: 'Impulsar el almacenamiento, la gestión de la demanda y el hidrógeno renovable.', pagina: 74 },
      { texto: 'Reformar el mercado eléctrico europeo para trasladar el abaratamiento de las renovables.', pagina: 74 },
      { texto: 'Comunidades energéticas y autoconsumo, sobre todo colectivo.', pagina: 74 },
      {
        texto: 'Aprobar el 7.º Plan General de Residuos Radiactivos, ligado al cierre progresivo de las nucleares.',
        pagina: 74,
      },
      { texto: 'Política industrial verde para fabricar en España equipos para renovables.', pagina: 75 },
      { texto: 'Reforzar los bonos sociales y crear la figura del «consumidor electrodependiente».', pagina: 75 },
      {
        texto: 'Extender las herramientas de transición justa usadas en los cierres de térmicas a otros cierres.',
        pagina: 76,
      },
      { texto: 'Aprobar la Ley de Movilidad Sostenible, que reconoce la movilidad como derecho.', pagina: 77 },
      { texto: 'Un fondo estatal estable para financiar el transporte público urbano y metropolitano.', pagina: 77 },
      { texto: 'Transporte a demanda en zonas despobladas y una mesa de movilidad rural.', pagina: 78 },
      { texto: 'Ampliar los trenes de proximidad tras las pruebas piloto de 2023.', pagina: 78 },
      {
        texto: 'Más inversión en la red convencional y en Cercanías y Rodalies, con nuevas líneas y más trenes.',
        pagina: 79,
      },
      { texto: 'Estudiar recuperar trenes nocturnos internacionales con Portugal.', pagina: 79 },
      {
        texto:
          'Alta velocidad a Asturias en 2023 y a Almería en 2026; seguir con Extremadura, Navarra, La Rioja, Cantabria y la «Y vasca».',
        pagina: 79,
      },
      { texto: 'Terminar la variante de Olmedo.', pagina: 80 },
      { texto: 'Extender la competencia entre operadores a todos los corredores ferroviarios.', pagina: 80 },
      { texto: 'Billetes intermodales para que todas las capitales accedan a la alta velocidad.', pagina: 80 },
      { texto: 'Completar los corredores Atlántico y Mediterráneo en 2030.', pagina: 80 },
      { texto: 'Que el tren mueva el 10 % de las mercancías en 2030, con autopistas ferroviarias.', pagina: 80 },
      { texto: 'Estudiar reabrir el tramo Madrid-Burgos para mercancías y adecuar la Ruta de la Plata.', pagina: 80 },
      {
        texto: 'Electrificar la Red de Carreteras del Estado para que un coche eléctrico pueda recorrerla sin límites.',
        pagina: 81,
      },
      { texto: 'Ayudas estables para renovar camiones y autobuses por vehículos de cero emisiones.', pagina: 81 },
      {
        texto: 'Humanizar travesías y reducir el impacto de las carreteras con pasos de fauna y pantallas.',
        pagina: 82,
      },
      { texto: 'Carriles BUS-VAO y actuaciones contra los cuellos de botella.', pagina: 82 },
      {
        texto: 'Carriles bici y sendas peatonales junto a carreteras y ayudas para comprar bicicleta eléctrica.',
        pagina: 82,
      },
      { texto: 'Una estrategia marítima nacional y un plan para descarbonizar el transporte marítimo.', pagina: 83 },
      {
        texto:
          'Plan de sostenibilidad del transporte aéreo, combustibles sostenibles y aviones eléctricos y de hidrógeno.',
        pagina: 83,
      },
      { texto: 'Infraestructuras de transporte neutras en CO2 y convertidas en «hubs» de hidrógeno.', pagina: 84 },
      { texto: 'Inversiones en los aeropuertos de Barajas, El Prat y Tenerife.', pagina: 84 },
      { texto: 'Aplicar la Estrategia Estatal de la Bicicleta.', pagina: 84 },
      { texto: 'Acelerar la recarga de alta potencia y electrificar el transporte público.', pagina: 84 },
      { texto: 'Incorporar el concepto de «pobreza en el transporte» con medidas de transición justa.', pagina: 85 },
      { texto: 'Pago integrado en el transporte y un espacio de datos de movilidad.', pagina: 85 },
      { texto: 'Economía circular en química, textil y electrónica, con ecodiseño y reparación.', pagina: 86 },
      {
        texto: 'Desarrollar la Ley de Residuos y el reglamento de envases para cumplir los objetivos de 2025 y 2030.',
        pagina: 86,
      },
      { texto: 'Compostaje de materia orgánica en el medio rural.', pagina: 86 },
      { texto: 'Reconocer el derecho a un medio ambiente saludable y a la seguridad climática.', pagina: 87 },
      {
        texto: 'Revisar siempre al alza los objetivos de la Ley de Cambio Climático y del Plan de Energía y Clima.',
        pagina: 88,
      },
      {
        texto: 'Llevar a la acción de Gobierno las recomendaciones de la asamblea ciudadana para el clima.',
        pagina: 88,
      },
      {
        texto: 'Planes de protección de la costa frente al cambio climático y ordenación del espacio marino.',
        pagina: 89,
      },
      { texto: 'Nuevos planes de sequía y de gestión del riesgo de inundación.', pagina: 89 },
      { texto: 'Diseñar las presas teniendo en cuenta la adaptación al cambio climático.', pagina: 89 },
      { texto: 'Leyes básicas de bomberos forestales y de agentes forestales.', pagina: 89 },
      { texto: 'Reforzar la prevención y extinción de incendios y renovar la flota aérea.', pagina: 89 },
      { texto: 'Proteger el 30 % de la superficie terrestre y el 30 % de la marina en 2030.', pagina: 90 },
      {
        texto:
          'Terminar los planes de Doñana, el Mar Menor, la Albufera y el Delta del Ebro y uno nuevo para las Tablas de Daimiel.',
        pagina: 90,
      },
      { texto: 'Reformar la Ley de Aguas para blindar el derecho de acceso al agua.', pagina: 91 },
      {
        texto: 'Duplicar en 2027 la capacidad de desalación, con renovables, y duplicar la reutilización.',
        pagina: 91,
      },
      { texto: 'Reformar las tarifas del agua y conectar las distintas fuentes de suministro.', pagina: 91 },
      {
        texto: 'Digitalizar la gestión del agua para bajar las pérdidas de las redes por debajo del 10 %.',
        pagina: 91,
      },
      { texto: 'Ventanilla única y registro electrónico de derechos de agua en las confederaciones.', pagina: 92 },
      { texto: 'Más control de la contaminación difusa y depuradoras que eliminen sustancias peligrosas.', pagina: 92 },
      {
        texto: 'Extender las zonas de bajas emisiones, peatonalizar y crear refugios climáticos en las ciudades.',
        pagina: 93,
      },
      { texto: 'Corredores verdes y renaturalización de ríos urbanos.', pagina: 93 },
      { texto: 'Un Pacto de Estado por los derechos medioambientales.', pagina: 236 },
      {
        texto:
          'Que cualquiera pueda defender en los tribunales los ecosistemas amenazados, como ya ocurre con el Mar Menor.',
        pagina: 236,
      },
      { texto: 'Reforzar la Fiscalía de Medio Ambiente y Urbanismo.', pagina: 236 },
    ],
    economia: [
      {
        texto:
          'Seguir con la consolidación fiscal y reducir el déficit estructural sin subir, con carácter general, los impuestos.',
        pagina: 24,
      },
      { texto: 'Un Libro Verde de Financiación Sostenible e impulso al mercado español de bonos verdes.', pagina: 24 },
      { texto: 'Aprobar la adenda del Plan de Recuperación y completar sus inversiones.', pagina: 26 },
      {
        texto:
          'Desplegar los PERTE: coche eléctrico, renovables e hidrógeno, salud, semiconductores, naval, agroalimentario, lengua y cuidados.',
        pagina: 27,
      },
      { texto: 'Ventanilla única e instrumentos de coinversión para atraer proyectos estratégicos.', pagina: 27 },
      { texto: 'Más peso de la inversión pública productiva en los Presupuestos.', pagina: 27 },
      { texto: 'Crear un Consejo Nacional de la Productividad.', pagina: 27 },
      { texto: 'Proyectos punteros en computación cuántica, neurotecnología, IA y semiconductores.', pagina: 28 },
      { texto: 'Promover una Agencia Internacional de Regulación de la Inteligencia Artificial.', pagina: 28 },
      { texto: 'Poner en marcha la Agencia Española de Supervisión de la Inteligencia Artificial.', pagina: 29 },
      { texto: 'Conectividad ultrarrápida en el 100 % del territorio, con fibra y satélite asequible.', pagina: 29 },
      { texto: 'Impulsar el 5G para la industria e investigar el 6G.', pagina: 29 },
      { texto: 'Ampliar la Carpeta Ciudadana a empresas y autónomos.', pagina: 29 },
      { texto: 'Plataforma pública gratuita de factura electrónica para autónomos y pymes.', pagina: 31 },
      { texto: 'Seguir reduciendo la morosidad comercial.', pagina: 30 },
      {
        texto:
          'Desarrollar la Ley de Startups y la Estrategia España Nación Emprendedora, con una Red Nacional de Centros de Emprendimiento.',
        pagina: 31,
      },
      { texto: 'Un fondo para la transición verde y digital de las pymes y el programa Scaleup Spain.', pagina: 31 },
      { texto: 'Un Plan Nacional de Emprendimiento Social.', pagina: 32 },
      { texto: 'Vigilar con el Observatorio de Márgenes que las bajadas de costes lleguen a los precios.', pagina: 32 },
      { texto: 'Que los bancos suban la remuneración de los depósitos a los tipos de mercado.', pagina: 32 },
      { texto: 'Eliminar las comisiones por sacar efectivo en ventanilla.', pagina: 33 },
      { texto: 'Garantizar servicios financieros físicos y el uso de efectivo en todo el territorio.', pagina: 34 },
      { texto: 'Aprobar la nueva ley de mecenazgo.', pagina: 39 },
      { texto: 'Una Ley Integral de Impulso de la Economía Social y que llegue al 11 % del PIB en 2030.', pagina: 40 },
      { texto: 'Un fondo estatal de inversión de impacto en la economía social.', pagina: 40 },
      {
        texto: 'Facilitar que los trabajadores compren su empresa y capitalizar el paro para crear cooperativas.',
        pagina: 40,
      },
      { texto: 'Una nueva Ley de Sociedades Laborales.', pagina: 40 },
      {
        texto: 'Seguir con la Estrategia de Turismo Sostenible 2030 y la Plataforma Inteligente de Destinos.',
        pagina: 43,
      },
      { texto: 'Una Estrategia de Turismo LGTBI.', pagina: 44 },
      { texto: 'Apoyar Paradores y diversificar los mercados turísticos emisores.', pagina: 44 },
      { texto: 'Ayudas al comercio de proximidad, rural y turístico, y a su digitalización.', pagina: 45 },
      {
        texto: 'Aprobar la Estrategia Española de Impulso Industrial 2030 y un pacto de Estado por la industria.',
        pagina: 49,
      },
      {
        texto: 'Segunda convocatoria del PERTE del vehículo eléctrico y del de descarbonización industrial.',
        pagina: 49,
      },
      { texto: 'Formación para las profesiones industriales más demandadas.', pagina: 49 },
      { texto: 'Una Reserva Estratégica de capacidades de producción industrial (RECAPI).', pagina: 50 },
      { texto: 'Diseño ecológico y etiquetado para productos más duraderos y reparables.', pagina: 50 },
      { texto: 'Bancos de pruebas para la IA y un sello ético y verde para los algoritmos.', pagina: 54 },
      { texto: 'Que las campañas institucionales usen siempre artistas humanos, no IA.', pagina: 54 },
      { texto: 'Desarrollar la Ley de Ciberseguridad e identidad digital en el móvil.', pagina: 55 },
      { texto: 'Bonos de 25.000 a 29.000 € para digitalizar pymes de más de 50 trabajadores.', pagina: 55 },
      { texto: 'Requisitos de eficiencia y renovables para los centros de datos.', pagina: 56 },
      { texto: 'IA en español y lenguas cooficiales con el PERTE de la Nueva Economía de la Lengua.', pagina: 56 },
      { texto: 'Un plan piloto de 6G y 5G en zonas rurales.', pagina: 57 },
      { texto: 'Espacios de datos compartidos en salud, movilidad, turismo e industria.', pagina: 58 },
      {
        texto: 'Plan de talento en microelectrónica y ayudas del PERTE Chip a toda la cadena de los semiconductores.',
        pagina: 59,
      },
      { texto: 'Crear «Salas Blancas España» para investigar en semiconductores.', pagina: 59 },
      { texto: 'Cátedras y becas universidad-industria en IA y semiconductores.', pagina: 60 },
      { texto: 'Situar a España entre los 20 países más innovadores del mundo en cuatro años.', pagina: 119 },
      { texto: 'Más apoyo a las empresas emergentes de base tecnológica en sus primeras fases.', pagina: 119 },
      { texto: 'Contrato indefinido para investigadores y más investigadores en cuatro años.', pagina: 119 },
      {
        texto: 'Financiación de la investigación más flexible, con fondos estructurales para los grupos.',
        pagina: 119,
      },
      { texto: 'Programas de investigación en cambio climático, sequía y renovables.', pagina: 119 },
      { texto: 'Desplegar la Agencia Espacial Española y aprobar la primera Ley del Espacio.', pagina: 119 },
      { texto: 'Igualdad en la ciencia y aplicar la Estrategia Nacional de Ciencia Abierta.', pagina: 120 },
      { texto: 'Reforzar el Comité Español de Ética en la Investigación y la divulgación científica.', pagina: 120 },
      { texto: 'Un Pacto de Estado por la Cultura y una ley marco de la cultura.', pagina: 123 },
      { texto: 'Reformar el INAEM y modernizar museos, archivos y bibliotecas estatales.', pagina: 123 },
      { texto: 'Crear el Centro Nacional de Fotografía y el centro de creación de Tabacalera.', pagina: 123 },
      { texto: 'Transición ecológica de los museos y centros culturales.', pagina: 123 },
      {
        texto: 'Reforzar el programa PLATEA en municipios pequeños y cine de verano donde no haya salas.',
        pagina: 124,
      },
      { texto: 'Ampliar el Plan de Fomento de la Lectura y la red de Bibliotecas Públicas del Estado.', pagina: 124 },
      { texto: 'Un Plan Nacional de la Danza y una red de centros coreográficos.', pagina: 124 },
      { texto: 'Completar el Estatuto del Artista.', pagina: 124 },
      { texto: 'Fondos de inversión en activos culturales con colaboración público-privada.', pagina: 125 },
      { texto: 'Una Oficina de Derechos de Autor y actualizar los derechos de autor para los podcasts.', pagina: 126 },
      { texto: 'Una Mesa de la Música y el programa «Espacio Audio» para música, pódcast y audiolibro.', pagina: 126 },
      {
        texto: 'Más autonomía para el ICAA y aumentar un 30 % la producción audiovisual con «España Hub Audiovisual».',
        pagina: 126,
      },
      {
        texto:
          'Volver a tramitar la reforma de la Ley del Cine y garantizar el Fondo de Protección a la Cinematografía.',
        pagina: 127,
      },
      { texto: 'Reformar la Filmoteca y declarar el patrimonio audiovisual Bien de Interés Cultural.', pagina: 127 },
      { texto: 'Más ayudas a jóvenes emprendedores y a incubadoras.', pagina: 134 },
      { texto: 'Reconocer el consumo sostenible como derecho básico de los consumidores.', pagina: 210 },
      {
        texto:
          'Ley de atención a la clientela: reclamaciones en menos de 15 días, esperas de máximo 3 minutos y sin atención solo robotizada.',
        pagina: 210,
      },
      { texto: 'Aprobar la Autoridad de Protección del Cliente Financiero.', pagina: 210 },
      { texto: 'Plan Nacional de Apoyo al Arbitraje de Consumo y reforzar las oficinas municipales.', pagina: 210 },
      { texto: 'Más control de la publicidad del juego y protección de los jugadores.', pagina: 211 },
      { texto: 'Desarrollar la nueva Ley del Deporte y un Estatuto del Deportista.', pagina: 220 },
      { texto: 'Estrategia contra la violencia, el racismo y la xenofobia en el deporte.', pagina: 220 },
      { texto: 'Programa «Reto De» de beneficios fiscales para instalaciones deportivas rurales.', pagina: 220 },
      {
        texto: 'Contratación pública más ágil con «corrupción cero» y garantías de pago a los proveedores.',
        pagina: 243,
      },
      {
        texto: 'Que las grandes empresas adjudicatarias no dejen de pagar a pymes y autónomos subcontratados.',
        pagina: 243,
      },
    ],
    rural: [
      { texto: 'Aplicar la PAC 2023-2027 y evaluarla en 2024.', pagina: 66 },
      { texto: 'Apoyar la incorporación de jóvenes y mujeres a las explotaciones.', pagina: 66 },
      { texto: 'Más presupuesto para innovación, formación y asesoramiento a las pequeñas explotaciones.', pagina: 66 },
      { texto: 'Más dinero para el Plan Renove de maquinaria agrícola.', pagina: 66 },
      { texto: 'Renovables en el campo y préstamos bonificados y avales para el sector.', pagina: 66 },
      { texto: 'Integrar cooperativas y que participen en comunidades energéticas.', pagina: 66 },
      { texto: 'Nueva convocatoria del PERTE Agroalimentario para la industria.', pagina: 67 },
      { texto: 'Cumplir la Ley de la Cadena Alimentaria reforzando la AICA.', pagina: 67 },
      {
        texto: 'Publicar precios en origen, mayoristas y finales, costes y márgenes de los principales productos.',
        pagina: 67,
      },
      {
        texto: 'Exigir en la UE que las importaciones cumplan los mismos estándares que los productores europeos.',
        pagina: 67,
      },
      {
        texto: 'Más indemnizaciones por sacrificio obligatorio de ganado y vacunas como la de la tuberculosis bovina.',
        pagina: 67,
      },
      { texto: 'Apoyo a la ganadería extensiva y a las razas autóctonas.', pagina: 67 },
      { texto: 'Un Plan Estratégico de la Producción Ecológica.', pagina: 68 },
      { texto: 'Facilitar la venta directa y los canales cortos.', pagina: 68 },
      { texto: 'Modernizar la red de Mercas.', pagina: 68 },
      { texto: 'Más presupuesto para los seguros agrarios.', pagina: 68 },
      { texto: 'Retomar la Ley contra el Desperdicio Alimentario.', pagina: 68 },
      { texto: 'Regadío moderno con agua desalada y regenerada.', pagina: 68 },
      { texto: 'Modernizar el PROFEA, el plan de empleo agrario.', pagina: 68 },
      { texto: 'Una Ley de Agricultura Familiar.', pagina: 69 },
      { texto: 'Descarbonizar la flota pesquera y facilitar el relevo generacional.', pagina: 69 },
      { texto: 'Reparto justo de cuotas de pesca y apoyo a la flota artesanal.', pagina: 69 },
      { texto: 'Desarrollar la Ley de Pesca Sostenible y más investigación oceanográfica.', pagina: 69 },
      { texto: 'Igualdad de las mujeres en la pesca y la acuicultura.', pagina: 69 },
      { texto: 'Liderar la lucha contra la pesca ilegal.', pagina: 70 },
      { texto: 'Caza más sostenible según la Estrategia Nacional de Gestión Cinegética.', pagina: 70 },
      { texto: 'Una ley de montes de socios para los pequeños propietarios forestales.', pagina: 90 },
      { texto: 'Una cartera de servicios básicos a menos de 30 minutos de casa.', pagina: 94 },
      { texto: 'Ayudas a proyectos de bioeconomía y más programas de ayuda a ayuntamientos rurales.', pagina: 94 },
      { texto: 'Extender la Red de Centros de Innovación Territorial.', pagina: 95 },
      { texto: 'Mejor atención a los mayores en el medio rural.', pagina: 95 },
      { texto: 'Programas de arraigo para nuevas familias en pueblos pequeños y ampliar «Campus Rural».', pagina: 95 },
      { texto: 'Integrar a población inmigrante y refugiada en el medio rural.', pagina: 95 },
      { texto: 'Programación cultural y giras de artes escénicas en zonas rurales.', pagina: 95 },
      {
        texto: 'Apoyo económico a las farmacias rurales, sobre todo en municipios de menos de 1.000 habitantes.',
        pagina: 96,
      },
      { texto: '«Mirada rural» obligatoria en todas las leyes, presupuestos y planes.', pagina: 96 },
      {
        texto:
          'Actualizar la Estrategia Nacional frente al Reto Demográfico y un régimen específico para pequeños municipios.',
        pagina: 96,
      },
      { texto: 'Desarrollar la titularidad compartida de las explotaciones agrarias.', pagina: 96 },
      { texto: 'Más mujeres en la dirección de cooperativas y ampliar las aulas Mentor.', pagina: 97 },
      { texto: 'Más de 210 millones al año para el relevo generacional en el campo.', pagina: 97 },
      { texto: 'Laboratorios de innovación rural y un Erasmus Rural.', pagina: 97 },
    ],
    exterior: [
      { texto: 'Reformar las reglas fiscales europeas para compatibilizar estabilidad e inversión.', pagina: 34 },
      { texto: 'Completar la unión bancaria y la de mercados de capitales.', pagina: 34 },
      { texto: 'Nuevos recursos propios para el presupuesto europeo.', pagina: 35 },
      { texto: 'Concluir los acuerdos comerciales de la UE con Chile, México y Mercosur.', pagina: 35 },
      { texto: 'Reformar la Organización Mundial del Comercio.', pagina: 36 },
      {
        texto: 'Proponer en la ONU una Agencia Internacional de Seguridad y Derechos Digitales con sede en España.',
        pagina: 36,
      },
      { texto: 'Diversificar las cadenas de suministro y seguir con los acuerdos comerciales de la UE.', pagina: 46 },
      { texto: 'Promover el español en el currículo escolar de China, Japón, India y EE. UU.', pagina: 60 },
      { texto: 'Impulsar un acuerdo internacional contra la contaminación por plásticos.', pagina: 86 },
      {
        texto: 'Un plan de internacionalización de la cultura española, con una agencia de exportación cultural.',
        pagina: 127,
      },
      {
        texto: 'Más ayudas a la traducción de libros en cualquier lengua de España y más peso en la UNESCO.',
        pagina: 128,
      },
      {
        texto: 'La juventud como pilar de la cooperación y una plataforma de voluntariado internacional.',
        pagina: 133,
      },
      { texto: 'Impulsar una Convención de la ONU sobre los Derechos de las Personas Mayores.', pagina: 178 },
      {
        texto:
          'Máxima implicación en perseguir los crímenes internacionales, sobre todo los de la guerra de Ucrania, y apoyo a la Corte Penal Internacional.',
        pagina: 252,
      },
      { texto: 'Seguir apoyando a Ucrania y su camino hacia la UE.', pagina: 259 },
      { texto: 'Impulsar la autonomía estratégica abierta de la UE y la Europa social.', pagina: 259 },
      { texto: 'Decidir la política exterior europea por mayoría cualificada.', pagina: 260 },
      { texto: 'Un nuevo Pacto Europeo de Migración y Asilo.', pagina: 260 },
      {
        texto:
          'Un acuerdo sobre Gibraltar que cree una zona de prosperidad compartida con el Campo de Gibraltar, sin renunciar a la soberanía.',
        pagina: 260,
      },
      { texto: 'Apoyar la adhesión de los Balcanes Occidentales.', pagina: 261 },
      {
        texto: 'Ayuda al desarrollo del 0,7 % de la renta nacional en 2030, con el 10 % para ayuda humanitaria.',
        pagina: 261,
      },
      { texto: 'Reformar la AECID, crear el fondo FEDES y un Estatuto de las Personas Cooperantes.', pagina: 262 },
      { texto: 'Una Estrategia de Salud Global y apoyo al Fondo Mundial contra el sida y a GAVI.', pagina: 262 },
      { texto: 'Más España en la ONU y más ONU en España.', pagina: 263 },
      { texto: 'Cumbre UE-CELAC y relación privilegiada con América Latina.', pagina: 263 },
      { texto: 'Programa de Fortalecimiento de la Democracia en América Latina.', pagina: 264 },
      { texto: 'Ratificar los acuerdos de la UE con Chile, México y Mercosur.', pagina: 264 },
      { texto: 'Relación con EE. UU. y compromiso con la OTAN.', pagina: 264 },
      { texto: 'Acuerdo de asociación UE-Andorra que proteja a los trabajadores transfronterizos.', pagina: 264 },
      {
        texto:
          'Seguir con la nueva etapa de relaciones con Marruecos y sus acuerdos sobre trata, terrorismo y migración.',
        pagina: 264,
      },
      {
        texto:
          'Sáhara: apoyo al enviado de la ONU para una solución mutuamente aceptable y mantener la ayuda humanitaria en los campamentos.',
        pagina: 265,
      },
      { texto: 'Oriente Próximo: solución de dos Estados.', pagina: 265 },
      { texto: 'Una estrategia para el Sahel y cooperación en formación con África.', pagina: 265 },
      { texto: 'Apoyar una democracia con elecciones libres en Guinea Ecuatorial.', pagina: 266 },
      { texto: 'Política Exterior Feminista y la primera Estrategia de Diplomacia Humanitaria.', pagina: 266 },
      { texto: 'Ratificar la enmienda que hace crimen de guerra usar el hambre como arma.', pagina: 267 },
      {
        texto:
          'Ampliar la nacionalidad a descendientes de españoles y una Ley de Nacionalidad para los residentes en el exterior.',
        pagina: 267,
      },
      {
        texto: 'Un Plan Estratégico de Retorno y programas de talento para que vuelvan investigadores y profesionales.',
        pagina: 268,
      },
      { texto: 'Acuerdos de doble nacionalidad con Rumanía e Italia.', pagina: 268 },
    ],
  },
};
