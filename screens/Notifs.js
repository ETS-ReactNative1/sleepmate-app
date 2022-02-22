import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../components/Styles'
import Navbar from '../components/Navbar'

const Notifs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifs</Text>
      <View style={styles.bottom}>
        <Navbar />
      </View>
    </View>
  )
}

export default Notifs