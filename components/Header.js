import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../components/Styles'
import IconButton from './IconButton'
import { useNavigation } from '@react-navigation/native'

const Header = (props) => {
  const { pageName, previousPage } = props
  const navigation = useNavigation()
  return (
    <View style={styles.headerContainer}>
      <IconButton
        image={require('../icons/caret-circle-left-light.png')}
        onPress={() => navigation.navigate(previousPage)}
      />
      <Text style={styles.smallTitle}>{pageName}</Text>
      <IconButton
        image={require('../icons/plus-circle-light.png')}
      />
    </View>
  )
}

export default Header