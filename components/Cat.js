import { View, Text} from "react-native";
import React from "react";
import Cafe from "./Cafe";

const Cat = () => {
  return (
    <View>
      <Text>Hello,I am...</Text>
      {/* <TextInput style={{ height: 40, borderColor: "gray", borderWidth: 1 }} /> */}
      <Cafe/>
    </View>
  );
};

export default Cat;
