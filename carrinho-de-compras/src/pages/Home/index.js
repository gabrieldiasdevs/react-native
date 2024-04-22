import React from 'react'
import { View, Text } from 'react-native'

import { useNavigation } from '@react-navigation/native'

const navigation = useNavigation()

export default function Home(){
  return(
    <View>
      <Text>INICIO</Text>
    </View>
  )
}