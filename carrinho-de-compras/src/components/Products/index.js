import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Feather from '@expo/vector-icons/Feather'

export default function Products({ data }){
  return(
    <View>
      <Text>{data.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{

  }
})