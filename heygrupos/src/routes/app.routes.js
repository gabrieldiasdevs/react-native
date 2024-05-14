import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from '../pages/SignIn'
import ChatRoom from '../pages/ChatRoom'
import Messages from '../pages/Messages'

const Stack = createNativeStackNavigator()

export default function AppRoutes(){
  return(
    <Stack.Navigator initialRouteName='ChatRoom'>
      <Stack.Screen
        name='SignIn'
        component={SignIn}
        options={{
          title: 'Faça o login'
        }}
      />

      <Stack.Screen
        name='ChatRoom'
        component={ChatRoom}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name='Messages'
        component={Messages}
        options={ ({ route }) => ({
          title: route.params.thread.name
        })}
      />
    </Stack.Navigator>
  )
}