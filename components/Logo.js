import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View>
      <Text style={StyleSheet.textLogo}>TNI</Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    TextLogo : {
        color: "red",
        fontSize : 40
    }
})