import React from 'react'
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native'

export default function Detalhes(props) {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>

        <TouchableOpacity style={styles.btn} onPress={ props.fechar } >
          <Text style={styles.btnText}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.title}> {props.data.nome} </Text>
          <Text style={styles.sinopse}> Sinopse: </Text>
          <Text style={styles.textSinopse}> {props.data.sinopse} </Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
	modal:{
		backgroundColor: '#141414',
		width: '100%',
		height: 500,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
	},
  btn:{
    height: 50,
    backgroundColor: '#F53746',
    justifyContent: 'center',
    paddingLeft: 15,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  btnText:{
    color: '#FFF',
    fontSize: 17,
  },
  content:{
    margin: 10,
  },
  title:{
    textAlign: 'center',
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  sinopse:{
    color: '#FFF',
    fontSize: 17,
    marginVertical: 10,
  },
  textSinopse:{
    color: '#FFF',

  }
})