import React from 'react'
import { styles } from '../components/Styles'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'

const Notifs = () => {
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Header pageName='NOTIFICATIONS' previousPage='Home' />
    </LinearGradient>
  )
}

export default Notifs