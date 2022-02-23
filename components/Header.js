import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../components/Styles'
import IconButton from './IconButton'
import { useNavigation } from '@react-navigation/native'

const Header = (props) => {
  const { pageName, leftIcon, rightIcon, leftPage, rightPage, leftOpacity, rightOpacity } = props
  const navigation = useNavigation()
  return (
    <View style={styles.headerContainer}>
      <IconButton
        iconName={leftIcon}
        onPress={() => navigation.navigate(leftPage)}
      />
      <Text style={styles.smallTitle}>{pageName}</Text>
      <IconButton
        iconName={rightIcon}
        onPress={() => navigation.navigate(rightPage)}
      />
    </View>
  )
}

export default Header