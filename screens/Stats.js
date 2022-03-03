import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { styles } from '../components/Styles'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

const Stats = () => {
  const combinedData = [
    {
      top: 100,
      bottom: Math.floor(Math.random() * 80) + 10,
    },
    {
      top: Math.floor(Math.random() * 80) + 10,
      bottom: Math.floor(Math.random() * 80) + 10,
    },
    {
      top: Math.floor(Math.random() * 80) + 10,
      bottom: Math.floor(Math.random() * 80) + 10,
    },
    {
      top: Math.floor(Math.random() * 80) + 10,
      bottom: Math.floor(Math.random() * 80) + 10,
    },
    {
      top: Math.floor(Math.random() * 80) + 10,
      bottom: Math.floor(Math.random() * 80) + 10,
    },
    {
      top: Math.floor(Math.random() * 80) + 10,
      bottom: Math.floor(Math.random() * 80) + 10,
    },
    {
      top: Math.floor(Math.random() * 80) + 10,
      bottom: Math.floor(Math.random() * 80) + 10,
    },
    {
      top: 100,
      bottom: Math.floor(Math.random() * 80) + 10,
    },
  ]

  const topData = combinedData.map(a => a.top)

  const bottomData = combinedData.map(a => a.bottom)

  const colors = ['#90acc8', '#f7f7f7']

  const keys = ['top', 'bottom']

  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Header
        pageName='THU FEB 10-11'
        leftIcon='chevron-back-outline'
        leftPage='StatsPrev'
      />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.subtitle}>Sleep Quality</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ display: 'flex', width: 50, height: 200, justifyContent: 'space-around' }}>
            <Text style={{ color: '#f7f7f7' }}>Awake</Text>
            <Text style={{ color: '#f7f7f7' }}>Asleep</Text>
            <Text style={{ color: '#f7f7f7' }}>Deep Sleep</Text>
          </View>
          <AreaChart
            style={{ width: 200, height: 200 }}
            data={topData}
            gridMin={0}
            gridMax={100}
            start={0}
            svg={{ fill: 'rgb(144, 172, 200, 0.3)' }}
            contentInset={{ top: 20, bottom: 20 }}
            curve={shape.curveNatural}
          >
            <Grid />
          </AreaChart>
        </View>
        <Text style={styles.subtitle}>Ambient Noise Level</Text>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ display: 'flex', width: 50, height: 200, justifyContent: 'space-around' }}>
            <Text style={{ color: '#f7f7f7' }}>Very Loud</Text>
            <Text style={{ color: '#f7f7f7' }}>Loud</Text>
            <Text style={{ color: '#f7f7f7' }}>Quiet</Text>
          </View>
          <AreaChart
            style={{ width: 200, height: 200 }}
            data={bottomData}
            gridMin={0}
            gridMax={100}
            start={0}
            svg={{ fill: 'rgb(144, 172, 200, 0.3)' }}
            contentInset={{ top: 20, bottom: 20 }}
            curve={shape.curveNatural}
          >
            <Grid />
          </AreaChart>
        </View>
      </ScrollView>
    </LinearGradient >
  )
}

export default Stats