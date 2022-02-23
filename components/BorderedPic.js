import React from 'react'
import { Image, Pressable } from 'react-native'
import { borderedPics } from './Styles'

const BorderedPic = (props) => {
  const { image, onPress } = props
  return (
    <Pressable>
      <Image
        style={borderedPics.image}
        source={image}
        onPress={onPress}
      />
    </Pressable>
  )
}

export default BorderedPic