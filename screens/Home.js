import { React, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from '../components/Styles'
import { LinearGradient } from 'expo-linear-gradient'
import FillButton from '../components/FillButton'
import { getDateVars, getTimeOfDay } from '../utils/date-utils'
import { getTimeOfDayColor } from '../utils/color-utils'

const Home = ({ navigation }) => {

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

  return (
    <LinearGradient
      colors={[`rgba${color}`, 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.time}>{dateInfo[2]}</Text><Text style={[styles.time, { opacity: dateInfo[7] }]}>:</Text><Text style={styles.time}>{dateInfo[1]} {dateInfo[3]}</Text>
        </View>
        <Text style={styles.date}>{dateInfo[4]}, {dateInfo[6]} {dateInfo[5]}</Text>
        <FillButton
          buttonText='Sleep'
          onFilled={() => navigation.navigate('Asleep')}
        />
      </View>
    </LinearGradient>
  )
  
}



export default Home