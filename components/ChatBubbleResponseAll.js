import React from 'react'
import { View, Text, Image } from 'react-native'
import { chatBubbles, styles } from './Styles'
import { Ionicons } from '@expo/vector-icons'

const ChatBubbleResponseAll = (props) => {
  const { text } = props
  return (
    <View style={chatBubbles.responseContainer}>
      <View style={chatBubbles.responseBubble}>
        <Text style={chatBubbles.text}>{text}</Text>
      </View>
    </View>
  )
}

export default ChatBubbleResponseAll