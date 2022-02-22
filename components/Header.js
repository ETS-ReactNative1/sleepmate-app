import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../components/Styles'
import { useNavigation } from '@react-navigation/native'

const Header = (props) => {
  const { pageName } = props
  const navigation = useNavigation()
  return (
    <View style={styles.headerContainer}>
      <Text>{pageName}</Text>
    </View>
  )
}

export default Header