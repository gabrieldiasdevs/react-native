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
} from './styles'

import SignInput from '../../components/SignInput'

export default function SignIn(){
  const navigation = useNavigation()

  return(
    <Container>
      <AreaTitle>
        <Title>Dev</Title>
        <TitleRed>Post</TitleRed>
      </AreaTitle>

      <AreaInput>
        <SignInput placeholder='email@email.com'/>
        <SignInput placeholder='********'/>
        <Button>
          <ButtonText>Acessar</ButtonText>
        </Button>
        <LinkArea onPress={ () => navigation.reset({ routes: [{ name: 'Cadastro' }] })}>
          <LinkText>Criar uma conta</LinkText>
        </LinkArea>
      </AreaInput>
    </Container>
  )
}