import React from 'react'
import { Pressable } from 'react-native'
import { iconButtons } from './Styles'
import { Ionicons } from '@expo/vector-icons'

const IconButton = (props) => {
  const { iconName, onPress } = props
  return (
    <Pressable style={iconButtons.button} onPress={onPress}>
      <Ionicons name={iconName} size={36} color="#f7f7f7" />
    </Pressable>
  )
}

export default IconButton