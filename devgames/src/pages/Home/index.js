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
  CategorysArea,
  Categorys
} from './styles'

export default function Home(){
  const navigation = useNavigation()

  const [categorys, setCategorys] = useState([])

  const categorysApi = async () => {
    const response = await api.get('/genres?key=b3b4091a91e64e7594837149f6e03037')
    .then((response) => {
      setCategorys(response)
    })
    .catch((error) => {
      console.error(error)
    })
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

      <InputArea>
        <Input
          placeholderTextColor='#FFF'
          placeholder='Procurando um jogo?'
        />
        <AreaSearch onPress={ () => navigation.navigate('Search') }>
          <Ionicons name='search' size={30} color='#FF455F'/>
        </AreaSearch>
      </InputArea>

      <CategorysArea>
        <Categorys
          data={categorys}
          renderItem={ ({ item }) => <CategorysList data={item}/> }
        />
      </CategorysArea>

    </Container>
  )
}