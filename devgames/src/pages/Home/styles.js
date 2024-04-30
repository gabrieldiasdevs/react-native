import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #050B18;
  gap: 20px;
`

export const Header = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 30px;
  color: #FFF;
  font-weight: bold;
`

export const TitleRed = styled.Text`
 color: #FF455F;
`

export const Favorites = styled.TouchableOpacity`
  width: 37px;
  height: 37px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: #1F2430;
`

export const InputArea = styled.View`
  flex-direction: row;
  width: 95%;
  align-items: center;
`

export const Input = styled.TextInput`
  background-color: #1F2430;
  margin-right: 10px;
  flex: 1;
  padding: 10px;
  border-radius: 30px;
  padding-left: 15px;
  color: #FFF;
`

export const AreaSearch = styled.TouchableOpacity``

export const Categorys = styled.FlatList`
  padding-left: 20px;
  margin-top: 7px;
  max-height: 34px;
  background-color: #FF0000;
`

export const TopGamesText = styled.Text`
  color: #FFF;
  font-size: 17px;
  font-weight: bold;
  width: 95%;
`

export const TopGames = styled.FlatList`
  width: 95%;
`