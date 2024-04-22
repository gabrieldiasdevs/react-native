import React from 'react'
import { View, FlatList, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Products from '../../components/Products'

export default function Home(){
  const navigation = useNavigation()

  const produtos = [
    {
      id: '1',
      name: 'Coca cola',
      price: 19.90
    },
    {
      id: '2',
      name: 'Chocolate',
      price: 6.50
    },
    {
      id: '3',
      name: 'Queijo 500g',
      price: 15.00
    },
    {
      id: '4',
      name: 'Batata frita',
      price: 23.90
    },
    {
      id: '5',
      name: 'Guarana lata',
      price: 6.00
    }
  ]

  return(
    <View>
      <FlatList
        data={produtos}
        renderItem={ ({item}) => <Products data={item} /> }
        keyExtractor={ (item) => item.id }
      />
    </View>
  )
}