import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Colors } from '../constants/Colors';
import { useTheme } from '../contexts/ThemeContext';

export default function FormInput({ style, ...props }: TextInputProps) {
  const { theme } = useTheme();
  const colors = Colors[theme];

  return (
    <TextInput
      placeholderTextColor={colors.placeholder}
      style={[styles.input, { color: colors.text, borderColor: colors.border }, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
});
