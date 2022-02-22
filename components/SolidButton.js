import React from 'react'
import { Text, Pressable } from 'react-native'
import { solidButtons } from './Styles'

const SolidButton = (props) => {
  const { onPress, title } = props
  return (
    <Pressable style={solidButtons.button} onPress={onPress}>
      <Text style={solidButtons.text}>{title}</Text>
    </Pressable>
  )
}

export default SolidButton