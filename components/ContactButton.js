import React from 'react'
import { Text, Pressable } from 'react-native'
import { contactButtons, styles } from './Styles'
import BorderedPic from './BorderedPic'
import IconButton from './IconButton'

const ContactButton = (props) => {
  const { size, image, name, onPress } = props
  return (
    <Pressable
      style={contactButtons.button}
      onPress={onPress}
    >
      <BorderedPic
        image={image}
        size={size}
        onPress={onPress}
      />
      <Text style={contactButtons.name}>{name}</Text>
      <IconButton
        iconName='chevron-forward-outline'
        onPress={onPress}
      />
    </Pressable>
  )
}

export default ContactButton