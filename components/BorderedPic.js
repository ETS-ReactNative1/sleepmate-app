import React from 'react'
import { Image, Pressable } from 'react-native'
import { borderedPics } from './Styles'

const BorderedPic = (props) => {
  const { size, image, onPress } = props
  return (
    <Pressable style={{ flex: 1, overflow: 'hidden' }} onPress={onPress}>
      <Image
        style={borderedPics.image}
        source={image}
        onPress={onPress}
        width={size}
        height={size}
      />
    </Pressable>
  )
}

export default BorderedPic