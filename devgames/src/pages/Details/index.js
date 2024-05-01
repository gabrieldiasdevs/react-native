import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native'

export default function Details(){
  const route = useRoute()
  const [gameSelected, setGameSelected] = useState([])

  useEffect(() => {
    getGameSelected()
  }, [])

  async function getGameSelected(){

    try{
      const response = await api.get('games/counter-strike-global-offensive?key=b3b4091a91e64e7594837149f6e03037')

      const gamesResults = response.data.results

      const infoGames = gamesResults.map((link) => {
        return {
          nome: link.name,
          background: link.background_image,
          rate: link.rating,
        }
      })

      setGames(infoGames)

    }catch(error){
      console.log(error)
    }

  }

  return(
    <View>
      <Text>{route?.params?.nome}</Text>
    </View>
  )
}