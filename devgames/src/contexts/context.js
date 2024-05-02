import React, { createContext, useState, useEffect } from 'react'
import api from '../services/api'

export const AppContext = createContext({})

export default function AppProvider({ children }){
  const [categorys, setCategorys] = useState([])
  const [loading, setLoading] = useState(true)
  const [gameLoading, setGameLoading] = useState(true)
  const [games, setGames] = useState([])

  useEffect(() => {
    getGeneres()
    getGames()
  }, [])


  async function getGeneres(){
    setLoading(true)

    try{
      const response = await api.get('/genres?key=b3b4091a91e64e7594837149f6e03037')
      const categorysResults = response.data.results

      const infoGenres = categorysResults.map((genre) => {
        return {
          id: genre.id,
          nome: genre.name,
        }
      })

      setCategorys(infoGenres)
      
    }catch(error){
      console.log(error)
    }

    setLoading(false)
    
  }

  async function getGames(){

    try{
      const response = await api.get('/games?page_size=10&key=b3b4091a91e64e7594837149f6e03037')

      const gamesResults = response.data.results

      const infoGames = gamesResults.map((game) => {
        return {
          nome: game.name,
          background: game.background_image,
          rate: game.rating,
        }
      })

      setGames(infoGames)

    }catch(error){
      console.log(error)
    }

    setGameLoading(false)

  }

  // async function getMoreGames(){
  //   try {
  //     const response = await api.get('/games?page_size=5&key=b3b4091a91e64e7594837149f6e03037')

  //     const gamesResults = response.data.results

  //     const infoGames = gamesResults.map((link) => {
  //       return {
  //         nome: link.name,
  //         background: link.background_image,
  //         rate: link.rating,
  //       }
  //     })

  //     setGames(games => [...games, ...infoGames])
  //   } catch (error) {
  //     console.error('Erro ao buscar dados: ', error)
  //   }
  // }

  return(
    <AppContext.Provider value={{
      categorys,
      loading,
      games,
      gameLoading,
    }}>
      { children }
    </AppContext.Provider>
  )
}