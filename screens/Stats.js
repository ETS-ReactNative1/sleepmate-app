import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { styles } from '../components/Styles'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'
import { AreaChart, Grid } from 'react-native-svg-charts'
import { DataTable } from 'react-native-paper'
import * as shape from 'd3-shape'

const Stats = () => {

  const topData = [
    100,
    Math.floor(Math.random() * 80) + 10,
    Math.floor(Math.random() * 80) + 10,
    Math.floor(Math.random() * 80) + 10,
    Math.floor(Math.random() * 80) + 10,
    Math.floor(Math.random() * 80) + 10,
    Math.floor(Math.random() * 80) + 10,
    100
  ]

  const bottomData = [
    Math.floor(Math.random() * 80) + 10,
    Math.floor(Math.random() * 80) + 10,
    Math.floor(Math.random() * 80) + 10,
    Math.floor(Math.random() * 80) + 10,
    Math.floor(Math.random() * 80) + 10,
    Math.floor(Math.random() * 80) + 10,
    Math.floor(Math.random() * 80) + 10,
    Math.floor(Math.random() * 80) + 10
  ]

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
        <View style={styles.chartContainer}>
          <View style={styles.yAxisLabelContainer}>
            <Text style={styles.chartLabel}>Awake</Text>
            <Text style={styles.chartLabel}>Asleep</Text>
            <Text style={styles.chartLabel}>Deep Sleep</Text>
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
        <View style={styles.xAxisLabelContainer}>
          <Text style={styles.chartLabel}>Time</Text>
          <Text style={styles.chartLabel}>11</Text>
          <Text style={styles.chartLabel}>12</Text>
          <Text style={styles.chartLabel}>1</Text>
          <Text style={styles.chartLabel}>2</Text>
          <Text style={styles.chartLabel}>3</Text>
          <Text style={styles.chartLabel}>4</Text>
          <Text style={styles.chartLabel}>5</Text>
          <Text style={styles.chartLabel}>6</Text>
        </View>

        <Text style={styles.subtitle}>Ambient Noise Level</Text>
        <View style={styles.chartContainer}>
          <View style={styles.yAxisLabelContainer}>
            <Text style={styles.chartLabel}>Very Loud</Text>
            <Text style={styles.chartLabel}>Loud</Text>
            <Text style={styles.chartLabel}>Quiet</Text>
          </View>
          <AreaChart
            style={{ width: 200, height: 200 }}
            data={bottomData}
            gridMin={0}
            gridMax={100}
            start={0}
            svg={{ fill: 'rgb(172, 200, 144, 0.3)' }}
            contentInset={{ top: 20, bottom: 20 }}
            curve={shape.curveNatural}
          >
            <Grid />
          </AreaChart>
        </View>
        <View style={styles.xAxisLabelContainer}>
          <Text style={styles.chartLabel}>Time</Text>
          <Text style={styles.chartLabel}>11</Text>
          <Text style={styles.chartLabel}>12</Text>
          <Text style={styles.chartLabel}>1</Text>
          <Text style={styles.chartLabel}>2</Text>
          <Text style={styles.chartLabel}>3</Text>
          <Text style={styles.chartLabel}>4</Text>
          <Text style={styles.chartLabel}>5</Text>
          <Text style={styles.chartLabel}>6</Text>
        </View>

        <Text style={styles.subtitle}>Statistics</Text>
        <DataTable
          style={{ width: '90%', alignSelf: 'center', marginTop: 16 }}
        >
          <DataTable.Row>
            <DataTable.Cell><Text style={styles.chartHeading}>In Bed</Text></DataTable.Cell>
            <DataTable.Cell><Text style={styles.chartLabel}>11:17 PM - 6:42 AM</Text></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell><Text style={styles.chartHeading}>Sleep Quality</Text></DataTable.Cell>
            <DataTable.Cell><Text style={styles.chartLabel}>72%</Text></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell><Text style={styles.chartHeading}>Time In Bed</Text></DataTable.Cell>
            <DataTable.Cell><Text style={styles.chartLabel}>7 hours 25 minutes</Text></DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell><Text style={styles.chartHeading}>Noise Level</Text></DataTable.Cell>
            <DataTable.Cell><Text style={styles.chartLabel}>Moderate</Text></DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </ScrollView>
    </LinearGradient >
  )
}

export default Stats