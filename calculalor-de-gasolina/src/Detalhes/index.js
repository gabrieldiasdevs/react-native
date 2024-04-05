import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function Detalhes(props) {
  return(
    <View style={styles.container}>
      <Image source={require('../../assets/gas.png')} />
      <Text style={styles.title}>Compensa usar {props.combustivel}</Text>
      <Text style={styles.titleText}>Com os preços:</Text>
      <Text style={styles.text}>Álcool: R$ {props.alcool}</Text>
      <Text style={styles.text}>Gasolina: R$ {props.gasolina}</Text>
      
      <TouchableOpacity style={styles.btnArea} onPress={props.fechar} >
        <Text style={styles.btnText}>Calcular novamente</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212022',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: '#29C356',
    fontWeight: 'bold',
    fontSize: 27,
    marginTop: 30,
  },
  titleText:{
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10
  },
  text:{
    color: '#FFF',
    fontSize: 15,
    marginTop: 5,
  },
  btnArea:{
    borderWidth: 1,
    borderColor: '#FF502F',
    padding: 5,
    borderRadius: 5,
    width: 230,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  btnText:{
    color: '#FF502F',
    fontWeight: 'bold',
    fontSize: 15,
  }
})