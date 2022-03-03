import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import { styles } from '../components/Styles'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'
import { LineChart } from 'react-native-chart-kit'

const Stats = () => {
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Header
        pageName='THU FEB 10-11'
        leftIcon='chevron-back-outline'
        leftPage='StatsPrev'
      />
      <Text style={styles.subtitle}>Sleep Quality</Text>
      <Text style={styles.subtitle}>Ambient Noise Level</Text>
    </LinearGradient>
  )
}

export default Stats