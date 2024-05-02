import React, { useState, useLayoutEffect } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import Header from '../../components/Header/index'
import api from '../../services/api'
import GamesList from '../../components/GamesList/index'

import {
  Container,
  CategoryGames
} from './styles'
import { TopGamesText } from '../Home/styles'

export default function Genres(){
  const navigation = useNavigation()
  const route = useRoute()
  const [idGames, setIdGames] = useState([])
  const [games, setGames] = useState([])

  
  useLayoutEffect(() => {
    
    async function fetchGamesByGenre(){
      try {
        const response = await api.get('/genres?key=b3b4091a91e64e7594837149f6e03037')
        const genresData = response.data.results
      
        const selectedGenre = genresData.find(genre => genre.id === route.params?.id)
        
        if(selectedGenre) {
          const gamesList = selectedGenre.games.map(game => ({
            id: game.id,
          }))
          
          setIdGames(gamesList)
        }    
      } catch(error) {
        console.error('Erro ao buscar jogos por gênero: ', error)
      }
    }
    
    fetchGamesByGenre()

    async function fetchGames() {
      try {
        const response = await api.get('/games?page_size=10&key=b3b4091a91e64e7594837149f6e03037')
        const gamesData = response.data.results
    
        const selectedGames = gamesData.find(game => game.id === idGames.id)
        
        if(selectedGames) {
          const gamesList = selectedGames.map(game => ({
            id: game.id,
            nome: game.name,
            background: game.background_image,
            rate: game.rating
          }))
          
          setGames(gamesList)

        }    
    
      } catch(error) {
        console.error('Erro ao buscar jogos: ', error)
      }
    }
    
    fetchGames()
  
  }, [navigation])

  console.log(games)

  return (
    <Container>
      <Header title={route.params?.title} />
      <CategoryGames
        data={games}
        renderItem={({ item }) => <GamesList data={item} /> }
      />
    </Container>
  )
}