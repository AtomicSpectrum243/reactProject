import { View, Text } from 'react-native'
import React from 'react'

const MyCustomTextWith = (props) => {
    return (
        <View style={{alignItems: 'center'}}>
            <Text>Your First Name is {props.fname1} and Last name is {props.lname1}</Text>
            <Text>Your First Name is {props.fname2} and Last name is {props.lname2}</Text>
        </View>
    )
};

export default MyCustomTextWith