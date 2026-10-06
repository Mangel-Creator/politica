import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ListaPrecedentes } from '@/components/lista-precedentes';
import { MarcaPartido } from '@/components/marca-partido';
import { Pantalla } from '@/components/pantalla';
import { Etiqueta, Ir, Nota, Segmentos } from '@/components/piezas';
import { Texto } from '@/components/texto';
import { BarraVotos } from '@/components/votacion';
import { Borde, Spacing } from '@/constants/theme';
import { Estados, Hechos, votacion } from '@/data/hechos';
import { buscarTema } from '@/data/temas';
import { useTheme } from '@/hooks/use-theme';

type Vista = 'votos' | 'funciono';

export default function PantallaHechos() {
  const [vista, setVista] = useState<Vista>('votos');

  return (
    <Pantalla antetitulo="Lo que se prometió y lo que pasó" titulo="Hechos">
      <Segmentos<Vista>
        opciones={[
          { id: 'votos', texto: 'Promesas y votos' },
          { id: 'funciono', texto: '¿Funcionó?' },
        ]}
        valor={vista}
        onCambio={setVista}
      />
      {vista === 'votos' ? <ListaHechos /> : <ListaPrecedentes />}
    </Pantalla>
  );
}

function ListaHechos() {
  const t = useTheme();

  return (
    <>
      <Texto color="gris">
        Lo que cada partido llevaba en su programa del 23J, al lado de lo que votó en el Congreso después. Votos de los
        datos abiertos del Congreso; leyes, del BOE.
      </Texto>
      <View style={styles.lista}>
        {Hechos.map((h) => {
          const tema = buscarTema(h.temaId);
          const ultima = votacion(h.pasos[h.pasos.length - 1].votacion)!;
          const anios = [...new Set(h.pasos.map((p) => votacion(p.votacion)!.fecha.slice(0, 4)))];
          const esLey = h.desenlace.estado === 'en-vigor';
          return (
            <Ir
              key={h.id}
              href={{ pathname: '/hecho/[id]', params: { id: h.id } }}
              style={[styles.tarjeta, { borderColor: t.linea, backgroundColor: t.papel }]}>
              <View style={styles.cabeza}>
                <Etiqueta>
                  {tema?.glifo} {tema?.nombre}
                </Etiqueta>
                <View
                  style={[
                    styles.estado,
                    {
                      borderColor: t.linea,
                      backgroundColor: esLey ? t.tinta : t.papel,
                      borderStyle: h.desenlace.estado === 'sin-votacion-final' ? 'dashed' : 'solid',
                    },
                  ]}>
                  <Texto tipo="etiqueta" color={esLey ? 'papel' : 'tinta'}>
                    {Estados[h.desenlace.estado]}
                  </Texto>
                </View>
              </View>
              <Texto tipo="titulo">{h.titulo}</Texto>
              <View style={styles.promesas}>
                <Etiqueta>Lo prometían o rechazaban</Etiqueta>
                <View style={styles.marcas}>
                  {h.promesas.map((p) => (
                    <View key={p.partidoId} style={[styles.marca, { borderColor: t.lineaSuave }]}>
                      <Texto tipo="pequenoFuerte">{p.postura === 'a-favor' ? '▲' : '▼'}</Texto>
                      <MarcaPartido id={p.partidoId} lado={9} />
                    </View>
                  ))}
                </View>
              </View>
              <View style={[styles.pie, { borderTopColor: t.lineaSuave }]}>
                <Etiqueta>
                  {h.pasos.length} {h.pasos.length === 1 ? 'votación' : 'votaciones'} · {anios.join('–')}
                </Etiqueta>
                <Texto tipo="subtitulo">→</Texto>
              </View>
              <BarraVotos v={ultima} />
            </Ir>
          );
        })}
      </View>
      <Nota>
        ▲ su programa lo defiende · ▼ su programa lo rechaza. La barra es la última votación de cada tema (negro, sí;
        gris oscuro, abstención; gris claro, no). ERC, Junts y Podemos no tienen programa del 23J en la app: salen sus
        votos dentro de cada ficha.
      </Nota>
    </>
  );
}

const styles = StyleSheet.create({
  lista: { gap: Spacing.three },
  tarjeta: { borderWidth: Borde.grueso, padding: Spacing.three, gap: Spacing.two },
  cabeza: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: Spacing.two },
  estado: { borderWidth: Borde.grueso, paddingHorizontal: Spacing.two, paddingVertical: Spacing.half },
  promesas: { gap: Spacing.two, marginTop: Spacing.one },
  marcas: { flexDirection: 'row', flexWrap: 'wrap', gap: Spacing.one + Spacing.half },
  marca: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one + Spacing.half,
    borderWidth: Borde.fino,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
  },
  pie: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: Borde.fino,
    paddingTop: Spacing.two,
  },
});
