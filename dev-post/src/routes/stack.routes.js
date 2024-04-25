import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'
import Messages from '../pages/Messages'
import NewPost from '../pages/NewPost'

const Stack = createStackNavigator()

export default function StackRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name='Início'
        component={Home}
      />

      <Stack.Screen
        name='Mensagens'
        component={Messages}
      />

      <Stack.Screen
        name='Novo Post'
        component={NewPost}
      />
    </Stack.Navigator>
  )
}