import React from 'react'
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Text
} from './styles'

export default function FabButton({ setVisible, userStatus }){
  const navigation = useNavigation()

  function handleNavigateButton(){
    userStatus ? setVisible() : navigation.navigate('SignIn')
  }

  return(
    <Container activeOpacity={0.9} onPress={handleNavigateButton}>
      <Text> + </Text>
    </Container>
  )
}