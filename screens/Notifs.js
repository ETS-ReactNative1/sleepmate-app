import React from 'react'
import { View } from 'react-native'
import { styles } from '../components/Styles'
import Header from '../components/Header'

const Notifs = () => {
  return (
    <View style={styles.container}>
      <Header pageName='NOTIFICATIONS' previousPage='Home' />
    </View>
  )
}

export default Notifs