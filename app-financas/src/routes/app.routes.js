import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../pages/Home'
import New from '../pages/New'

const AppDrawer = createDrawerNavigator()

export default function AppRoutes(){
  return(
		<AppDrawer.Navigator
      screenOptions={{
        headerShown: false,

        drawerStyle:{
          backgroundColor: '#FFF',
          paddingTop: 20
        },

        drawerActiveBackgroundColor: '#3B3DBF',
        drawerActiveTintColor: '#FFF',
        drawerInactiveBackgroundColor: '#F0F2FF',
        drawerInactiveTintColor: '#121212'

      }}
		>
			<AppDrawer.Screen
				name='Home'
				component={Home}
			/>

      <AppDrawer.Screen
        name='New'
        component={New}
      />
		</AppDrawer.Navigator>
  )
}