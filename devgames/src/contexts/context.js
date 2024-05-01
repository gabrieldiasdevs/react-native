import React, { createContext, useState, useEffect } from 'react'
import api from '../services/api'

export const AppContext = createContext({})

export default function AppProvider({ children }){
  const [categorys, setCategorys] = useState([])
  const [loading, setLoading] = useState(true)
  const [games, setGames] = useState([])

  useEffect(() => {

    async function getGeneres(){
      setLoading(true)

      try{
        const response = await api.get('/genres?key=b3b4091a91e64e7594837149f6e03037')
        const categorysResults = response.data.results

        const categoryNames = categorysResults.map(category => category.name)
        setCategorys(categoryNames)
        
      }catch(error){
        console.log(error)
      }
    }

    getGeneres()

    async function getGames(){

      try{
        const response = await api.get('/games?page_size=5&key=b3b4091a91e64e7594837149f6e03037')

        const gamesResults = response.data.results

        const infoGames = gamesResults.map((link) => {
          return {
            nome: link.name,
            background: link.background_image,
            rate: link.rating,
          }
        })

        setGames(infoGames)
        setLoading(false)

      }catch(error){
        console.log(error)
      }
    }  

    getGames()
    
  }, [])

  return(
    <AppContext.Provider value={{
      categorys,
      loading,
      games
    }}>
      { children }
    </AppContext.Provider>
  )
}