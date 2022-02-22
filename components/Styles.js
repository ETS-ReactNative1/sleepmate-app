import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003366'
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#f7f7f7',
    marginVertical: 36
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36
  },
  time: {
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#f7f7f7',
    marginBottom: 5
  },
  date: {
    fontSize: 20,
    letterSpacing: 0.25,
    color: '#f7f7f7',
    marginBottom: 36
  }
})

export { styles }