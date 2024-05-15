import React, { useMemo } from 'react'
import auth from '@react-native-firebase/auth'

import {
  Container,
  MessageBox,
  Name,
  Message
} from './styles'

export default function ChatMessage({ data }){
  const user = auth().currentUser.toJSON()

  const isMyMessage = useMemo(() => {
    return data?.user?._id === user.uid
  }, [data])

  return(
    <Container>
      <MessageBox bg={isMyMessage ? '#DCF8C5' : '#FFF'} ml={isMyMessage ? 50 : 0} mr={isMyMessage ? 0 : 50} >
        <Name>Gabriel Dias</Name>
        <Message> {data.text} </Message>
      </MessageBox>
    </Container>
  )
}