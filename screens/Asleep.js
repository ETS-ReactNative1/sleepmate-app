import { React, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../components/Styles'
import FillButton from '../components/FillButton'
import { LinearGradient } from 'expo-linear-gradient'

const Asleep = ({ navigation }) => {
  /**
  const [date, setDate] = useState(new Date());

  var dateInfo = getDateVars(date); // returns [seconds, minutes, hours, time_of_day, day, num, month, divide];
  var color = getTimeOfDayColor(getTimeOfDay(date));
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      dateInfo = getDateVars(date);
      color = getTimeOfDayColor(getTimeOfDay(date));
    }, 1000
    );
    return () => {
      clearInterval(interval);
    };
  }, [])
  */
  setTimeout(() => {
    navigation.navigate('Awake')
  }, 5000)
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.time}>7:59 AM</Text>
        <Text style={styles.date}>Friday, February 11</Text>
        <FillButton
          buttonText='Wake Up'
          onFilled={() => navigation.navigate('Home')}
        />
      </View>
    </LinearGradient>
  )
}

export default Asleep