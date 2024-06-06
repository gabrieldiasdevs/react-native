import { useState } from 'react'
import { View, Text, Button } from 'react-native'

export function Message(){
  const [showMessage, setShowMessage] = useState(false)

  function handleShowMessage(){
    setTimeout(() => {
      setShowMessage(!showMessage)
    }, 1000)

  }

  return(
    <View>
      <Text testID='message'>
        {showMessage ? 'Bem vindo Gabriel' : 'Aguardando...'}
      </Text>

      <Button title='Acessar' onPress={handleShowMessage} />
    </View>
  )
}