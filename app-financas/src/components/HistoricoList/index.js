import React from 'react'
import { 
  Container, 
  Tipo, 
  IconView, 
  TipoText, 
  ValorText } 
from './styles'
import Icon from 'react-native-vector-icons/Feather'

export default function HistoricoList({ data }){
 return (
   <Container>

    <Tipo>
      <IconView tipo={data.type} >
        <Icon 
          name={ data.type === 'receita' ? 'arrow-up' : 'arrow-down' } 
          size={20} 
          color='#FFF' 
        />
        <TipoText>{data.type}</TipoText>
      </IconView>
    </Tipo>

    <ValorText>
      R$ {data.value}
    </ValorText>

   </Container>
  )
}