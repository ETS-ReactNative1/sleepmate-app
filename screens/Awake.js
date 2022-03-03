import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../components/Styles'
import SolidButton from '../components/SolidButton'
import { LinearGradient } from 'expo-linear-gradient'

const Awake = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['rgba(253, 128, 70, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.time}>8:00 AM</Text>
        <Text style={styles.date}>Friday, February 11</Text>
        <SolidButton
          style={styles.button}
          title='Wake Up'
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </LinearGradient>
  )
}

export default Awake