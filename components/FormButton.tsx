import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '../constants/Colors';
import { useTheme } from '../contexts/ThemeContext';

type FormButtonProps = {
  title: string;
  onPress: () => void;
};

export default function FormButton({ title, onPress }: FormButtonProps) {
  const { theme } = useTheme();
  const colors = Colors[theme];

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: colors.buttonBackground, opacity: pressed ? 0.7 : 1 },
      ]}
    >
      <Text style={[styles.label, { color: colors.buttonText }]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
