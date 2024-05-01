import React from 'react'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Container = styled.View`
  flex: 1;
  opacity: 0.5;
`

const Background = styled.ImageBackground`
  justify-content: flex-end;
  padding: 10px;
  flex: 1;
  height: 180px;
  margin-bottom: 10px;
`

const InfoArea = styled.View`
  gap: 5px;
`

const GameName = styled.Text`
  color: #FFF;
  font-weight: bold;
`

const StarArea = styled.View`
  flex-direction: row;
  align-items: center;
`

const TitleStar = styled.Text`
  color: #FFF;
`

export default function TopGamesList({ data }){
  return(
    <Container>
      <Background 
        source={{ uri: data.background }}
        resizeMode='cover'
      >
        <InfoArea>
          <GameName> { data.nome } </GameName>
          <StarArea>
            <Ionicons name='star' size={15} color='#FABB1E' />
            <TitleStar> { data.rate }/10 </TitleStar>
          </StarArea>
        </InfoArea>
      </Background>
    </Container>
  )
}