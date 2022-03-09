import React, { useState, useEffect } from 'react'
import { contactButtons, styles, removeAnimation, iconButtons } from '../components/Styles'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, View, Dimensions, Animated, Alert, Easing, ScrollView } from 'react-native'
import ContactButton from '../components/ContactButton'
import { openDatabase, updateItem } from '../utils/database-utils'
import EditButton from '../components/EditButton'
import IconButton from '../components/IconButton'
import { IMAGES } from '../constants/image constants'

const database = openDatabase('Profiles.db');

function createRemoveDialogue(props) {
  let name = `${props['first_name']} ` + (props['middle_name'] === '' ? '' : props['middle_name'] + ' ') + `${props['last_name']}`;
  Alert.alert(`Remove ${name}?`,
    `Are you sure you want to remove ${name} as a friend?`,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      {
        text: "OK", onPress: () => {
          updateItem(database, 'Profiles', 'friendship_status="unfriended"', `id=${props['id']}`);
          props['editMode']();
          props['onRemove']();
        }
      }
    ]
  )
}

export default class Roomies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      started: false,
      editMode: false,
      controlOpacity: new Animated.Value(0),
      controlWidth: new Animated.Value(0),
    }
    this.state.controlOpacity.addListener(({ value }) => this._value = value);
    this.state.controlWidth.addListener(({ value }) => this._value = value);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    database.transaction((tx) => {
      tx.executeSql(
        `select * from Profiles where friendship_status = "friended" or friendship_status = "pending" order by friendship_status, last_name`,
        null,
        (_, { rows: { _array } }) => {
          this.setState({
            data: _array,
          });
          console.log(_array);
        }
      );
    });

  }

  toggleEditMode() {
    if (!this.state.editMode) {
      Animated.parallel([
        Animated.timing(this.state.controlOpacity, { toValue: 1, duration: 300, useNativeDriver: true }),
        Animated.timing(this.state.controlWidth, { toValue: 0.78, duration: 300, easing: Easing.linear, useNativeDriver: true })
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(this.state.controlOpacity, { toValue: 0, duration: 300, useNativeDriver: true }),
        Animated.timing(this.state.controlWidth, { toValue: 0, duration: 300, easing: Easing.linear, useNativeDriver: true })
      ]).start();
    }

    this.setState({
      editMode: !this.state.editMode,
      started: true
    });
  }

  render() {
    const width = Dimensions.get('window').width;
    return (
      <LinearGradient
        colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
        style={styles.container}>
        <View style={styles.headerContainer}>
          <IconButton iconName='ellipsis-vertical-circle-outline' onPress={() => this.toggleEditMode()} />
          <Text style={styles.smallTitle}>ROOMMATES</Text>
          <IconButton iconName='add-circle-outline' onPress={() => { console.log(1) }} />
        </View>
        <ScrollView style={[styles.scrollView, { width: '90%', backgroundColor: 'rgba(0, 0, 0, 0)' }]}>
          {this.state.data.map(({ id, first_name, middle_name, last_name, profile_pic, join_year, join_month, sleeping_status, friendship_status, sleep_quality, average_bedtime, average_wakeup, username }) => (
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }} key={id}>
              <Animated.View key={`minus-container-${id}`} style={{
                opacity: this.state.controlOpacity,
                transform: [{
                  translateX: this.state.controlWidth.interpolate({ inputRange: [0, 1], outputRange: [-72, 0] })
                }],
              }}>
                <IconButton iconName='remove-circle-outline' onPress={() => createRemoveDialogue({ id, first_name, middle_name, last_name, onRemove: this.getData.bind(this), editMode: this.toggleEditMode.bind(this) })} />
              </Animated.View>
              {IMAGES.filter(item => item.name === profile_pic).map(({ name, link }) => (
                <Animated.View key={`contact-container-${id}`} style={{
                  transform: [{
                    translateX: this.state.controlWidth.interpolate({ inputRange: [0, 1], outputRange: [-72, 0.05 * width] })
                  }
                  ],
                }}>
                  <ContactButton
                    key={`contact-${id}`}
                    image={link}
                    width={width * 0.9}
                    sleeping_opacity={sleeping_status === 'sleeping' && friendship_status === 'friended' ? 1 : 0}
                    style={{ flex: 1 }}
                    size={75}
                    name={`${first_name} ` + (middle_name === '' ? '' : middle_name + ' ') + `${last_name}` + (friendship_status === 'pending' ? ' (Pending)' : (sleeping_status === 'sleeping' ? ' (Sleeping)' : ''))}
                    onPress={() =>
                      this.props.navigation.navigate('RoomieInfo', { id, first_name, middle_name, last_name, link, join_year, join_month, sleeping_status, friendship_status, sleep_quality, average_bedtime, average_wakeup, username })}
                  />
                </Animated.View>
              ))}

            </View>
          )
          )}
        </ScrollView>
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
