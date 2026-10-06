import { NativeTabs } from 'expo-router/unstable-native-tabs';

import { Familias } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

/** Lo principal, en la barra de abajo. Android admite cinco pestañas como máximo. */
export default function AppTabs() {
  const t = useTheme();

  return (
    <NativeTabs
      backgroundColor={t.papel}
      indicatorColor={t.lineaSuave}
      tintColor={t.tinta}
      iconColor={{ default: t.grisClaro, selected: t.tinta }}
      labelStyle={{
        default: { color: t.gris, fontFamily: Familias.negrita },
        selected: { color: t.tinta, fontFamily: Familias.negrita },
      }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Hoy</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'newspaper', selected: 'newspaper.fill' }} md="today" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="partidos">
        <NativeTabs.Trigger.Label>Partidos</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'person.3', selected: 'person.3.fill' }} md="groups" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="comparar">
        <NativeTabs.Trigger.Label>Comparar</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="rectangle.split.2x1" md="compare_arrows" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="hechos">
        <NativeTabs.Trigger.Label>Hechos</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'checkmark.seal', selected: 'checkmark.seal.fill' }} md="fact_check" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="aprende">
        <NativeTabs.Trigger.Label>Aprende</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'graduationcap', selected: 'graduationcap.fill' }} md="school" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
