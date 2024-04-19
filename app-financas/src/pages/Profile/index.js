import React from 'react'
import { Container, Message } from './styles'

import Header from '../../components/Header'

export default function Profile(){
  return(
    <Container>

      <Header title='Meu Perfil' />
      <Message>
        Hey, bem vindo de volta!
      </Message>

      <Name numberOfLines={1} >
        Gabriel
      </Name>

      <NewLink>
        <NewText>Fazer registro</NewText>
      </NewLink>

    </Container>
  )
}