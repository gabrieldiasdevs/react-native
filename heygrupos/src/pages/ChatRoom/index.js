import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import auth from '@react-native-firebase/auth'

export default function ChatRoom(){
  const navigation = useNavigation()

  return(
    <View>
      <Text>ChatRoom</Text>
      <Button title='Login' onPress={ () => navigation.navigate('SignIn') } />
    </View>
  )
}