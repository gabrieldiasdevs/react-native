import React from 'react'
import { View, Text, Image } from 'react-native'

function App() {

  let nome = 'Malu minha princesa'
  let img = 'https://sujeitoprogramador.com/reactlogo.png'

  return(
    <View>
      <Text>Olá Mundo!!!!</Text>
      <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>
        Meu primeiro App
      </Text>
      <Text style={{ fontSize: 30, color: 'green' }}>
        Gabriel Dias
      </Text>

      <Image 
        source={{ uri: img }}
        style={{ width: 300, height: 300 }}
      />

      <Text style={{ fontSize: 40, color: 'red' }}>
        {nome}
      </Text>

    </View>
  )
}

export default App


function Logo() {
  return(
    <Image source={ uri: img } />
  )
}