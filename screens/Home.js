import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../components/Styles'
import SolidButton from '../components/SolidButton'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Sleepmate</Text>
      <SolidButton
        style={styles.button}
        title='Sleep'
        onPress={() => { }}
      />
    </View>
  )
}

export default Home