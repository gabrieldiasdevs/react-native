import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from './src/pages/Home'
import Cart from './src/pages/Cart'

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