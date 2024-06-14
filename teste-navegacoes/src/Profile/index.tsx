import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { StackParamList } from '../../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

export function Profile(){
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>()

  return(
    <View style={styles.container}>
      <Text>Página Profile</Text>
      <Button
        title='Voltar'
        onPress={ () => navigation.goBack() }
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