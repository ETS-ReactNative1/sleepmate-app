import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { styles } from '../components/Styles'
import Navbar from '../components/Navbar'

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.bottom}>
        <Navbar />
      </View>
    </View>
  )
}

export default Profile