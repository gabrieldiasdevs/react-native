import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Usuario from './src/Usuario'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Seja bem vindo!</Text>
      <Usuario nome='Gabriel' cargo='Programador' />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 15,
  }
});