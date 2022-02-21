import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Navbar from '../components/Navbar'
import SolidButton from '../components/SolidButton'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Sleepmate</Text>
      <SolidButton
        style={styles.button}
        title='Sleep'
        onPress={() => navigation.navigate('Awake')}
      />
      <View style={styles.bottom}>
        <Navbar />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#f7f7f7',
    marginVertical: 36
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  }
})