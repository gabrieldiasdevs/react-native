import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import AppProvider from './src/contexts/context'

export default function App(){
  return(
    <NavigationContainer>
      <AppProvider>
        <StatusBar barStyle='light-content' backgroundColor='#050B18' translucent={false} />
        <Routes/>
      </AppProvider>
    </NavigationContainer>
  )
}