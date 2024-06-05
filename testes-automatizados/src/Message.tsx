import { useState } from 'react'
import { View, Text, Button } from 'react-native'

export function Message(){
  const [showMessage, setShowMessage] = useState(false)

  return(
    <View>
      <Text>
        {showMessage ? 'Bem vindo Gabriel' : 'Aguardando...'}
      </Text>

      <Button title='Acessar' onPress={ () => setShowMessage(!showMessage) } />
    </View>
  )
}