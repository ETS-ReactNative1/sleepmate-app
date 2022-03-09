import React from 'react'
import { View, Text, Image } from 'react-native'
import { chatBubbles, styles } from './Styles'
import BorderedPic from './BorderedPic'
import IconButton from './IconButton'

const ChatBubbleOther = (props) => {
  const { name, image, text } = props
  return (
    <View style={chatBubbles.container}>
      <Text style={chatBubbles.name}>{name}</Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <BorderedPic
          size={50}
          image={image}
        />
        <View style={chatBubbles.bubble}>
          <Text style={chatBubbles.text}>{text}</Text>
        </View>
      </View>
    </View >
  )
}

export default ChatBubbleOther