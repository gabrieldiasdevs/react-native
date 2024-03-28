import React from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'

export default function App() {
  return(
    <View style={styles.container}>

     <Image
      style={styles.image}
      source={'./assets/biscoito.png'}
     />''

     <Button title='Quebrar Biscoito'/>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  image:{
    width: 400,
    height: 400
  }
})
