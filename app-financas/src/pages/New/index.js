import React, { useState } from 'react'
import { Background, Input, SubmitButton, SubmitText } from './styles'
import Header from '../../components/Header'
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native'

export default function New(){
  const [labelInput, setLabelInput] = useState('')
  const [valueInput, setValueInput] = useState('')
  
  return(
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() } >
      <Background>
        <Header title='Registrando' />
        <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }} >
          <Input
            placeholder='Descrição desse registro'
          />

          <Input
            placeholder='Valor desejado'
            keyboardType='numeric'
          />

          <SubmitButton>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  )
}