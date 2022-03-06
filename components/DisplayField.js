import React from 'react'
import { Text, View } from 'react-native'
import { displayFields, styles } from './Styles'

const DisplayField = (props) => {
  const { name, desc } = props
  return (
    <View style={displayFields.field}>
      <Text style={styles.chartHeading}>{name}</Text>
      <Text style={styles.chartLabel}>{desc}</Text>
    </View>
  )
}

export default DisplayField