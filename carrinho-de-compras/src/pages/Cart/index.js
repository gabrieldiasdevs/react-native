import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { CartContext } from '../../contexts/CartContext'
import CardItem from '../../components/CardItem'

export default function Cart(){
  const { cart, addItemCart, removeItemCart } = useContext(CartContext)

  return(
    <View style={stlyes.container}>
      <FlatList
        data={cart}
        keyExtractor={ (item) => String(item.id) }
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ () => <Text>Nenhum item no carrinho...</Text> }
        renderItem={ ({ item }) => (
          <CardItem data={item} 
            addAmount={ () => 
            addItemCart(item) }
            removeAmount={ () => removeItemCart(item) }
          />
        )}
      />
    </View>
  )
}

const stlyes = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#FAFAFA',
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  }
})