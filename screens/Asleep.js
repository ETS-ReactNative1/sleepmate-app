import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../components/Styles'
import SolidButton from '../components/SolidButton'
import { LinearGradient } from 'expo-linear-gradient'

const Asleep = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate('Awake')
  }, 5000)
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.time}>7:59 AM</Text>
        <Text style={styles.date}>Friday, February 11</Text>
        <SolidButton
          style={styles.button}
          title='Wake Up'
        />
      </View>
    </LinearGradient>
  )
}

export default Asleep