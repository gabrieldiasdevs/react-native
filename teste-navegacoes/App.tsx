import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from './src/home'
import { Profile } from './src/profile'
import { User } from './src/user'
import { Contato } from './src/contato'

export type StackParamList = {
  Home: undefined
  Profile: undefined
  User: {
    name: string
  }
  Contato: {
    telefone: string
  }
}

const Stack = createNativeStackNavigator<StackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='Home'
          component={Home}
        />

        <Stack.Screen
          name='Profile'
          component={Profile}
        />

        <Stack.Screen
          name='User'
          component={User}
        />

        <Stack.Screen
          name='Contato'
          component={Contato}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
