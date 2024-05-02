import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

import {
    Container,
    Background,
    Overlay,
    InfoArea,
    GameName,
    StarArea,
    TitleStar
} from './styles'

export default function TopGamesList({ data }){
  const navigation = useNavigation()

  return(
    <Container onPress={() => navigation.navigate('Details', {nome: data.nome})}>
      <Background 
        source={{ uri: data.background }}
        resizeMode='cover'
      >
        <Overlay/>
        <InfoArea>
          <GameName> { data.nome } </GameName>
          <StarArea>
            <Ionicons name='star' size={15} color='#FABB1E' />
            <TitleStar> { (data.rate) }/10 </TitleStar>
          </StarArea>
        </InfoArea>
      </Background>
    </Container>
  )
}