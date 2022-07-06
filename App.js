import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import User from './components/User'
import Logo from './components/Logo'
import LotOfGreetings from './components/LotOfGreetings'
import MyCustomTextWith from './components/MyCustomTextWith'
import AppComponent from './components/AppComponent'
import Count from './components/Count'
import InputText from './components/InputText'

const App = () => {
  return (
    <view>
      <InputText/>
    </view>
  )
}

export default App

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   }
// })