import React, { useState } from 'react'
import { Platform } from 'react-native'

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

  const [type, setType] = useState(true)

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
      />

      <ButtonArea bg={ type ? "#F53745" : '#57DD86' }>
        <ButtonText> {type ? 'Cadastrar' : 'Acessar'} </ButtonText>
      </ButtonArea>

      <LinkArea onPress={ () => setType(!type) }>
        <LinkText> {type ? 'Já possuo uma conta' : 'Criar uma nova conta'} </LinkText>
      </LinkArea>
    </Container>
  )
}