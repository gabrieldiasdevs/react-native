import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

export function Welcome({ handleGetUser }: { handleGetUser: () => void }){
  const [input, setInput] = useState('')
  const [user, setUser] = useState('')

  function handleShowUser(){
    if(input === ''){
      setUser('')
      return
    }

    let message = 'Bem vindo ' + input
    setUser(message)
    handleGetUser()
  }

  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Digite seu nome...'
        value={input}
        onChangeText={ (text) => setInput(text) }
      />

      <Button
        title='Login'
        onPress={handleShowUser}
      />

      {user !== '' && <Text>{user}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '90%',
    marginTop: 24,
    gap: 8
  },
  input:{
    borderWidth: 1,
    padding: 4
  }
})