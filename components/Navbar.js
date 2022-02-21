import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import NavButton from './NavButton'

const Navbar = () => {
  return (
    <View style={styles.container}>
      <NavButton title='Roomies' image={require('../icons/users-three.png')} />
      <NavButton title='Stats' image={require('../icons/chart-line-up.png')} />
      <NavButton title='Sleep' image={require('../icons/moon-stars.png')} />
      <NavButton title='Notifs' image={require('../icons/bell.png')} />
      <NavButton title='Profile' image={require('../icons/user-circle.png')} />
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})