import React from 'react'
import styled from 'styled-components'

const AreaHeader = styled.SafeAreaView`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #353840;
`

const AreaHeaderIos = styled.SafeAreaView`
  width: 100%;
  height: 110px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #353840;
`

const HeaderText = styled.Text`
  font-size: 30px;
  font-style: italic;
  color: #FFF;
  font-weight: bold;
`
const HeaderTextRed = styled.Text`
  font-size: 30px;
  font-style: italic;
  color: #e52246;
  font-weight: bold;
`

export function CustomHeader(){
  return(
    <AreaHeader>
      <HeaderText>Dev</HeaderText>
      <HeaderTextRed>Post</HeaderTextRed>
    </AreaHeader>
  )
}

export function CustomHeaderIos(){
  return(
    <AreaHeaderIos>
      <HeaderText>Dev</HeaderText>
      <HeaderTextRed>Post</HeaderTextRed>
    </AreaHeaderIos>
  )
}