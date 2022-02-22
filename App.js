import React from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home'
import Awake from './screens/Awake'
import Roomies from './screens/Roomies'
import Stats from './screens/Stats'
import Notifs from './screens/Notifs'
import Profile from './screens/Profile'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='Awake'
          component={Awake}
        />
        <Stack.Screen
          name='Roomies'
          component={Roomies}
        />
        <Stack.Screen
          name='Stats'
          component={Stats}
        />
        <Stack.Screen
          name='Notifs'
          component={Notifs}
        />
        <Stack.Screen
          name='Profile'
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}