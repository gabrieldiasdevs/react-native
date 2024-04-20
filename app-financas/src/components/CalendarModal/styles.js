import styled from 'styled-components'

export const Container = styled.View`
  flex: 1;
  background-color: rgba(34,34,34, 0.4);
`

export const ButtonFilter = styled.TouchableOpacity`
  border-radius: 4px;
  background-color: #3B3DBF;
  height: 45px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: 40px;
`

export const ButtonFilterText = styled.Text`
  color: #FFF;
  font-size: 19px;
  font-weight: bold;
`

export const ModalContent = styled.View`
  flex: 2;
  background-color: #FFF;
  justify-content: center;
  padding: 14px;
`