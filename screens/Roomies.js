import React from 'react'
import { View } from 'react-native'
import { styles } from '../components/Styles'
import Header from '../components/Header'

const Roomies = () => {
  return (
    <View style={styles.container}>
      <Header pageName='ROOMMATES' previousPage='Home' />
    </View>
  )
}

export default Roomies