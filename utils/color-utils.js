function getTimeOfDayColor(time_of_day) {
  if (time_of_day === 'Morning') {
    return '(258, 123, 170, 1)';
  } else if (time_of_day === 'Afternoon') {
    return '(0, 51, 102, 1)';
  } else if (time_of_day === 'Night') {
    return '(0, 51, 102, 1)';
  }
}

export { getTimeOfDayColor }