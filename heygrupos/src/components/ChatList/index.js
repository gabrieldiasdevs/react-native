import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Title,
  Message
} from './styles'


export default function ChatList({ data, deleteRoom, userStatus }){
  const navigation = useNavigation()

  function openChat(){
    if(userStatus){
      navigation.navigate('Messages', { thread: data })
    }else{
      navigation.navigate('SignIn')
    }
    
  }

  return(
    <Container onPress={openChat} onLongPress={ () => deleteRoom && deleteRoom() }>
      <Title numberOfLines={1}> {data.name} </Title>
      <Message numberOfLines={1}> {data.lastMessage.text} </Message>
    </Container>
  )
}