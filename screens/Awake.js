import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../components/Styles'
import SolidButton from '../components/SolidButton'

const Awake = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>8:00 AM</Text>
      <Text style={styles.date}>Tuesday, February 22</Text>
      <SolidButton
        style={styles.button}
        title='Wake Up'
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default Awake