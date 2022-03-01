import React from 'react'
import { Text } from 'react-native'
import { styles } from '../components/Styles'
import FillButton from '../components/FillButton'
import { LinearGradient } from 'expo-linear-gradient'

const Awake = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Text style={styles.time}>8:00 AM</Text>
      <Text style={styles.date}>Tuesday, February 22</Text>
      <FillButton
        buttonText='Wake Up'
        onFilled={() => navigation.navigate('Home')}
      />
    </LinearGradient>
  )
}

export default Awake