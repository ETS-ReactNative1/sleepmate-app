import React from 'react'
import { Text, Pressable } from 'react-native'
import { styles, editButton } from './Styles'

const EditButton = (props) => {
  const { name, onPress } = props
  return (
    <Pressable
      style={editButton.button}
      onPress={onPress}
    >
      <Text style={[styles.subtitle, {marginTop: 0}]}>{name}</Text>
    </Pressable>
  )
}

export default EditButton