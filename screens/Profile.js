import React from 'react'
import { Text, ScrollView, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '../components/Styles'
import Header from '../components/Header'
import BorderedPic from '../components/BorderedPic'
import SolidButton from '../components/SolidButton'

const Profile = () => {
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Header
        pageName='PROFILE'
        leftIcon='chevron-back-circle-outline'
        leftPage='Home'
      />
      <ScrollView style={styles.scrollView}>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <BorderedPic
            size={150}
            image={require('../images/tristan.png')}
          />
          <Text style={styles.title}>Tristan W.</Text>
          <SolidButton
            style={styles.button}
            title='Edit Preferences'
          />
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default Profile