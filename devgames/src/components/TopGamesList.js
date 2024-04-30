import React from 'react'
import styled from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Background = styled.ImageBackground`
  justify-content: flex-end;
  padding: 10px;
  flex: 1;
  height: 170px;
  margin-bottom: 10px;
  border-radius: 8px;
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
      <Background 
        source={require('../assets/walppaper.png')}
        resizeMode='cover'
      >
        <InfoArea>
          <GameName> {data.game} </GameName>
          <StarArea>
            <Ionicons name='star' size={15} color='#FABB1E' />
            <TitleStar> 8.9/10 </TitleStar>
          </StarArea>
        </InfoArea>
      </Background>
  )
}