import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'

import {
  Container,
  AreaOpacity,
  ModalContent,
  Text,
  Input,
  AreaButton,
  ButtonText
} from './styles'

export default function ModalNewRoom({ setVisible }){
  const [roomName, setRoomName] = useState('')

  const user = auth().currentUser.toJSON()

  function handleButtonCreate(){
    if(roomName === '') return

    createRoom()
  }

  function createRoom(){
    firestore().collection('MESSAGE_THREADS')
    .add({
      name: roomName,
      owner: user.uid,
      lastMessage:{
        text: `Grupo ${roomName} criado. Bem vindo(a)!`,
        createdAt: firestore.FieldValue.serverTimestamp(),
      }
    })
    .then((docRef) => {
      docRef.collection('MESSAGES').add({
        text: `Grupo ${roomName} criado. Bem vindo(a)!`,
        createdAt: firestore.FieldValue.serverTimestamp(),
        system: true,
      })
      .then(() => {
        setVisible()
      })

    })
    .catch((err) => {
      console.log(err)
    })
  }

  return(
    <Container>
      <AreaOpacity activeOpacity={1} onPress={setVisible}></AreaOpacity>

      <ModalContent>
        <Text> Criar um novo grupo? </Text>
        <Input
          value={roomName}
          onChangeText={ (text) => setRoomName(text) }
          placeholder='Nome para sua sala?'
        />
        <AreaButton onPress={handleButtonCreate}>
          <ButtonText> Criar sala </ButtonText>
        </AreaButton>
      </ModalContent>

    </Container>
  )
}