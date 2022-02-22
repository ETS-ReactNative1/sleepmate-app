import React from 'react'
import { View } from 'react-native'
import { styles } from '../components/Styles'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header pageName='PROFILE' previousPage='Home' />
      <View style={styles.bottom}>
        <Navbar />
      </View>
    </View>
  )
}

export default Profile