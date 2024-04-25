import React from 'react'
import { View, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Feather from '@expo/vector-icons/Feather'
import { Platform } from 'react-native'

import { DotPost } from './styles'
import { CustomHeader, CustomHeaderIos } from '../../components/CustomHeader'

export default function Home(){
  const navigation = useNavigation()

 return (
   <View>
    {Platform.OS === 'ios' ? (
      <CustomHeaderIos/>
    ) : (
      <CustomHeader/>
    )}
    
    <FlatList
    
    />

    <DotPost onPress={ () => navigation.navigate('Novo Post') }>
      <Feather name='edit-2' size={25} color='#FFF' />
    </DotPost>
   </View>
  )
}