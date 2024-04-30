import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home'
import Search from '../pages/Search'
import Details from '../pages/Details'
import Favorites from '../pages/Favorites'
import Genres from '../pages/Genres'

const Stack = createNativeStackNavigator()

export default function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
      />
      <Stack.Screen
        name='Search'
        component={Search}
      />
      <Stack.Screen
        name='Details'
        component={Details}
      />
      <Stack.Screen
        name='Favorites'
        component={Favorites}
      />
      <Stack.Screen
        name='Genres'
        component={Genres}
      />
    </Stack.Navigator>
  )
}