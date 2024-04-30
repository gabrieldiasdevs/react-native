import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  background-color: #64748B;
  border-radius: 5px;
  padding: 10px;
`

const Title = styled.Text`
  color: #FFF;
`

export default function CategorysList(){
  return(
    <Container>
      <Title>Arcade</Title>
    </Container>
  )
}