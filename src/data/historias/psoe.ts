import { Fuentes } from '../fuentes';
import { infoelectoralHistorico, wikiTercerGobierno, wikipedia, type HistoriaDetallada } from '../historia-detallada';

const C = '2026-10-06';

export const HistoriaPSOE: HistoriaDetallada = {
  partidoId: 'psoe',
  entradilla:
    'Partido socialista fundado en 1879, uno de los partidos obreros más antiguos de Europa. Ha gobernado con Felipe González (1982–1996), José Luis Rodríguez Zapatero (2004–2011) y Pedro Sánchez, presidente desde 2018.',
  capitulos: [
    {
      titulo: 'Fundación',
      periodo: '1879–1923',
      parrafos: [
        'El tipógrafo Pablo Iglesias Posse lo funda en Madrid el 2 de mayo de 1879 para agrupar al proletariado bajo la ideología marxista. En 1888 celebra su primer congreso y nace la UGT, su sindicato hermano: hasta los años ochenta del siglo XX, afiliarse a uno suponía afiliarse al otro.',
        'Iglesias es su primer diputado, en 1910, gracias a la Conjunción Republicano-Socialista. Tras la huelga general de 1917, Francisco Largo Caballero y Julián Besteiro son condenados a cadena perpetua, pero en 1918 salen elegidos diputados.',
        'En 1921 los partidarios de unirse a la Internacional Comunista se marchan y forman, con las juventudes que ya se habían ido en 1920, el Partido Comunista de España.',
      ],
    },
    {
      titulo: 'Dictadura, República y guerra',
      periodo: '1923–1939',
      parrafos: [
        'Durante la dictadura de Primo de Rivera, que reprime a la CNT, el PSOE y la UGT colaboran con el régimen en la legislación laboral; Largo Caballero llega a consejero de Estado. En 1929 el partido rompe con la dictadura y se declara republicano.',
        'En las Cortes de 1931 es el primer partido, con 116 diputados (115 según otros cómputos), y sostiene los gobiernos de Manuel Azaña. Tras perder en 1933 se divide entre el sector de Indalecio Prieto y Besteiro y el más radical de Largo Caballero. En octubre de 1934 el PSOE y la UGT encabezan una insurrección, la Revolución de 1934, que solo triunfa en Asturias.',
        'En 1936 forma parte del Frente Popular, que gana las elecciones. Durante la Guerra Civil, los socialistas Largo Caballero y Juan Negrín presiden el Gobierno de la República.',
      ],
    },
    {
      titulo: 'Clandestinidad',
      periodo: '1939–1977',
      parrafos: [
        'La dictadura de Franco lo ilegaliza. Sus dirigentes se exilian y sus militantes en el interior son ejecutados, encarcelados o represaliados. Su actividad bajo el franquismo es muy limitada.',
        'En los años setenta una nueva generación ajena al exilio desplaza a la dirección de Rodolfo Llopis, que en 1972 se separa con el llamado PSOE histórico. En el Congreso de Suresnes de 1974 Felipe González es elegido secretario general.',
      ],
    },
    {
      titulo: 'Gobiernos de Felipe González',
      periodo: '1977–1996',
      parrafos: [
        'Se convierte en uno de los dos grandes partidos y absorbe el Partido Socialista Popular de Enrique Tierno Galván. En 1982 logra 202 diputados y el 48,11 %, récords de la democracia. Aplica una reconversión industrial, prioriza bajar la inflación y extiende el Estado del bienestar.',
        'En 1986 España entra en la Comunidad Económica Europea. Ese año el Gobierno, pese a que el partido se había opuesto a la OTAN, gana el referéndum pidiendo el sí. El 14 de diciembre de 1988 los sindicatos le hacen una huelga general.',
        'Se queda a un escaño de la mayoría absoluta en 1989. En enero de 1991 Alfonso Guerra dimite como vicepresidente por el caso de su hermano Juan Guerra, que acabó absuelto de corrupción y condenado solo por un delito fiscal. En 1993 baja a 159 escaños, en años marcados por casos de corrupción y por el procesamiento de altos cargos por los GAL. En 1996 pierde frente al PP.',
      ],
    },
    {
      titulo: 'Oposición y Zapatero',
      periodo: '1997–2011',
      parrafos: [
        'González deja la secretaría general en 1997 y le sucede Joaquín Almunia. El PSOE celebra sus primeras primarias: la militancia elige a Josep Borrell frente al candidato de la dirección, pero Borrell acaba renunciando. Almunia pierde en 2000 y dimite.',
        'José Luis Rodríguez Zapatero, secretario general desde 2000, gana las generales de 2004, celebradas tres días después del 11-M. En 2005 se aprueba el matrimonio entre personas del mismo sexo. Vuelve a ganar en 2008 con 169 diputados y 11,29 millones de votos, el récord de votos en unas generales.',
        'En plena crisis económica, en 2011 baja a 110 diputados con Alfredo Pérez Rubalcaba de candidato. Ese año se destapa el caso ERE.',
      ],
    },
    {
      titulo: 'Sánchez: caída y vuelta',
      periodo: '2012–2018',
      parrafos: [
        'Rubalcaba es secretario general desde 2012. Tras las europeas de 2014 dimite y Pedro Sánchez gana las primarias con el 49 %. Según el CIS de octubre de 2014, una cuarta parte de sus antiguos votantes se inclinaba por Podemos.',
        'Tras las elecciones de 2016, Sánchez se niega a facilitar un Gobierno del PP. El 28 de septiembre dimite la mitad más uno de su Ejecutiva para forzar su salida, en una corriente crítica encabezada por Susana Díaz. El 1 de octubre Sánchez dimite; una gestora dirigida por Javier Fernández toma el mando y el PSOE se abstiene en la investidura de Rajoy. Sánchez deja su escaño para no abstenerse.',
        'En junio de 2017 recupera la secretaría general en primarias y reduce el poder del Comité Federal en favor de la militancia. Tras la sentencia del caso Gürtel presenta una moción de censura que se aprueba el 1 de junio de 2018 por 180 votos contra 169: es el primer presidente que llega al cargo así.',
      ],
    },
    {
      titulo: 'Gobiernos de Sánchez',
      periodo: 'desde 2018',
      parrafos: [
        'Sin Presupuestos, convoca elecciones en abril de 2019 (123 escaños) y en noviembre (120). En enero de 2020 forma Gobierno de coalición con Unidas Podemos. En 2021 se aprueba la ley de eutanasia, a iniciativa del PSOE.',
        'Tras perder gran parte de sus gobiernos autonómicos en mayo de 2023, adelanta las generales a julio. Queda segundo con 121 escaños, pero Sánchez es investido con 179 votos gracias a Sumar, ERC, Junts, EH Bildu, PNV, BNG y CC. El pacto con Junts y ERC incluye la ley de amnistía para los encausados del procés, aprobada en 2024.',
        'En octubre de 2025 Junts rompe el pacto de investidura. El 6 de octubre de 2026 el BOE publica el decreto que disuelve las Cortes y convoca las generales del 29 de noviembre.',
      ],
    },
    {
      titulo: 'Casos judiciales',
      periodo: '1997–2026',
      parrafos: [
        'Caso Filesa: el Supremo dio por probado en octubre de 1997 que una trama de empresas financió ilegalmente al PSOE con más de 1.200 millones de pesetas para las campañas de 1989. Hubo ocho condenas de prisión, tres de ellas a cargos o excargos socialistas, entre ellos el senador Josep Maria Sala, cuya pena de tres años suspendió después el Constitucional.',
        'GAL: estos grupos parapoliciales mataron a 27 personas entre 1983 y 1987 en su «guerra sucia» contra ETA. En 1998 el Supremo condenó por el secuestro de Segundo Marey al exministro del Interior José Barrionuevo y al ex secretario de Estado Rafael Vera a 10 años de prisión. Ese mismo año el Gobierno de Aznar les concedió un indulto parcial.',
        'Caso ERE: desvío de dinero público de la Junta de Andalucía en ayudas a empresas y trabajadores; la primera sentencia cifró el fraude en 680 millones entre 2000 y 2009. En 2019 la Audiencia de Sevilla condenó a 19 ex altos cargos, entre ellos los expresidentes José Antonio Griñán (seis años de prisión) y Manuel Chaves (nueve de inhabilitación); el Supremo lo ratificó en 2022. En julio de 2024 el Constitucional anuló esas condenas y ordenó rebajar la de prevaricación y suprimir la de malversación. En julio de 2025 la Audiencia de Sevilla llevó esas sentencias del Constitucional al Tribunal de Justicia de la UE y suspendió su ejecución; en abril de 2026 la Comisión Europea pidió al tribunal europeo que se declare incompetente. A 6 de octubre de 2026 no ha resuelto.',
        'Caso Koldo: en junio de 2026 el Supremo condenó por unanimidad al exministro y ex secretario de Organización del PSOE José Luis Ábalos a 24 años y 3 meses y a su asesor Koldo García a 19 años y 8 meses, por organización criminal, cohecho, malversación y tráfico de influencias, en la pieza de los contratos de mascarillas. El PSOE había suspendido de militancia a Ábalos en febrero de 2024 y después lo expulsó.',
        'Su sucesor en la secretaría de Organización, Santos Cerdán, dimitió y dejó el PSOE en junio de 2025 tras un informe de la Guardia Civil que le atribuía cobros por obra pública. Estuvo en prisión provisional de junio a noviembre de 2025 y denuncia «manipulaciones». La Audiencia Nacional mantiene abiertas esa investigación y otra sobre los pagos en efectivo del PSOE a Ábalos y Koldo García.',
      ],
    },
  ],
  lideres: [
    { nombre: 'Pablo Iglesias Posse', cargo: 'Fundador y líder', desde: '1879', hasta: '1919' },
    { nombre: 'Felipe González', cargo: 'Secretario general', desde: '1974', hasta: '1997' },
    { nombre: 'Joaquín Almunia', cargo: 'Secretario general', desde: '1997', hasta: '2000' },
    { nombre: 'José Luis Rodríguez Zapatero', cargo: 'Secretario general', desde: '2000', hasta: '2012' },
    { nombre: 'Alfredo Pérez Rubalcaba', cargo: 'Secretario general', desde: '2012', hasta: '2014' },
    { nombre: 'Pedro Sánchez', cargo: 'Secretario general', desde: '2014', hasta: '2016' },
    { nombre: 'Javier Fernández', cargo: 'Presidente de la gestora', desde: '2016', hasta: '2017' },
    { nombre: 'Pedro Sánchez', cargo: 'Secretario general', desde: '2017' },
  ],
  notaTrayectoria: 'En Cataluña concurre con el PSC, que se cuenta dentro del PSOE.',
  fuentes: [
    wikipedia('Partido Socialista Obrero Español', 'Partido_Socialista_Obrero_Español'),
    wikipedia('Elecciones generales de España de 1931', 'Elecciones_generales_de_España_de_1931'),
    wikipedia('Congreso de Suresnes', 'Congreso_de_Suresnes'),
    wikipedia('Rodolfo Llopis', 'Rodolfo_Llopis'),
    wikipedia('Caso Guerra', 'Caso_Guerra'),
    wikipedia('Caso Filesa', 'Caso_Filesa'),
    wikipedia('Grupos Antiterroristas de Liberación', 'Grupos_Antiterroristas_de_Liberación'),
    wikipedia('Caso ERE en Andalucía', 'Caso_ERE_en_Andalucía'),
    {
      titulo: 'Maldita.es: qué dicen las sentencias del Constitucional sobre el caso ERE',
      url: 'https://maldita.es/malditateexplica/20240722/sentencias-constitucional-caso-ere-andalucia-penas/',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'Euronews: La Audiencia de Sevilla lleva al TJUE el fallo del Constitucional sobre los ERE (15/07/2025)',
      url: 'https://es.euronews.com/2025/07/15/la-audiencia-de-sevilla-lleva-al-tjue-el-fallo-del-constitucional-sobre-los-ere',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'Público: La Comisión Europea rechaza que el TJUE se pronuncie sobre las sentencias del caso ERE (20/04/2026)',
      url: 'https://www.publico.es/politica/tribunales/comision-europea-rechaza-tjue-pronuncie-sobre-sentencias-caso-ere.html',
      consultada: C,
      oficial: false,
    },
    wikipedia('Caso Koldo', 'Caso_Koldo'),
    wikipedia('José Luis Ábalos', 'José_Luis_Ábalos'),
    {
      titulo: 'Demócrata: Qué queda abierto tras la condena del Supremo a Ábalos, Koldo y Aldama (06/2026)',
      url: 'https://www.democrata.es/tribunales/todas-causas-abalos-koldo-aldama/',
      consultada: C,
      oficial: false,
    },
    {
      titulo: 'Ara: Santos Cerdán sale de la cárcel (19/11/2025)',
      url: 'https://es.ara.cat/politica/juez-deja-santos-cerdan-libertad_1_5566495.html',
      consultada: C,
      oficial: false,
    },
    wikiTercerGobierno,
    Fuentes.boeConvocatoria,
    infoelectoralHistorico,
  ],
};
