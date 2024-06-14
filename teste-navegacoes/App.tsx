import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from './src/Home'
import { Profile } from './src/Profile' 

export type StackParamList = {
  Home: undefined
  Profile: undefined
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
