import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FFF;
`

export const ContainerInput = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`

export const Input = styled.TextInput`
  background-color: #EBEBEB;
  margin-left: 10px;
  height: 50px;
  width: 80%;
  border-radius: 4px;
  padding: 5px;
`

export const Button = styled.TouchableOpacity`
  background-color: #2E54D4;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  width: 15%;
  margin-left: 5px;
  margin-right: 10px;
`