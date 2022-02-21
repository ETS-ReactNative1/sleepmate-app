import React from 'react'
import { StyleSheet, Text, Image, Pressable } from 'react-native'

const NavButton = (props) => {
  const { onPress, title, image } = props
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Image style={styles.image} source={image} />
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
    fontSize: 12,
    letterSpacing: 0.25,
    color: '#f7f7f7',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 5
  }
})