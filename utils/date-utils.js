function getDateVars(date) {
  const week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
  var day = week[date.getDay()];
  var num = date.getDate();
  var month = months[date.getMonth()];
  var hours = date.getHours();
  var time_of_day = hours >= 12 ? 'PM' : 'AM';
  var seconds = date.getSeconds();
  var divide = (seconds % 2 === 0) ? 0 : 1;
  hours = hours % 12;
  hours = hours ? hours : 12;
  var minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  return [seconds, minutes, hours, time_of_day, day, num, month, divide];
}

function getTimeOfDay(date) {
  var hour = date.getHours();
  if (hour > 6 && hour < 12) {
    return 'Morning';
  } else if (hour >= 12 && hour < 22) {
    return 'Afternoon';
  } else {
    return 'Night';
  }
}

export { getDateVars, getTimeOfDay };