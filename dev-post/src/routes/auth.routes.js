import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const Stack = createStackNavigator()

export default function AuthRoutes(){
  return(
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
        name='Login'
        component={SignIn}
      />

      <Stack.Screen
        name='Cadastro'
        component={SignUp}
      />
    </Stack.Navigator>
  )
}