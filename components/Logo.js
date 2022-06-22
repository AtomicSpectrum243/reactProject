import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Logo = () => {
    return (
        <View>
            <Text style={styles.textLogo}>TNI</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textLogo:{
        color:"blue",
        fontSize:30
    }
})

export default Logo