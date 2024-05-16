import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import {
  Container,
  ContainerInput,
  Input,
  Button
} from './styles'

export default function Search(){
  const [input, setInput] = useState('')

  return(
    <Container>
      <ContainerInput>
          <Input
            placeholder='Digite o nome da sala?'
            value={input}
            onChangeText={ (text) => setInput(text) }
            autoCapitalize='none'
          />

        <Button>
          <MaterialIcons name='search' size={30} color='#FFF'/>
        </Button>
      </ContainerInput>
    </Container>
  )
}