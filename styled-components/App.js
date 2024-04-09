import React from 'react'

import { Container, Titulo, Nome, Botao, BotaoText } from './src/styles'

export default function App() {
  return (
    <Container>
      <Titulo cor='#ff0000' tamanho='30' >Gabriel Dias</Titulo>
      <Nome>Olá Gabriel!</Nome>

      <Botao onPress={ () => alert('clicou') } >
        <BotaoText>ENTRAR</BotaoText>
      </Botao>
    </Container>
  )
}