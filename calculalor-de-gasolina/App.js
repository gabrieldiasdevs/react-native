import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} />
      <Text style={styles.title}>Qual melhor opção?</Text>
      <View style={styles.inputArea}>
        <Text style={styles.inputText}>Álcool (preço por litro):</Text>
        <TextInput
          style={styles.input}
          placeholder='EX: 3.20'
        />
        <Text style={styles.inputText}>Gasolina (preço por litro):</Text>
        <TextInput
          style={styles.input}
          placeholder='EX: 5.20'
        />
        <TouchableOpacity style={styles.btnArea}>
          <Text style={styles.btnText}>Calcular</Text>
        </TouchableOpacity>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212022',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
  inputArea:{
    width: '90%',
    marginTop: 50,
  },
  inputText:{
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10
  },
  input:{
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    fontSize: 20,
    marginBottom: 20
  },
  btnArea:{
    backgroundColor: '#FF502F',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText:{
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20
  }
});
