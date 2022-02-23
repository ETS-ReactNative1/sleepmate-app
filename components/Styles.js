import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#003366'
  },
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerContainer: {
    margin: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  chartContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  chartLabelContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'left',
    width: 52,
    position: 'absolute'
  },
  chartLabelText: {
    marginLeft: 10,
    marginVertical: 24,
    fontFamily: 'Lato',
    fontWeight: 600,
    color: '#f7f7f7',
    fontSize: 12
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Lato',
    letterSpacing: 0.25,
    color: '#f7f7f7',
    marginVertical: 36
  },
  smallTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 3,
    color: '#f7f7f7',
    fontFamily: 'Lato',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: '#f7f7f7',
    fontFamily: 'Lato',
    marginTop: 18
  },
  time: {
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#f7f7f7',
    marginTop: 36,
    marginBottom: 9,
    fontFamily: 'Lato',
  },
  date: {
    fontSize: 20,
    letterSpacing: 0.25,
    color: '#f7f7f7',
    marginBottom: 36,
    fontFamily: 'Lato',
  }
})

const solidButtons = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#90acc8',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#f7f7f7',
    fontFamily: 'Lato',
  }
})

const iconButtons = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    paddingHorizontal: 18,
    width: 72,
    fontFamily: 'Lato',
  },
  image: {
    width: 50,
    height: 50
  }
})

const borderedPics = StyleSheet.create({
  image: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#f7f7f7',
    width: 150,
    height: 150
  }
})

export { styles, solidButtons, iconButtons, borderedPics }