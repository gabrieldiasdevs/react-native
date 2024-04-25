import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { 
  Container,
  AreaTitle,
  Title,
  TitleRed,
  AreaInput,
  Button,
  ButtonText,
  LinkArea,
  LinkText
} from '../SignIn/styles'

import SignInput from '../../components/SignInput'

export default function SignUp(){
  const navigation = useNavigation()

  return(
    <Container>
      <AreaTitle>
        <Title>Dev</Title>
        <TitleRed>Post</TitleRed>
      </AreaTitle>

      <AreaInput>
        <SignInput placeholder='Seu nome'/>
        <SignInput placeholder='email@email.com'/>
        <SignInput placeholder='********'/>
        <Button>
          <ButtonText>Cadastrar</ButtonText>
        </Button>
        <LinkArea onPress={ () => navigation.reset({ routes: [{ name: 'Login' }] })}>
          <LinkText>Já possuo uma conta</LinkText>
        </LinkArea>
      </AreaInput>
    </Container>
  )
}