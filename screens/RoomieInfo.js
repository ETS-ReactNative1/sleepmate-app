import React from 'react'
import { ScrollView, Dimensions, View, Text } from 'react-native'
import { styles } from '../components/Styles'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'
import BorderedPic from '../components/BorderedPic'
import DisplayField from '../components/DisplayField'

const RoomieInfo = (props) => {
  console.log(props['route']);
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Header
        pageName='ROOMMATES'
        leftIcon='chevron-back-circle-outline'
        leftPage='Roomies'
      />
      <ScrollView style={styles.scrollView}>
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <BorderedPic
            size={Dimensions.get('window').width * 0.9}
            image={props['route']['params']['link']}
            sleeping_opacity={props['route']['params']['sleeping_status'] === 'sleeping' ? 1 : 0}
          />
          <Text style={{
            fontSize: 24,
            letterSpacing: 0.25,
            color: '#f7f7f7',
            marginTop: 32,
            fontWeight: '600'
          }}
          >{props['route']['params']['first_name'] + ' ' + props['route']['params']['last_name']}</Text>
          <Text style={{
            color: '#f7f7f7',
            marginTop: 8,
            marginBottom: 32,
          }}>
            Joined {props['route']['params']['join_month']} {props['route']['params']['join_year']}
          </Text>
          <DisplayField
            name='Sleep Quality'
            desc={props['route']['params']['sleep_quality']}
          />
          <DisplayField
            name='Average Bedtime'
            desc={props['route']['params']['average_bedtime']}
          />
          <DisplayField
            name='Average Wakeup'
            desc={props['route']['params']['average_wakeup']}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default RoomieInfo