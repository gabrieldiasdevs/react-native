import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import api from './services/api'

interface GameProp{
  title: string,
  image_url: string
}

export function Game(){
  const [game, setGame] = useState<GameProp | null>(null)

  useEffect(() => {

    async function fetchGame(){
      const response = await api.get('/next-api/?api=game&id=15')

      setGame({
        title: response.data.title,
        image_url: response.data.image_url
      })
    }

    fetchGame()

  }, [])

  return(
    <View style={styles.container}>
      {game && (
        <>
          <Image
            source={{ uri: game.image_url }}
            style={{ width: 70, height: 70, borderRadius: 99 }}
          />
          <Text>{game.title}</Text>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop: 24,
    gap: 8,
    alignItems: 'center',
  }
})