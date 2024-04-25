import React from 'react'
import styled from 'styled-components/native'

const Input = styled.TextInput`
  font-size: 17px;
  height: 50px;
  background-color: #EEE;
  border-radius: 7px;
  padding-left: 15px;
  margin-bottom: 15px;
`

export default function SignInput({ placeholder }){
  return(
    <Input 
      placeholder={placeholder}
      placeholderTextColor='#908C8C'
    />
  )
}