import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Keyboard } from 'react-native';
import api from './src/services/api';

export default function App() {

  const [cep, setCep] = useState('')
  const inputRef = useRef(null)
  const [cepUser, setCepUser] = useState(null)

  function limpar() {
    setCep('')
    inputRef.current.focus()
  }

  async function buscar() {

    if(cep === '') {
      alert('Digite um CEP válido!')
      setCep('')
      return
    }

    const response = await api.get(`${cep}/json`)
    setCepUser(response.data)
    Keyboard.dismiss()

  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Digite seu CEP</Text>
      <TextInput
        ref={inputRef}
        placeholder='Ex: 36506306'
        style={styles.input}
        keyboardType='numeric'
        value={cep}
        onChangeText={ (texto) => setCep(texto) }
      />

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={buscar}>
          <Text style={styles.btnText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.btn, {backgroundColor: '#da4918'}]} onPress={limpar}>
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      { cepUser && 
        <View style={styles.infoArea}>
        <Text style={styles.infoText}>CEP: {cepUser.cep}</Text>
        <Text style={styles.infoText}>Logradouro: {cepUser.logradouro}</Text>
        <Text style={styles.infoText}>Bairro: {cepUser.bairro}</Text>
        <Text style={styles.infoText}>Cidade: {cepUser.localidade}</Text>
        <Text style={styles.infoText}>Estado: {cepUser.uf}</Text>
        </View>
      }
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    marginTop: 30,
  },
  title:{
    fontSize: 35,
    fontWeight: 'bold',
  },
  input:{
    fontSize: 20,
    backgroundColor: '#fff',
    color: 'gray',
    width: '90%',
    height: 50,
    paddingLeft: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  btnArea:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
    marginTop: 20,
  },
  btn:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1471D1',
    width: 100,
    height: 50,
    borderRadius: 5
  },
  btnText:{
    color: '#FFF',
    fontSize: 20,
  },
  infoArea:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  infoText:{
    fontSize: 20,
  }
});
