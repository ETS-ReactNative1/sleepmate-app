import React from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Home from './screens/Home'
import Roomies from './screens/Roomies'
import Stats from './screens/Stats'
import Notifs from './screens/Notifs'
import Profile from './screens/Profile'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarStyle: {
            height: 72,
            backgroundColor: '#003366',
            borderTopWidth: 0,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'Home') {
              iconName = focused
                ? 'moon'
                : 'moon-outline'
            } else if (route.name === 'Roomies') {
              iconName = focused ? 'people' : 'people-outline'
            } else if (route.name === 'Stats') {
              iconName = focused ? 'bar-chart' : 'bar-chart-outline'
            } else if (route.name === 'Notifs') {
              iconName = focused ? 'notifications' : 'notifications-outline'
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline'
            }
            return <Ionicons name={iconName} size={36} color={color} />
          },
          tabBarActiveTintColor: '#90acc8',
          tabBarInactiveTintColor: '#f7f7f7',
          tabBarLabelStyle: {
            fontWeight: 600,
            fontSize: 12,
            marginBottom: 18
          }
        })}
      >
        <Tab.Screen
          name="Roomies"
          component={Roomies}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Stats"
          component={Stats}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Notifs"
          component={Notifs}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}