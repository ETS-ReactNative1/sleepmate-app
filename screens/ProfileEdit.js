import React, { useState } from 'react'
import { Text, ScrollView, View, Switch } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { styles, displayFields } from '../components/Styles'
import Header from '../components/Header'
import BorderedPic from '../components/BorderedPic'
import DisplayButton from '../components/DisplayButton'
import DropDownPicker from 'react-native-dropdown-picker'

const ProfileEdit = ({ route, navigation }) => {
  const [sleepOpen, setSleepOpen] = useState(false)
  const [sleepValue, setSleepValue] = useState(route['params']['sleepQuality'])
  const [sleepItems, setSleepItems] = useState([
    { label: 'Light Sleeper', value: 'Light Sleeper' },
    { label: 'Moderate Sleeper', value: 'Moderate Sleeper' },
    { label: 'Heavy Sleeper', value: 'Heavy Sleeper' }
  ])

  const [notifyOpen, setNotifyOpen] = useState(false)
  const [notifyValue, setNotifyValue] = useState(route['params']['notificationsOff'] ? null : route['params']['notifyTime'])
  const [notifyItems, setNotifyItems] = useState([
    { label: '15 Minutes', value: '15 Minutes' },
    { label: '30 Minutes', value: '30 Minutes' },
    { label: '60 Minutes', value: '60 Minutes' }
  ])

  let notifyPicker = <React.Fragment>
    <Text style={[styles.subtitle, { marginTop: 0, marginBottom: 8, width: '88%', alignSelf: 'center' }]}>Notify After</Text>
    <DropDownPicker
      open={notifyOpen}
      value={notifyValue}
      items={notifyItems}
      setOpen={setNotifyOpen}
      setValue={setNotifyValue}
      setItems={setNotifyItems}
      placeholder="Notify After"
      containerStyle={{
        width: '90%',
        marginBottom: notifyOpen ? 137 : 16,
        overflow: 'visible'
      }}
      style={{
        backgroundColor: 'rgba(144, 172, 200, 0.25)',
        borderColor: 'transparent',
      }}
      dropDownContainerStyle={{
        backgroundColor: 'rgba(144, 172, 200, 0.9)',
        borderColor: 'transparent'
      }}
      textStyle={{
        color: '#f7f7f7'
      }}
      labelStyle={{
        color: '#f7f7f7'
      }}
      arrowIconContainerStyle={{
        color: '#f7f7f7'
      }}
      arrowIconStyle={{
        color: '#f7f7f7'
      }}
      arrowStyle={{ color: '#f7f7f7' }}
      listMode="SCROLLVIEW"
    /></React.Fragment>;

  const [isEnabled, setIsEnabled] = useState(!route['params']['notificationsOff']);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    if (isEnabled) {
      setNotifyValue(null);
    }
  };

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
        <View style={{ display: 'flex', alignItems: 'center', overflow: 'visible' }}>
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
          }}>
            Joined February 2022
          </Text>
          <Text style={{
            color: '#f7f7f7',
            marginBottom: 32,
          }}>
            Username: tristan_wang_12345
          </Text>
          <Text style={[styles.subtitle, { marginTop: 0, marginBottom: 8, width: '88%', alignSelf: 'center' }]}>Sleep Quality</Text>
          <DropDownPicker
            open={sleepOpen}
            value={sleepValue}
            items={sleepItems}
            setOpen={setSleepOpen}
            setValue={setSleepValue}
            setItems={setSleepItems}
            placeholder="Select Sleep Quality"
            containerStyle={{
              width: '90%',
              marginBottom: sleepOpen ? 137 : 16,
              overflow: 'visible'
            }}
            style={{
              backgroundColor: 'rgba(144, 172, 200, 0.25)',
              borderColor: 'transparent',
            }}
            dropDownContainerStyle={{
              backgroundColor: 'rgba(144, 172, 200, 0.9)',
              borderColor: 'transparent'
            }}
            textStyle={{
              color: '#f7f7f7'
            }}
            labelStyle={{
              color: '#f7f7f7'
            }}
            arrowIconContainerStyle={{
              color: '#f7f7f7'
            }}
            arrowIconStyle={{
              color: '#f7f7f7'
            }}
            arrowStyle={{ color: '#f7f7f7' }}
            listMode="SCROLLVIEW"
          />
          <View style={displayFields.field}>
            <Text style={styles.chartHeading}>Notify Roommates</Text>
            <Switch
              trackColor={{ false: "#003366", true: "rgba(172, 200, 144, 0.3)" }}
              thumbColor={isEnabled ? "#f7f7f7" : "#f7f7f7"}
              ios_backgroundColor="transparent"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{ margin: 0, padding: 0 }}
            />
          </View>
          {isEnabled ? notifyPicker : null}
          <DisplayButton
            name='Save Changes'
            onPress={() => navigation.navigate('Profile', { sleep_quality: sleepValue, notify_after: notifyValue })}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default ProfileEdit