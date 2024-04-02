import React, { useLayoutEffect } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

export default function Sobre() {

  return (
   <View style={styles.container}>
    <Text>Pagina Sobre</Text>
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})