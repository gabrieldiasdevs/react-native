import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import { decrease } from '../../src/utils/math'

type RouteUserParams = {
  user: {
    name: string
  }
}

type UserRouteProps = RouteProp<RouteUserParams, 'user'>

export function User(){
  const route = useRoute<UserRouteProps>()

  function handleCalculate(n1: number, n2: number){
    const soma = n1 + n2
    console.log(soma)
    return soma
  }

  return(
    <View style={styles.container}>
      <Text>Página Usuário</Text>
      <Text> {route.params.name} </Text>

      <Button
        title='Calcular'
        onPress={ () => handleCalculate(10, 20) }
      />

      <Button
        title='Diminuir'
        onPress={ () => decrease(50, 20) }
      />
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