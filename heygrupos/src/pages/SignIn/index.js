import React, { useState } from 'react'
import { Platform } from 'react-native'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'

import { 
  Container,
  Title,
  Description,
  Input,
  ButtonArea,
  ButtonText,
  LinkArea,
  LinkText
} from './styles'

export default function SignIn(){
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState(false)

  function handleLogin(){
    if(type){

      if(name === '' || email === '' || password === '') return

      auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        user.user.updateProfile({
          displayName: name
        })
        .then(() => {
          navigation.goBack()
        })
      })
      .catch((error) => {
        if(error.code === 'auth/email-already-in-use'){
          console.log('Esse email já está em uso!')
        }
        if(error.code === 'auth/invalid-email'){
          console.log('Email inválido!')
        }
      })

    }else{
      auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.goBack()
      })
      .catch((error) => {
        if(error.code === 'auth/invalid-email'){
          console.log('Email inválido!')
        }
      })
    }
  }

  return(
    <Container>
      <Title mt={ Platform.OS === 'android' ? 55 : 80 }>HeyGrupos</Title>
      <Description>Ajude, colabore, faça networking!</Description>

      { type && (
        <Input
          value={name}
          onChangeText={ (text) => setName(text) }
          placeholder='Qual seu nome?'
          placeholderTextColor='#99999B'
        />
      )}

      <Input
        value={email}
        onChangeText={ (text) => setEmail(text) }
        placeholder='Seu email'
        placeholderTextColor='#99999B'
      />

      <Input
        value={password}
        onChangeText={ (text) => setPassword(text) }
        placeholder='Sua senha'
        placeholderTextColor='#99999B'
        secureTextEntry={true}
      />

      <ButtonArea bg={ type ? "#F53745" : '#57DD86' } onPress={handleLogin}>
        <ButtonText> {type ? 'Cadastrar' : 'Acessar'} </ButtonText>
      </ButtonArea>

      <LinkArea onPress={ () => setType(!type) }>
        <LinkText> {type ? 'Já possuo uma conta' : 'Criar uma nova conta'} </LinkText>
      </LinkArea>
    </Container>
  )
}