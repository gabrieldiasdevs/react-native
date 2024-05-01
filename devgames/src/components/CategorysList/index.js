import React from 'react'
import { 
    Container,
    Title
} from './styles'

export default function CategorysList({ data }){
    return(
      <Container>
        <Title> {data} </Title>
      </Container>
    )
  }