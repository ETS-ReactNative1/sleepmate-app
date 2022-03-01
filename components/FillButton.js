import React from 'react'
import { View, Text } from 'react-native'
import { fillButtons } from './Styles'
import FillUpButton from 'react-native-fill-up-button'

const FillButton = (props) => {
  const { buttonText, onFilled } = props
  return (
    <View>
      <FillUpButton
        increment={0.01}
        buttonBackgroundColor={'#90acc8'}
        fillupColor={'#5d86af'}
        height={60}
        width={180}
        buttonText={buttonText}
        incrementSpeed={3}
        buttonTextStyle={{ fontSize: 20, color: '#f7f7f7', fontWeight: '600' }}
        activeOpacity={0.75}
        onFilled={onFilled}
      />
    </View>
  )
}

export default FillButton