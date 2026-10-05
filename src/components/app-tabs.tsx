import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}
      labelStyle={{ selected: { color: colors.text } }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Inicio</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="calendar" md="event" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="partidos">
        <NativeTabs.Trigger.Label>Partidos</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'person.3', selected: 'person.3.fill' }} md="groups" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="votar">
        <NativeTabs.Trigger.Label>Votar</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'envelope', selected: 'envelope.fill' }} md="how_to_vote" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="fuentes">
        <NativeTabs.Trigger.Label>Fuentes</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="doc.text.magnifyingglass" md="fact_check" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
