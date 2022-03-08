import React, { useState } from 'react'
import { Text, ScrollView, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from '../components/Styles'
import Header from '../components/Header'
import BorderedPic from '../components/BorderedPic'
import DisplayButton from '../components/DisplayButton'
import DropDownPicker from 'react-native-dropdown-picker'

const ProfileEdit = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' }
  ])
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
        <View style={{ display: 'flex', alignItems: 'center' }}>
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
            marginTop: 8,
            marginBottom: 32,
          }}>
            ID: 0
          </Text>
          <View>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Select Sleep Quality"
              containerStyle={{
                width: '90%',
                marginBottom: 16,
              }}
              style={{
                backgroundColor: 'rgba(144, 172, 200, 0.25)',
                borderColor: 'transparent'
              }}
              dropDownContainerStyle={{
                backgroundColor: 'rgba(144, 172, 200, 0.25)',
                borderColor: 'transparent'
              }}
              textStyle={{
                color: '#f7f7f7'
              }}
              labelStyle={{
                color: '#f7f7f7'
              }}
              arrowColor={
                '#f7f7f7'
              }
            />
          </View>
          <DisplayButton
            name='Save Changes'
            onPress={() => navigation.navigate('Profile', {sleep_quality: value})}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

export default ProfileEdit