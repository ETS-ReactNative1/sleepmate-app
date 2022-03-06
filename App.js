import React from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Home from './screens/Home'
import Roomies from './screens/Roomies'
import Stats from './screens/Stats'
import StatsPrev from './screens/StatsPrev'
import StatsPrevPrev from './screens/StatsPrevPrev'
import CalendarModal from './screens/CalendarModal'
import Notifs from './screens/Notifs'
import Profile from './screens/Profile'
import ProfileEdit from './screens/ProfileEdit'
import Awake from './screens/Awake'
import Asleep from './screens/Asleep'
import RoomieInfo from './screens/RoomieInfo'
import * as SQLite from 'expo-sqlite'

const RoomiesStack = createStackNavigator()

const ProfilesDB = SQLite.openDatabase('Profiles.db')
function RoomiesStackScreen() {
  return (
    <RoomiesStack.Navigator>
      <RoomiesStack.Screen name='Roomies' component={Roomies} options={{ headerShown: false }} />
      <RoomiesStack.Screen name='RoomieInfo' component={RoomieInfo} options={{ headerShown: false }} />
    </RoomiesStack.Navigator>
  )
}

const StatsStack = createStackNavigator()

function StatsStackScreen() {
  return (
    <StatsStack.Navigator
      initialRouteName='Stats'>
      <StatsStack.Group>
        <StatsStack.Screen name='StatsPrevPrev' component={StatsPrevPrev} options={{ headerShown: false }} />
        <StatsStack.Screen name='StatsPrev' component={StatsPrev} options={{ headerShown: false }} />
        <StatsStack.Screen name='Stats' component={Stats} options={{ headerShown: false }} />
      </StatsStack.Group>
      <StatsStack.Group screenOptions={{ presentation: 'modal' }}>
        <StatsStack.Screen name='CalendarModal' component={CalendarModal} options={{ headerShown: false }} />
      </StatsStack.Group>
    </StatsStack.Navigator>
  )
}

const HomeStack = createStackNavigator()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <HomeStack.Screen name='Awake' component={Awake} options={{ headerShown: false, animationEnabled: false }} />
      <HomeStack.Screen name='Asleep' component={Asleep} options={{ headerShown: false }} />
    </HomeStack.Navigator>
  )
}

const NotifsStack = createStackNavigator()

function NotifsStackScreen() {
  return (
    <NotifsStack.Navigator>
      <NotifsStack.Screen name='Notifs' component={Notifs} options={{ headerShown: false }} />
    </NotifsStack.Navigator>
  )
}

const ProfileStack = createStackNavigator()

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
      <ProfileStack.Screen name='ProfileEdit' component={ProfileEdit} options={{ headerShown: false }} />
    </ProfileStack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarStyle: {
            height: 110,
            backgroundColor: '#292b2c',
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
            fontSize: 12,
            marginBottom: 18
          }
        })}
      >
        <Tab.Screen
          name="Roomies"
          component={RoomiesStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Stats"
          component={StatsStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Notifs"
          component={NotifsStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}