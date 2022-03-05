import React from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from '../components/Styles'
import { LinearGradient } from 'expo-linear-gradient'
import IconButton from '../components/IconButton'
import { Calendar } from 'react-native-calendars'

const CalendarModal = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['rgba(0, 51, 102, 1)', 'rgba(41, 43, 44, 1)']}
      style={styles.container}
    >
      <View style={styles.modalHeaderContainer}>
        <IconButton />
        <Text style={styles.smallTitle}>SELECT DATE</Text>
        <IconButton
          iconName='close-circle-outline'
          onPress={() => navigation.goBack()}
        />
      </View>
      <View>
        <Calendar
          current={'2022-03-04'}
          maxDate={'2022-03-31'}
          onDayPress={day => {
            console.log('selected day', day)
          }}
          theme={{
            backgroundColor: 'transparent',
            calendarBackground: 'transparent',
            textSectionTitleColor: '#f7f7f7',
            textSectionTitleDisabledColor: '#f7f7f7',
            selectedDayBackgroundColor: '#90acc8',
            selectedDayTextColor: '#f7f7f7',
            todayTextColor: '#90acc8',
            dayTextColor: '#f7f7f7',
            textDisabledColor: '#505050',
            arrowColor: '#f7f7f7',
            disabledArrowColor: '#90acc8',
            monthTextColor: '#f7f7f7',
            indicatorColor: '#90acc8',
            textMonthFontWeight: 'bold',
          }}
          style={{ marginTop: 16 }}
        />
      </View>
    </LinearGradient>
  )
}

export default CalendarModal