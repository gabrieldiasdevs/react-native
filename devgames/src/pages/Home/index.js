import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import CategorysList from '../../components/CategorysList'
import api from '../../services/api'
import TopGamesList from '../../components/TopGamesList'

import { 
  Container,
  Header,
  Title,
  TitleRed,
  Favorites,
  InputArea,
  Input,
  AreaSearch,
  Categorys,
  TopGamesText,
  TopGames
} from './styles'


import { Button } from 'react-native'


export default function Home(){
  const navigation = useNavigation()

  const [categorys, setCategorys] = useState([])
  const [games, setGames] = useState([
    {
    game: 'Red Dead Redeption 2'
    },
    {
    game: 'The Witcher 3'
    },
    {
    game: 'Portal 2'
    },
    {
    game: 'GTA V'
    },
  ])

  const getGeneres = async () => {
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

  return(
    <Container>

      <Header>
        <Title>
          Dev<TitleRed>Games</TitleRed>
        </Title>
        <Favorites onPress={ () => navigation.navigate('Favorites') }>
          <Ionicons name='bookmark-outline' size={25} color='#FFF'/>
        </Favorites>
      </Header>

      <InputArea>
        <Input
          placeholderTextColor='#FFF'
          placeholder='Procurando um jogo?'
        />
        <AreaSearch onPress={ () => navigation.navigate('Search') }>
          <Ionicons name='search' size={30} color='#FF455F'/>
        </AreaSearch>
      </InputArea>

      <Categorys
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categorys}
        renderItem={ ({ item }) => <CategorysList data={item}/> }
      />
      
      <TopGamesText>Trending Games</TopGamesText>

      <TopGames
        data={games}
        renderItem={ ({ item }) => <TopGamesList data={item}/> }
      />

    </Container>
  )
}