import { createStackNavigator } from '@react-navigation/stack'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

const Stack = createStackNavigator()

export default function Routes(){

  const navigation = useNavigation()

  function handleNavigate(){
      navigation.navigate('Carrinho')
    }

  return(
    <Stack.Navigator>
      <Stack.Screen
        name='Início'
        component={Home}
        options={{
          title: 'Lista produtos',
          headerRight: () => (
            <TouchableOpacity 
              style={styles.container} 
              onPress={handleNavigate}
            >
              <Text style={styles.text}> 0 </Text>
              <Feather name='shopping-cart' size={25} color='#000' />
            </TouchableOpacity>
          )
        }}
      />

      <Stack.Screen
        name='Carrinho'
        component={Cart}
      />
    </Stack.Navigator>
  )
}


const styles = StyleSheet.create({
    container:{
      flexDirection: 'row',
      marginRight: 15,
    },
    text:{
      marginRight: -15,
      marginTop: 10,
      backgroundColor: '#FF0000',
      width: 20,
      height: 20,
      borderRadius: 10,
      textAlign: 'center',
      zIndex: 1,
      color: '#FFF'
    },
  })