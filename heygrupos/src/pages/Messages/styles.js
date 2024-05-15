import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const MessageList = styled.FlatList`
  width: 100%;
`

export const KeyboardArea = styled.KeyboardAvoidingView`
  width: 100%;
`

export const ContainerInput = styled.View`
  flex-direction: row;
  margin: 10px;
  align-items: flex-end;
`

export const InputArea = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #FFF;
  flex: 1;
  border-radius: 25px;
  margin-right: 10px;
`

export const Input = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
  max-height: 130px;
  min-height: 48px;
`

export const ButtonArea = styled.TouchableOpacity`
  background-color: #51C880;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`

export const Button = styled.View`

`