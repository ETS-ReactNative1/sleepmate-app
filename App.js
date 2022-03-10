import React from 'react'
import { getProfilesDatabase, getNotificationDatabase } from './utils/database-utils'
import createStore from './redux'
import { Provider } from 'react-redux'
import AppNavigator from './navigation/navigation'

getProfilesDatabase();
getNotificationDatabase();

const store = createStore();

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}