import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../components/Styles'
import IconButton from './IconButton'
import { useNavigation } from '@react-navigation/native'

const ExtendedHeader = (props) => {
  const { pageName, leftIcon, rightIcon, rightActionIcon, leftPage, rightPage, rightAction } = props
  const navigation = useNavigation()
  return (
    <View style={styles.extendedHeaderContainer}>
      <IconButton
        iconName={leftIcon}
        onPress={() => navigation.navigate(leftPage)}
      />
      <Text style={styles.smallTitle}>{pageName}</Text>
      <IconButton
        iconName={rightIcon}
        onPress={() => navigation.navigate(rightPage)}
      />
      <IconButton
        iconName={rightActionIcon}
        onPress={() => navigation.navigate(rightAction)}
      />
    </View>
  )
}

export default ExtendedHeader