import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

export function Form(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState('')

  function handleLogin(email: string, password: string){
    if(email === 'teste@teste.com' && password === '123123'){
      setUser('Login autorizado!')
    }
  }

  return(
    <View style={styles.container}>
      <TextInput
        placeholder='Digite seu email'
        style={styles.input}
        value={email}
        onChangeText={ (text) => setEmail(text) }
      />

      <TextInput
        placeholder='Digite sua senha'
        style={styles.input}
        value={password}
        onChangeText={ (text) => setPassword(text) }
        secureTextEntry={true}
      />

      <Button
        title='Login'
        onPress={ () => handleLogin(email, password) }
      />

      {user !== '' && <Text>{user}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop: 24,
    width: '90%',
    gap: 8
  },
  input:{
    borderWidth: 1,
    padding: 4
  }
})