import { View, Text } from 'react-native'
import React from 'react'
import MyCustomTextWith from './MyCustomTextWith'

const AppComponent = () => {
    return (
        <View style={{justifyContent: 'center' ,alignItems: 'center',top:50}}>
            <MyCustomTextWith fname1='test1' lname1='test1'/>
            <MyCustomTextWith fname2='test2' lname2='test2'/>
        </View>
      )
    }

export default AppComponent