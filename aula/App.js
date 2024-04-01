import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider'

export default function App() {

  const [valor, setValor] = useState(50)

  return (
    <View style={styles.container}>
      
      <Slider
      minimumValue={0}
      maximumValue={100}
      value={valor}
      onValueChange={ (valorSelecionado) => setValor(valorSelecionado) }
      minimumTrackTintColor='#000FFF'
      maximumTrackTintColor='#FF0000'
      thumbTintColor='#121212'
      />

      <Text style={styles.texto}>Você tem: {valor.toFixed(0)} kg </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
    marginTop: 25,
  }
});
