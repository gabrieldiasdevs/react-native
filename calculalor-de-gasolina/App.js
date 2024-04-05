import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal, Keyboard } from 'react-native'
import Detalhes from './src/Detalhes';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false)
  const [valorAlc, setValorAlc] = useState('')
  const [valorGas, setValorGas] = useState('')
  const [combustivel, setCombustivel] = useState('')

  function calcular() {
    
    const calculo = (valorAlc / valorGas)

    if(calculo <= 0.7) {
      setCombustivel('Álcool')
    } else {
      setCombustivel('Gasolina')
    }

    setModalVisible(true)
  }

  function novamente() {
    setModalVisible(false)
    setValorAlc('')
    setValorGas('')
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} />
      <Text style={styles.title}>Qual melhor opção?</Text>
      <View style={styles.inputArea}>
        <Text style={styles.inputText}>Álcool (preço por litro):</Text>
        <TextInput
          keyboardType='numbers-and-punctuation'
          style={styles.input}
          placeholder='EX: 3.20'
          value={valorAlc}
          onChangeText={ (valor) => setValorAlc(valor) }
        />
        
        <Text style={styles.inputText}>Gasolina (preço por litro):</Text>
        <TextInput
          keyboardType='numbers-and-punctuation'
          style={styles.input}
          placeholder='EX: 5.20'
          value={valorGas}
          onChangeText={ (valor) => setValorGas(valor) }
        />
        <TouchableOpacity style={styles.btnArea} onPress={calcular} >
          <Text style={styles.btnText}>Calcular</Text>
        </TouchableOpacity>
      </View>

      <Modal style={styles.modalContainer} animationType='slide' visible={modalVisible} >
        <Detalhes fechar={novamente} combustivel={combustivel} alcool={valorAlc} gasolina={valorGas} />
      </Modal>
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
    marginTop: 70,
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
  },
});
