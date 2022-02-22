import React from 'react'
import { View } from 'react-native'
import { styles } from '../components/Styles'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const Roomies = () => {
  return (
    <View style={styles.container}>
      <Header pageName='ROOMIES' previousPage='Home' />
      <View style={styles.bottom}>
        <Navbar />
      </View>
    </View>
  )
}

export default Roomies