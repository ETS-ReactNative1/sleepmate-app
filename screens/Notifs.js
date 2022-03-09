import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Searchbar, TextInput } from 'react-native-paper'
import { styles } from '../components/Styles'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'
import ChatBubbleOther from '../components/ChatBubbleOther'
import ChatBubbleResponse from '../components/ChatBubbleResponse'
import ChatBubbleResponseAll from '../components/ChatBubbleResponseAll'

const Notifs = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [messageText, setMessageText] = useState('')

  const onChangeSearch = query => setSearchQuery(query)
  const onChangeMessage = text => setMessageText(text)

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
        style={styles.searchBar}
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
          {searchQuery !== '' && messageText !== '' ? <ChatBubbleResponse
            text='Got it. Thanks for lmk!'
          /> : null}
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
          {searchQuery === '' && messageText !== '' ? <ChatBubbleResponseAll
            text='Hi! How&#39;s it going?'
          /> : null}
        </View>
      </ScrollView>
      <TextInput
        style={styles.textInput}
        label='Type a message...'
        onChangeText={onChangeMessage}
      />
    </LinearGradient>
  )
}

export default Notifs