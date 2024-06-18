import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'

type RouteUserParams = {
  user: {
    name: string
  }
}

type UserRouteProps = RouteProp<RouteUserParams, 'user'>

export function User(){
  const route = useRoute<UserRouteProps>()

  return(
    <View style={styles.container}>
      <Text>Página Usuário</Text>
      <Text> {route.params.name} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
})