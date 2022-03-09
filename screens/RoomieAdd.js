import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'
import { styles, searchBar } from '../components/Styles'

const RoomieAdd = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const onChangeSearch = query => setSearchQuery(query)

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
      <Searchbar
        style={{ elevation: 0, width: '90%', height: 40, borderRadius: 10, marginBottom: 16, backgroundColor: 'rgba(144, 172, 200, 0.3)' }}
        placeholder="Search by username"
        iconColor='#f7f7f7'
        theme={{ colors: { placeholder: '#f7f7f7', text: '#f7f7f7' } }}
        value={searchQuery}
        onChangeText={onChangeSearch}
        onSubmitEditing={console.log(2)}
      />
    </LinearGradient>
  );
}

export default RoomieAdd