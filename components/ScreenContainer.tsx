import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { useTheme } from '../contexts/ThemeContext';

export default function ScreenContainer({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  const colors = Colors[theme];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
});
