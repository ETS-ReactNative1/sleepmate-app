import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import { styles } from '../components/Styles'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'

const StatsPrev = () => {
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Header
        pageName='WED FEB 9-10'
        leftIcon='chevron-back-outline'
        rightIcon='chevron-forward-outline'
        leftPage='StatsPrevPrev'
        rightPage='Stats'
      />
    </LinearGradient>
  )
}

export default StatsPrev