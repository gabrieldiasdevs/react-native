import React from 'react'
import { 
  Container, 
  ButtonFilterText,
  ModalContent,
  ButtonFilter
} from './styles'
import { TouchableWithoutFeedback, View } from 'react-native'

export default function CalendarModal({ setVisible }){
  return(
    <Container>
      <TouchableWithoutFeedback onPress={setVisible} >
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <ModalContent>
        <ButtonFilter>
          <ButtonFilterText>Filtrar</ButtonFilterText>
        </ButtonFilter>
      </ModalContent>
    </Container>
  )
}