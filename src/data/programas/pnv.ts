import type { ResumenPrograma } from '../tipos';

/** EAJ-PNV, generales 23J 2023. Programa "Con voz propia", 52 páginas. */
export const ProgramaPNV: ResumenPrograma = {
  partidoId: 'pnv',
  eleccion: '23J 2023',
  ideasClave: [
    { texto: 'Reconocimiento nacional de Euskadi y relación bilateral con el Estado ("soberanía compartida").', pagina: 6 },
    { texto: 'Traspasar a Euskadi el régimen económico de la Seguridad Social, como dice el Estatuto de Gernika.', pagina: 33 },
    { texto: 'Pensiones ligadas siempre al IPC.', pagina: 33 },
    { texto: 'Prioridad de los convenios autonómicos sobre los estatales y marco vasco de relaciones laborales.', pagina: 30 },
    { texto: 'Suprimir los aforamientos y la inviolabilidad del Rey en actos no institucionales.', pagina: 13 },
  ],
  temas: {
    territorio: [
      { texto: 'Reconocimiento nacional de Euskadi y bilateralidad con el Estado.', pagina: 6 },
      { texto: 'Defensa del Estatuto, el Amejoramiento navarro y el Concierto y Convenio Económico.', pagina: 6 },
      { texto: 'Que Treviño y Villaverde de Trucíos puedan pronunciarse sobre su incorporación a Euskadi.', pagina: 6 },
      { texto: 'Que el Tribunal Superior vasco sea la última instancia judicial (salvo el Supremo) y Consejo Vasco de Justicia.', pagina: 9 },
      { texto: 'Traspasar Cercanías y los aeropuertos de Hondarribia, Loiu y Foronda.', pagina: 50 },
      { texto: 'Traspasar a Euskadi las políticas migratorias.', pagina: 11 },
    ],
    democracia: [
      { texto: 'Reformar la "Ley Mordaza".', pagina: 7 },
      { texto: 'Quitar del Código Penal delitos que limitan la libertad de expresión (contra la Corona o símbolos).', pagina: 8 },
      { texto: 'Rechazo a la prisión permanente revisable.', pagina: 10 },
      { texto: 'Nueva Ley de Secretos Oficiales con desclasificación automática por plazos.', pagina: 12 },
      { texto: 'Actualizar la ley del CNI tras el caso Pegasus.', pagina: 13 },
      { texto: 'Suprimir aforamientos e inviolabilidad del Rey en actos no institucionales; regular los lobbies.', pagina: 13 },
      { texto: 'Facilitar a las víctimas del franquismo el acceso a la justicia.', pagina: 9 },
    ],
    inmigracion: [
      { texto: 'Política europea común de inmigración y asilo.', pagina: 10 },
      { texto: 'Reparto equilibrado de menores no acompañados y solicitantes de asilo entre comunidades.', pagina: 10 },
      { texto: 'Garantías de derechos humanos en los rechazos en frontera.', pagina: 10 },
      { texto: 'Que los migrantes con contrato de trabajo no tengan que pasar por el arraigo.', pagina: 34 },
    ],
    impuestos: [
      { texto: 'Sistema fiscal progresivo adaptado a la digitalización y la fiscalidad verde, respetando el Concierto.', pagina: 16 },
      { texto: 'Convertir los gravámenes a banca y energéticas en impuestos concertables, si se mantienen.', pagina: 16 },
      { texto: 'Revisar los tipos y la lista de bienes del IVA para reducir desigualdades.', pagina: 17 },
      { texto: 'Lucha contra el fraude fiscal y la economía sumergida.', pagina: 17 },
    ],
    economia: [
      { texto: 'Menos burocracia en los fondos europeos y "PERTE regionales" gestionados por las comunidades.', pagina: 15 },
      { texto: 'Reglas fiscales europeas compatibles con la inversión verde y digital.', pagina: 17 },
      { texto: 'Derecho al olvido oncológico ante bancos y aseguradoras.', pagina: 17 },
      { texto: 'Autoridad independiente de defensa del cliente financiero.', pagina: 18 },
      { texto: 'Política industrial con colaboración público-privada y plan para reducir normas y trabas a pymes.', pagina: 38 },
    ],
    energia: [
      { texto: 'Acelerar las renovables agilizando su tramitación.', pagina: 20 },
      { texto: 'Mantener los bonos sociales eléctrico y térmico.', pagina: 20 },
      { texto: 'Impulsar comunidades energéticas y autoconsumo, con prioridad de acceso a la red.', pagina: 20 },
      { texto: 'Abrir la tarifa regulada (PVPC) a todas las comercializadoras.', pagina: 21 },
      { texto: 'Hidrógeno verde y eólica marina flotante.', pagina: 23 },
      { texto: 'Más ayudas al coche eléctrico (MOVES) y plan renove para coches de más de 15 años.', pagina: 25 },
    ],
    igualdad: [
      { texto: 'Reformar la Ley de Igualdad de 2007 para garantizar presencia equilibrada.', pagina: 26 },
      { texto: 'El consentimiento como eje de los delitos sexuales; asistencia jurídica gratuita a víctimas.', pagina: 27 },
      { texto: 'Seguimiento de las leyes LGTBI y lucha contra la LGTBIfobia.', pagina: 27 },
    ],
    empleo: [
      { texto: 'Marco vasco de relaciones laborales y prioridad de convenios autonómicos.', pagina: 29 },
      { texto: 'Pacto por el Empleo con salarios ligados a la productividad.', pagina: 30 },
      { texto: 'FP Dual en todos los niveles, también universitaria.', pagina: 30 },
      { texto: 'Prestación por desempleo hasta 36 meses ligada a la búsqueda activa.', pagina: 31 },
      { texto: 'Más reserva de empleo público para personas con discapacidad.', pagina: 31 },
    ],
    pensiones: [
      { texto: 'Traspasar a Euskadi la gestión del régimen económico de la Seguridad Social.', pagina: 33 },
      { texto: 'Revalorizar las pensiones siempre con el IPC.', pagina: 33 },
      { texto: 'Pagar con Presupuestos los "gastos impropios" (bonificaciones y gastos de gestión).', pagina: 34 },
      { texto: 'Impulsar planes de pensiones de empresa como complemento, nunca sustituto.', pagina: 32 },
    ],
    exterior: [
      { texto: 'Apoyo a Ucrania y autonomía estratégica de la UE.', pagina: 35 },
      { texto: 'Participación directa de Euskadi en el Consejo de la UE.', pagina: 36 },
      { texto: 'Oficialidad del euskera, catalán y gallego en la UE.', pagina: 36 },
      { texto: 'Autodeterminación del pueblo saharaui.', pagina: 11 },
    ],
    rural: [
      { texto: 'Relevo generacional en el campo con incentivos y cambios normativos.', pagina: 42 },
      { texto: 'Mejorar la Ley de la Cadena Alimentaria y revisar la PAC para reducir burocracia.', pagina: 42 },
      { texto: 'Cláusulas espejo para productos de fuera de la UE.', pagina: 42 },
      { texto: 'Fondo para renovar y descarbonizar la flota pesquera.', pagina: 43 },
    ],
    sanidad: [
      { texto: 'Traspasar la formación sanitaria especializada (MIR) y cambiar el MIR para que no queden plazas vacías.', pagina: 46 },
      { texto: 'Regular el cannabis medicinal.', pagina: 46 },
      { texto: 'Más investigación en enfermedades raras y Alzheimer.', pagina: 46 },
    ],
    social: [
      { texto: 'Estrategia europea de garantía infantil contra la pobreza infantil.', pagina: 45 },
      { texto: 'Más vivienda pública en alquiler y equilibrio entre inquilino y propietario.', pagina: 45 },
      { texto: 'Medidas contra el acceso de menores a la pornografía; ley integral contra la trata.', pagina: 47 },
    ],
    educacion: [
      { texto: 'Respetar las competencias vascas en educación y su modelo de selectividad (EBAU).', pagina: 48 },
      { texto: 'Marco vasco de cualificaciones profesionales.', pagina: 49 },
      { texto: 'Traspasar la homologación de títulos extranjeros.', pagina: 49 },
    ],
  },
};
