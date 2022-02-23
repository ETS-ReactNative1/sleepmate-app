import React from 'react'
import { styles } from '../components/Styles'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'

const Profile = () => {
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Header
        pageName='PROFILE'
        leftIcon='chevron-back-circle-outline'
        leftPage='Home'
      />
    </LinearGradient>
  )
}

export default Profile