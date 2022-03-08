import React from 'react'
import { Image, ImageBackground, Pressable } from 'react-native'
import { borderedPics } from './Styles'

const BorderedPic = (props) => {
  const { size, image, sleeping_opacity=0, onPress } = props
  return (
    <Pressable style={{ flex: 1, overflow: 'hidden', width: size, height: size }} onPress={onPress}>
      <ImageBackground
        style={[borderedPics.image, { flex: 1 }]}
        source={image}
        onPress={onPress}
        width={size}
        height={size}
      >
        <Image
          style={{ width: parseInt(size / 5.0), height: parseInt(size / 5.0)}}
          opacity={sleeping_opacity}
          source={require('../images/sleep.png')}
        ></Image>
      </ImageBackground>
    </Pressable>
  )
}

export default BorderedPic