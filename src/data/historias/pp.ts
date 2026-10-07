import { infoelectoralHistorico, wikiTercerGobierno, wikipedia, type HistoriaDetallada } from '../historia-detallada';

const C = '2026-10-06';

export const HistoriaPP: HistoriaDetallada = {
  partidoId: 'pp',
  entradilla:
    'Partido fundado en 1989 como refundación de Alianza Popular. Ha gobernado España con José María Aznar (1996–2004) y Mariano Rajoy (2011–2018). Desde 2022 lo preside Alberto Núñez Feijóo, que ganó las generales de 2023 pero no logró la investidura.',
  capitulos: [
    {
      titulo: 'Alianza Popular',
      periodo: '1976–1988',
      parrafos: [
        'Alianza Popular (AP) nace en 1976 como federación de pequeños partidos conservadores encabezados por antiguos dirigentes del franquismo. Su figura principal es Manuel Fraga, ministro de Información y Turismo de 1962 a 1969 y vicepresidente del Gobierno en 1975–1976.',
        'Logra 16 diputados en 1977 y retrocede en 1979, dentro de Coalición Democrática. Tras el hundimiento de UCD se alía con parte de sus restos y con partidos regionalistas, y en 1982 supera los cien escaños: primer partido de la oposición.',
        'En 1986 pide la abstención o el voto en blanco en el referéndum de la OTAN. Ese año Fraga dimite y en 1987 Antonio Hernández Mancha gana la presidencia frente a Miguel Herrero de Miñón, en el único congreso de AP con más de un candidato. Sigue una crisis profunda.',
      ],
    },
    {
      titulo: 'Refundación',
      periodo: '1989–1996',
      parrafos: [
        'Fraga vuelve para refundarlo: en el congreso de enero de 1989 nace el Partido Popular, con Fraga de presidente y Francisco Álvarez-Cascos de secretario general. En septiembre José María Aznar, presidente de Castilla y León, es elegido candidato y en abril de 1990 presidente del partido.',
        'En 1993 obtiene el 34,76 % y 141 escaños, frente a los 159 del PSOE.',
      ],
    },
    {
      titulo: 'Gobiernos de Aznar',
      periodo: '1996–2004',
      parrafos: [
        'Gana las generales de 1996 con 156 escaños. Aznar es investido con 181 votos, con el apoyo de CiU, el PNV y Coalición Canaria. Su Gobierno reduce el déficit, privatiza empresas públicas como Telefónica, Repsol o Endesa y cumple los requisitos para que España entre en el euro desde su inicio. Pacta con CiU suspender el servicio militar obligatorio, que termina en 2001.',
        'En 2000 logra la mayoría absoluta con 183 escaños. Ese año firma con el PSOE el Pacto por las libertades y contra el terrorismo, a propuesta de Zapatero; en 2002 se ilegaliza Batasuna. La legislatura termina con fuertes críticas de la oposición por la reforma laboral, que provocó una huelga general, el hundimiento del Prestige y la guerra de Irak.',
        'En 2003 Aznar cumple su compromiso de no repetir y propone como sucesor a Mariano Rajoy.',
      ],
    },
    {
      titulo: 'Oposición',
      periodo: '2004–2011',
      parrafos: [
        'Las generales de 2004 se celebran tres días después de los atentados del 11-M. En esos días miembros del Gobierno señalaron indicios de que ETA estaba detrás y hubo concentraciones ante sedes del PP que le acusaban de mentir; la investigación atribuyó la matanza a una célula islamista. El PSOE de Zapatero gana las elecciones.',
        'En la oposición choca con el Gobierno por el diálogo con ETA, el Estatuto catalán de 2006 o la inmigración, y apoya manifestaciones de asociaciones como la AVT. Pierde de nuevo en 2008 (154 escaños) y Rajoy es reelegido presidente del partido con el 84 % de los votos. En 2009 estalla el caso Gürtel.',
      ],
    },
    {
      titulo: 'Gobiernos de Rajoy',
      periodo: '2011–2018',
      parrafos: [
        'En noviembre de 2011, en plena crisis, gana con mayoría absoluta. Recorta el gasto, sube el IRPF y el IBI, congela el salario mínimo y aprueba en 2012 una reforma laboral que la oposición y los sindicatos critican por abaratar el despido.',
        'Tras dos elecciones (2015 y 2016), Rajoy es investido de nuevo en octubre de 2016. En octubre de 2017, tras el referéndum del 1-O, suspendido por el Constitucional, y la declaración de independencia, aplica el artículo 155 en Cataluña y convoca elecciones catalanas.',
        'En mayo de 2018 la Audiencia Nacional condena al PP como partícipe a título lucrativo de la trama Gürtel. El 1 de junio prospera la moción de censura de Pedro Sánchez y Rajoy deja el Gobierno.',
      ],
    },
    {
      titulo: 'Casado y la crisis de 2022',
      periodo: '2018–2022',
      parrafos: [
        'Pablo Casado gana el congreso de julio de 2018 con el 57,21 %. En abril de 2019 el PP obtiene su peor resultado en unas generales, 66 diputados, y sube a 89 en noviembre.',
        'En febrero de 2022 se publica que el hermano de Isabel Díaz Ayuso cobró una comisión por material sanitario y que la dirección nacional habría intentado espiar a su familia, algo que esta negó. Ayuso acusa a la dirección de querer destruirla; Casado pregunta en público si es lógico adjudicar una comisión al hermano en plena pandemia. Tras una cascada de dimisiones y la presión de los barones, Casado convoca un congreso extraordinario y renuncia a presentarse.',
      ],
    },
    {
      titulo: 'Feijóo',
      periodo: 'desde 2022',
      parrafos: [
        'Alberto Núñez Feijóo, presidente de la Xunta de Galicia, es elegido el 2 de abril de 2022 con el 98,35 %, como único candidato. En las autonómicas de mayo de 2023 pasa a gobernar doce de las diecisiete comunidades; en seis casos, con el apoyo o la abstención de Vox.',
        'En las generales de julio de 2023 es el más votado, con el 33 % y 137 diputados. Su investidura fracasa en septiembre con 172 votos (PP, Vox, UPN y CC), cuatro menos de la mayoría absoluta.',
        'En el congreso de julio de 2025 Feijóo es reelegido y Miguel Tellado pasa a ser secretario general.',
      ],
    },
    {
      titulo: 'Casos judiciales',
      periodo: '2009–2026',
      parrafos: [
        'Caso Gürtel: en 2018 la Audiencia Nacional condenó al PP como partícipe a título lucrativo, a devolver 245.492,80 euros. En 2020 el Supremo confirmó la condena y el pago, pero consideró improcedentes los párrafos que daban por acreditada una «caja B» del partido, porque no se le había acusado de ello.',
        'Obras de la sede de Génova: la Audiencia Nacional condenó al extesorero Luis Bárcenas a dos años por ayudar a defraudar a Hacienda pagando en dinero negro parte de la reforma de la sede. En noviembre de 2024 el Supremo rebajó su pena a ocho meses, por dilaciones indebidas y al anular la condena por falsedad, y confirmó al PP como responsable civil subsidiario. La Justicia, en cambio, absolvió al partido por el borrado de los ordenadores de Bárcenas.',
        'Caso Kitchen: el exministro del Interior Jorge Fernández Díaz y otros mandos de Interior del Gobierno de Rajoy fueron juzgados entre abril y julio de 2026 por una presunta operación para quitar a Bárcenas información comprometedora para el PP. La Fiscalía pidió 15 años para el exministro, cuya defensa pidió la absolución. Dos inspectores quedaron absueltos durante el juicio al retirarse la acusación. El PP no está acusado. A 6 de octubre de 2026 no hay sentencia.',
      ],
    },
  ],
  lideres: [
    { nombre: 'Manuel Fraga', cargo: 'Presidente de AP', desde: '1976', hasta: '1987' },
    { nombre: 'Antonio Hernández Mancha', cargo: 'Presidente de AP', desde: '1987', hasta: '1989' },
    { nombre: 'Manuel Fraga', cargo: 'Presidente', desde: '1989', hasta: '1990' },
    { nombre: 'José María Aznar', cargo: 'Presidente', desde: '1990', hasta: '2004' },
    { nombre: 'Mariano Rajoy', cargo: 'Presidente', desde: '2004', hasta: '2018' },
    { nombre: 'Pablo Casado', cargo: 'Presidente', desde: '2018', hasta: '2022' },
    { nombre: 'Alberto Núñez Feijóo', cargo: 'Presidente', desde: '2022' },
    { nombre: 'Miguel Tellado', cargo: 'Secretario general', desde: '2025' },
  ],
  notaTrayectoria:
    'Hasta 1986 se muestran sus antecesoras: Alianza Popular (1977), Coalición Democrática (1979) y las coaliciones de AP con el PDP y el PL (1982 y 1986). Desde 1989 concurre como PP, en algunas comunidades junto a partidos regionalistas como UPN.',
  fuentes: [
    wikipedia('Partido Popular', 'Partido_Popular'),
    wikipedia('Caso Gürtel', 'Caso_Gürtel'),
    {
      titulo: 'Público: El Supremo confirma la condena al PP por la Gürtel (14/10/2020)',
      url: 'https://www.publico.es/politica/supremo-confirma-condena-al-pp-guertel.html',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'Libertad Digital: El Supremo ve contradictoria la condena al PP (14/10/2020)',
      url: 'https://www.libertaddigital.com/espana/2020-10-14/el-supremo-penas-gurtel-condena-pp-contradictoria-6669927/',
      consultada: C,
      oficial: false,
    },
    {
      titulo:
        'Infobae (Europa Press): El Supremo reduce las condenas de los papeles de Bárcenas y confirma al PP como responsable civil (15/11/2024)',
      url: 'https://www.infobae.com/espana/agencias/2024/11/15/el-ts-reduce-las-condenas-de-los-papeles-de-barcenas-y-confirma-al-pp-responsable-civil/',
      consultada: C,
      oficial: false,
    },
    wikipedia('Caso Kitchen', 'Caso_Kitchen'),
    {
      titulo: 'Diari de Tarragona: La Audiencia Nacional deja visto para sentencia el juicio Kitchen (28/07/2026)',
      url: 'https://www.diaridetarragona.com/espana/266956/audiencia-nacional-deja-visto-sentencia-juicio-kitchen.html',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'RTVC: Miguel Tellado será el secretario general del PP (03/07/2025)',
      url: 'https://rtvc.es/miguel-tellado-sera-el-secretario-general-del-pp-y-ester-munoz-la-portavoz-en-el-congreso-3-julio-2025/',
      consultada: C,
      oficial: false,
    },
    wikiTercerGobierno,
    infoelectoralHistorico,
  ],
};
