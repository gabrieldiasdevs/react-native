import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import {
    Container,
    Title,
    AreaButton
} from './styles'

export default function Header({ title }){
  const navigation = useNavigation()

  return(
    <Container>
      <AreaButton onPress={() => navigation.navigate('Home')}>
        <Feather name='arrow-left' size={30} color='#FFF' />
      </AreaButton>
      <Title> {title} </Title>
    </Container>
  )
}