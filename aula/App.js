import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TextInput, Button } from 'react-native';

import Slider from '@react-native-community/slider'
import {Picker} from '@react-native-picker/picker'

export default function App() {

  const[nome, setNome] = useState('')
  const[idade, setIdade] = useState('')
  const[sexo, setSexo] = useState(0)
  const[limite, setLimite] = useState(1000)
  const[estudante, setEstudante] = useState(false)

  function alerta() {
    alert(`Seu nome é: ${nome} e você tem: ${idade} anos! Você é: ${sexo ? 'Feminino' : 'Masculino'} e seu limite é de R$ ${limite.toFixed(0)},00 reais. Você ${estudante ? 'ainda' : 'não'} estuda.`)
  }

  return (
    <View style={styles.container}>
      
      <TextInput
      style={styles.input}
      placeholder='Digite seu nome'
      onChangeText={ (nomePessoa) => setNome(nomePessoa) }
      />

      <TextInput
      style={styles.input}
      placeholder='Digite sua idade'
      onChangeText={ (idadePessoa) => setIdade(idadePessoa) }
      />

      <Text style={styles.texto}>Selecione seu Sexo:</Text>

      <Picker
      style={styles.picker} 
      selectedValue={sexo}
      onValueChange={ (itemValue, itemIndex) => setSexo(itemValue) }
      >
        <Picker.Item key={0} value={0} label='Masculino' />
        <Picker.Item key={1} value={1} label='Feminino' />
      </Picker>

      <Text style={styles.texto}>Selecione seu Limite: R$ {limite.toFixed(0)},00 </Text>

      <Slider
      style={styles.slider}
      minimumValue={0}
      maximumValue={3000}
      value={limite}
      onValueChange={ (limitePessoa) => setLimite(limitePessoa) }
      thumbTintColor='#000000'
      maximumTrackTintColor='gray'
      minimumTrackTintColor='#00FF00'
      />

      <Text style={styles.texto}>Você é Estudante?</Text>

      <Switch
      style={styles.botao}
      value={estudante}
      onValueChange={ (estudaPessoa) => setEstudante(estudaPessoa) }
      trackColor={{ false: '#FF0000', true: '#00FF00'}}
      thumbColor={'#000000'}
      />
      
      
      <Button title='ABRIR CONTA' onPress={ alerta } />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 45,
    alignItems: 'center',
  },
  input:{
    borderWidth: 1,
    textAlign: 'center',
    width: 300,
    borderRadius: 15,
    marginBottom: 10,
  },
  picker:{
    width: 300,
  },
  slider:{
    width: 300,
  },
  texto:{
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  botao:{
    marginBottom: 20,
  }
});
