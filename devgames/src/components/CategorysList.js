import React from 'react'
import styled from 'styled-components/native'

const Container = styled.TouchableOpacity`
  background-color: #64748B;
  border-radius: 8px;
  padding: 4px 13px;
  align-items: center;
  justify-content: center;
  height: 34px;
  margin-right: 10px;
`

const Title = styled.Text`
  color: #FFF;
`

export default function CategorysList({ data }){
  return(
    <Container>
      <Title> {data} </Title>
    </Container>
  )
}