import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function App() {

  return(
    <View style={styles.area}>

      <Text style={[styles.titulo, styles.textoAlinhado]}> Gabriel </Text>
      <Text style={styles.titulo}> Dias </Text>
      <Text style={[styles.subTitulo, styles.textoAlinhado]}> Amo minha namorada </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  area:{
    marginTop: 50
  },
  titulo:{
    fontSize: 30,
    color: 'red'
  },
  subTitulo:{
    color: '#00FF00',
    fontSize: 17,
    marginTop: 15
  },
  textoAlinhado:{
    textAlign: 'center'
  }
})

export default App
