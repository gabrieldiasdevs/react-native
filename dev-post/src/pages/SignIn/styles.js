import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #353840;
  align-items: center;
  justify-content: center;
  padding: 30px;
`

export const AreaTitle = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`

export const Title = styled.Text`
  color: #FFF;
  font-size: 50px;
  font-weight: bold;
  font-style: italic;
`

export const TitleRed = styled.Text`
  color: #e52246;
  font-size: 50px;
  font-weight: bold;
  font-style: italic;
`

export const AreaInput = styled.View`
  width: 100%;
`

export const Button = styled.TouchableOpacity`
  background-color: #428CFD;
  align-items: center;
  justify-content: center;
  height: 50px;
  border-radius: 7px;
`

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 22px;
`

export const LinkArea = styled.TouchableOpacity`
  margin-top: 15px;
`

export const LinkText = styled.Text`
  text-align: center;
  color: #CFCBCB;
`