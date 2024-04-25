import React from 'react'
import styled from 'styled-components'
import Feather from '@expo/vector-icons/Feather'

const AreaTab = styled.SafeAreaView`
  width: 100%;
  height: 50px;
  background-color: #222227;
  flex-direction: row;
  align-items: center;
`

const AreaIcon = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
`

export default function CustomTab(){
  return(
    <AreaTab>
      <AreaIcon>
        <Feather name='home' size={20} color='#FFF'/>
      </AreaIcon>
      <AreaIcon>
        <Feather name='search' size={20} color='#FFF'/>
      </AreaIcon>
      <AreaIcon>
        <Feather name='user' size={20} color='#FFF'/>
      </AreaIcon>
    </AreaTab>
  )
}