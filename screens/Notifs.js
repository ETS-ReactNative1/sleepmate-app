import React, { useState, useEffect } from 'react'
import { ScrollView, View, Keyboard } from 'react-native'
import { Searchbar, TextInput } from 'react-native-paper'
import { styles } from '../components/Styles'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'
import IconButton from '../components/IconButton'
import ChatBubbleOther from '../components/ChatBubbleOther'
import ChatBubbleResponse from '../components/ChatBubbleResponse'
import ChatBubbleResponseAll from '../components/ChatBubbleResponseAll'
import { connect } from 'react-redux'
import { clearNotifications } from '../redux/actions'
import { openDatabase } from '../utils/database-utils'

const database = openDatabase('Notifications.db');

class Notifs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchQuery: '',
      message: '',
      showPrivateMsg: false,
      showGeneralMsg: true,
      hitEnterPrivate: false,
      hitEnterGeneral: false
    }
  }

  componentDidMount() {
    this.getData();
    try {
      this.props.clearNotifications();
    } catch (error) {
      throw error;
    }
    this.willFocusSubscription = this.props.navigation.addListener(
      'focus',
      () => {
        try {
          this.props.clearNotifications();
        } catch (error) {
          throw error;
        }
        this.getData();
      }
    );
  }

  componentWillUnmount() {
    this.willFocusSubscription();
  }

  getData() {
    database.transaction((tx) => {
      tx.executeSql(
        `select * from Notifications order by id`,
        null,
        (_, { rows: { _array } }) => {
          this.setState({
            data: _array,
          });
        }
      );
    });
  }

  setSearch(query) {
    this.setState({
      searchQuery: query,
      showGeneralMsg: query === '',
      showPrivateMsg: query !== ''
    })
  }

  setMessage(query) {
    this.setState({
      message: query,
    })
  }

  setEnterPrivate() {
    this.setState({
      hitEnterPrivate: true
    })
  }

  setEnterGeneral() {
    this.setState({
      hitEnterGeneral: true
    })
  }

  render() {
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
          onChangeText={(query) => this.setSearch(query)}
        />
        <ScrollView style={styles.scrollView}>
          <View style={{ display: 'flex' }}>
            <ChatBubbleOther
              name='Derek Chung'
              image={require('../images/derek.jpg')}
              text='I have a very important interview tomorrow. Please try to keep the noise down tonight. Thanks!'
            />
            {this.state.showPrivateMsg && this.state.hitEnterPrivate ? <ChatBubbleResponse text='Got it. Thanks for lmk!' /> : null}
            {this.state.searchQuery === '' ? <ChatBubbleOther
              name='Michelle Xu'
              image={require('../images/michelle.jpg')}
              text='Going to be out travelling all of next week.'
            /> : null}
            {this.state.searchQuery === '' ?
              (
                this.state.data.map(({ id, name, status }) => (
                  <ChatBubbleOther
                    key={id}
                    name='Sleepmate'
                    image={require('../images/sleep.png')}
                    text={status === "accepted" ? `${name} has accepted the invitation to join the household.` : `${name} has been removed from the household.`}
                  />
                ))
              ) : null
            }
            {this.state.showGeneralMsg && this.state.hitEnterGeneral ? < ChatBubbleResponseAll text='Hi!' /> : null}
          </View>
        </ScrollView>
        <View style={{ width: '90%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TextInput
            mode='outlined'
            style={{ elevation: 0, width: '80%', height: 40, backgroundColor: 'rgba(144, 172, 200, 0.3)' }}
            placeholder='Type a message'
            iconColor='#f7f7f7'
            outlineColor='transparent'
            activeOutlineColor='transparent'
            theme={{ colors: { placeholder: '#f7f7f7', text: '#f7f7f7' } }}
            onChangeText={(message) => this.setMessage(message)}
            value={this.state.message}
            onSubmitEditing={(event) => {
              if (this.state.searchQuery === '') {
                this.setEnterGeneral();
              } else {
                this.setEnterPrivate();
              }
              this.setState({
                message: ''
              });
              Keyboard.dismiss();
            }}
          />
          <IconButton
            iconName='send-outline'
            onPress={() => {
              if (this.state.searchQuery === '') {
                this.setEnterGeneral();
              } else {
                this.setEnterPrivate();
              }
              this.setState({
                message: ''
              });
              Keyboard.dismiss();
            }}
          />
        </View>
      </LinearGradient>
    );
  }
}

export default connect(null, {clearNotifications})(Notifs)
/*
const Notifs = ({ route, navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      try {
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
          placeholder='Type a message'
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
*/