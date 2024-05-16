import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 10px;
`

export const MessageBox = styled.View`
  border-radius: 5px;
  padding: 10px;
  background-color: ${props => props.bg};
  margin-left: ${props => props.ml}px;
  margin-right: ${props => props.mr}px;
`

export const Name = styled.Text`
  color: #F53745;
  font-weight: bold;
  margin-bottom: 5px;
`

export const Message = styled.Text`
  color: #000;
`