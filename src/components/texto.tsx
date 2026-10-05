import { Text, type TextProps } from 'react-native';

import { Tipos, type TipoTexto } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ColorTexto = 'tinta' | 'gris' | 'grisClaro' | 'papel';

type Props = TextProps & { tipo?: TipoTexto; color?: ColorTexto };

/** Todo el texto de la app pasa por aquí: tipo de la escala y color del tema. */
export function Texto({ tipo = 'cuerpo', color = 'tinta', style, ...rest }: Props) {
  const t = useTheme();
  return <Text style={[Tipos[tipo], { color: t[color] }, style]} {...rest} />;
}
