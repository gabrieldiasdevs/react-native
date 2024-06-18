import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackParamList } from '../../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export function Home(){
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>()

  return(
    <View style={styles.container}>
      <Text>Página Home</Text>
      <Button
        title='Perfil'
        onPress={ () => navigation.navigate('Profile') }
      />
      
      <Button
        title='User'
        onPress={ () => navigation.navigate('User', { name: 'Gabriel Dias' }) }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
})