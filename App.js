import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, Alert, Image } from 'react-native';
import Login from './components/login/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
