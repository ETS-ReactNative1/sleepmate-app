import React, { useState, useEffect } from 'react'
import { contactButtons, styles, removeAnimation, iconButtons } from '../components/Styles'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, View, Dimensions, Animated, Pressable } from 'react-native'
import ContactButton from '../components/ContactButton'
import { openDatabase } from '../utils/database-utils'
import EditButton from '../components/EditButton'
import IconButton from '../components/IconButton'
import { IMAGES } from '../constants/image constants'
import { Ionicons } from '@expo/vector-icons'

const database = openDatabase('Profiles.db');

const Roommates = (props) => {
  const [items, setItems] = useState(null);
  useEffect(() => {
    database.transaction((tx) => {
      tx.executeSql(
        `select * from Profiles where friendship_status = "friended" or friendship_status = "pending" order by friendship_status, last_name`,
        null,
        (_, { rows: { _array } }) => setItems(_array)
      );
    });
  }, []);

  if (items === null || items.length === 0) {
    return null;
  }
  return (
      items.map(({ id, first_name, middle_name, last_name, profile_pic, join_year, join_month, sleeping_status, friendship_status, sleep_quality, average_bedtime, average_wakeup }) => (
        <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }} key={id}>
          <Animated.View key={id} style={{
            opacity: props.width,
            width: props.width,
            flex: 1,
          }}>
            <Pressable style={[iconButtons.button, { paddingHorizontal: 0 }]}>
              <Ionicons name='remove-circle-outline' size={36} color='#f7f7f7' />
            </Pressable>
          </Animated.View>
          {IMAGES.filter(item => item.name === profile_pic).map(({ name, link }) => (
            <ContactButton
              key={id}
              image={link}
              width={Dimensions.get('window').width * 0.9 - (!props.width ? 0 : props.width + 36)}
              style={{flex: 1}}
              size={75}
              name={`${first_name} ${last_name}`}
              onPress={() =>
                props.navigation.navigate('RoomiesInfo', { id, first_name, middle_name, last_name, profile_pic, join_year, join_month, sleeping_status, friendship_status, sleep_quality, average_bedtime, average_wakeup })}
            />
          ))}

        </View>
      )
      )
    
  );
}
export default class Roomies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      controlOpacity: new Animated.Value(0),
      controlWidth: new Animated.Value(0)
    }
    this.state.controlOpacity.addListener(({ value }) => this._value = value);
    this.state.controlWidth.addListener(({ value }) => this._value = value);
  }

  componentDidMount() {
  }

  toggleEditMode() {
    if (!this.state.editMode) {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(this.state.controlOpacity, { toValue: 1, duration: 300, useNativeDriver: true }),
          Animated.timing(this.state.controlWidth, { toValue: 20, duration: 300, useNativeDriver: true })
        ])
      ]).start();
    } else {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(this.state.controlOpacity, { toValue: 0, duration: 300, useNativeDriver: true }),
          Animated.timing(this.state.controlWidth, { toValue: 0, duration: 300, useNativeDriver: true })
        ])
      ]).start();
    }

    this.setState({
      editMode: !this.state.editMode
    });
  }

  render() {
    return (
      <LinearGradient
        colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
        style={styles.container}>
        <View style={styles.headerContainer}>
          <EditButton name='Edit' onPress={() => this.toggleEditMode()} />
          <Text style={styles.smallTitle}>ROOMMATES</Text>
          <IconButton iconName='add-circle-outline' />
        </View>
        <View style={[styles.container, { backgroundColor: 'rgba(0, 0, 0, 0)'}]}>
          <Roommates
            opacity={this.state.controlOpacity._value}
            width={this.state.controlWidth._value}
            navigation={this.props.navigation}>
          </Roommates>
        </View>
      </LinearGradient>
    );
  }
}

/*
 *
const Roomies = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Header
        pageName='ROOMMATES'
        rightIcon='add-circle-outline'
      />
      <ContactButton
        image={require('../images/derek.jpg')}
        size={75}
        name='Derek C.'
        onPress={() => navigation.navigate('RoomieInfo')}
      />
      <ContactButton
        image={require('../images/aaron.jpg')}
        size={75}
        name='Aaron H.'
        onPress={() => navigation.navigate('RoomieInfo')}
      />
      <ContactButton
        image={require('../images/michelle.jpg')}
        size={75}
        name='Michelle X.'
        onPress={() => navigation.navigate('RoomieInfo')}
      />
    </LinearGradient>
  )
}
*/
