import React from 'react'
import { Text, ScrollView, View, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '../components/Styles'
import DisplayField from '../components/DisplayField'
import Header from '../components/Header'
import BorderedPic from '../components/BorderedPic'
import DisplayButton from '../components/DisplayButton'

const Profile = ({ route, navigation }) => {
  console.log(route);
  let sleepQualityText =
    <DisplayField
      name='Sleep Quality'
      desc={route === undefined || !('params' in route) || route['params'] === undefined || !('sleep_quality' in route['params']) || route['params']['sleep_quality'] === null ? 'Not Specified' : route['params']['sleep_quality']}
    />
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
            size={Dimensions.get('window').width * 0.9}
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
          }}>
            Joined February 2022
          </Text>
          <Text style={{
            color: '#f7f7f7',
            marginTop: 8,
            marginBottom: 32,
          }}>
            ID: 0
          </Text>
          {sleepQualityText}
          <DisplayField
            name='Average Bedtime'
            desc='Not Enough Data'
          />
          <DisplayField
            name='Average Wakeup'
            desc='Not Enough Data'
          />
          <DisplayButton
            name='Edit Preferences'
            onPress={() => navigation.navigate('ProfileEdit')}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default Profile