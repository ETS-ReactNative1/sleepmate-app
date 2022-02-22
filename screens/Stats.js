import React from 'react'
import { View } from 'react-native'
import { styles } from '../components/Styles'
import Navbar from '../components/Navbar'
import Header from '../components/Header'

const Stats = () => {
  return (
    <View style={styles.container}>
      <Header pageName='THURS FEB 10-11' previousPage='Home' />
      <View style={styles.bottom}>
        <Navbar />
      </View>
    </View>
  )
}

export default Stats