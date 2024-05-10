import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: rgba(34, 34, 34, 0.4);
`

export const AreaOpacity = styled.TouchableOpacity`
  flex: 3;
`

export const ModalContent = styled.View`
  flex: 2;
  background-color: #FFF;
  padding: 15px;
`

export const Text = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 19px;
  margin-top: 14px;
  color: #000;
`

export const Input = styled.TextInput`
  border-radius: 4px;
  height: 45px;
  background-color: #DDD;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 16px;
  padding-left: 5px;
  padding-right: 5px;
`

export const AreaButton = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: #2E54D4;
  height: 45px;
  align-items: center;
  justify-content: center;
` 

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 19px;
  font-weight: bold;
`