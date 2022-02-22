import React, { useState } from 'react'
import { StyleSheet, Text, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const NavButton = (props) => {
  const { screenName, title, image } = props
  const navigation = useNavigation()
  return (
    <Pressable style={styles.button} onPress={() => navigation.navigate(screenName)}>
      <ion-icon name="add-circle-outline"></ion-icon>
      <Text style={styles.text}>{title}</Text>
    </Pressable >
  )
}

export default NavButton

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 10,
    letterSpacing: 0.25,
    fontWeight: 600,
    color: '#f7f7f7',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 5
  }
})