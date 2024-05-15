import styled from 'styled-components/native'

export const Container = styled.View`
  padding-left: 10px;
  padding-right: 10px;
`

export const MessageBox = styled.View`
  border-radius: 5px;
  padding: 10px;
  background-color: ${props => props.bg};
  margin-left: ${props => props.ml}px;
  margin-right: ${props => props.mr}px;
`

export const Name = styled.Text`

`

export const Message = styled.Text`

`