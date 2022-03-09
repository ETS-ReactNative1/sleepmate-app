import React from 'react'
import { ScrollView, View } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { styles } from '../components/Styles'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'
import ChatBubbleOther from '../components/ChatBubbleOther'

const Notifs = () => {
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Header
        pageName='NOTIFICATIONS'
        leftIcon='chevron-back-circle-outline'
        leftPage='Home'
      />
      <SearchBar
        placeholder="Type Here..."
        containerStyle={{ width: '100%' }}
      />
      <ScrollView style={styles.scrollView}>
        <View style={{ display: 'flex' }}>
          <ChatBubbleOther
            name='Derek C.'
            image={require('../images/derek.jpg')}
            text='I have a very important interview tomorrow. Please try to keep the noise down tonight. Thanks!'
          />
          <ChatBubbleOther
            name='Michelle X.'
            image={require('../images/michelle.jpg')}
            text='Going to be out travelling all of next week.'
          />
          <ChatBubbleOther
            name='Sleepmate'
            image={require('../images/sleep.png')}
            text='Emily Y. has accepted the request to join the household!'
          />
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default Notifs