import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import { styles } from '../components/Styles'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'

const StatsPrevPrev = () => {
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Header
        pageName='TUES FEB 8-9'
        rightIcon='chevron-forward-outline'
        rightPage='StatsPrev'
      />
    </LinearGradient>
  )
}

export default StatsPrevPrev