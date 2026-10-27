import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Switch, Text, View } from 'react-native';
import FormButton from './components/FormButton';
import FormInput from './components/FormInput';
import ScreenContainer from './components/ScreenContainer';
import { Colors } from './constants/Colors';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

function HomeScreen() {
  const { theme, toggleTheme } = useTheme();
  const colors = Colors[theme];
  const [name, setName] = useState('');

  return (
    <ScreenContainer>
      <View style={styles.row}>
        <Text style={{ color: colors.text, fontSize: 16 }}>Modo escuro</Text>
        <Switch value={theme === 'dark'} onValueChange={toggleTheme} />
      </View>
      <FormInput placeholder="Digite seu nome" value={name} onChangeText={setName} />
      <FormButton title="Enviar" onPress={() => Alert.alert(`Olá, ${name || 'visitante'}!`)} />
      <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
    </ScreenContainer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
