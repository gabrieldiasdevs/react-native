import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, Button, Modal } from 'react-native';

import Detalhes from '../components/detalhes';

export default function Filmes({ data }){

  const [modalVisible, setModalVisible] = useState(false)

  function abrirModal() {
    setModalVisible(true)
  }

  function fecharModal() {
    setModalVisible(false)
  }

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title} >{data.nome}</Text>
      </View>
      <ImageBackground source={{ uri: data.foto }} style={styles.image} >
        <Button title='LEIA MAIS' onPress={ abrirModal } />
      </ImageBackground>

      <Modal transparent={true} animationType='slide' visible={modalVisible} >
        <Detalhes fechar={ fecharModal } data={data} />
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 20,
    marginTop: 35,
    backgroundColor: '#fff',
    elevation: 5,
  },
  header:{
    height: 50,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  title:{
    fontSize: 18,
  },
  image:{
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 5,
  },
})