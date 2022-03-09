import React from 'react'
import { View, Text, Image } from 'react-native'
import { chatBubbles, styles } from './Styles'
import { Ionicons } from '@expo/vector-icons'

const ChatBubbleResponse = (props) => {
  const { text } = props
  return (
    <View style={chatBubbles.responseContainer}>
      <Ionicons name='return-down-forward-sharp' size={28} color="rgba(172, 200, 144, 0.3)" />
      <View style={chatBubbles.responseBubble}>
        <Text style={chatBubbles.text}>{text}</Text>
      </View>
    </View>
  )
}

export default ChatBubbleResponse