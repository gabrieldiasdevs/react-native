import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App(){
  return(
    <View style={styles.container}>
      <Text>Gabriel</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})