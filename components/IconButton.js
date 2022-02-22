import React from 'react'
import { Image, Pressable } from 'react-native'
import { iconButtons } from './Styles'

const IconButton = (props) => {
  const { image, onPress } = props
  return (
    <Pressable style={iconButtons.button} onPress={onPress}>
      <Image style={iconButtons.image} source={image} />
    </Pressable>
  )
}

export default IconButton