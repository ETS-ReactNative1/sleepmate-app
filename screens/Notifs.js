import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { styles } from '../components/Styles'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'
import ChatBubbleOther from '../components/ChatBubbleOther'

const Notifs = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [textChanged, setTextChanged] = useState(false)

  const onChangeSearch = query => setSearchQuery(query)

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
      <Searchbar
        style={{ width: '90%', height: 40, borderRadius: 10, marginBottom: 16, backgroundColor: 'rgba(144, 172, 200, 0.3)' }}
        placeholder="Search"
        iconColor='#f7f7f7'
        theme={{ colors: { text: '#f7f7f7' } }}
        onChangeText={onChangeSearch}
      />
      <ScrollView style={styles.scrollView}>
        <View style={{ display: 'flex' }}>
          <ChatBubbleOther
            name='Derek C.'
            image={require('../images/derek.jpg')}
            text='I have a very important interview tomorrow. Please try to keep the noise down tonight. Thanks!'
          />
          {searchQuery === '' ? <ChatBubbleOther
            name='Michelle X.'
            image={require('../images/michelle.jpg')}
            text='Going to be out travelling all of next week.'
          /> : null}
          {searchQuery === '' ? <ChatBubbleOther
            name='Sleepmate'
            image={require('../images/sleep.png')}
            text='Emily Y. has accepted the request to join the household!'
          /> : null}
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default Notifs