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
  width: 90%;
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
  width: 90%;
  align-items: center;
`

export const Input = styled.TextInput`
  background-color: #1F2430;
  margin-right: 10px;
  flex: 1;
  padding: 10px;
  border-radius: 30px;
  padding-left: 15px;
`

export const AreaSearch = styled.TouchableOpacity`

`

export const CategorysArea = styled.View`

`

export const Categorys = styled.FlatList`

`