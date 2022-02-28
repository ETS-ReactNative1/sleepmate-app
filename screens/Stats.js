import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import { styles } from '../components/Styles'
import Header from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'
import { LineChart } from 'react-native-chart-kit'

const Stats = () => {
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <Header
        pageName='THURS FEB 10-11'
        leftIcon='chevron-back-outline'
        leftPage='StatsPrev'
      />
      <Text style={styles.subtitle}>Sleep Quality</Text>
      <View style={styles.chartContainer}>
        <View style={styles.chartLabelContainer}>
          <Text style={styles.chartLabelText}>Awake</Text>
          <Text style={styles.chartLabelText}>Sleep</Text>
          <Text style={styles.chartLabelText}>Deep Sleep</Text>
        </View>
        <LineChart
          data={{
            labels: ["11", "12", "1", "2", "3", "4", "5", "6", "7"],
            datasets: [
              {
                data: [
                  100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  100
                ]
              }
            ]
          }}
          withHorizontalLabels={false}
          width={0.85 * Dimensions.get("window").width} // from react-native}
          height={200}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "rgba(247, 247, 247, 0)",
            backgroundGradientFrom: "rgba(247, 247, 247, 0)",
            backgroundGradientTo: "rgba(247, 247, 247, 0)",
            color: (opacity = 0) => `rgba(247, 247, 247, ${opacity})`,
            labelColor: (opacity = 0) => `rgba(247, 247, 247, ${opacity})`,
            style: {
              borderRadius: 10
            },
            propsForDots: {
              r: "0"
            },
            propsForLabels: {
              fontSize: 12
            }
          }}
          bezier
          style={{
            marginVertical: 9,
            borderRadius: 10
          }}
        />
      </View>
      <Text style={styles.subtitle}>Ambient Noise Level</Text>
      <View style={styles.chartContainer}>
        <View style={styles.chartLabelContainer}>
          <Text style={styles.chartLabelText}>Awake</Text>
          <Text style={styles.chartLabelText}>Sleep</Text>
          <Text style={styles.chartLabelText}>Deep Sleep</Text>
        </View>
        <LineChart
          data={{
            labels: ["11", "12", "1", "2", "3", "4", "5", "6", "7"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ]
              }
            ]
          }}
          withHorizontalLabels={false}
          width={0.85 * Dimensions.get("window").width} // from react-native}
          height={200}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "rgba(0, 0, 0, 0)",
            backgroundGradientFrom: "rgba(0, 0, 0, 0)",
            backgroundGradientTo: "rgba(0, 0, 0, 0)",
            color: (opacity = 0) => `rgba(247, 247, 247, ${opacity})`,
            labelColor: (opacity = 0) => `rgba(247, 247, 247, ${opacity})`,
            style: {
              borderRadius: 10
            },
            propsForDots: {
              r: "0"
            },
            propsForLabels: {
              fontSize: 12
            }
          }}
          bezier
          style={{
            marginVertical: 9,
            borderRadius: 10
          }}
        />
      </View>
    </LinearGradient>
  )
}

export default Stats