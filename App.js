import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import styles from './components/stySheet';
import TextInputExample from './components/TextInputExample'
import Cat from './components/Cat';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={[styles.title]}>React Native</Text> */}
      {/* <TextInputExample/> */}
      <Cat/>
    </View>
  )
}

export default App
