import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
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
    backgroundColor: "#E6E6FA",
    height: 500,
    padding: 10,
  },
});