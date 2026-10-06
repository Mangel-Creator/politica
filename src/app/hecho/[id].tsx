import { useLocalSearchParams } from 'expo-router';

import { ListaFuentes } from '@/components/enlaces';
import { Pantalla } from '@/components/pantalla';
import { Bloque, Etiqueta, Nota, Seccion } from '@/components/piezas';
import { Texto } from '@/components/texto';
import { PromesaYVoto } from '@/components/promesa-voto';
import { TableroVotacion } from '@/components/votacion';
import { buscarHecho, Estados, votacion, Hechos } from '@/data/hechos';
import { Partidos } from '@/data/partidos';
import { buscarTema } from '@/data/temas';

/** Para la web estática: una página por cada hecho (GitHub Pages no tiene servidor). */
export async function generateStaticParams(): Promise<{ id: string }[]> {
  return Hechos.map((x) => ({ id: x.id }));
}

export default function FichaHecho() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const h = buscarHecho(id);
  if (!h)
    return (
      <Pantalla atras titulo="No encontrado">
        {null}
      </Pantalla>
    );
  const tema = buscarTema(h.temaId);
  const sinPrograma = Partidos.filter((p) => !p.programas.length).map((p) => p.siglas);

  return (
    <Pantalla atras antetitulo={`Promesas y hechos · ${tema?.nombre ?? ''}`} titulo={h.titulo} entradilla={h.pregunta}>
      <Bloque invertido>
        <Etiqueta color="papel">Qué pasó · {Estados[h.desenlace.estado]}</Etiqueta>
        <Texto tipo="subtitulo" color="papel">
          {h.desenlace.texto}
        </Texto>
      </Bloque>

      <Seccion titulo="Lo que llevaban en el programa · 23J">
        {h.promesas.map((p) => (
          <PromesaYVoto key={p.partidoId} hecho={h} partidoId={p.partidoId} />
        ))}
        <Texto tipo="pequeno" color="gris">
          Los números remiten a las votaciones de abajo; «= a favor» o «= en contra» dice si ese voto apoyaba la medida
          del título (a veces votar sí era tumbarla). {sinPrograma.join(', ')} no tienen programa del 23J en la app:
          aparecen sus votos, no sus promesas.
        </Texto>
      </Seccion>

      <Seccion titulo={`Las votaciones · ${h.pasos.length}`}>
        {h.pasos.map((p, i) => (
          <TableroVotacion key={p.votacion} paso={p} v={votacion(p.votacion)!} numero={i + 1} />
        ))}
      </Seccion>

      <Seccion titulo="Fuentes">
        <ListaFuentes fuentes={h.desenlace.fuentes} />
      </Seccion>

      <Nota>
        Un partido puede votar no a una iniciativa que dice compartir porque no le convence el texto o porque incluye
        otras cosas (un decreto ley se vota entero). La app pone lado a lado promesa y voto; el porqué de cada voto está
        en el Diario de Sesiones del Congreso.
      </Nota>
    </Pantalla>
  );
}
