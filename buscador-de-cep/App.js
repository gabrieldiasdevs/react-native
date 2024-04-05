import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { api } from './src/services/api';

export default function App() {

  const [cep, setCep] = useState('')

  function buscar() {

    useEffect(() => {
    async function loadCep() {
      const response = await api.get(`${cep}/json`)
      let arrayCep = [];
      Object.keys(response.data).map( (key) => {
        arrayCep.push({
          cep: key,
          logradouro: key,
          bairro: key,
          localidade: key,
          uf: key,
        })
      })
    }

    loadCep();

  }, [])

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite seu CEP</Text>
      <TextInput
        placeholder='Ex: 36506306'
        style={styles.input}
        keyboardType='numeric'
        value={cep}
        onChangeText={ (valor) => setCep(valor) }
      />

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={buscar}>
          <Text style={styles.btnText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#da4918'}]}>
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoArea}>
        <Text style={styles.infoText}>CEP: 36506306</Text>
        <Text style={styles.infoText}>Logradouro: Rua Rubens Baião</Text>
        <Text style={styles.infoText}>Bairro: Pires da Luz</Text>
        <Text style={styles.infoText}>Cidade: Ubá</Text>
        <Text style={styles.infoText}>Estado: MG</Text>
      </View>
    </View>
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
