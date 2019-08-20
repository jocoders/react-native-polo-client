import React from 'react'
import { Provider, observer } from 'mobx-react'
import newDataStore from './src/mobx/DataStore'
import AppNavigator from './src/AppNavigator'

const App = observer(() => {
  return (
    <AppNavigator />
  )
})

export default App
