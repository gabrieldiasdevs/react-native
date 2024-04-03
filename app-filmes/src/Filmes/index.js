import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Modal } from 'react-native';

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
        <TouchableOpacity onPress={ abrirModal } style={styles.btn}>
          <Text style={styles.btnText}>LEIA MAIS</Text>
        </TouchableOpacity>
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
    marginTop: 55,
    backgroundColor: '#fff',
    elevation: 5,
  },
  header:{
    height: 50,
    justifyContent: 'center',
    paddingLeft: 15,
    backgroundColor: '#101010',
  },
  title:{
    fontSize: 18,
    color: '#FFF',
  },
  image:{
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  btn:{
    backgroundColor: '#009AFF',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  btnText:{
    color: '#FFF'
  }
})