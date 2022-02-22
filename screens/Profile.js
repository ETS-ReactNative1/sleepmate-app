import React from 'react'
import { View } from 'react-native'
import { styles } from '../components/Styles'
import Header from '../components/Header'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header pageName='PROFILE' previousPage='Home' />
    </View>
  )
}

export default Profile