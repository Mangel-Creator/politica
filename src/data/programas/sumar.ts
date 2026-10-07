import type { ResumenPrograma } from '../tipos';

/**
 * Sumar, generales 23J 2023. Programa «Un programa para ti», 182 páginas, resumido entero: medidas
 * numeradas, subapartados y viñetas. Las repetidas entre capítulos aparecen una sola vez.
 */
export const ProgramaSumar: ResumenPrograma = {
  partidoId: 'sumar',
  eleccion: '23J 2023',
  nota: 'Aquí se recogen todas las medidas del programa, resumidas y agrupadas por tema. Las que se repiten en varios capítulos aparecen una sola vez. Algunas metas cambian según el capítulo: la inversión en I+D+i es del 2,1 % del PIB en la página 14 y del 3 % en 2027 y 4 % en 2030 en la 166.',
  ideasClave: [
    {
      texto:
        'Jornada máxima de 37,5 horas por ley en 2024 y diálogo social para llegar a 32 horas, sin bajar el sueldo.',
      pagina: 7,
    },
    {
      texto: '«Herencia universal» de 20.000 € a los 23 años, pagada con un impuesto a las grandes fortunas.',
      pagina: 15,
    },
    { texto: 'Impuesto permanente a las grandes fortunas con tipos de al menos el 4 %.', pagina: 16 },
    { texto: 'Invertir el 1 % del PIB al año durante diez años en vivienda pública de alquiler.', pagina: 76 },
    { texto: 'Prestación universal de 200 € al mes por hijo menor de 18 años.', pagina: 93 },
  ],
  enfoques: {
    vivienda: {
      texto:
        'Hacer de la vivienda «un pilar más del estado de bienestar», con un gran parque público de alquiler y normas contra la especulación.',
      pagina: 76,
    },
    empleo: {
      texto:
        'Culminar un «Estatuto del Trabajo del siglo XXI» con derechos para todo el que trabaja, menos jornada y más democracia en la empresa.',
      pagina: 23,
    },
    impuestos: {
      texto:
        'Una reforma fiscal para que «contribuyan más» grandes empresas, grandes patrimonios y rentas del capital, y acercar la recaudación a la media europea.',
      pagina: 16,
    },
    sanidad: {
      texto:
        'Devolver a la sanidad pública «la grandeza que nunca debió perder»: más gasto, sin gestión privada y con nuevas prestaciones.',
      pagina: 89,
    },
    pensiones: {
      texto:
        'Mantener la revalorización con el IPC y subir las mínimas y no contributivas hasta, al menos, el umbral de la pobreza.',
      pagina: 15,
    },
    educacion: {
      texto:
        'Una educación pública y gratuita desde los 0 años, con más inversión y la concertada como red subsidiaria de la pública.',
      pagina: 154,
    },
    inmigracion: {
      texto:
        'Dejar el «paradigma securitario» por una movilidad con derechos: vías legales, asilo más fácil y fin de las devoluciones sumarias.',
      pagina: 149,
    },
    territorio: {
      texto:
        'Un nuevo pacto territorial que reconozca a España como «realidad plurinacional», con más autogobierno y financiación.',
      pagina: 120,
    },
    democracia: {
      texto:
        'Más participación ciudadana, una justicia más rápida y cercana, renovar el CGPJ y desarrollar la memoria democrática.',
      pagina: 117,
    },
    seguridad: {
      texto:
        'Pasar de la reacción a la prevención: políticas sociales y mediación frente al «punitivismo», y reformar el modelo policial.',
      pagina: 130,
    },
    igualdad: {
      texto:
        'Un «feminismo del 99 %» presente en todas las políticas, contra la violencia machista y por los derechos LGTBI+.',
      pagina: 107,
    },
    social: {
      texto:
        'Un «auténtico ingreso mínimo garantizado», un sistema público de cuidados y ayudas universales a la crianza.',
      pagina: 86,
    },
    energia: {
      texto:
        'Una «transición ecológica justa» que descarbonice la economía y asegure a todos una «energía limpia y barata».',
      pagina: 37,
    },
    economia: {
      texto: 'Política industrial de «Estado emprendedor», banca pública y menos poder para los oligopolios.',
      pagina: 10,
    },
    rural: {
      texto:
        'Un mundo rural vivo y una transición agroecológica que asegure una «renta suficiente» a quien trabaja el campo.',
      pagina: 57,
    },
    exterior: {
      texto:
        'España como «potencia de paz»: mediación, derechos humanos, una Europa más social y autónoma y cooperación del 0,7 %.',
      pagina: 138,
    },
  },
  temas: {
    vivienda: [
      {
        texto: 'Bono de 1.000 € para un millón de hogares con hipoteca variable, pagado con el impuesto a la banca.',
        pagina: 8,
      },
      { texto: 'Portabilidad obligatoria de hipotecas, con los bancos publicando sus ofertas en la CNMC.', pagina: 8 },
      {
        texto:
          'Pago a cuenta del 0,1 % de los ingresos por alquiler para conocer en tiempo real la evolución de los precios.',
        pagina: 9,
      },
      {
        texto:
          'Precios de referencia del alquiler en zonas tensionadas equivalentes al 30 % de la renta de los inquilinos.',
        pagina: 9,
      },
      {
        texto:
          'Sin deducción en el IRPF y con recargo en Sociedades para quien alquile por encima del precio de referencia.',
        pagina: 9,
      },
      {
        texto:
          'Una ley y un fondo de recuperación de barrios con ayudas de hasta el 100 % para rehabilitar viviendas en zonas de renta baja.',
        pagina: 37,
      },
      { texto: 'Regular los pisos turísticos en las ciudades.', pagina: 45 },
      {
        texto:
          'Que toda obra nueva sea de consumo de energía casi nulo y actualizar el Código Técnico de la Edificación.',
        pagina: 47,
      },
      {
        texto: 'Rehabilitar 500.000 viviendas al año y otras 250.000 de familias vulnerables a cargo público.',
        pagina: 47,
      },
      {
        texto: 'Rehabilitar en 15 años el parque de viviendas para reducir a la mitad su consumo de energía.',
        pagina: 47,
      },
      { texto: 'Erradicar el chabolismo y la infravivienda.', pagina: 72 },
      { texto: 'Programa estatal con ayudas anuales para rehabilitar los barrios más vulnerables.', pagina: 72 },
      {
        texto: 'Reformar la Ley del Suelo para ciudades más compactas, con zonas verdes y servicios en cada barrio.',
        pagina: 73,
      },
      {
        texto:
          'Un banco de suelo e inmuebles públicos en desuso para vivienda social y equipamientos, cediéndolos también a colectivos vecinales.',
        pagina: 73,
      },
      {
        texto:
          'Condicionar las ventajas fiscales de SOCIMI y fondos inmobiliarios al interés social, y bajar el IVA del alquiler social.',
        pagina: 76,
      },
      {
        texto: 'Derechos de tanteo y retracto para las administraciones y compra pública de viviendas ante desahucios.',
        pagina: 76,
      },
      {
        texto:
          'Estudiar que en zonas tensionadas solo se pueda comprar vivienda para vivir en ella o alquilarla a largo plazo, y medidas «anti flipping».',
        pagina: 76,
      },
      { texto: 'Gravar el suelo urbanizable ocioso y un banco de suelo con crédito del ICO.', pagina: 76 },
      {
        texto:
          'Invertir el 1 % del PIB al año durante diez años para crear un parque de más de dos millones de viviendas protegidas de alquiler.',
        pagina: 76,
      },
      { texto: 'Prohibir vender suelo y vivienda pública, incluidos los de la Sareb, Adif y Defensa.', pagina: 76 },
      { texto: 'Contratos de alquiler más largos, tendiendo a indefinidos.', pagina: 77 },
      {
        texto: 'Convertir la Sareb en una herramienta pública de vivienda, dependiente del ministerio del ramo.',
        pagina: 77,
      },
      {
        texto: 'Juzgados especializados en vivienda y más inspección contra el acoso inmobiliario y la discriminación.',
        pagina: 77,
      },
      {
        texto: 'Limitar el alquiler turístico, de habitaciones y de temporada para que no se salte la Ley de Vivienda.',
        pagina: 77,
      },
      {
        texto:
          'Que el Estado o los ayuntamientos puedan instar la declaración de zona tensionada si la comunidad no lo hace.',
        pagina: 77,
      },
      {
        texto:
          'Reformar la Ley de Vivienda: alquiler social obligatorio para grandes tenedores, dación en pago y vivienda alternativa ante desahucios.',
        pagina: 77,
      },
      { texto: 'Registro obligatorio de fianzas y un registro de viviendas vacías.', pagina: 77 },
      { texto: 'Ventajas fiscales solo para quien alquile al precio de referencia o por debajo.', pagina: 77 },
      {
        texto: 'Carta de derechos de los inquilinos y que sus sindicatos puedan negociar con los propietarios.',
        pagina: 78,
      },
      { texto: 'Estrategia contra el sinhogarismo basada en «Housing First».', pagina: 78 },
      { texto: 'Más ayudas al alquiler, mejorando el pago mensual del Bono Alquiler Joven.', pagina: 78 },
      { texto: 'Posibilidad de reestructurar y aplicar quitas a la deuda hipotecaria.', pagina: 78 },
      {
        texto:
          'Programa para inquilinos vulnerables: dependientes, víctimas de violencia de género, refugiados o jóvenes migrantes.',
        pagina: 78,
      },
      { texto: 'Favorecer las asociaciones de vivienda sin ánimo de lucro, como en Europa.', pagina: 79 },
      {
        texto: 'Reconocer poco a poco el derecho subjetivo a la vivienda, empezando por las personas sin hogar.',
        pagina: 79,
      },
      { texto: 'Reserva del 30 % para vivienda protegida en suelo urbano consolidado.', pagina: 79 },
      { texto: 'Financiar y desplegar la Estrategia Nacional contra el Sinhogarismo 2023-2030.', pagina: 88 },
      {
        texto:
          'Que las comunidades de vecinos paguen la accesibilidad si viven personas con discapacidad o mayores de 70 años, con ayudas públicas.',
        pagina: 100,
      },
      {
        texto: 'Plan de emancipación juvenil con medidas urgentes de acceso a la vivienda en todas las comunidades.',
        pagina: 103,
      },
    ],
    empleo: [
      {
        texto:
          'Controlar las horas extra y compensarlas con tiempo libre, y pasar a los lunes el mayor número de festivos.',
        pagina: 7,
      },
      {
        texto: 'Jornada máxima de 37,5 horas por ley en 2024 y diálogo social para llegar a 32, sin bajar el salario.',
        pagina: 7,
      },
      {
        texto: 'Orientar a crear empleo la reindustrialización ligada a la transición energética y los cuidados.',
        pagina: 7,
      },
      {
        texto:
          'Políticas activas de empleo para quien más difícil lo tiene, con compromiso de colocación y el sector público como garante.',
        pagina: 7,
      },
      { texto: 'Que el contrato indefinido a tiempo completo sea la forma normal de empleo.', pagina: 7 },
      { texto: 'Que el paro converja con la media europea (7 %) y la tasa de empleo supere el 70 %.', pagina: 7 },
      { texto: 'Subir el salario mínimo por encima del IPC cada año.', pagina: 7 },
      { texto: 'Subir los salarios en términos reales con el diálogo social y la negociación colectiva.', pagina: 8 },
      {
        texto: 'Democratizar las empresas con más participación de los trabajadores y más apoyo a la economía social.',
        pagina: 14,
      },
      { texto: 'Reforzar el papel de los sindicatos, la negociación colectiva y el diálogo social.', pagina: 23 },
      {
        texto:
          'Un nuevo Estatuto del Trabajo del siglo XXI con derechos básicos para todos los que trabajan, también autónomos y cooperativistas.',
        pagina: 23,
      },
      { texto: 'Derecho a adaptar el horario y a formas híbridas de trabajo, presencial y a distancia.', pagina: 24 },
      { texto: 'Derecho a la desconexión digital, con prohibición de contactar fuera de la jornada.', pagina: 24 },
      {
        texto:
          'Distribución irregular de la jornada en periodos de cuatro meses como máximo y horas extra impagadas al doble de precio.',
        pagina: 24,
      },
      { texto: 'Ley de usos del tiempo: jornada máxima de 37,5 horas en 2024 y diálogo para llegar a 32.', pagina: 24 },
      {
        texto:
          'Reducción de jornada discontinua y entre convivientes, y un permiso retribuido para acompañar a familiares al médico.',
        pagina: 25,
      },
      { texto: 'Más información y participación de la plantilla en jornada, horarios y horas extra.', pagina: 25 },
      {
        texto:
          'No más de cinco noches seguidas en turnos rotatorios y derecho a pasar al turno de día a partir de los 50 años.',
        pagina: 25,
      },
      {
        texto:
          'Participación sindical en los algoritmos laborales y derecho a ser informado de decisiones automatizadas.',
        pagina: 25,
      },
      {
        texto: 'Planes negociados de organización del tiempo de trabajo en empresas de 50 o más trabajadores.',
        pagina: 25,
      },
      { texto: 'Una sola interrupción, de una hora como máximo, en la jornada partida.', pagina: 25 },
      { texto: 'Usar la tecnología para controlar que no se alargue la jornada más allá del convenio.', pagina: 25 },
      {
        texto: 'Auditoría algorítmica obligatoria para demostrar que la inteligencia artificial no discrimina.',
        pagina: 26,
      },
      { texto: 'Currículum ciego, sin foto, edad ni sexo.', pagina: 26 },
      {
        texto: 'Límites estrictos a la vigilancia del trabajador: cámaras, geolocalización y registros personales.',
        pagina: 26,
      },
      { texto: 'Prohibir el reconocimiento facial del teletrabajador en su domicilio.', pagina: 26 },
      {
        texto:
          'Que nadie pueda ser despedido ni descartado en una selección por lo que publique en sus redes sociales.',
        pagina: 26,
      },
      { texto: 'Seguir subiendo el salario mínimo, que con 1.080 € está en el 60 % del salario medio.', pagina: 26 },
      {
        texto:
          'Completar el Estatuto del Artista: fiscalidad de rentas irregulares, reciclaje profesional y ayudas por cese.',
        pagina: 27,
      },
      {
        texto:
          'Despido con sistema «restaurativo y disuasorio»: derecho a elegir readmisión o indemnización y una indemnización adicional según el daño.',
        pagina: 27,
      },
      {
        texto:
          'Las empresas que deslocalicen fuera de la UE no podrán hacer despidos colectivos y devolverán las ayudas.',
        pagina: 27,
      },
      {
        texto:
          'Prevención de riesgos para las empleadas del hogar y abordar la situación de las internas y de las migrantes sin papeles.',
        pagina: 27,
      },
      {
        texto:
          'Que las modificaciones de condiciones y los descuelgues del convenio solo se usen si peligra la empresa, negociados y reversibles.',
        pagina: 27,
      },
      {
        texto:
          'Ayuda técnica para pedir ayudas a la formación y oferta formativa anual para autónomos y socios de cooperativas.',
        pagina: 28,
      },
      {
        texto:
          'En jornadas parciales muy cortas, cobrar al menos un 10 % más de lo proporcional, y consolidar las horas complementarias.',
        pagina: 28,
      },
      {
        texto: 'Mismas condiciones para los trabajadores subcontratados que para los de la empresa principal.',
        pagina: 28,
      },
      {
        texto:
          'Un crédito mínimo para formación en autónomos y pequeñas empresas, con bonificaciones si se forma la plantilla.',
        pagina: 28,
      },
      {
        texto:
          'Autónomos con más protección: jubilación, subsidio para mayores de 52, cese de actividad y ayudas en zonas despobladas.',
        pagina: 29,
      },
      { texto: 'Ayudas específicas para que jóvenes y mujeres emprendan, con acceso a financiación.', pagina: 29 },
      {
        texto: 'Cuota fija bonificada para autónomos que ingresen menos del salario mínimo, sin perder protección.',
        pagina: 29,
      },
      { texto: 'Formación en prevención de riesgos y apoyo a la salud mental de los autónomos.', pagina: 29 },
      {
        texto:
          'Medir la representatividad de las asociaciones de autónomos y poner en marcha el Consejo del Trabajo Autónomo.',
        pagina: 29,
      },
      { texto: 'Permiso anual retribuido para formación, cobrando el paro durante el permiso.', pagina: 29 },
      {
        texto:
          'Que la formación de los fijos discontinuos en periodos de inactividad no consuma hasta 30 días de paro.',
        pagina: 29,
      },
      {
        texto: 'Simplificar trámites y dotar la Estrategia Nacional de Impulso del Trabajo Autónomo 2023-2027.',
        pagina: 29,
      },
      { texto: 'Subir la cuota de formación a las empresas que no formen a su personal en un año.', pagina: 29 },
      {
        texto:
          'Que el autónomo dependiente de un cliente tenga las condiciones económicas y de jornada del convenio de ese cliente.',
        pagina: 30,
      },
      {
        texto: 'Que la empresa cliente pague la diferencia salarial a los socios de cooperativas que dependan de ella.',
        pagina: 31,
      },
      { texto: 'Estrategias de seguridad laboral con el objetivo de cero muertes.', pagina: 32 },
      {
        texto:
          'Más controles de los productos químicos en sectores feminizados y atención a la salud mental de los sanitarios.',
        pagina: 32,
      },
      {
        texto: 'Proteger a quien teletrabaja: tiempo de trabajo, desconexión, datos personales y salud mental.',
        pagina: 32,
      },
      {
        texto: 'Un delegado sindical territorial de seguridad para las empresas de menos de 50 trabajadores.',
        pagina: 32,
      },
      {
        texto: 'Un marco integrado contra la violencia y el acoso laboral, según el Convenio 190 de la OIT.',
        pagina: 32,
      },
      {
        texto:
          'Adelantar las indemnizaciones a las familias de fallecidos en accidente laboral y darles ayuda psicológica.',
        pagina: 33,
      },
      {
        texto:
          'Ampliar la cobertura de la negociación colectiva y la representación de los trabajadores más allá del centro de trabajo.',
        pagina: 33,
      },
      { texto: 'Derecho a usar los medios informáticos de la empresa para la información sindical.', pagina: 33 },
      { texto: 'Protocolos para proteger a los trabajadores de las altas temperaturas.', pagina: 33 },
      { texto: 'Que la ley fije las condiciones de trabajo cuando falte regulación en el convenio.', pagina: 33 },
      { texto: 'Que los sistemas autónomos de solución de conflictos laborales sean obligatorios.', pagina: 33 },
      {
        texto:
          'Prestaciones por desempleo y cese de actividad que acompañen el paso a otro trabajo, ligadas a formación.',
        pagina: 34,
      },
      {
        texto: 'Estudiar subir la prestación por baja común al 75 % desde el primer día y al 100 % si es profesional.',
        pagina: 35,
      },
      {
        texto:
          'Igualar las cuotas de las empresas cubiertas por mutuas y derogar la rebaja de cotizaciones por contingencias profesionales.',
        pagina: 35,
      },
      {
        texto:
          'Contratación pública con cláusulas sociales, participación sindical en los pliegos y exclusión de ofertas que no cumplan el convenio.',
        pagina: 36,
      },
      {
        texto:
          'Ampliar la transición justa a automoción, agricultura, gas, petróleo, aeronáutica y turismo, y a Doñana, Mar Menor o el Delta del Ebro.',
        pagina: 39,
      },
      {
        texto: 'Plan de formación y reconversión laboral para los sectores afectados por la transición ecológica.',
        pagina: 39,
      },
      { texto: 'Adaptar o reducir la jornada cuando haya aviso naranja o rojo por calor.', pagina: 42 },
      { texto: 'Crear empleo público en cuidados, dependencia, parques y jardines o renovables.', pagina: 88 },
      { texto: 'Trasponer por completo el convenio 189 de la OIT sobre trabajadoras del hogar.', pagina: 97 },
      { texto: 'Regular y financiar más el empleo con apoyo para personas con discapacidad.', pagina: 100 },
      {
        texto: 'Seguir desarrollando el Estatuto del Artista en fiscalidad, Seguridad Social y negociación colectiva.',
        pagina: 170,
      },
      {
        texto:
          'Regular la profesión deportiva contra el intrusismo y que los deportistas de alto nivel coticen por sus años con beca.',
        pagina: 177,
      },
    ],
    impuestos: [
      {
        texto: 'Revisar el IVA de productos duraderos y de los servicios de reparación, segunda mano y alquiler.',
        pagina: 12,
      },
      { texto: 'Eliminar los privilegios fiscales de las SICAV (1 %) y las SOCIMI (0 %).', pagina: 16 },
      {
        texto: 'Impuesto permanente a las grandes fortunas, con tipos de al menos el 4 % para los mayores patrimonios.',
        pagina: 16,
      },
      {
        texto:
          'Mantener los impuestos extraordinarios a energéticas y entidades financieras hasta reformar Sociedades.',
        pagina: 16,
      },
      {
        texto:
          'Reforma fiscal para acercar la recaudación a la media europea, con más aportación de grandes empresas, patrimonios y capital.',
        pagina: 16,
      },
      { texto: 'Tipo mínimo efectivo del 15 % en Sociedades y recortar deducciones y exenciones.', pagina: 16 },
      { texto: 'Un mínimo estatal en Sucesiones y Donaciones que las comunidades no puedan rebajar.', pagina: 16 },
      { texto: 'Ampliar el impuesto de transacciones financieras a los derivados.', pagina: 17 },
      { texto: 'IRPF: más tramos desde 120.000 € y hasta un 52 % a partir de 300.000 €.', pagina: 17 },
      {
        texto: 'Impuesto a las bebidas azucaradas y ultraprocesados y revisar los del alcohol y el tabaco.',
        pagina: 17,
      },
      { texto: 'Modernizar la fiscalidad verde, compensando a los colectivos vulnerables.', pagina: 17 },
      {
        texto:
          'Plantilla de la Agencia Tributaria como la media europea y prescripción de cinco años, diez en delitos agravados.',
        pagina: 17,
      },
      { texto: 'Que los ayuntamientos puedan hacer progresivo el IBI según el valor catastral.', pagina: 17 },
      {
        texto: 'Rentas del capital de más de 120.000 € hasta al menos el 30 %, y eliminar el régimen de módulos.',
        pagina: 17,
      },
      {
        texto:
          'Que los autónomos con rentas bajas compensen pérdidas sin límite de años y tributen al tipo más bajo hasta más de 12.500 €.',
        pagina: 30,
      },
      {
        texto:
          'Gravar el lujo contaminante: coches de lujo, aviones privados, grandes yates y vuelos frecuentes o en business.',
        pagina: 38,
      },
      { texto: 'Gravar los beneficios extraordinarios de la industria fósil.', pagina: 38 },
      {
        texto:
          'Impuesto a las grandes empresas contaminantes según sus emisiones de NOx y SOx, cedido a las comunidades.',
        pagina: 38,
      },
      {
        texto:
          'Incentivos fiscales a renovables, comida ecológica o bombas de calor, y penalizar fósiles, vuelos cortos y ganadería intensiva.',
        pagina: 38,
      },
      { texto: 'Una tasa a los envases de plástico, de acuerdo con las comunidades, y llevarla a Europa.', pagina: 38 },
      { texto: 'IVA reducido para las reparaciones y las tiendas de reutilización.', pagina: 54 },
      { texto: 'IVA del 10 % para los veterinarios, como centros sanitarios.', pagina: 56 },
      {
        texto:
          'Ventajas fiscales o ayudas a frutas, verduras, legumbres y cereales integrales, y gravar ultraprocesados y refrescos dirigidos a niños.',
        pagina: 68,
      },
      { texto: 'Acabar con los privilegios fiscales de la aviación y gravar su combustible.', pagina: 82 },
      {
        texto:
          'Fiscalidad favorable a la discapacidad y subir del 0,7 % al 1 % la casilla de fines sociales en IRPF y Sociedades.',
        pagina: 101,
      },
      { texto: 'Una casilla cultural en el IRPF y reformar la Ley de Mecenazgo.', pagina: 170 },
    ],
    sanidad: [
      {
        texto:
          'Ley que proteja a los menores de la publicidad de alimentos no saludables, también en redes e influencers.',
        pagina: 21,
      },
      {
        texto:
          'Más control y transparencia en las mutuas y que las bajas por enfermedad común las controlen los médicos de la Seguridad Social.',
        pagina: 35,
      },
      {
        texto: 'Alerta por ola de calor en salud pública, con planes de respuesta y un sistema de alerta al móvil.',
        pagina: 42,
      },
      { texto: 'Estrategia contra la mortalidad prematura por contaminación.', pagina: 55 },
      {
        texto:
          'Una «seguridad social alimentaria» que garantice a todos el acceso a una alimentación saludable y sostenible.',
        pagina: 67,
      },
      {
        texto: 'Reformar la Ley de Seguridad Alimentaria y actualizar la Estrategia NAOS contra la obesidad infantil.',
        pagina: 68,
      },
      { texto: 'Medir la inseguridad alimentaria en las encuestas del INE y un informe anual.', pagina: 69 },
      { texto: 'Más control de pesticidas en los alimentos y límites de residuos más estrictos.', pagina: 69 },
      { texto: 'Retirar poco a poco los alimentos no saludables de colegios, hospitales y residencias.', pagina: 69 },
      { texto: 'Dietistas-nutricionistas en los centros de salud y hospitales públicos.', pagina: 70 },
      {
        texto:
          'Compensar a las comunidades que atienden a pacientes desplazados mediante los fondos de garantía y cohesión.',
        pagina: 89,
      },
      {
        texto:
          'Impedir la gestión privatizada y un plan de desprivatización, incluidos limpieza, hostelería y lavandería.',
        pagina: 89,
      },
      {
        texto: 'Incluir en la sanidad pública dentista, óptica, audífonos, psicoterapia, fisioterapia y nutrición.',
        pagina: 89,
      },
      { texto: 'Ley de listas de espera con tiempos máximos y un registro homogéneo en todo el país.', pagina: 89 },
      {
        texto:
          'Rediseñar el Consejo Interterritorial con una cartera básica común y una Ley General de Salud y Bienestar.',
        pagina: 89,
      },
      {
        texto:
          'Subir el gasto sanitario medio punto del PIB al año hasta la media de los diez países europeos que más gastan.',
        pagina: 89,
      },
      {
        texto: 'Un gran pacto por la salud que blinde la universalidad y el carácter público de la sanidad.',
        pagina: 89,
      },
      { texto: 'Acabar con la temporalidad del personal sanitario y reformar su Estatuto Marco.', pagina: 90 },
      { texto: 'Estrategia de salud mental infantojuvenil y un plan nacional contra el suicidio.', pagina: 91 },
      {
        texto: 'Estrategia de «cero contenciones» para que las prácticas coercitivas sean realmente excepcionales.',
        pagina: 91,
      },
      { texto: 'Más plazas de Medicina, Enfermería y Psicología y más plazas MIR, EIR y PIR.', pagina: 90 },
      { texto: 'Plan de choque en atención primaria con financiación directa a las comunidades.', pagina: 90 },
      {
        texto: 'Plan de choque y pacto de Estado por la salud mental, con más psicólogos en la sanidad pública.',
        pagina: 90,
      },
      { texto: 'Plan para recuperar a los sanitarios que emigraron o dejaron el sector.', pagina: 90 },
      {
        texto:
          'Sustituir las guardias de 24 horas de matronas y enfermeras por turnos y avanzar hacia las 32 horas en el sector público.',
        pagina: 90,
      },
      { texto: 'Eliminar poco a poco el copago farmacéutico, empezando por las rentas bajas.', pagina: 91 },
      {
        texto: 'Estrategia sobre el chemsex sin estigmatización y prevención del VIH, la hepatitis C y otras ITS.',
        pagina: 91,
      },
      {
        texto: 'Más anticonceptivos financiados y garantizar el aborto en la sanidad pública en todas las comunidades.',
        pagina: 91,
      },
      { texto: 'Una empresa farmacéutica pública que investigue y fabrique medicamentos y vacunas.', pagina: 91 },
      { texto: 'Integrar poco a poco en la sanidad pública a los mutualistas de MUFACE, MUGEJU e ISFAS.', pagina: 92 },
      { texto: 'Más plazas públicas para tratar adicciones, con una específica para menores.', pagina: 92 },
      {
        texto:
          'Plan de apoyo a la maternidad, contra la violencia obstétrica y de apoyo a la lactancia y al duelo perinatal.',
        pagina: 92,
      },
      {
        texto:
          'Regular el cannabis: despenalizar el autocultivo y las asociaciones sin ánimo de lucro y legalizar el uso medicinal.',
        pagina: 92,
      },
      { texto: 'Transferir a las comunidades la sanidad penitenciaria.', pagina: 92 },
      { texto: 'Una norma que regule los derechos de las personas con enfermedades crónicas.', pagina: 92 },
      { texto: 'Aplicar con urgencia la Estrategia de Salud Mental 2022-2026 en la infancia.', pagina: 95 },
      {
        texto:
          'Atención temprana universal y gratuita hasta los seis años como derecho, con una ley de atención al desarrollo.',
        pagina: 95,
      },
      {
        texto:
          'Equipos de atención primaria con fisioterapeutas, nutricionistas, psicólogos, dentistas y podólogos para los mayores.',
        pagina: 98,
      },
      {
        texto: 'Financiar el 80 % de los audífonos a pensionistas con ingresos inferiores al salario mínimo.',
        pagina: 98,
      },
      { texto: 'Cuidados paliativos en casa y garantizar la muerte digna según la ley de eutanasia.', pagina: 99 },
      { texto: 'Anticonceptivos gratuitos y universales y producción nacional de genéricos.', pagina: 102 },
      {
        texto:
          'Plan de salud mental juvenil: prevención del suicidio en los centros educativos y menos listas de espera.',
        pagina: 102,
      },
      {
        texto:
          'Sanidad universal sin barreras: solicitantes de asilo, migrantes irregulares, personas sin hogar o sin empadronamiento.',
        pagina: 105,
      },
      {
        texto: 'Cubrir la reparación de la mutilación genital y ampliar el cribado prenatal con ADN fetal.',
        pagina: 109,
      },
      {
        texto: 'Perspectiva de género en sanidad, contra diagnósticos androcéntricos como en los infartos.',
        pagina: 109,
      },
      {
        texto: 'Reproducción asistida pública hasta los 45 años, también para lesbianas y mujeres sin pareja.',
        pagina: 109,
      },
      {
        texto: 'Protocolos sanitarios LGTBI+, reproducción asistida plena y erradicar las «terapias de conversión».',
        pagina: 115,
      },
      {
        texto:
          'Que las personas con trastorno mental grave no entren en prisión y cerrar los psiquiátricos penitenciarios.',
        pagina: 133,
      },
      { texto: 'Investigación clínica independiente en los centros del Sistema Nacional de Salud.', pagina: 165 },
      {
        texto: 'Receta deportiva en los centros de salud, con un programa de financiación y profesionales del deporte.',
        pagina: 174,
      },
      { texto: 'Atención de salud mental para deportistas de alto nivel, en activo y retirados.', pagina: 177 },
      {
        texto:
          'Que los datos masivos de salud de la Administración solo se usen en proyectos públicos de interés general.',
        pagina: 179,
      },
    ],
    pensiones: [
      {
        texto:
          'Mantener la revalorización con el IPC y subir las mínimas y no contributivas hasta al menos el umbral de la pobreza.',
        pagina: 15,
      },
      {
        texto: 'Más ingresos para el sistema público con nuevas fuentes, más cotizantes y bases más altas.',
        pagina: 15,
      },
      {
        texto: 'Pensiones de viudedad y orfandad según la convivencia real acreditable, no solo la registrada.',
        pagina: 34,
      },
      {
        texto:
          'Reforma constitucional que blinde la Seguridad Social como sistema público, de reparto y sin ánimo de lucro.',
        pagina: 34,
      },
      { texto: 'Revalorizar las pensiones por ley, como mínimo con el IPC.', pagina: 34 },
      {
        texto: 'Seguridad Social para todos los residentes, también los irregulares que trabajen por cuenta ajena.',
        pagina: 34,
      },
      {
        texto:
          'Complementar las pensiones más bajas, sobre todo las no contributivas, para que ningún mayor quede en vulnerabilidad.',
        pagina: 97,
      },
      {
        texto:
          'Reforzar el complemento de brecha de género y subir las pensiones mínimas y las de viudedad sin cotización propia.',
        pagina: 108,
      },
    ],
    educacion: [
      { texto: 'Crear plazas públicas de escuela infantil de 0 a 3 años hasta una cobertura del 90 %.', pagina: 10 },
      {
        texto: 'Menús escolares con al menos un 45 % de frutas y verduras y máquinas de vending saludables.',
        pagina: 21,
      },
      { texto: 'Usar los contratos formativos para que quien dejó los estudios obligatorios los termine.', pagina: 28 },
      { texto: 'Formación en economía social y cooperativa en todos los niveles educativos.', pagina: 31 },
      {
        texto: 'Contenidos ecosociales en el currículo y formación del profesorado sobre la crisis climática.',
        pagina: 39,
      },
      {
        texto:
          'Fomentar una asignatura obligatoria sobre la crisis ecosocial en todos los grados universitarios, respetando su autonomía.',
        pagina: 39,
      },
      { texto: 'Naturalizar los patios y revisar el Libro Blanco de Educación Ambiental.', pagina: 39 },
      { texto: 'Impulsar la FP en reparación de ropa, muebles y aparatos electrónicos.', pagina: 54 },
      { texto: 'Educación en empatía y derechos de los animales.', pagina: 56 },
      {
        texto: 'Comedores escolares con un día vegetariano a la semana para todos y opción vegetariana diaria.',
        pagina: 68,
      },
      {
        texto: 'Asignatura obligatoria de alimentación saludable en primaria, secundaria y grados sanitarios.',
        pagina: 69,
      },
      {
        texto: 'Comedor escolar gratuito y saludable, por ley y de forma progresiva, en toda la enseñanza obligatoria.',
        pagina: 94,
      },
      {
        texto: 'Plazas gratuitas de 0 a 3 años para toda la demanda, con ratios más bajas y horarios flexibles.',
        pagina: 94,
      },
      {
        texto: 'Acreditar las competencias del voluntariado y homologar los títulos de tiempo libre entre comunidades.',
        pagina: 103,
      },
      { texto: 'Más becas, sin la parte variable, y pagadas en el primer trimestre del curso.', pagina: 103 },
      {
        texto:
          'Más inversión pública en FP para frenar su privatización y acreditar competencias a quien dejó los estudios.',
        pagina: 103,
      },
      { texto: 'Más niñas en las carreras STEM y combatir la brecha de género en la investigación.', pagina: 109 },
      {
        texto:
          'Personal especialista en igualdad en todos los centros y educación sexoafectiva, antirracista y LGTBI+ en el currículo.',
        pagina: 109,
      },
      {
        texto:
          'Diversidad sexual en la educación sexoafectiva y responsables de diversidad en todos los niveles educativos.',
        pagina: 114,
      },
      { texto: 'Formación democrática en todas las etapas educativas.', pagina: 118 },
      { texto: 'Memoria democrática en el currículo y en los libros de texto.', pagina: 135 },
      { texto: 'Educación para la paz y la no violencia como eje de la acción de gobierno.', pagina: 139 },
      {
        texto:
          'Gasto educativo del 5 % del PIB de inmediato y avanzar hacia el 7 %, con una Ley de Financiación de la educación pública.',
        pagina: 154,
      },
      {
        texto: 'Que la concertada sea subsidiaria de la pública y no ceder más suelo público para colegios privados.',
        pagina: 155,
      },
      {
        texto:
          'Red pública suficiente de FP, presencial y a distancia, y una nueva ley de FP ligada al trabajo decente.',
        pagina: 154,
      },
      {
        texto:
          'Suprimir el concierto a los centros que discriminen por razón de sexo o seleccionen al alumnado, y vigilar que no cobren cuotas ilegales.',
        pagina: 155,
      },
      { texto: 'Integrar las enseñanzas artísticas superiores en la universidad.', pagina: 155 },
      {
        texto:
          'Más profesorado de apoyo, atención psicológica en los centros y refuerzo de la escuela rural contra el fracaso escolar.',
        pagina: 155,
      },
      { texto: 'Reforzar la formación de adultos y el reciclaje profesional a lo largo de la vida.', pagina: 155 },
      {
        texto: 'Educación sexual en todas las etapas y centros abiertos al barrio fuera del horario lectivo.',
        pagina: 156,
      },
      {
        texto: 'Escuela laica: la religión fuera del currículo y del horario lectivo y sin contar para la nota media.',
        pagina: 156,
      },
      { texto: 'Evaluación formativa también de las administraciones y de los centros.', pagina: 156 },
      { texto: 'Una Ley Estatal de uso y enseñanza de las lenguas oficiales y minorizadas.', pagina: 156 },
      { texto: 'Bajar las ratios, más docentes y menos burocracia, y reducir la interinidad al mínimo.', pagina: 157 },
      { texto: 'Formación inicial del profesorado con prácticas y formación permanente incentivada.', pagina: 157 },
      { texto: 'Gratuidad de todas las etapas en los centros públicos, también las no obligatorias.', pagina: 157 },
      { texto: 'Más orientadores y psicólogos en los centros educativos.', pagina: 158 },
      {
        texto:
          'Rehabilitar los colegios contra el calor, con sombras y patios naturalizados, y abrirlos como refugios climáticos.',
        pagina: 158,
      },
      {
        texto:
          'Bajar las tasas universitarias hasta la gratuidad, empezando por el primer curso, y no penalizar las segundas matrículas.',
        pagina: 160,
      },
      { texto: 'Más becas según renta, residencias asequibles y pago de las becas al inicio del curso.', pagina: 160 },
      {
        texto: 'Más vías de acceso a la universidad para adultos, con horarios flexibles y matrícula a tiempo parcial.',
        pagina: 160,
      },
      {
        texto: 'Prácticas externas de calidad y reconocidas, y más participación de los estudiantes en la universidad.',
        pagina: 160,
      },
      {
        texto: 'Nueva evaluación del profesorado que valore docencia y transferencia, con sexenio de docencia.',
        pagina: 161,
      },
      { texto: 'Simplificar las tareas administrativas en la universidad.', pagina: 161 },
      {
        texto: 'Topes reales a la temporalidad del profesorado universitario y una tasa de reposición plurianual.',
        pagina: 161,
      },
      { texto: 'Ciencia abierta en repositorios públicos frente al dominio de las editoriales privadas.', pagina: 162 },
      {
        texto: 'Unidades de atención a la discapacidad en todas las universidades y cumplir la cuota de empleo.',
        pagina: 162,
      },
      { texto: 'Unidades de igualdad con recursos y poder de decisión en todas las universidades.', pagina: 162 },
      { texto: 'Becas de movilidad internacional que cubran la estancia completa y su coste real.', pagina: 163 },
      { texto: 'Revisar el papel de la ANECA y la AEI, con menos burocracia.', pagina: 163 },
      { texto: 'Contabilidad analítica y contratos-programa plurianuales en las universidades públicas.', pagina: 164 },
      {
        texto: 'Cumplir como mínimo el 1 % del PIB para las universidades públicas que fija la LOSU y crecer después.',
        pagina: 164,
      },
      {
        texto: 'Ley de enseñanzas artísticas que equipare a sus estudiantes y profesores con los universitarios.',
        pagina: 172,
      },
      {
        texto:
          'Un pacto entre educación y cultura y más educación artística y musical en primaria, secundaria y bachillerato.',
        pagina: 172,
      },
      { texto: 'Deporte escolar público para todos y una mesa sobre el deporte universitario.', pagina: 175 },
      {
        texto:
          'Abrir las instalaciones deportivas de los centros por las tardes y los fines de semana, y becas para deportistas de alto rendimiento.',
        pagina: 176,
      },
      { texto: 'Al menos tres horas semanales de educación física en la enseñanza obligatoria.', pagina: 176 },
      {
        texto: 'Materiales y servicios digitales libres en la educación y enseñar programación, no solo uso.',
        pagina: 182,
      },
    ],
    inmigracion: [
      {
        texto: 'Proteger los derechos de los trabajadores migrantes con acuerdos con los países de origen y tránsito.',
        pagina: 34,
      },
      {
        texto:
          'Pacto de Estado para la acogida de menores no acompañados, con permiso de residencia y trabajo al cumplir 18.',
        pagina: 96,
      },
      {
        texto:
          'Revisar las pruebas de edad de los menores migrantes no acompañados según la Convención de los Derechos del Niño.',
        pagina: 95,
      },
      {
        texto:
          'Digitalizar y simplificar los trámites consulares y de extranjería, manteniendo la atención presencial.',
        pagina: 104,
      },
      { texto: 'Pedir asilo en embajadas y consulados y traslado a España de quien obtenga protección.', pagina: 104 },
      { texto: 'Productos financieros para migrantes y homologar más fácil títulos y experiencia.', pagina: 104 },
      {
        texto:
          'Pruebas de edad no invasivas para menores no acompañados y derecho a nombre y nacionalidad desde el nacimiento.',
        pagina: 104,
      },
      {
        texto: 'Reformar la Ley de Extranjería y su reglamento para simplificar y unificar los permisos de residencia.',
        pagina: 104,
      },
      { texto: 'Un procedimiento de regularización permanente.', pagina: 104 },
      { texto: 'Cerrar los Centros de Internamiento de Extranjeros (CIE).', pagina: 105 },
      { texto: 'Promover la participación política de los migrantes en las elecciones.', pagina: 105 },
      {
        texto:
          'Que la Ley de Extranjería no impida a las migrantes recibir protección como víctimas de violencia machista.',
        pagina: 110,
      },
      {
        texto:
          'Documentación de los migrantes acorde con su identidad de género y mejorar el asilo por orientación sexual o identidad de género.',
        pagina: 116,
      },
      {
        texto:
          'Ratificar la Convención de la ONU sobre los derechos de los trabajadores migratorios y aplicar el Pacto Mundial para la Migración.',
        pagina: 149,
      },
      { texto: 'Reconocer y proteger a los migrantes climáticos.', pagina: 149 },
      {
        texto:
          'Tipificar como delito las devoluciones en caliente y eliminar la disposición de la Ley de Extranjería que las permite.',
        pagina: 149,
      },
      {
        texto:
          'Transparencia en los acuerdos migratorios y fin de la externalización de fronteras a países que no respetan los derechos humanos.',
        pagina: 149,
      },
      {
        texto:
          'Un nuevo pacto europeo de migración y asilo con corredores humanitarios y un reasentamiento vinculante y más generoso.',
        pagina: 149,
      },
      {
        texto: 'Una política de movilidad humana con derechos, que vaya más allá del control fronterizo.',
        pagina: 149,
      },
      {
        texto:
          'Vigilancia independiente de derechos humanos en la Frontera Sur para que no se repita lo de Melilla en junio de 2022.',
        pagina: 149,
      },
      { texto: 'Garantizar el principio de no devolución.', pagina: 150 },
    ],
    territorio: [
      {
        texto:
          'Conferencia de Presidentes al menos una vez al año y un Consejo de Política Fiscal donde el Gobierno no tenga asegurada la mayoría.',
        pagina: 18,
      },
      {
        texto:
          'Reforma inmediata de la financiación autonómica y local, abordando la infrafinanciación y la deuda acumulada.',
        pagina: 18,
      },
      {
        texto: 'Más autonomía financiera municipal y una financiación justa de los servicios en las zonas rurales.',
        pagina: 59,
      },
      { texto: 'Una «política de municipios» y una segunda descentralización hacia los ayuntamientos.', pagina: 73 },
      { texto: 'Crear entes metropolitanos para gobernar las grandes áreas urbanas.', pagina: 74 },
      { texto: 'Más medios técnicos y de personal para ayuntamientos y diputaciones.', pagina: 75 },
      { texto: 'Transferir la gestión de puertos y aeropuertos para gestionarlos junto a sus ciudades.', pagina: 82 },
      {
        texto: 'Un fondo de compensación para las comunidades perjudicadas por las infraestructuras radiales.',
        pagina: 82,
      },
      { texto: 'Un nuevo pacto territorial que reconozca a España como «realidad plurinacional».', pagina: 120 },
      {
        texto:
          'Ley de gobiernos locales y financiación local y planes para pequeños municipios y áreas metropolitanas.',
        pagina: 121,
      },
      {
        texto: 'Nuevo modelo de financiación autonómica con un suelo fiscal y cumplir y actualizar los Estatutos.',
        pagina: 121,
      },
      {
        texto:
          'Presencia de las comunidades en organismos del Estado y de la UE, y foros ciudadanos sobre el modelo territorial.',
        pagina: 121,
      },
      {
        texto: 'Promover las lenguas cooficiales en toda España, en la Administración del Estado, la justicia y la UE.',
        pagina: 121,
      },
      {
        texto:
          'Reforzar la mesa de diálogo con la Generalitat y que el acuerdo resultante lo vote la ciudadanía de Cataluña.',
        pagina: 121,
      },
      { texto: 'Premios a la literatura en lenguas cooficiales equiparables al Cervantes.', pagina: 171 },
      {
        texto:
          'Que todas las lenguas históricas sean oficiales y una Ley de Lenguas que reconozca la realidad plurilingüe.',
        pagina: 171,
      },
      {
        texto:
          'Programación completa en lenguas cooficiales en las radiotelevisiones públicas y reciprocidad entre autonómicas.',
        pagina: 173,
      },
    ],
    democracia: [
      {
        texto:
          'Recuperar plantillas en la Administración, con tasa de reposición positiva y directivos más profesionales.',
        pagina: 18,
      },
      { texto: 'Administraciones más flexibles, con sistemas informáticos y bases de datos unificados.', pagina: 18 },
      { texto: 'Volver a la atención presencial plena en todas las administraciones.', pagina: 18 },
      {
        texto: 'Más medios para evaluar políticas públicas y que los parlamentos puedan pedir informes a la AIReF.',
        pagina: 19,
      },
      {
        texto:
          'Bajar la temporalidad del empleo público (30 %) hasta igualarla con la del sector privado al final de la legislatura.',
        pagina: 35,
      },
      { texto: 'Desarrollar el Estatuto Básico del Empleado Público para hacer efectivos sus derechos.', pagina: 35 },
      {
        texto: 'Garantizar la seguridad y la salud laboral en el empleo público, también en el teletrabajo.',
        pagina: 35,
      },
      { texto: 'Negociación colectiva de los empleados públicos equiparable a la del sector privado.', pagina: 35 },
      { texto: 'Participación ciudadana real en los planes de la transición ecológica.', pagina: 39 },
      {
        texto:
          'Derogar la ley que protege la tauromaquia como patrimonio y quitar la financiación pública a las corridas con muerte del animal.',
        pagina: 56,
      },
      { texto: 'Incluir a los animales de trabajo en la Ley de Bienestar Animal y aprobar su reglamento.', pagina: 56 },
      { texto: 'Más ayudas a las entidades de protección animal.', pagina: 56 },
      { texto: 'Eliminar los obstáculos para que las personas con discapacidad voten de forma autónoma.', pagina: 101 },
      { texto: 'Derecho a votar desde los 16 años.', pagina: 102 },
      { texto: 'Una ley de participación juvenil que desarrolle el artículo 48 de la Constitución.', pagina: 102 },
      { texto: 'Un pacto de Estado contra los discursos de odio.', pagina: 114 },
      {
        texto:
          'Estudiar una ley de participación ciudadana, revisar la ILP, actualizar la ley electoral y ampliar el número de diputados.',
        pagina: 117,
      },
      {
        texto:
          'Procesos participativos en las leyes y planes y una plataforma electrónica nacional para proponer e interpelar a los cargos electos.',
        pagina: 117,
      },
      {
        texto: 'Recursos para el asociacionismo y Observatorios Ciudadanos que vigilen la actividad política.',
        pagina: 117,
      },
      { texto: 'Control democrático de los datos masivos, los algoritmos y la inteligencia artificial.', pagina: 118 },
      {
        texto: 'Revisar los delitos de opinión y de odio y reformar o derogar en parte la «ley mordaza».',
        pagina: 118,
      },
      {
        texto: 'Una ley orgánica sobre el derecho a la información veraz y reformar el derecho de rectificación.',
        pagina: 118,
      },
      { texto: 'Buzón anónimo para denunciar corrupción en la Administración.', pagina: 119 },
      {
        texto: 'Renovar plantillas públicas captando talento joven y facilitar el teletrabajo donde sea posible.',
        pagina: 119,
      },
      { texto: 'Una agencia de evaluación de políticas públicas y una dirección pública profesional.', pagina: 119 },
      {
        texto:
          'Una agencia pública para la transición digital que controle el uso de algoritmos e inteligencia artificial en la Administración.',
        pagina: 120,
      },
      {
        texto:
          'Plan de choque en la justicia: más jueces por habitante, nueva oficina judicial y respuesta conjunta a los litigios en masa.',
        pagina: 123,
      },
      { texto: 'Una estrategia de justicia del siglo XXI para acabar con el colapso de los juzgados.', pagina: 123 },
      {
        texto:
          'Órganos comunes para ejecutar las sentencias de pago pendientes, con medios como los de la Agencia Tributaria.',
        pagina: 124,
      },
      { texto: 'Digitalizar la justicia con expediente electrónico y preferentemente código abierto.', pagina: 124 },
      {
        texto: 'Justicia restaurativa pública y universal para las víctimas en todas las fases del proceso penal.',
        pagina: 124,
      },
      {
        texto: 'Más jueces, letrados y personal, sobre todo en primera instancia, y mejores servicios de traducción.',
        pagina: 124,
      },
      {
        texto:
          'Órganos públicos de mediación y conciliación de proximidad, con acuerdos ejecutivos sin pasar por el juez.',
        pagina: 124,
      },
      { texto: 'Descentralizar parte de las funciones del CGPJ en consejos territoriales.', pagina: 125 },
      {
        texto: 'Ley Orgánica del derecho de defensa, sin privatizarla, y adelantar las indemnizaciones a las víctimas.',
        pagina: 125,
      },
      {
        texto:
          'Más recursos y mejor pago para la justicia gratuita y el turno de oficio, y un umbral de renta más alto para acceder.',
        pagina: 125,
      },
      {
        texto:
          'Que los TSJ sean la última instancia en cada comunidad y reducir al mínimo las competencias de la Audiencia Nacional.',
        pagina: 125,
      },
      {
        texto:
          'Nuevo acceso a la carrera judicial y fiscal con un centro público de estudios, menos memorístico y con becas pagadas.',
        pagina: 126,
      },
      {
        texto:
          'Paridad en el Constitucional, el Supremo y otros órganos, y formación judicial en perspectiva de género.',
        pagina: 126,
      },
      { texto: 'Mejorar las condiciones del personal de justicia y reducir al máximo las interinidades.', pagina: 127 },
      {
        texto:
          'Un Fiscal General con nombramiento que garantice su independencia y control parlamentario de la Fiscalía.',
        pagina: 127,
      },
      {
        texto:
          'Juzgados de familia en todo el territorio y juzgados especializados en discapacidad y en salud laboral.',
        pagina: 128,
      },
      {
        texto: 'Que el Estado indemnice de verdad por el mal funcionamiento de la justicia y por error judicial.',
        pagina: 128,
      },
      { texto: 'Que la instrucción penal pase al fiscal, con un juez de garantías.', pagina: 128 },
      { texto: 'Sentencias en lenguaje claro y uso de las lenguas cooficiales en la justicia.', pagina: 128 },
      { texto: 'Una justicia de menores educativa y sin privatizar la ejecución de las medidas.', pagina: 128 },
      { texto: 'Una nueva ley de indultos que exija más el interés público.', pagina: 128 },
      {
        texto:
          'Cambiar la elección del CGPJ para evitar bloqueos, con paridad y cese automático al expirar el mandato.',
        pagina: 129,
      },
      {
        texto: 'Evitar el bloqueo en la renovación del Tribunal Constitucional y regular la figura del amicus curiae.',
        pagina: 129,
      },
      { texto: 'Proponer en la primera semana de las Cortes un pleno para renovar el CGPJ.', pagina: 129 },
      { texto: 'Recuperar la justicia universal para los crímenes más graves.', pagina: 129 },
      {
        texto: 'Suprimir la justicia militar, integrarla en la ordinaria y derogar el Código Penal Militar.',
        pagina: 129,
      },
      { texto: 'Ampliar la comisión de la verdad a las violaciones de derechos durante la Transición.', pagina: 134 },
      {
        texto:
          'Desarrollar la Ley de Memoria Democrática: censo de víctimas, banco de ADN y auditoría de bienes incautados.',
        pagina: 134,
      },
      {
        texto: 'Más presupuesto para exhumar e identificar a los desaparecidos de la guerra y la dictadura.',
        pagina: 134,
      },
      { texto: 'Reformar la Ley de Secretos Oficiales para garantizar el acceso a los archivos.', pagina: 134 },
      { texto: 'Reparar a las mujeres y a las personas LGTBI+ represaliadas por el franquismo.', pagina: 134 },
      { texto: 'Revocar las condecoraciones a quienes formaron parte de la represión franquista.', pagina: 134 },
      {
        texto:
          'Centros de interpretación en lugares de memoria como Carabanchel, la Modelo, Vía Laietana o el campo de Castuera.',
        pagina: 135,
      },
      { texto: 'Resignificar el Valle de Cuelgamuros con un centro de interpretación.', pagina: 135 },
      {
        texto: 'Una ley de «bebés robados» con búsqueda de las víctimas, acceso a archivos y reparación.',
        pagina: 135,
      },
      { texto: 'Estudiar una circunscripción electoral exterior.', pagina: 150 },
      {
        texto:
          'Protección reforzada de la libertad de creación frente a la censura e injerencia política en las instituciones culturales.',
        pagina: 167,
      },
      {
        texto:
          'Concursos públicos para dirigir centros culturales, con límites de mandato y sin injerencia política en la programación.',
        pagina: 168,
      },
      {
        texto: 'Poner en marcha el Consejo Estatal de Medios Audiovisuales como regulador y sancionador.',
        pagina: 173,
      },
      { texto: 'Un Estatuto de la Información con código deontológico contra las informaciones falsas.', pagina: 173 },
      {
        texto:
          'Neutralidad de la red, internet como servicio universal gratuito y ninguna restricción de derechos en la red sin orden judicial.',
        pagina: 179,
      },
      {
        texto:
          'Software libre en las administraciones y en la escuela, con código abierto obligatorio en la contratación pública.',
        pagina: 179,
      },
      { texto: 'Limitar la concentración de medios de radio, televisión e internet en un mismo grupo.', pagina: 181 },
      {
        texto: 'Que las administraciones desarrollen su propia tecnología en lugar de externalizarla a consultoras.',
        pagina: 180,
      },
      {
        texto:
          'Un organismo público que autorice el uso de los datos por las empresas y cifrado de comunicaciones por diseño.',
        pagina: 180,
      },
      { texto: 'Paneles de datos abiertos y proyectos piloto de innovación ciudadana.', pagina: 181 },
    ],
    seguridad: [
      { texto: 'Una fiscalía especializada en delitos contra los derechos de los trabajadores.', pagina: 28 },
      { texto: 'Derecho de libertad sindical para los guardias civiles.', pagina: 33 },
      { texto: 'Planes contra el maltrato animal, con medios para policía y juzgados.', pagina: 56 },
      {
        texto: 'Más formación de jueces y policías en delitos de odio y revisar sus protocolos de detección.',
        pagina: 114,
      },
      {
        texto: 'Ante los grupos juveniles, prevención en las aulas, mediadores y empleo en lugar de solo más policía.',
        pagina: 130,
      },
      {
        texto:
          'Ley de prevención y convivencia que priorice la mediación y la intervención social frente a la sanción.',
        pagina: 130,
      },
      {
        texto:
          'Red estatal de mediación comunitaria con trabajadores sociales, mediadores y profesionales de salud mental.',
        pagina: 130,
      },
      { texto: 'Desmilitarizar la Guardia Civil.', pagina: 131 },
      {
        texto:
          'Gestión policial de las protestas más respetuosa con los derechos y derogar los aspectos de la «ley mordaza» que limitan la reunión.',
        pagina: 131,
      },
      {
        texto: 'Más diversidad en la selección policial y personal no policial para las tareas administrativas.',
        pagina: 131,
      },
      {
        texto: 'Negociar mejoras de sueldo, pensiones, jornada y salud mental de policías y guardias civiles.',
        pagina: 131,
      },
      {
        texto:
          'Una comisión parlamentaria sobre el modelo policial para reformar la Ley de Fuerzas y Cuerpos de Seguridad de 1986.',
        pagina: 131,
      },
      {
        texto: 'Identificación visible en los uniformes y organismos externos de control de la actuación policial.',
        pagina: 132,
      },
      {
        texto: 'Prohibir los perfiles raciales y las identificaciones policiales para aplicar la Ley de Extranjería.',
        pagina: 132,
      },
      {
        texto:
          'Regular por ley el uso de la fuerza y prohibir las pelotas de goma, con cámaras corporales para los agentes.',
        pagina: 132,
      },
      {
        texto:
          'Una agencia nacional de prevención del delito como la sueca y una encuesta nacional de seguridad al menos cada dos años.',
        pagina: 132,
      },
      { texto: 'Eliminar la prisión permanente revisable.', pagina: 133 },
      {
        texto: 'Nuevo Código Penal con más penas en la comunidad y menos cárcel, orientado a la reinserción.',
        pagina: 133,
      },
      {
        texto:
          'Un código de buenas prácticas para que la publicidad de la seguridad privada no exagere la inseguridad, por ejemplo con la okupación.',
        pagina: 133,
      },
    ],
    igualdad: [
      {
        texto: 'Acabar con la brecha salarial con más transparencia, control horario y un observatorio de la brecha.',
        pagina: 9,
      },
      { texto: 'Ampliar a 32 semanas el permiso por nacimiento de las familias monomarentales.', pagina: 9 },
      {
        texto:
          'Permiso parental de diez semanas retribuido hasta los 12 años del hijo y remunerar el de cinco días para cuidar a familiares.',
        pagina: 9,
      },
      { texto: 'Políticas contra las brechas de género en parcialidad, temporalidad y acceso al empleo.', pagina: 9 },
      {
        texto:
          'Controlar la brecha salarial con el algoritmo HER, a partir de los registros retributivos de las empresas.',
        pagina: 26,
      },
      {
        texto:
          'Más mujeres en el sector pesquero y reconocer las enfermedades profesionales de mariscadoras, redeiras y percebeiras.',
        pagina: 66,
      },
      {
        texto:
          'Ampliar poco a poco el permiso por nacimiento hasta seis meses y que las seis semanas obligatorias no tengan que ser simultáneas.',
        pagina: 94,
      },
      {
        texto: 'Hacer efectivo el permiso de cinco días por enfermedad de un familiar y ampliarlo al menos a siete.',
        pagina: 94,
      },
      {
        texto: 'Adopción internacional más transparente y sin restricciones de otros países a las familias LGTBI+.',
        pagina: 96,
      },
      { texto: 'Combatir la violencia y la brecha de empleo de las mujeres con discapacidad.', pagina: 100 },
      { texto: 'Ley integral contra el racismo, incluido el institucional y estructural.', pagina: 104 },
      { texto: 'Ampliar el teléfono de información de derechos de las mujeres a la conciliación.', pagina: 109 },
      { texto: 'Más planes de igualdad e inspecciones y protocolos contra el acoso laboral.', pagina: 108 },
      {
        texto:
          'Plan de choque contra la precariedad de limpiadoras, camareras de piso, empleadas del hogar o aparadoras.',
        pagina: 108,
      },
      { texto: 'Ampliar la ley a todas las formas de violencia machista, según el Convenio de Estambul.', pagina: 110 },
      {
        texto: 'Formación obligatoria y continuada en violencia machista para quienes atienden a las víctimas.',
        pagina: 111,
      },
      {
        texto: 'Incluir otras violencias en VioGén y revisar la valoración del riesgo y las órdenes de protección.',
        pagina: 110,
      },
      {
        texto:
          'Ley integral contra la trata de personas y consolidar el plan de inserción laboral de víctimas de trata y mujeres en prostitución.',
        pagina: 110,
      },
      {
        texto: 'Mejores estadísticas de violencia machista e indemnizaciones específicas para las víctimas.',
        pagina: 110,
      },
      {
        texto: 'Protocolo hospitalario para casos de «sumisión química» y un plan contra la violencia institucional.',
        pagina: 110,
      },
      {
        texto:
          'Tipificar el impago de pensiones de alimentos como violencia económica y más dinero para el Fondo de Garantía de Alimentos.',
        pagina: 110,
      },
      {
        texto: 'Un teléfono de atención para hombres en crisis, sin restar fondos a los programas para mujeres.',
        pagina: 111,
      },
      { texto: 'Blindar el Pacto de Estado contra la Violencia de Género con financiación estable.', pagina: 111 },
      {
        texto:
          'Garantizar el aborto en la sanidad pública cercana, clínicas seguras y registros de objetores en todas las comunidades.',
        pagina: 111,
      },
      {
        texto:
          'Perseguir el ciberacoso y la difusión de imágenes íntimas, y perspectiva de género en las políticas digitales.',
        pagina: 111,
      },
      { texto: 'Reconocer y combatir la violencia obstétrica.', pagina: 111 },
      {
        texto:
          'Crear la Autoridad Independiente para la Igualdad de Trato y unidades de igualdad en todas las administraciones.',
        pagina: 113,
      },
      {
        texto:
          'Reforzar el Ministerio de Igualdad y crear una Vicepresidencia de Feminismos y Economía de los Cuidados.',
        pagina: 112,
      },
      { texto: 'Una ley orgánica para la igualdad de las mujeres gitanas, consultada con la comunidad.', pagina: 112 },
      {
        texto:
          'Campañas contra los discursos que niegan la violencia machista o llaman «ideología de género» a la igualdad.',
        pagina: 113,
      },
      {
        texto: 'Más mujeres en los puestos de decisión de la transición ecológica y en las carreras STEM.',
        pagina: 113,
      },
      { texto: 'Desarrollar la Ley Trans y LGTBI con planes estratégicos y evaluación continua.', pagina: 114 },
      {
        texto: 'Red de acogida, asistencia jurídica y psicológica para víctimas de violencia LGTBI+fóbica.',
        pagina: 114,
      },
      { texto: 'Libre movilidad de las familias LGTBI+ en la UE y un certificado de filiación europeo.', pagina: 116 },
      { texto: 'Planes de igualdad LGTBI+ en el empleo e inserción laboral de mujeres trans.', pagina: 115 },
      {
        texto: 'Reconocer la multiparentalidad y estudiar la adopción por núcleos de más de dos personas.',
        pagina: 116,
      },
      { texto: 'Residencias y centros de día que respeten la diversidad de las personas mayores LGTBI+.', pagina: 115 },
      { texto: 'Defender la autodeterminación de las personas trans, intersex y no binarias.', pagina: 116 },
      { texto: 'Financiar proyectos culturales e investigación que visibilicen la diversidad LGTBI+.', pagina: 116 },
      { texto: 'Medidas contra la violencia en parejas del mismo género y protección para sus víctimas.', pagina: 116 },
      { texto: 'Planes de igualdad, paridad en jurados y acción positiva en las ayudas culturales.', pagina: 172 },
      {
        texto:
          'Deporte femenino en la radio y televisión públicas, más mujeres en las federaciones y planes de igualdad en todas ellas.',
        pagina: 175,
      },
      {
        texto:
          'Ligas y convenios profesionales en el deporte femenino y reformar la relación laboral de los deportistas profesionales.',
        pagina: 175,
      },
      { texto: 'Mismos derechos para el deporte femenino en espacios y horarios de las instalaciones.', pagina: 176 },
      { texto: 'Planes de igualdad digital y medidas contra las violencias digitales machistas.', pagina: 182 },
    ],
    social: [
      {
        texto: 'Más inversión en dependencia y un modelo de cuidados centrado en la persona, con atención a domicilio.',
        pagina: 10,
      },
      {
        texto:
          'Automatizar el pago de las ayudas, estudiando hacerlo a través de la Agencia Tributaria, y garantizar a todos una cuenta bancaria.',
        pagina: 15,
      },
      {
        texto:
          'Llevar el gasto social al nivel de los países más desarrollados, siguiendo el Pilar Europeo de Derechos Sociales.',
        pagina: 15,
      },
      { texto: 'Que el Estado financie el 50 % de la dependencia y rediseñar los copagos según la renta.', pagina: 15 },
      {
        texto:
          '«Herencia universal» de 20.000 € a los 23 años, financiada con un nuevo impuesto a las grandes fortunas.',
        pagina: 15,
      },
      {
        texto:
          'Garantizar agua, luz y calefacción, sin cortes a los hogares vulnerables, y tarifas progresivas según el consumo.',
        pagina: 20,
      },
      {
        texto: 'Actualizar la Ley del Juego para proteger a los menores y controlar las loterías instantáneas.',
        pagina: 21,
      },
      { texto: 'Una ley de cajas botín (loot boxes) en videojuegos para proteger a los menores.', pagina: 21 },
      {
        texto:
          'Actualizar la regulación de las empresas de inserción y ampliar las reservas de contratos públicos para la economía social.',
        pagina: 31,
      },
      { texto: 'Combatir la economía informal y ampliar la protección de los colectivos vulnerables.', pagina: 34 },
      {
        texto: 'Simplificar las prestaciones no contributivas, incluido el IMV, para que lleguen a quien las necesita.',
        pagina: 34,
      },
      { texto: 'Estrategia nacional contra la pobreza en el transporte.', pagina: 38 },
      { texto: 'Limitar la participación de menores en espectáculos con animales.', pagina: 56 },
      {
        texto: 'Espacios públicos con cocina y comedor colectivos, huertos urbanos y mercados de agricultores.',
        pagina: 68,
      },
      {
        texto:
          'Ampliar el Ingreso Mínimo Vital a los jóvenes de 18 a 23 años y a los migrantes en situación irregular con hijos.',
        pagina: 86,
      },
      {
        texto: 'Ayudas de emergencia social fuera de la Ley de Subvenciones, con declaración responsable.',
        pagina: 86,
      },
      {
        texto:
          'Simplificar los requisitos y la burocracia del IMV para que, con las rentas autonómicas, cubra el umbral de la pobreza.',
        pagina: 86,
      },
      {
        texto: 'Ley de Cuidados: derecho universal al cuidado, un sistema público de cuidados y un Pacto de Estado.',
        pagina: 87,
      },
      {
        texto:
          'Ley de Garantía de Acceso a los Servicios Sociales, como derecho subjetivo y con financiación suficiente.',
        pagina: 87,
      },
      {
        texto:
          'Ley de Promoción de la Acción Comunitaria contra la soledad no deseada, con equipos de desarrollo comunitario.',
        pagina: 87,
      },
      {
        texto:
          'Duplicar el Plan Corresponsables, con 200 millones más al año, y certificar la experiencia en cuidados.',
        pagina: 88,
      },
      {
        texto:
          'Hacer del «confort climático» un derecho: refugios climáticos y climatizar colegios, residencias y hospitales.',
        pagina: 88,
      },
      { texto: 'Plan de choque contra la pobreza energética en los hogares más vulnerables.', pagina: 88 },
      {
        texto: 'Prestación universal de 200 € al mes por hijo menor de 18 años, que unifique las ayudas actuales.',
        pagina: 93,
      },
      { texto: 'Subir el gasto en familia e infancia del 1,6 % del PIB a la media europea del 2,4 %.', pagina: 93 },
      {
        texto:
          'Un consejo audiovisual que proteja la imagen y la intimidad de los menores y una carta para los menores no acompañados.',
        pagina: 93,
      },
      { texto: 'Mismos derechos que las numerosas para las familias monoparentales con uno o dos hijos.', pagina: 94 },
      {
        texto:
          'Prestación según renta para quien reduzca su jornada por cuidados y ampliar ese derecho hasta que el hijo cumpla 16 años.',
        pagina: 94,
      },
      {
        texto:
          'Más fondos para aplicar la ley de protección de la infancia frente a la violencia, con fiscalía y juzgados especializados.',
        pagina: 95,
      },
      {
        texto:
          'Servicios públicos de ocio y cultura para la infancia, canguros públicos y ludotecas para familias con pocos recursos.',
        pagina: 95,
      },
      { texto: 'Foros para que los niños sean escuchados en lo que les afecta.', pagina: 96 },
      {
        texto: 'Ley de familias que reconozca todos los modelos de familia y blinde los permisos por cuidado.',
        pagina: 96,
      },
      { texto: 'Ayudas para adaptar la vivienda de las personas mayores.', pagina: 97 },
      {
        texto:
          'Estrategia Estatal de Desinstitucionalización y más horas y cuantías en las prestaciones de dependencia.',
        pagina: 97,
      },
      {
        texto:
          'Priorizar la atención en casa frente a la residencia y mejorar las condiciones de las cuidadoras profesionales.',
        pagina: 97,
      },
      { texto: 'Reconocer el derecho a no cuidar y un programa contra el maltrato a los mayores.', pagina: 97 },
      {
        texto:
          'Reformar la Ley de Dependencia hacia una red pública comunitaria y acabar poco a poco con los conciertos con empresas privadas.',
        pagina: 97,
      },
      {
        texto: 'Residencias con ratios suficientes, inspecciones rápidas y consejos de residentes y familiares.',
        pagina: 98,
      },
      {
        texto: 'Residencias organizadas en unidades de convivencia y alternativas como viviendas colaborativas.',
        pagina: 98,
      },
      { texto: 'Un pacto intergeneracional y reformas contra la discriminación por edad.', pagina: 98 },
      { texto: 'Apoyo psicológico y social a mayores aislados y contra la soledad no deseada.', pagina: 99 },
      { texto: 'Investigar el buen envejecimiento.', pagina: 99 },
      {
        texto:
          'Acabar con la institucionalización forzosa y generalizar la asistencia personal como opción preferente.',
        pagina: 100,
      },
      { texto: 'Cumplir ya la accesibilidad universal, financiándola con las «cuentas durmientes».', pagina: 100 },
      { texto: 'Reconocer y proteger las lenguas de signos española, gallega, vasca y catalana.', pagina: 100 },
      { texto: 'Reformar el artículo 49 de la Constitución sobre discapacidad.', pagina: 100 },
      {
        texto: 'Inclusión plena de las personas con discapacidad en la vida educativa, deportiva y cultural.',
        pagina: 101,
      },
      {
        texto: 'Un pacto de Estado por la juventud, con los jóvenes como interlocutores en la transición ecológica.',
        pagina: 102,
      },
      { texto: 'Reforzar el INJUVE y la Comisión Interministerial de la Juventud.', pagina: 103 },
      { texto: 'Extender el Bono Cultural Joven a todas las personas de 16 a 30 años.', pagina: 167 },
      { texto: 'Precios reducidos en instalaciones deportivas para mayores y personas vulnerables.', pagina: 174 },
      { texto: 'Protocolos contra los abusos sexuales en el deporte y protección de los menores.', pagina: 174 },
      { texto: 'Un «cheque deporte» anual para niños y jóvenes.', pagina: 175 },
      {
        texto: 'Una red de espacios para la inclusión y la alfabetización digital, también de los mayores.',
        pagina: 181,
      },
    ],
    energia: [
      {
        texto: 'Hacer permanente la rebaja de los abonos de transporte, cofinanciada con comunidades y ayuntamientos.',
        pagina: 9,
      },
      {
        texto: 'Ley de Tejados Solares para impulsar la fotovoltaica en edificios y comunidades de vecinos.',
        pagina: 10,
      },
      {
        texto:
          'Plan nacional de transición energética para reducir emisiones y dependencia de los fósiles y abaratar la energía.',
        pagina: 10,
      },
      { texto: 'Rehabilitar 500.000 viviendas al año para reducir a la mitad su demanda de energía.', pagina: 10 },
      { texto: 'Facilitar el autoconsumo y las comunidades energéticas locales.', pagina: 11 },
      {
        texto: 'Ley de Financiación del Transporte Colectivo y que en 2040 no circulen coches con motor de combustión.',
        pagina: 11,
      },
      { texto: 'Mantener el ritmo de inversión en renovables de 2021-2023.', pagina: 11 },
      {
        texto:
          'Reformar el mercado eléctrico mayorista para acabar con el sistema marginalista y los «beneficios caídos del cielo».',
        pagina: 12,
      },
      {
        texto:
          'Bono social eléctrico y térmico con solicitud y renovación automáticas, hasta que lo sustituya una tarifa social.',
        pagina: 13,
      },
      { texto: 'Que el término de potencia no supere el 25 % de la parte regulada de la factura.', pagina: 13 },
      {
        texto: 'Reservar cuota en las subastas renovables para proyectos locales, ciudadanos o cooperativos.',
        pagina: 13,
      },
      { texto: 'Separar la distribución eléctrica de la generación y la comercialización.', pagina: 13 },
      {
        texto:
          'Una empresa pública de energía que gestione las centrales hidroeléctricas cuando acaben sus concesiones.',
        pagina: 13,
      },
      {
        texto:
          'Estrategia para reducir el impacto ecológico del consumo, contra el greenwashing y la obsolescencia programada.',
        pagina: 20,
      },
      {
        texto: 'Tarifa social de luz que garantice el suministro básico, tramitada sin depender de las compañías.',
        pagina: 37,
      },
      { texto: 'Devolver la luz a la Cañada Real hasta que haya una solución pactada con sus vecinos.', pagina: 38 },
      { texto: 'Financiación específica de autoconsumos colectivos para hogares de renta baja.', pagina: 38 },
      { texto: 'Educadores ambientales obligatorios en los municipios de más de 10.000 habitantes.', pagina: 39 },
      {
        texto:
          'Oferta de empleo público de perfiles para la transición ecológica, sin depender de grandes consultoras.',
        pagina: 39,
      },
      { texto: 'Una gran campaña de información con base científica sobre la crisis ecológica.', pagina: 39 },
      {
        texto:
          'Formación verde y digital del funcionariado y colaboración con universidades para evaluar las políticas.',
        pagina: 40,
      },
      { texto: 'Mantener una Vicepresidencia del Gobierno de Transición Ecológica.', pagina: 40 },
      {
        texto:
          'Una Oficina de Transición Energética Justa: ventanilla única para autoconsumo y rehabilitación, con sedes en ciudades de más de 50.000 habitantes.',
        pagina: 40,
      },
      {
        texto: 'Una agencia y un observatorio de la transición ecológica justa en 2024, con seguimiento parlamentario.',
        pagina: 40,
      },
      {
        texto:
          'Ayudas al coche eléctrico según la renta, cargadores ultrarrápidos en las rutas comerciales y ayudas a transportistas autónomos.',
        pagina: 41,
      },
      { texto: 'Descarbonizar la calefacción y el agua caliente de 500.000 viviendas al año.', pagina: 41 },
      {
        texto:
          'Eficiencia energética en la industria, compra pública de productos descarbonizados como el acero e I+D+i.',
        pagina: 41,
      },
      { texto: 'Emisiones netas nulas en 2040.', pagina: 41 },
      { texto: 'Hoja de ruta del hidrógeno renovable para la aviación y el transporte marítimo.', pagina: 41 },
      {
        texto: 'Limitar los vuelos que puedan sustituirse fácilmente por tren y potenciar el tren nocturno.',
        pagina: 41,
      },
      {
        texto:
          'Más ambición climática para 2030: 55 % menos de emisiones, 50 % de electrificación y 90 % de electricidad renovable.',
        pagina: 41,
      },
      { texto: 'Regular las nuevas redes de gas en nuevas urbanizaciones.', pagina: 41 },
      {
        texto: 'Sustituir obligatoriamente las calderas de más de 15 años, con ayudas a los hogares de menor renta.',
        pagina: 41,
      },
      {
        texto: 'Dejar de considerar el gas o la captura de carbono como energía de transición en el transporte.',
        pagina: 42,
      },
      { texto: 'Ninguna inversión ni subvención nueva al gas natural y otros fósiles.', pagina: 42 },
      {
        texto:
          'Plan de choque para adaptar escuelas, residencias y espacios públicos al calor, con una red de refugios climáticos.',
        pagina: 42,
      },
      {
        texto: 'Poner nombre a las olas de calor y adaptar la certificación energética a las temperaturas futuras.',
        pagina: 42,
      },
      { texto: 'Una hoja de ruta de demanda de hidrógeno para la industria.', pagina: 42 },
      {
        texto: 'Mapa Nacional de Vulnerabilidad Climática y formación climática de la UME y Protección Civil.',
        pagina: 43,
      },
      { texto: 'Prohibir la publicidad y el patrocinio de combustibles fósiles.', pagina: 43 },
      {
        texto:
          'Pacto social y territorial para llegar a unos 148.000 MW renovables en 2030, 24.000 de ellos en tejados.',
        pagina: 46,
      },
      {
        texto:
          'Tarifa de luz progresiva: primeros 1.500 kWh al año con IVA del 4 %, gratis para hogares vulnerables, y 21 % por encima de 7.500 kWh.',
        pagina: 45,
      },
      { texto: 'Facilitar el autoconsumo y las plantas solares cerca de las ciudades.', pagina: 46 },
      { texto: 'Luz más barata para quienes viven cerca de las plantas renovables.', pagina: 46 },
      {
        texto:
          'Mapa nacional de zonas preferentes para renovables que respete la biodiversidad y el suelo agrícola valioso.',
        pagina: 46,
      },
      {
        texto:
          'Priorizar las plantas en suelos degradados, con participación de comunidades y ayuntamientos en su ubicación.',
        pagina: 46,
      },
      {
        texto:
          'Que el 10 % de la electricidad en 2030 sea de autoconsumo y que las instalaciones de menos de 2,4 kWp se conecten como un electrodoméstico.',
        pagina: 46,
      },
      {
        texto: 'Una agencia pública de mediación para que los territorios con renovables sean escuchados.',
        pagina: 46,
      },
      { texto: 'Auditoría pública del coste real de cada tecnología y pagar a cada una según ese coste.', pagina: 47 },
      {
        texto:
          'Eliminar a medio plazo el mercado marginalista y sacar de él a corto plazo la nuclear, con contratos a largo plazo.',
        pagina: 47,
      },
      { texto: 'Prohibir que un mismo grupo genere, distribuya y comercialice electricidad.', pagina: 47 },
      {
        texto: 'Reformar la Ley del Sector Eléctrico para recuperar la electricidad como servicio de utilidad pública.',
        pagina: 47,
      },
      { texto: 'Rehabilitar cada año al menos el 5 % de los edificios públicos.', pagina: 47 },
      {
        texto:
          'Transponer de forma ambiciosa las directivas de comunidades energéticas y un plan de autoconsumo colectivo social.',
        pagina: 47,
      },
      { texto: 'Aprobar el Fondo Nacional para la Sostenibilidad del Sistema Eléctrico.', pagina: 48 },
      {
        texto:
          'Hidrógeno renovable solo para usos difíciles de electrificar y revisar su hoja de ruta, evitando proyectos como el H2Med.',
        pagina: 48,
      },
      {
        texto:
          'Mantener el calendario de cierre nuclear, moratoria a nuevos proyectos y subir la tasa de residuos radiactivos.',
        pagina: 48,
      },
      {
        texto: 'Recuperar la titularidad pública de las centrales hidroeléctricas al caducar sus concesiones.',
        pagina: 48,
      },
      {
        texto: 'Cobrar el canon hidroeléctrico sin exenciones y adaptar las presas a sequías e inundaciones.',
        pagina: 50,
      },
      { texto: 'Aprobar el Estatuto de los Bomberos Forestales.', pagina: 51 },
      {
        texto:
          'Más coordinación con las comunidades contra los incendios y un fondo para la prevención y la gestión forestal.',
        pagina: 51,
      },
      {
        texto:
          'Proteger al menos el 30 % de la superficie marina en 2030, con más reservas y protección de la posidonia.',
        pagina: 52,
      },
      {
        texto: 'Sustituir pinos exóticos y eucaliptos por bosques autóctonos y proteger los bosques maduros.',
        pagina: 51,
      },
      {
        texto: 'Ampliar de 20 a 100 metros la zona de protección de costas y no construir en zonas inundables.',
        pagina: 52,
      },
      { texto: 'Estrategia contra las especies invasoras, derogando la Ley 7/2018.', pagina: 52 },
      { texto: 'Incluir al lobo ibérico y la tórtola europea en el Catálogo de Especies Amenazadas.', pagina: 52 },
      {
        texto:
          'Nuevo plan de biodiversidad para proteger al menos el 30 % de la superficie terrestre y marina en 2030.',
        pagina: 52,
      },
      {
        texto:
          'Plan nacional urgente para salvar el Mar Menor, eliminando la entrada de nutrientes y reconvirtiendo la agricultura intensiva del Campo de Cartagena.',
        pagina: 52,
      },
      { texto: 'Estrategia de infraestructuras verdes, corredores ecológicos y restauración.', pagina: 53 },
      {
        texto: 'Pago por conservar agua, bosques y biodiversidad, y revisar la gestión de la Red Natura 2000.',
        pagina: 53,
      },
      { texto: 'Plan de conservación de abejas, mariposas y otros polinizadores.', pagina: 53 },
      {
        texto:
          'Reactivar el plan de humedales para recuperar Doñana, la Albufera, el Delta del Ebro, el Mar Menor y la Mancha Húmeda.',
        pagina: 53,
      },
      { texto: 'Una Agencia del Patrimonio Natural y la Biodiversidad que integre Parques Nacionales.', pagina: 53 },
      {
        texto:
          'Adelantar a 2025 el sistema de depósito y retorno de envases y reutilizar el 15 % de los envases en 2030.',
        pagina: 54,
      },
      { texto: 'Cerrar las incineradoras como tarde en 2030 y perseguir los vertederos ilegales.', pagina: 54 },
      {
        texto: 'Recogida separada de toda la materia orgánica antes de 2027, con quinto contenedor o puerta a puerta.',
        pagina: 54,
      },
      { texto: 'Un máximo de 100 kilos de residuos a eliminación por persona y año en 2028.', pagina: 54 },
      { texto: 'Estrategia para recuperar y reciclar materiales estratégicos y escasos.', pagina: 55 },
      { texto: 'Planes contra el ruido y la contaminación lumínica.', pagina: 55 },
      {
        texto: 'Reducir envases y plásticos, con venta a granel, y prohibir productos como toallitas o bastoncillos.',
        pagina: 55,
      },
      {
        texto: 'Reforzar legalmente los planes de calidad del aire, priorizando ciudades de más de 50.000 habitantes.',
        pagina: 55,
      },
      { texto: 'Unificar en toda España el catálogo de residuos para facilitar su reutilización.', pagina: 55 },
      { texto: 'Más protección para los grandes simios y acabar poco a poco con los delfinarios.', pagina: 56 },
      {
        texto:
          'Acabar con el tráfico y la cría de especies exóticas y controlar las poblaciones animales por medios éticos.',
        pagina: 62,
      },
      { texto: 'Reducir los embalajes alimentarios innecesarios y eliminar los de un solo uso.', pagina: 69 },
      {
        texto:
          'Garantizar la movilidad sostenible y la accesibilidad universal, desde los ascensores hasta los carriles bici.',
        pagina: 73,
      },
      {
        texto: 'Renaturalizar las ciudades: neutralidad de carbono en 2050 y un 30 % de cobertura de árboles en 2040.',
        pagina: 74,
      },
      { texto: 'Una red estatal sobre urbanismo y cambio climático.', pagina: 74 },
      { texto: 'Un objetivo nacional de eficiencia energética del parque de viviendas.', pagina: 78 },
      {
        texto:
          'Financiación estatal del transporte público para más frecuencias, sobre todo fuera de las rutas radiales y en el medio rural.',
        pagina: 80,
      },
      { texto: 'Prorrogar las rebajas de los abonos de transporte allí donde hayan aumentado su uso.', pagina: 80 },
      {
        texto:
          'Reconocer la movilidad sostenible como derecho, incluso en la Constitución, y una ley de movilidad sostenible.',
        pagina: 80,
      },
      {
        texto:
          '«Ciudades de 15 minutos»: que la planificación urbana acerque a pie o en bici los servicios a cada barrio.',
        pagina: 80,
      },
      {
        texto: 'Abaratar los billetes de AVE y larga distancia para quitar viajeros al avión, y más trenes nocturnos.',
        pagina: 81,
      },
      { texto: 'Billete único para todos los transportes, con precio según la renta.', pagina: 81 },
      {
        texto:
          'Llevar inversión de la alta velocidad a Cercanías y a la red convencional, al menos triplicándola en cuatro años.',
        pagina: 81,
      },
      {
        texto: 'Más protección jurídica a ciclistas y peatones y un plan para reducir los muertos en accidentes.',
        pagina: 81,
      },
      {
        texto: 'Que en 2040 el 80 % de las mercancías vaya en tren, con cánones ferroviarios mucho más bajos.',
        pagina: 81,
      },
      {
        texto: 'Que las empresas de más de 500 trabajadores paguen el desplazamiento de su plantilla al trabajo.',
        pagina: 81,
      },
      {
        texto:
          'Electrificar los puertos, más autopistas del mar y que comunidades y ayuntamientos limiten los amarres de cruceros.',
        pagina: 82,
      },
      { texto: 'Fondo para el transporte público con al menos el 0,25 % del PIB.', pagina: 82 },
      { texto: 'Limitar los jets privados y una tasa creciente a partir del segundo vuelo del año.', pagina: 82 },
      { texto: 'Que el tren lleve el 18 % de las mercancías terrestres en 2030 y el 35 % en 2040.', pagina: 82 },
      { texto: 'Estrategia estatal de la bicicleta y señalización única de las vías ciclables.', pagina: 83 },
      { texto: 'Suprimir los vuelos domésticos con alternativa en tren de menos de cuatro horas.', pagina: 83 },
      { texto: 'Protocolos de sostenibilidad en las instituciones culturales y un cine sostenible.', pagina: 173 },
      {
        texto:
          'Plan para reducir los residuos electrónicos de la Administración y una digitalización de menor consumo energético.',
        pagina: 181,
      },
    ],
    economia: [
      { texto: 'Un gran pacto de rentas por la estabilidad de precios.', pagina: 8 },
      {
        texto: 'Usar el Observatorio de los Márgenes de Beneficio para ver cómo se trasladan los costes a los precios.',
        pagina: 8,
      },
      { texto: 'Una cesta de la compra básica a precios asequibles, variada y de calidad.', pagina: 9 },
      {
        texto:
          'Política industrial de «Estado emprendedor», con ayudas condicionadas a mantener empleo, igualdad y sostenibilidad.',
        pagina: 10,
      },
      {
        texto: 'Reindustrializar aprovechando la energía renovable barata, sin territorios que solo pongan la energía.',
        pagina: 10,
      },
      {
        texto:
          'Aplicar de forma estructural la autonomía estratégica a la política industrial, incluida la soberanía agroalimentaria.',
        pagina: 11,
      },
      {
        texto:
          'Crear un banco público de inversión, el BINE, a partir del ICO, COFIDES, CDTI o ENISA, que financie también vivienda pública.',
        pagina: 11,
      },
      {
        texto:
          'Gobernar la digitalización: gravar los beneficios digitales, proteger a los trabajadores de plataformas y cerrar la brecha digital.',
        pagina: 11,
      },
      { texto: 'Que empresas en España fabriquen los componentes de la transición verde y digital.', pagina: 11 },
      {
        texto: 'Convertir la SEPI en una Agencia Industrial Pública dependiente del Ministerio de Industria.',
        pagina: 12,
      },
      {
        texto:
          'Poder intervenir mercados con prácticas abusivas, con controles selectivos de precios como la «excepción ibérica».',
        pagina: 12,
      },
      {
        texto:
          'Reforzar la Ley de Defensa de la Competencia y la CNMC, con reguladores sectoriales nombrados por el Congreso.',
        pagina: 12,
      },
      { texto: 'Que Correos ofrezca servicios financieros de ahorro y depósito en todas sus oficinas.', pagina: 13 },
      { texto: 'Una autoridad independiente de supervisión bancaria adscrita al Banco de España.', pagina: 13 },
      {
        texto: 'Vincular el interés de los depósitos al de los préstamos y limitar las comisiones bancarias.',
        pagina: 13,
      },
      {
        texto:
          'Cláusulas sociales para pymes y autónomos en la contratación pública y un fondo público de capitalización.',
        pagina: 14,
      },
      { texto: 'Crear el Consejo de la Productividad de España.', pagina: 14 },
      { texto: 'Empresas más grandes y en red, con clústeres y distritos industriales.', pagina: 14 },
      { texto: 'I+D+i hasta el 2,1 % del PIB, con más recursos públicos y sobre todo privados.', pagina: 14 },
      { texto: 'Más transferencia tecnológica de universidades y centros de innovación a las pymes.', pagina: 14 },
      {
        texto:
          'Simplificar los trámites de las empresas y no usar el silencio administrativo como forma habitual de respuesta.',
        pagina: 14,
      },
      {
        texto: 'Reformar la Ley de Estabilidad Presupuestaria, que considera diseñada para la austeridad.',
        pagina: 19,
      },
      { texto: 'Indicadores de bienestar más allá del PIB que tengan en cuenta los límites del planeta.', pagina: 20 },
      {
        texto:
          'Nueva Ley de Condiciones Generales de la Contratación contra cláusulas suelo, tarjetas revolving e hipotecas multidivisa.',
        pagina: 20,
      },
      { texto: 'Plan integral de formación en consumo.', pagina: 20 },
      { texto: 'Reforzar los derechos de los consumidores y el Sistema Arbitral de Consumo.', pagina: 20 },
      {
        texto: 'Compra pública responsable que premie a las empresas con buenas condiciones laborales y sostenibles.',
        pagina: 21,
      },
      { texto: 'Etiquetado inclusivo y accesible, por ejemplo en braille.', pagina: 21 },
      {
        texto: 'Ley de atención a la clientela: atención personalizada, gratuita y con tiempos de espera regulados.',
        pagina: 21,
      },
      {
        texto: 'Derecho a reparar: transponer rápido la norma europea y vigilar durabilidad y piezas de recambio.',
        pagina: 22,
      },
      {
        texto:
          'Derecho a saber en qué condiciones laborales y ambientales se fabrican los productos, con trazabilidad.',
        pagina: 22,
      },
      { texto: 'Estrategia contra las brechas digitales territoriales, económicas y de habilidades.', pagina: 22 },
      { texto: 'Estrategia estatal contra el greenwashing y la publicidad engañosa sobre sostenibilidad.', pagina: 22 },
      {
        texto: 'Compensar el tiempo que los clientes dedican a hacer tareas de la empresa, como en la banca.',
        pagina: 25,
      },
      {
        texto: 'Detectar empresas en riesgo de cierre o sin relevo para que sus trabajadores puedan continuarlas.',
        pagina: 30,
      },
      { texto: 'Facilitar la entrada de nuevos socios en cooperativas, con aportación inicial gradual.', pagina: 30 },
      {
        texto:
          'Impulsar la economía social: menos trámites, finanzas éticas, capitalización del paro y ayudas a jóvenes y mujeres.',
        pagina: 30,
      },
      { texto: 'Más presupuesto para la Estrategia Española de la Economía Social 2023-2027.', pagina: 30 },
      { texto: 'Ayudas a los jóvenes para crear cooperativas y sociedades laborales o entrar en ellas.', pagina: 31 },
      { texto: 'Bonificar la cuota de las cooperativas que cumplan o mejoren el convenio del sector.', pagina: 31 },
      { texto: 'Fomentar las cooperativas de consumo, como ecomercados o tiendas de segunda mano.', pagina: 31 },
      { texto: 'Incluir la economía social en el plan estadístico nacional.', pagina: 31 },
      { texto: 'Regular las cooperativas de energía y de vivienda en cesión de uso.', pagina: 31 },
      { texto: 'Relocalizar producción con empresas de economía social, como chips, baterías o cereal.', pagina: 31 },
      { texto: 'Una ley marco estatal con mínimos para cooperativas y sociedades laborales.', pagina: 31 },
      { texto: 'Ayudas para plataformas de cooperación entre empresas de economía social.', pagina: 32 },
      { texto: 'Facilitar que los trabajadores recuperen empresas en crisis mediante cooperativas.', pagina: 32 },
      {
        texto: 'Ley de transparencia que diga de dónde vienen la energía y el agua, quién las gestiona y cuánto gana.',
        pagina: 39,
      },
      {
        texto: 'Un organismo estatal independiente que vigile y denuncie el greenwashing de las grandes empresas.',
        pagina: 40,
      },
      { texto: 'Estrategia para que España sea una potencia en industria verde en 2030.', pagina: 43 },
      {
        texto: 'Preparar el turismo, sector vulnerable al cambio climático, para una reconversión ecológica.',
        pagina: 44,
      },
      {
        texto:
          'Reconvertir la automoción hacia el coche eléctrico, con baterías y una macroplanta de minerales críticos.',
        pagina: 44,
      },
      { texto: 'Recuperar en España toda la cadena de fabricación de la industria fotovoltaica y eólica.', pagina: 44 },
      { texto: 'Una construcción con los más altos estándares ambientales.', pagina: 44 },
      { texto: 'Una mesa de transferencia que conecte empresas e investigación.', pagina: 44 },
      {
        texto: 'Limitar las plazas hoteleras según la capacidad de carga de cada territorio y crear tasas turísticas.',
        pagina: 45,
      },
      {
        texto:
          'Oficinas y locales de alquiler con la máxima eficiencia energética antes de salir al mercado, con ayudas según renta.',
        pagina: 47,
      },
      {
        texto:
          'Nueva Ley de Protección del Subsuelo que sustituya la de Minas de 1973, con consentimiento previo de las comunidades afectadas.',
        pagina: 53,
      },
      { texto: 'Una ley contra la obsolescencia programada.', pagina: 54 },
      {
        texto:
          'Índice de reparabilidad como el francés, piezas de recambio asequibles por ley y garantías legales más largas.',
        pagina: 54,
      },
      { texto: 'Una ley contra el desperdicio alimentario en toda la cadena.', pagina: 55 },
      {
        texto: 'Un banco público a partir del ICO y Correos que abarate las hipotecas y llegue a la España vaciada.',
        pagina: 79,
      },
      { texto: 'Proteger al taxi como servicio público y limitar las VTC.', pagina: 82 },
      {
        texto: 'Derogar la Ley de Racionalización de la Administración y quitar la prioridad al pago de la deuda.',
        pagina: 119,
      },
      {
        texto: 'Plan de soberanía tecnológica en energía, aeroespacial, farmacia e inteligencia artificial.',
        pagina: 165,
      },
      {
        texto: 'Un Consejo Ciudadano de Ciencia, paritario, que fije prioridades y regule las tecnologías disruptivas.',
        pagina: 165,
      },
      {
        texto: 'Un estatuto del personal de investigación con carrera estable y menos dependencia de indicadores.',
        pagina: 165,
      },
      { texto: 'Ciencia y universidades en un solo ministerio y menos burocracia en las convocatorias.', pagina: 166 },
      {
        texto: 'Inversión en I+D+i del 3 % del PIB en 2027 y del 4 % en 2030, sin contar gastos de armamento.',
        pagina: 166,
      },
      { texto: 'Objetivos numéricos de igualdad y perspectiva de género obligatoria en la I+D+i.', pagina: 166 },
      {
        texto: 'Ampliar los límites a la propiedad intelectual para usos educativos y culturales sin ánimo de lucro.',
        pagina: 167,
      },
      { texto: 'Una ley de derechos culturales con financiación propia.', pagina: 167 },
      {
        texto:
          'Mantener el Ministerio de Cultura, estudiar una Agencia Estatal del Cine y crear un Centro Nacional de Danza.',
        pagina: 168,
      },
      {
        texto: 'Retomar la Ley del Cine, la de Enseñanzas Artísticas y la Oficina Española de Derechos de Autor.',
        pagina: 168,
      },
      { texto: 'Un Plan estatal de cultura y una Mesa de Cultura con comunidades y sectores.', pagina: 168 },
      {
        texto: 'Adaptar la Ley de Contratos a la cultura y subir a 50.000 € los contratos menores culturales.',
        pagina: 169,
      },
      {
        texto:
          'Nueva Ley de Patrimonio que proteja el patrimonio audiovisual, industrial y sonoro y combata el expolio.',
        pagina: 169,
      },
      { texto: 'Reformar las subvenciones culturales: convocatorias plurianuales y pago anticipado.', pagina: 169 },
      { texto: 'Subir poco a poco la cultura hasta el 1 % de los Presupuestos del Estado.', pagina: 169 },
      {
        texto:
          'Estatuto para la Creación Digital, infraestructuras digitales públicas y una agencia de auditoría de algoritmos.',
        pagina: 170,
      },
      {
        texto: 'Incentivos y crédito público para renovar cines, salas de conciertos y espacios culturales.',
        pagina: 170,
      },
      {
        texto:
          'Programa estatal de becas para la creación e investigación cultural y nueva convocatoria del 2 % cultural.',
        pagina: 170,
      },
      {
        texto: 'Descentralizar los centros culturales del Estado y mantener el plan Ecosistema Cultura Territorio.',
        pagina: 171,
      },
      { texto: 'Ayudas a la producción audiovisual de los territorios y a su presencia en festivales.', pagina: 173 },
      {
        texto: 'Más apoyo a la distribución y exhibición independiente y a los derechos de los guionistas.',
        pagina: 173,
      },
      {
        texto: 'Revisar la obligación de las televisiones de invertir en cine para apoyar la producción independiente.',
        pagina: 173,
      },
      {
        texto: 'Campañas contra el sedentarismo y contra el consumo de sustancias sin control en gimnasios.',
        pagina: 174,
      },
      {
        texto:
          'Revisar la ley contra la violencia, el racismo y la xenofobia en el deporte y promover el deporte inclusivo.',
        pagina: 174,
      },
      {
        texto:
          'Más deporte para mayores, actividades nocturnas para jóvenes y escuelas deportivas intergeneracionales.',
        pagina: 175,
      },
      {
        texto:
          'Más instalaciones deportivas al aire libre, gratuitas y con horarios amplios, y centros de alto rendimiento para escalada o skate.',
        pagina: 176,
      },
      { texto: 'Modernizar federaciones y clubes con código de buen gobierno y portal de transparencia.', pagina: 177 },
      { texto: 'Turismo deportivo y deporte en el trabajo para reducir las bajas.', pagina: 177 },
      {
        texto:
          'Subir la inversión pública en deporte del 0,06 % al 0,25 % del PIB mediante un pacto con las comunidades.',
        pagina: 178,
      },
      { texto: 'Un Observatorio Nacional del Deporte.', pagina: 178 },
      {
        texto: 'Impulsar el cooperativismo de plataforma y laboratorios público-comunitarios de innovación.',
        pagina: 180,
      },
      { texto: 'Infraestructuras públicas de telecomunicaciones y redes abiertas como Guifi.net.', pagina: 180 },
      { texto: 'Más implicación de los bancos contra los fraudes digitales.', pagina: 180 },
    ],
    rural: [
      {
        texto: 'Mínimos de servicios bancarios por territorio y derecho a la atención presencial en las oficinas.',
        pagina: 13,
      },
      {
        texto:
          'Fertilización ecológica, rotación de cultivos, renovables en la maquinaria y acabar con la quema de rastrojos.',
        pagina: 42,
      },
      { texto: 'Más controles ambientales y sociales a las grandes explotaciones ganaderas.', pagina: 42 },
      {
        texto: 'Rehacer la planificación hidrológica por la emergencia climática y revisar las concesiones de agua.',
        pagina: 43,
      },
      {
        texto:
          'Atraer industria a la España vaciada que produce renovables y estudiar reformas para abaratar la luz cerca de las plantas.',
        pagina: 44,
      },
      {
        texto:
          'Impulsar la agricultura regenerativa y un plan de I+D para recuperar el secano y reorientar el regadío.',
        pagina: 44,
      },
      { texto: 'Plan Nacional de Turismo Rural y Ecoturismo.', pagina: 45 },
      {
        texto:
          'Un Fondo Público de Inversión en Renovables, como el fondo soberano noruego, para industria y servicios en la España vaciada.',
        pagina: 46,
      },
      {
        texto:
          'Reconocer el acceso al agua y al saneamiento como derecho humano, con un mínimo gratis y sin cortes a los vulnerables.',
        pagina: 48,
      },
      { texto: 'Un Pacto de Estado contra la desertificación.', pagina: 48 },
      {
        texto: 'Aplicar la Directiva Marco del Agua y devolver materia orgánica al suelo para frenar su aridez.',
        pagina: 49,
      },
      { texto: 'Fomentar el agua del grifo y las fuentes públicas.', pagina: 49 },
      { texto: 'Gestión pública del ciclo integral del agua por ley orgánica, sin privatizaciones.', pagina: 49 },
      {
        texto:
          'Inventario de pozos, cierre de los ilegales que no puedan regularizarse y caudalímetros en los autorizados.',
        pagina: 49,
      },
      {
        texto:
          'Moratoria a grandes consumidores de agua, como campos de golf o megaproyectos como el Hard Rock de Tarragona.',
        pagina: 49,
      },
      {
        texto:
          'Moratoria al regadío intensivo y reducción progresiva del superintensivo, sobre todo en las cuencas más vulnerables.',
        pagina: 49,
      },
      { texto: 'Reconvertir el regadío agroindustrial y apoyar los regadíos tradicionales.', pagina: 49 },
      {
        texto:
          'Revisar las tarifas del agua para que cubran costes y fomenten el ahorro, con trato equitativo entre comunidades.',
        pagina: 49,
      },
      {
        texto: 'Depurar el 100 % de las aguas residuales en los planes 2021-2027, por las multas europeas.',
        pagina: 50,
      },
      {
        texto:
          'Desalación con renovables, reutilización de agua depurada y de lluvia, y aguas grises en las casas nuevas.',
        pagina: 50,
      },
      { texto: 'Gestión del agua transparente y con participación ciudadana, contra su mercantilización.', pagina: 50 },
      { texto: 'Proteger los caudales ecológicos y las riberas y retirar azudes y escolleras obsoletos.', pagina: 50 },
      {
        texto: 'Reducir la contaminación por fertilizantes y purines, empezando por lugares como el Mar Menor.',
        pagina: 50,
      },
      { texto: 'Revisar las grandes obras hidráulicas de dudosa rentabilidad.', pagina: 50 },
      {
        texto:
          'Plan de acción para el medio rural con presupuesto propio, vivienda para jóvenes y empleados públicos que vivan en los pueblos.',
        pagina: 57,
      },
      { texto: 'Construir y rehabilitar viviendas vacías en los pueblos para alquiler.', pagina: 58 },
      {
        texto: 'Fondo para emprendedores rurales y bonificar las cuotas de las mujeres contratadas en el medio rural.',
        pagina: 58,
      },
      {
        texto:
          'Incentivos fiscales a los empleados públicos que vivan y trabajen al menos cinco años en zonas rurales.',
        pagina: 58,
      },
      { texto: 'Internet de calidad en todo el territorio.', pagina: 58 },
      {
        texto: 'Más FP en el medio rural y ratificar el convenio 184 de la OIT sobre salud laboral en la agricultura.',
        pagina: 58,
      },
      { texto: 'Más presupuesto para Campus Rural e intercambios entre colegios rurales y urbanos.', pagina: 58 },
      {
        texto:
          'Transporte público entre pueblos y gratuito de lunes a viernes para ir al hospital, la universidad o hacer gestiones.',
        pagina: 58,
      },
      {
        texto:
          '«Territorio 30 minutos»: servicios esenciales a menos de media hora para todos los vecinos del medio rural.',
        pagina: 58,
      },
      { texto: 'Aplicar el «mecanismo rural de garantía» a todas las leyes y planes.', pagina: 59 },
      {
        texto: 'Intervenir el mercado de tierras agrarias contra la especulación, como la SAFER francesa.',
        pagina: 59,
      },
      { texto: 'Un pacto de Estado por un mundo rural vivo, como el Pacto de Toledo.', pagina: 59 },
      { texto: 'Una comisión delegada, un consejo asesor y un observatorio del medio rural.', pagina: 59 },
      {
        texto:
          'Una ley de futuro de la agricultura, la ganadería y la alimentación hacia la transición agroecológica, tras un gran debate social.',
        pagina: 59,
      },
      { texto: 'Apoyos suplementarios a la ganadería extensiva.', pagina: 60 },
      { texto: 'Bancos públicos de tierras para el relevo generacional, con jóvenes y mujeres.', pagina: 60 },
      { texto: 'Ceder suelo rústico de la Sareb para explotaciones ecológicas.', pagina: 60 },
      { texto: 'Compra pública de alimentos sostenibles en colegios, hospitales y residencias.', pagina: 60 },
      { texto: 'Dejar el glifosato en cinco años y apoyar que la UE no lo renueve.', pagina: 60 },
      {
        texto: 'Más apoyo de la PAC a explotaciones ecológicas, ganadería extensiva y venta de proximidad.',
        pagina: 60,
      },
      { texto: 'Más bienestar en la ganadería, con el objetivo de liderar Europa en protección animal.', pagina: 60 },
      { texto: 'Restringir la compra de tierras agrarias por inversores de fuera de la UE.', pagina: 60 },
      { texto: 'Servicios públicos de asesoramiento para la transición agroecológica.', pagina: 60 },
      { texto: 'Una PAC que priorice las explotaciones familiares y elimine los derechos históricos.', pagina: 60 },
      {
        texto: 'Eliminar poco a poco las jaulas, el engorde forzado del foie gras y reconvertir las granjas peleteras.',
        pagina: 61,
      },
      { texto: 'Etiquetado que valore a la vez bienestar animal, medio ambiente y aspectos sociales.', pagina: 61 },
      {
        texto: 'Evaluar y hacer cumplir la Ley de la Cadena Alimentaria, con sanciones y una defensoría de la cadena.',
        pagina: 61,
      },
      {
        texto:
          'Frenar el crecimiento del regadío salvo con agua reutilizada o desalada, dedicada sobre todo a recuperar acuíferos.',
        pagina: 61,
      },
      { texto: 'Más medios en las confederaciones hidrográficas contra pozos y regadíos ilegales.', pagina: 61 },
      {
        texto:
          'Más medios para la Agencia de Información de la Cadena Alimentaria y para las organizaciones de productores.',
        pagina: 61,
      },
      { texto: 'Pagar al medio rural los servicios ecosistémicos que presta.', pagina: 61 },
      {
        texto:
          'Un índice de precios agroalimentarios y más control de la cadena para garantizar precios justos al productor.',
        pagina: 61,
      },
      { texto: 'Acelerar la modernización de regadíos y concesiones de agua más cortas y flexibles.', pagina: 62 },
      {
        texto: 'Comunidades energéticas en los pueblos, apoyo al autoconsumo y facilidades para vender excedentes.',
        pagina: 62,
      },
      { texto: 'Cultivos y razas que necesiten menos agua y un plan estratégico de los secanos.', pagina: 62 },
      { texto: 'Energía a partir de residuos agropecuarios.', pagina: 62 },
      {
        texto: 'Gestión del agua con participación de todos los sectores sociales, no solo de los usuarios.',
        pagina: 62,
      },
      {
        texto: 'Implicar a la población rural en la gestión de los espacios protegidos, con pagos compensatorios.',
        pagina: 62,
      },
      {
        texto: 'Ordenar el territorio para las grandes renovables, protegiendo el suelo agrario y el paisaje.',
        pagina: 62,
      },
      {
        texto:
          'Política forestal sostenible con especies autóctonas, gestión vecinal de los montes comunales y prevención de incendios.',
        pagina: 62,
      },
      {
        texto: 'Veterinario municipal en los ayuntamientos de más de 5.000 habitantes y en las mancomunidades.',
        pagina: 62,
      },
      {
        texto:
          'Declarar la pesca sector estratégico para la soberanía alimentaria y privilegiar los caladeros nacionales y la pesca artesanal.',
        pagina: 63,
      },
      {
        texto:
          'Formación a bordo, más ayudas a jóvenes para comprar su primer barco y nuevos certificados profesionales.',
        pagina: 63,
      },
      { texto: 'Garantizar el acceso equitativo a los alimentos del mar en caso de crisis.', pagina: 63 },
      {
        texto: 'Plan de empleo forestal en zonas de grandes incendios, contratando a vecinos de los pueblos.',
        pagina: 63,
      },
      { texto: 'Acuerdos para incorporar a la flota trabajadores de terceros países.', pagina: 64 },
      {
        texto: 'Aplicar el convenio 188 de la OIT sobre trabajo en la pesca, también en barcos extranjeros.',
        pagina: 64,
      },
      { texto: 'Apoyar a las cofradías de pescadores y lograr su reconocimiento en la UE.', pagina: 64 },
      {
        texto:
          'Más ciencia sobre los stocks para no reducir necesariamente las cuotas y un rendimiento económico mínimo para los barcos.',
        pagina: 64,
      },
      {
        texto: 'Más control de las empresas mixtas y acabar con la sobrepesca, sobre todo en el Mediterráneo.',
        pagina: 64,
      },
      {
        texto:
          'Política pesquera más regionalizada y cogestionada, y redefinir la pesca artesanal según el criterio de ICCAT.',
        pagina: 64,
      },
      {
        texto:
          'Subvenciones pesqueras con criterios de conservación y huella de carbono, y bienestar animal en la acuicultura.',
        pagina: 64,
      },
      {
        texto: 'Ayudas a los pescadores afectados por el alga invasora Rugulopteryx okamurae en el Estrecho.',
        pagina: 65,
      },
      {
        texto:
          'Contra los residuos en el mar, depósito para frenar el abandono de redes y más investigación climática marina.',
        pagina: 65,
      },
      { texto: 'Mapear los fondos que más carbono almacenan para debatir limitar allí el arrastre.', pagina: 65 },
      {
        texto: 'Proteger la pesca artesanal y prohibir la pesca recreativa de especies sensibles o sujetas a cuotas.',
        pagina: 65,
      },
      {
        texto: 'Repartir las cuotas con criterios sociales y territoriales, no solo por capturas históricas.',
        pagina: 65,
      },
      {
        texto: 'Trabajo conjunto entre científicos y pescadores, con automuestreo del estado de los stocks.',
        pagina: 65,
      },
      { texto: 'Descarbonizar la flota pesquera en diálogo con el sector.', pagina: 66 },
      { texto: 'Evitar que las instalaciones energéticas en el mar compitan por el espacio con la pesca.', pagina: 66 },
      {
        texto: 'Limitar la pesca de arrastre en la Red Natura 2000 y regular mejor las áreas marinas protegidas.',
        pagina: 66,
      },
      { texto: 'Plan para reducir las capturas accidentales, incluidos tiburones, rayas e invertebrados.', pagina: 66 },
      {
        texto:
          'Recuperar competencias del Instituto Social de la Marina y un organismo que promocione el consumo de pescado, como el antiguo FROM.',
        pagina: 66,
      },
      {
        texto: 'Ventanilla única para la pesca y suprimir la renovación obligatoria de titulaciones y sus tasas.',
        pagina: 66,
      },
      {
        texto:
          'Venta directa y de proximidad para la pesca artesanal y su compra en hospitales, residencias y colegios.',
        pagina: 67,
      },
      { texto: 'Una red pública alternativa de distribución de alimentos con precios justos.', pagina: 68 },
      { texto: 'Al menos un 25 % de la compra pública de alimentos, agroecológica, local y de temporada.', pagina: 70 },
      {
        texto:
          'Centros logísticos para pequeños productores y un plan de Mercasa para conectar productores y pequeños vendedores.',
        pagina: 70,
      },
      {
        texto: 'Un plan estatal de alimentación sostenible y saludable y una estructura de gobernanza alimentaria.',
        pagina: 71,
      },
      {
        texto: 'Un banco público de tierras urbanas y periurbanas para huertos y proyectos agroecológicos.',
        pagina: 74,
      },
      {
        texto: 'Un marco legal para recuperar pueblos abandonados con proyectos de personas o colectivos.',
        pagina: 74,
      },
      { texto: 'Movilizar vivienda en las zonas que se despueblan.', pagina: 78 },
      {
        texto:
          'Que el contrato con Renfe incluya todos los servicios de obligación pública que afectan a zonas despobladas.',
        pagina: 81,
      },
      { texto: 'Horarios de servicios sociales en los pueblos, como ya ocurre con la atención primaria.', pagina: 88 },
      {
        texto:
          'Paridad en la titularidad de las explotaciones agrarias y apoyo al emprendimiento de las mujeres rurales.',
        pagina: 112,
      },
      {
        texto: 'Definir y proteger los espacios culturales esenciales en municipios y zonas despobladas.',
        pagina: 171,
      },
    ],
    exterior: [
      {
        texto:
          'Reglas fiscales europeas sin los límites del 3 % de déficit y el 60 % de deuda, y un BCE con mandato dual.',
        pagina: 19,
      },
      { texto: 'Una Agencia Europea de Inversión permanente financiada con deuda europea.', pagina: 19 },
      {
        texto:
          'Democratizar la firma de tratados y revisar los comerciales que perjudiquen intereses agroalimentarios.',
        pagina: 20,
      },
      {
        texto: 'Un fondo europeo permanente contra crisis, como el SURE, y un seguro europeo de desempleo.',
        pagina: 20,
      },
      {
        texto:
          'Limitar y llegar a prohibir importaciones ligadas a la deforestación, como soja, aceite de palma o maderas ilegales.',
        pagina: 53,
      },
      {
        texto:
          'Una formación del Consejo de la UE sobre igualdad y reformar los tratados para proteger los derechos de las mujeres.',
        pagina: 114,
      },
      {
        texto:
          'Apoyar un Tratado de No Proliferación de Combustibles Fósiles y una Organización Mundial del Medio Ambiente.',
        pagina: 138,
      },
      {
        texto: 'Liderar la abolición de las armas nucleares y ratificar el Tratado sobre su Prohibición.',
        pagina: 138,
      },
      {
        texto:
          'Reformar la ONU, el FMI y el Banco Mundial para dar más voz al Sur Global, incluido el Consejo de Seguridad.',
        pagina: 138,
      },
      {
        texto:
          'Un tribunal internacional de justicia climática y reconocer el ecocidio como delito ante la Corte Penal Internacional.',
        pagina: 138,
      },
      { texto: 'Una Estrategia Nacional de Seguridad Humana en la política de defensa.', pagina: 138 },
      {
        texto:
          'Una agencia fiscal internacional y un impuesto global sobre la riqueza y las transacciones financieras.',
        pagina: 138,
      },
      {
        texto:
          'Una «Internacional Climática» y apoyo a la Agenda de Bridgetown y a un fondo mundial contra el cambio climático.',
        pagina: 138,
      },
      {
        texto:
          'Auditar los Programas Especiales de Armamento y prohibir vender armas a países que vulneren los derechos humanos.',
        pagina: 139,
      },
      {
        texto:
          'Mediar más en conflictos como Sáhara Occidental, Palestina, Colombia, Haití, Ucrania o el Sahel, con una unidad de mediación en Exteriores.',
        pagina: 139,
      },
      {
        texto:
          'Pasar poco a poco de las garantías de seguridad de la OTAN a una autonomía estratégica europea con control democrático.',
        pagina: 139,
      },
      {
        texto:
          'Plan de derechos humanos en la acción exterior y una ley de debida diligencia en la cadena de suministro.',
        pagina: 139,
      },
      {
        texto: 'Ratificar la Convención sobre la Imprescriptibilidad de los Crímenes de Guerra y de Lesa Humanidad.',
        pagina: 139,
      },
      {
        texto: 'Una Carta Global de Derechos Laborales y los principios de la OIT en los acuerdos comerciales.',
        pagina: 139,
      },
      { texto: 'Acabar con la unanimidad en la política exterior y de seguridad común de la UE.', pagina: 140 },
      {
        texto:
          'Acuerdos comerciales europeos ligados al Acuerdo de París y a los estándares de la OIT, y diplomacia digital europea.',
        pagina: 140,
      },
      {
        texto: 'Reforzar los lazos con los gobiernos progresistas de América Latina y una cumbre UE-CELAC anual.',
        pagina: 140,
      },
      { texto: 'Relación pacífica, autónoma y crítica con China, lejos de toda confrontación militar.', pagina: 140 },
      {
        texto: 'Renegociar el acuerdo UE-Mercosur para proteger los derechos humanos, laborales y la biodiversidad.',
        pagina: 140,
      },
      {
        texto:
          'Un foro internacional de movimientos progresistas y una alianza global por la igualdad y los derechos LGTBI+.',
        pagina: 140,
      },
      { texto: 'Una secretaría de Estado de política exterior feminista.', pagina: 140 },
      { texto: 'Avanzar hacia el reconocimiento del Estado palestino.', pagina: 141 },
      {
        texto:
          'Más ayuda humanitaria a los campamentos saharauis y revisar los acuerdos UE-Marruecos que afecten al Sáhara según las sentencias europeas.',
        pagina: 141,
      },
      {
        texto:
          'Que se cumpla el derecho internacional en Palestina para acabar con la ocupación y lo que el programa llama «prácticas de apartheid».',
        pagina: 141,
      },
      {
        texto:
          'Revertir el cambio de posición de 2022 sobre el Sáhara Occidental y apoyar su derecho a la libre determinación en la ONU.',
        pagina: 141,
      },
      {
        texto:
          'Solidaridad con Ucrania, vía diplomática hacia una paz justa y una reconstrucción con ayudas y no préstamos.',
        pagina: 141,
      },
      { texto: 'Una comisión sobre la responsabilidad histórica de España con el pueblo saharaui.', pagina: 141 },
      {
        texto:
          'Una relación con el Magreb basada en el diálogo y los derechos humanos, y una fuerza mediterránea de protección civil.',
        pagina: 141,
      },
      {
        texto:
          'Priorizar igualdad, clima y paz en la política exterior y becas para democratizar la carrera diplomática.',
        pagina: 142,
      },
      {
        texto:
          'Protección social en igualdad para los europeos vivan donde vivan y más competencias sociales para la UE.',
        pagina: 143,
      },
      {
        texto: 'Reducir al menos un 55 % las emisiones europeas en 2030 y una planificación industrial verde europea.',
        pagina: 143,
      },
      {
        texto:
          'Reforzar el Fondo de Transición Justa y el Fondo Social Climático y crear un «SURE climático» que proteja el empleo.',
        pagina: 143,
      },
      {
        texto:
          'Un protocolo de progreso social en los tratados para que los derechos sociales prevalezcan sobre las libertades económicas.',
        pagina: 143,
      },
      {
        texto: 'Ampliar la Estrategia Europea de Cuidados y paridad en los órganos de decisión de la UE.',
        pagina: 144,
      },
      { texto: 'Centros de datos paneuropeos y hardware de control público.', pagina: 144 },
      { texto: 'Convenios colectivos europeos y más poder para la Autoridad Laboral Europea.', pagina: 144 },
      {
        texto:
          'Liderar en Europa la lucha contra la violencia machista y la trata, con perspectiva de género en todos los presupuestos europeos.',
        pagina: 144,
      },
      {
        texto:
          'Que la última palabra sobre deuda y déficit la tengan el Consejo y el Parlamento europeos, no la Comisión.',
        pagina: 144,
      },
      { texto: 'Acabar con la unanimidad en la política fiscal europea.', pagina: 145 },
      { texto: 'Ampliar el mandato del BCE a la cohesión social, el clima y el pleno empleo.', pagina: 145 },
      {
        texto: 'Coordinación europea de los impuestos directos y ampliar el mínimo global del 15 % en Sociedades.',
        pagina: 145,
      },
      {
        texto: 'Más poder del Parlamento Europeo sobre la política económica y monetaria de la eurozona.',
        pagina: 145,
      },
      {
        texto:
          'Más recursos propios para la UE con impuestos europeos y una capacidad fiscal permanente como los Next Generation.',
        pagina: 145,
      },
      { texto: 'Plan de choque europeo contra los paraísos fiscales, con una lista negra más exigente.', pagina: 145 },
      { texto: 'Regla de oro que excluya del déficit la inversión verde y social.', pagina: 145 },
      {
        texto:
          'Sustituir el Mecanismo Europeo de Estabilidad por una agencia europea de deuda responsable ante el Parlamento Europeo.',
        pagina: 145,
      },
      {
        texto: 'Reformar Frontex y Europol para democratizar su dirección y exigirles responsabilidades.',
        pagina: 146,
      },
      {
        texto: 'Reformar los tratados para limitar la unanimidad y dar iniciativa legislativa al Parlamento Europeo.',
        pagina: 146,
      },
      {
        texto: 'Un plan europeo contra la corrupción tras el Qatargate y registro público obligatorio de los lobbies.',
        pagina: 146,
      },
      {
        texto: 'Apoyar sistemas fiscales progresivos y protección social universal en los países del Sur Global.',
        pagina: 147,
      },
      {
        texto:
          'Compensar al Sur Global por preservar la biodiversidad y por los daños climáticos, y ampliar el fondo de pérdidas y daños.',
        pagina: 147,
      },
      { texto: 'Una cooperación al desarrollo feminista que financie organizaciones de mujeres.', pagina: 147 },
      {
        texto: 'Ayuda al desarrollo del 0,55 % de la renta al final de la legislatura y del 0,7 % en 2030.',
        pagina: 148,
      },
      {
        texto:
          'Dedicar el 0,20 % de la renta a los países menos adelantados y el 20 % de la ayuda a necesidades básicas.',
        pagina: 148,
      },
      {
        texto:
          'Llevar la cooperación a una Vicepresidencia, reformar la AECID y desarrollar la Ley de Cooperación de 2023.',
        pagina: 148,
      },
      {
        texto: 'Un banco público de desarrollo sostenible y más cooperación de comunidades y ayuntamientos.',
        pagina: 148,
      },
      { texto: 'Un sistema humanitario con más recursos y más localizado.', pagina: 148 },
      { texto: 'Más plantilla y mejores sueldos en la red consular.', pagina: 150 },
      {
        texto: 'Una política integral para los españoles en el exterior: voto más fácil, sanidad y clases de lengua.',
        pagina: 150,
      },
      {
        texto:
          'Eliminar de los tratados comerciales las cláusulas de libre flujo de datos y repensar las patentes en un marco multilateral.',
        pagina: 182,
      },
    ],
  },
};
