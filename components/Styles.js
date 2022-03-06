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
  modalHeaderContainer: {
    marginTop: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  headerContainer: {
    marginTop: 32,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  extendedHeaderContainer: {
    marginTop: 32,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-evenly'
  },
  scrollView: {
    display: 'flex',
    width: '100%'
  },
  title: {
    fontSize: 24,
    letterSpacing: 0.25,
    color: '#f7f7f7',
    marginTop: 32,
    marginBottom: 32,
    fontWeight: '600'
  },
  smallTitle: {
    fontSize: 18,
    letterSpacing: 3,
    color: '#f7f7f7',
    fontWeight: '600'
  },
  subtitle: {
    fontSize: 16,
    letterSpacing: 0.5,
    color: '#f7f7f7',
    fontWeight: '600',
    marginTop: 18,
    alignSelf: 'center'
  },
  time: {
    fontSize: 48,
    letterSpacing: 0.25,
    color: '#f7f7f7',
    marginBottom: 9,
    fontWeight: '600'
  },
  date: {
    fontSize: 20,
    letterSpacing: 0.25,
    color: '#f7f7f7',
    marginBottom: 36,
    fontWeight: '600'
  },
  chartContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  chartHeading: {
    color: '#f7f7f7',
    fontWeight: '600'
  },
  chartLabel: {
    color: '#f7f7f7'
  },
  xAxisLabelContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    width: '90%',
    marginBottom: 32
  },
  yAxisLabelContainer: {
    display: 'flex',
    width: 50,
    height: 200,
    justifyContent: 'space-around'
  }
})

const contactButtons = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(144, 172, 200, 0.25)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
    borderRadius: 10,
    marginBottom: 16
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f7f7f7',
    flex: 2
  }
})

const solidButtons = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 50,
    elevation: 3,
    backgroundColor: '#90acc8',
  },
  text: {
    fontSize: 20,
    letterSpacing: 0.25,
    color: '#f7f7f7',
    fontWeight: '600',
  }
})

const displayFields = StyleSheet.create({
  field: {
    backgroundColor: 'rgba(144, 172, 200, 0.25)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    borderRadius: 10,
    marginBottom: 16,
    padding: 16
  }
})

const displayButtons = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(144, 172, 200, 0.25)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 10,
    marginBottom: 16,
    padding: 16
  }
})

const fillButtons = StyleSheet.create({
  button: {
    borderRadius: 10
  }
})

const iconButtons = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 9,
    paddingHorizontal: 18,
    width: 72,
  },
  image: {
    width: 50,
    height: 50
  }
})

const borderedPics = StyleSheet.create({
  image: {
    aspectRatio: 1,
    resizeMode: 'cover',
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#f7f7f7',
  }
})

export { styles, solidButtons, fillButtons, iconButtons, contactButtons, borderedPics, displayFields, displayButtons }