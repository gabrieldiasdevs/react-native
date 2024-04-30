import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import CategorysList from '../../components/CategorysList'
import api from '../../services/api'

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
  TopGames
} from './styles'


import { Button } from 'react-native'


export default function Home(){
  const navigation = useNavigation()

  const [teste, setTeste] = useState([])

  const categorys = ([
    {
      category: 'All games'
    },
    {
      category: 'Arcade'
    },
    {
      category: 'Action'
    },
    {
      category: 'Sports'
    },
    {
      category: 'Competitive'
    },
  ])

  async function buscarGeneros(){
    try{
      const response = await api.get('/genres?key=b3b4091a91e64e7594837149f6e03037')
      setTeste(response.data.results.name)
      console.log(response.data.results.name)
    }catch(error){
      console.log(error)
    }
  }

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

      <Button title='buscar genres' onPress={buscarGeneros} />

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
        data={teste}
        renderItem={ ({ item }) => <CategorysList data={item}/> }
      />
      
      <TopGames>Trending Games</TopGames>

    </Container>
  )
}