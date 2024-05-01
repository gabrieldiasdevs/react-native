import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity``

export const Background = styled.ImageBackground`
  justify-content: flex-end;
  padding: 10px;
  flex: 1;
  height: 180px;
  margin-bottom: 15px;
`

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`

export const InfoArea = styled.View`
  gap: 5px;
`

export const GameName = styled.Text`
  color: #FFF;
  font-weight: bold;
`

export const StarArea = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TitleStar = styled.Text`
  color: #FFF;
`