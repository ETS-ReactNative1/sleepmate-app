import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SolidButton from '../components/SolidButton'

const Awake = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>8:00 AM</Text>
      <Text style={styles.date}>Friday, February 11</Text>
      <SolidButton
        style={styles.button}
        title='Wake Up'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default Awake

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  time: {
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#f7f7f7',
    marginTop: 36,
    marginBottom: 5
  },
  date: {
    fontSize: 20,
    letterSpacing: 0.25,
    color: '#f7f7f7',
    marginBottom: 36
  }
})