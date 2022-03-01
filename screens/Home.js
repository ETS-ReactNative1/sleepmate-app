import React from 'react'
import { Text } from 'react-native'
import { styles } from '../components/Styles'
import SolidButton from '../components/SolidButton'
import { LinearGradient } from 'expo-linear-gradient'
import FillButton from '../components/FillButton'

const Home = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Text style={styles.title}>Welcome to Sleepmate</Text>
      <FillButton
        buttonText='Sleep'
        onFilled={() => navigation.navigate('Awake')}
      />
    </LinearGradient>
  )
}

export default Home