import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function Home() {

  const navigation = useNavigation()

  function navegaDetalhes() {
    navigation.navigate('Detalhes')
  }

 return (
   <View style={styles.container}>
    <Text>Tela Home</Text>
    <Button title='Ir para Detalhes' onPress={ navegaDetalhes } />
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#c4c4c4',
    justifyContent: 'center',
    alignItems: 'center'
  }
})