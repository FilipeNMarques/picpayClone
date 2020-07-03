import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'

import Navigation from './Navigation'



const App = () => {

  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor='#000'/>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    </>
  )
}

export default App;