import React from 'react'
import { Pressable, Text } from 'react-native'
import { displayButtons, styles } from './Styles'

const DisplayButton = (props) => {
  const { name, onPress } = props
  return (
    <Pressable style={displayButtons.button} onPress={onPress}>
      <Text style={styles.chartHeading}>{name}</Text>
    </Pressable>
  )
}

export default DisplayButton