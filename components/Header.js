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
        iconName='chevron-back-circle-outline'
        onPress={() => navigation.navigate(previousPage)}
      />
      <Text style={styles.smallTitle}>{pageName}</Text>
      <IconButton
        iconName='add-circle-outline'
      />
    </View>
  )
}

export default Header