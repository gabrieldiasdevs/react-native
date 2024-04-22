import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/Home'
import Cart from '../pages/Cart'

const Stack = createStackNavigator();

export default function Routes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerTitle: 'Meu Carrinho'
        }}
      />
    </Stack.Navigator>
  )
}