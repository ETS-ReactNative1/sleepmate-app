import React from 'react'
import { Text, View, Animated } from 'react-native'
import { styles } from '../components/Styles'
import SolidButton from '../components/SolidButton'
import { LinearGradient } from 'expo-linear-gradient'

const Home = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Text style={styles.title}>Welcome to Sleepmate</Text>
      <SolidButton
        style={styles.button}
        title='Sleep'
        onPress={() => navigation.navigate('Awake')}
      />
    </LinearGradient>
  )
}

export default Home