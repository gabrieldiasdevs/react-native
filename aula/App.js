import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Pessoa from './src/Pessoa'

export default function App() {

  const [feed, setFeed] = useState([
    {_id: '1', nome: 'Gabriel', idade: 20, email: 'gabrieldias@gmail.com'},
    {_id: '2', nome: 'Lucas', idade: 25, email: 'lucassilva@gmail.com'},
    {_id: '3', nome: 'Matheus', idade: 32, email: 'matheusalmeida@gmail.com'},
    {_id: '4', nome: 'Henrique', idade: 32, email: 'henrique@gmail.com'},
    {_id: '5', nome: 'Maria', idade: 16, email: 'maria@gmail.com'},
  ])

  return (
    <View style={styles.container}>


        <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => item._id }
        data={feed}
        renderItem={ ({ item }) => <Pessoa data={item} /> }
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});