import React from 'react'
import { styles } from '../components/Styles'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'

const Stats = () => {
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Header
        pageName='THURS FEB 10-11'
        leftIcon='chevron-back-outline'
        rightIcon='chevron-forward-outline'
      />
    </LinearGradient>
  )
}

export default Stats