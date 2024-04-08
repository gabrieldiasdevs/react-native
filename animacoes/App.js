import React, { useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable'

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity)

export default function App() {

  const buttonRef = useRef(null)

  function click() {
    buttonRef.current.shake()
  }

  return (
    <View style={styles.container}>
      <Animatable.Text 
        style={styles.title}
        animation='bounce'
        >
        Gabriel Dias
      </Animatable.Text>

      <ButtonAnimated 
      style={styles.button} 
      animation='pulse' 
      ref={buttonRef} 
      onPress={click} >
        <Text style={{ color: '#FFF' }}>ANIMAR</Text>
      </ButtonAnimated>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 25,
  },
  button:{
    width: '70%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121121',
    marginTop: 25
  }
})
