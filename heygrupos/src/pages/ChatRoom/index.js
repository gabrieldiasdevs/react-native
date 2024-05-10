import React from 'react'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import {
  Container,
  AreaHeader,
  AreaHeaderLeft,
  AreaHeaderRight,
  Button,
  Title
} from './styles'

export default function ChatRoom(){
  const navigation = useNavigation()

  return(
    <Container>
      <AreaHeader>
        <AreaHeaderLeft>
          <Button>
            <MaterialIcons name='arrow-back' size={28} color='#FFF'/>
          </Button>
          <Title> Grupos </Title>
        </AreaHeaderLeft>

        <AreaHeaderRight>
          <MaterialIcons name='search' size={28} color='#FFF'/>
        </AreaHeaderRight>
      </AreaHeader>
    </Container>
  )
}