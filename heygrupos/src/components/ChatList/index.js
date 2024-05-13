import React from 'react'

import {
  Container,
  Title,
  Message
} from './styles'

export default function ChatList({ data }){
  return(
    <Container>
      <Title numberOfLines={1}> {data.name} </Title>
      <Message numberOfLines={1}> {data.lastMessage.text} </Message>
    </Container>
  )
}