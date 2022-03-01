import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../components/Styles'
import { LinearGradient } from 'expo-linear-gradient'
import FillButton from '../components/FillButton'

const Home = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.time}>11:24 PM</Text>
        <Text style={styles.date}>Thursday, February 10</Text>
        <FillButton
          buttonText='Sleep'
          onFilled={() => navigation.navigate('Asleep')}
        />
      </View>
    </LinearGradient>
  )
}

export default Home