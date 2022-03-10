import React, { useState, useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { Searchbar, TextInput } from 'react-native-paper'
import { styles } from '../components/Styles'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'
import IconButton from '../components/IconButton'
import ChatBubbleOther from '../components/ChatBubbleOther'
import ChatBubbleResponse from '../components/ChatBubbleResponse'
import ChatBubbleResponseAll from '../components/ChatBubbleResponseAll'
import { useDispatch } from 'react-redux'
import * as Actions from '../redux/actions'

const Notifs = ({ route, navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      try {
        console.log('clearing');
        dispatch(Actions.clearNotifications());
      } catch (error) {
        throw error;
      }
    });

    return unsubscribe;
  }, [navigation]);


  const [searchQuery, setSearchQuery] = useState('')
  const [messageText, setMessageText] = useState('')
  const [showPrivateMsg, setShowPrivateMsg] = useState(false)
  const [showGeneralMsg, setShowGeneralMsg] = useState(false)

  const onChangeSearch = query => setSearchQuery(query)
  const onChangeMessage = text => setMessageText(text)

  const sendMessage = () => {
    if (searchQuery !== '' && messageText !== '') {
      setShowPrivateMsg(true)
    } else {
      setShowGeneralMsg(true)
    }
    setMessageText('')
  }

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
        theme={{ colors: { placeholder: '#f7f7f7', text: '#f7f7f7' } }}
        onChangeText={onChangeSearch}
      />
      <ScrollView style={styles.scrollView}>
        <View style={{ display: 'flex' }}>
          <ChatBubbleOther
            name='Derek C.'
            image={require('../images/derek.jpg')}
            text='I have a very important interview tomorrow. Please try to keep the noise down tonight. Thanks!'
          />
          {showPrivateMsg ? <ChatBubbleResponse text='Got it. Thanks for lmk!' /> : null}
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
          {showGeneralMsg ? <ChatBubbleResponseAll text='Hi!' /> : null}
        </View>
      </ScrollView>
      <View style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TextInput
          mode='outlined'
          style={{ elevation: 0, width: '80%', height: 40, backgroundColor: 'rgba(144, 172, 200, 0.3)' }}
          label='Type a message'
          iconColor='#f7f7f7'
          outlineColor='transparent'
          activeOutlineColor='transparent'
          theme={{ colors: { placeholder: '#f7f7f7', text: '#f7f7f7' } }}
          onChangeText={onChangeMessage}
        />
        <IconButton
          iconName='send-outline'
          onPress={sendMessage}
        />
      </View>
    </LinearGradient>
  )
}

export default Notifs