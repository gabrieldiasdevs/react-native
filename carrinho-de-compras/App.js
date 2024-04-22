import React from 'react'

import Home from './src/pages/Home'
import Cart from './src/pages/Cart'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Início'
          component={Home}
        />

        <Stack.Screen
          name='Carrinho'
          component={Cart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}