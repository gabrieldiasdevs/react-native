import React, { useContext } from 'react'
import { View, ActivityIndicator } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import CategorysList from '../../components/CategorysList/index'
import GamesList from '../../components/GamesList/index'
import { AppContext } from '../../contexts/context'

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

export default function Home(){
  const {categorys, loading, games, gameLoading, getMoreGames} = useContext(AppContext)
  const navigation = useNavigation()

  return (

    loading ? (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#050B18' }}>
        <ActivityIndicator size={50} color='#FFF' />
      </View>
    ) : (
      <Container>
        <Header>
          <Title>
            Dev<TitleRed>Games</TitleRed>
          </Title>
          <Favorites onPress={() => navigation.navigate('Favorites')}>
            <Ionicons name='bookmark-outline' size={25} color='#FFF' />
          </Favorites>
        </Header>
  
        <InputArea>
          <Input
            placeholderTextColor='#FFF'
            placeholder='Procurando um jogo?'
          />
          <AreaSearch onPress={() => navigation.navigate('Search')}>
            <Ionicons name='search' size={30} color='#FF455F' />
          </AreaSearch>
        </InputArea>
  
        <Categorys
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={categorys}
          renderItem={({ item }) => <CategorysList data={item} />}
        />
  
        {gameLoading ? (
          <View style={{ backgroundColor: '#050B18', flex: 4 }}>
            <ActivityIndicator size={30} color='#FFF' />
          </View>
        ) : (
          <>
            <TopGamesText>Trending Games</TopGamesText>
            <TopGames
              data={games}
              renderItem={({ item }) => <GamesList data={item}/>}
            />
          </>
        )}
      </Container>
    )

  )
}