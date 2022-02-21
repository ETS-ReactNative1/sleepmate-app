import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'

const SolidButton = (props) => {
  const { onPress, title } = props
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default SolidButton

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#90acc8',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#f7f7f7',
  },
})