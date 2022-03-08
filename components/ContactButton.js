import React from 'react'
import { Text, Pressable } from 'react-native'
import { contactButtons, styles } from './Styles'
import BorderedPic from './BorderedPic'
import IconButton from './IconButton'

const ContactButton = (props) => {
  const { size, image, width='90%', name, sleeping_opacity = 0, onPress } = props
  return (
    <Pressable style={[contactButtons.button, { width: width }]} onPress={onPress}>
      <BorderedPic
        image={image}
        size={size}
        onPress={onPress}
        sleeping_opacity={sleeping_opacity}
      />
      <Text style={contactButtons.name}>{name}</Text>
      <IconButton
        style={{ flex: 1 }}
        iconName='chevron-forward-outline'
        onPress={onPress}
      />
    </Pressable>
  )
}

export default ContactButton