import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import User from './components/User'
import Logo from './components/Logo'
import LotOfGreetings from './components/LotOfGreetings'
import MyCustomTextWith from './components/MyCustomTextWith'
import AppComponent from './components/AppComponent'
import Count from './components/Count'
import InputText from './components/InputText'
import UserNamePassword from './components/UserNamePassword'

const App = () => {
  return (
    <view>
      <UserNamePassword/>
    </view>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFC0CB",
    height: 500,
    padding: 10,
  },
})