import React from 'react'
import { getProfilesDatabase } from './utils/database-utils'
import createStore from './redux'
import { Provider } from 'react-redux'
import AppNavigator from './navigation/navigation'
getProfilesDatabase();

const store = createStore();

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}