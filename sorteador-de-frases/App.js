import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function App() {

  const [img, setImg] = useState(require('./assets/biscoito.png'))
  const [textoFrase, setTextoFrase] = useState('')

  let frases = [
    'Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'
  ]


  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    setTextoFrase(' " ' + frases[numeroAleatorio] + ' " ')

    setImg(require('./assets/biscoitoAberto.png'))
  }

  function reniciar() {
    setTextoFrase('')
    setImg(require('./assets/biscoito.png'))
  }


  return(
    <View style={styles.container}>

     <Image
      style={styles.img}
      source={img}
     />

     <Text style={styles.textoFrase}> {textoFrase} </Text>

     <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito }>
      <View style={styles.btnArea}>
        <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
      </View>
     </TouchableOpacity>

     <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#121212' } ]} onPress={ reniciar }>
      <View style={styles.btnArea}>
        <Text style={[styles.btnTexto, { color: '#121212' } ]}>Reiniciar Biscoito</Text>
      </View>
     </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    width: 230,
    height: 230,
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})
