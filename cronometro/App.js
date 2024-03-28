import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

let timer = null
let ss = 0
let mm = 0
let hh = 0

export default function App() {

  const [numero, setNumero] = useState(0)
  const [botao, setBotao] = useState('INICIAR')
  const [ultimo, setUltimo] = useState(null)


  function iniciar() {
    
    if(timer !== null){
      // Aqui vai parar o timer
      clearInterval(timer)
      timer = null

      setBotao('INICIAR')
    } else {
      // Começar a girar o timer
      timer = setInterval(() => {
        ss++

        if(ss == 60) {
          ss = 0
          mm++
        }

        if(mm == 60) {
          mm = 0
          hh++
        }

        let format =
        (hh < 10 ? '0' + hh : hh) + ':' 
        + (mm < 10 ? '0' + mm : mm) + ':' 
        + (ss < 10 ? '0' + ss : ss)

        setNumero(format)

      }, 1000)
      
      setBotao('PARAR')

    }
    
  }

  function limpar() {
    if(timer !== null) {
      // Parar o timer
      clearInterval(timer)
      timer = null
    }

    setUltimo(numero)

    setNumero(0)
    ss = 0
    mm = 0
    hh = 0

    setBotao('INICIAR')

  }


  return (
    <View style={styles.container}>
      
      <Image
        source={require('./src/crono.png')}
      />

      <Text style={styles.timer}> {numero} </Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={ iniciar }>
          <Text style={styles.btnTexto}> {botao} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={ limpar }>
          <Text style={styles.btnTexto}> LIMPAR </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.areaUltima}>
        <Text style={styles.textoCorrida}>
          {ultimo ? 'Último tempo: ' + ultimo : ''}
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop: -160,
    fontSize: 45,
    color: '#fff',
    fontWeight: 'bold'
  },
  btnArea:{
    marginTop: 130,
    flexDirection: 'row',
    height: 40
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltima:{
    marginTop: 40
  },
  textoCorrida:{
    fontSize: 25,
    color: '#fff',
    fontStyle: 'italic'
  }
});
