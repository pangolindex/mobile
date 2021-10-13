import React from 'react'
import Route from './src/Route'
import { StatusBar } from 'react-native'
const App = () => {
  return (
    <>
      <Route />
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
    </>
  )
}

export default App
