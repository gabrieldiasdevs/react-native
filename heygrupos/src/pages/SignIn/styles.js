import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #FFF;
`

export const Title = styled.Text`
  margin-top: 60px;
  font-size: 28px;
  font-weight: bold;
  color: #000;
`

export const Description = styled.Text`
  color: #000;
  margin-bottom: 20px;
`

export const Input = styled.TextInput`
  color: #121212;
  background-color: #EBEBEB;
  width: 90%;
  border-radius: 6px;
  margin-bottom: 10px;
  padding-left: 8px;
  padding-right: 8px;
  height: 50px;
`

export const ButtonArea = styled.TouchableOpacity`
  width: 90%;
  background-color: #121212;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  border-radius: 6px;
`

export const ButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 19px;
`

export const LinkArea = styled.TouchableOpacity`

`

export const LinkText = styled.Text`
  color: #000;
`