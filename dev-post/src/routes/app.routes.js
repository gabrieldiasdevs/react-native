import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import StackRoutes from './stack.routes'
import Search from '../pages/Search'
import Profile from '../pages/Profile'
import CustomTab from '../components/CustomTab'

const Tab = createBottomTabNavigator()

export default function AppRoutes(){
  return(
    <Tab.Navigator
      tabBar={CustomTab}
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name='Home'
        component={StackRoutes}
      />

      <Tab.Screen
        name='Pesquisa'
        component={Search}
      />

      <Tab.Screen
        name='Perfil'
        component={Profile}
      />
    </Tab.Navigator>
  )
}