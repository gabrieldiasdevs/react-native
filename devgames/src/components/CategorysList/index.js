import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { 
    Container,
    Title
} from './styles'

export default function CategorysList({ data }){
  const navigation = useNavigation()

  return(
    <Container onPress={() => navigation.navigate('Genres', { title: data.nome, id: data.id })}>
      <Title> {data.nome} </Title>
    </Container>
  )
}