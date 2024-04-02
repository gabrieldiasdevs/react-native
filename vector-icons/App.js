import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Gabriel Dias</Text>

      <FontAwesome
      name='home'
      size={25}
      color='#11118c'
      />

      <FontAwesome
      name='user'
      size={35}
      color='#54a300'
      />

      <Feather
      name='gift'
      size={45}
      color='#7665ff'
      />

      <TouchableOpacity style={styles.btnYoutube}>
        <FontAwesome
        name='youtube'
        size={35}
        color='#fff'
        />
        <Text style={styles.btnText}>Acessar canal</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnYoutube:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: '#ff0000',
    borderRadius: 5,
  },
  btnText:{
    paddingLeft: 10,
    color: '#fff',
  }
})
