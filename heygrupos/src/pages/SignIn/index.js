import React, { useState } from 'react'
import { View, Text } from 'react-native'

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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return(
    <Container>
      <Title>HeyGrupos</Title>
      <Description>Ajude, colabore, faça networking!</Description>

      <Input
        value={name}
        onChangeText={ (text) => setName(text) }
        placeholder='Qual seu nome?'
        placeholderTextColor='#99999B'
      />

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
      />

      <ButtonArea>
        <ButtonText>Acessar</ButtonText>
      </ButtonArea>

      <LinkArea>
        <LinkText>Criar uma conta</LinkText>
      </LinkArea>
    </Container>
  )
}