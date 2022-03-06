import React from 'react'
import { Text, ScrollView, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '../components/Styles'
import DisplayField from '../components/DisplayField'
import Header from '../components/Header'
import BorderedPic from '../components/BorderedPic'
import DisplayButton from '../components/DisplayButton'
import { NavigationContainer } from '@react-navigation/native'

const ProfileEdit = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Header
        pageName='EDIT PROFILE'
        leftIcon='chevron-back-circle-outline'
        leftPage='Profile'
      />
      <ScrollView style={styles.scrollView}>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <BorderedPic
            size={150}
            image={require('../images/tristan.png')}
          />
          <Text style={{
            fontSize: 24,
            letterSpacing: 0.25,
            color: '#f7f7f7',
            marginTop: 32,
            fontWeight: '600'
          }}
          >
            Tristan W.
          </Text>
          <Text style={{
            color: '#f7f7f7',
            marginTop: 8,
            marginBottom: 32,
          }}>
            Joined February 2022
          </Text>

          <DisplayButton
            name='Save Changes'
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default ProfileEdit