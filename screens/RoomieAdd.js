import React from 'react'
import { ScrollView, View } from 'react-native'
import { SearchBar } from 'react-native-elements'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'
import { styles, searchBar } from '../components/Styles'

const RoomieAdd = () => {
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Header
        pageName='ADD ROOMMATE'
        leftIcon='chevron-back-circle-outline'
        leftPage='Roomies'
      />
      <SearchBar
        placeholder="Search by username"
        showCancel={false}
        containerStyle={searchBar.containerStyle}
        inputContainerStyle={searchBar.inputContainerStyle}
        onSubmitEditing={console.log(2)}
      />
    </LinearGradient>
  );
}

export default RoomieAdd