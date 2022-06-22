import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import styles from './components/stySheet';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>React Native</Text>
    </View>
  )
}

export default App
