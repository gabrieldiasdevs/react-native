import React, { useState } from 'react'

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
        <AreaButton>
          <ButtonText> Criar sala </ButtonText>
        </AreaButton>
      </ModalContent>

    </Container>
  )
}