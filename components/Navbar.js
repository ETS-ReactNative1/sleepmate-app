import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { styles } from '../components/Styles'
import NavButton from './NavButton'

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.navContainer}>
      <NavButton
        screenName='Roomies'
        title='ROOMIES'
        image={require('../icons/users-three-light.png')}
      />
      <NavButton
        screenName='Stats'
        title='STATS'
        image={require('../icons/chart-line-up-light.png')}
      />
      <NavButton
        screenName='Home'
        title='SLEEP'
        image={require('../icons/moon-stars-light.png')}
      />
      <NavButton
        screenName='Notifs'
        title='NOTIFS'
        image={require('../icons/bell-light.png')}
      />
      <NavButton
        screenName='Profile'
        title='PROFILE'
        image={require('../icons/user-circle-light.png')}
      />
    </View>
  )
}

export default Navbar