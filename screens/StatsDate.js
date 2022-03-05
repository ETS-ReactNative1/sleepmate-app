import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { styles } from '../components/Styles'
import ExtendedHeader from '../components/ExtendedHeader'
import { LinearGradient } from 'expo-linear-gradient'
import { AreaChart, Grid } from 'react-native-svg-charts'
import { DataTable } from 'react-native-paper'
import * as shape from 'd3-shape'

const StatsDate = ({ date }) => {
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Text>{date}</Text>
    </LinearGradient >
  )
}

export default StatsDate