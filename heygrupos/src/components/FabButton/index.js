import React from 'react'

import {
  Container,
  Text
} from './styles'

export default function FabButton({ setVisible }){

  function handleNavigateButton(){
    setVisible()
  }

  return(
    <Container activeOpacity={0.9} onPress={handleNavigateButton}>
      <Text> + </Text>
    </Container>
  )
}