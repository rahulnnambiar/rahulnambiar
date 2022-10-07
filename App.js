import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import AppStack from './src/components/stack/AppStack';

export default function App() {
  return (
    <NativeBaseProvider>
      <AppStack />
      <StatusBar style="light-content" />
    </NativeBaseProvider>
  );
}
