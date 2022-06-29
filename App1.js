import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import Logo from "./components/Logo";
import Stysheet from "./components/Stysheet";
import TextInputExample from "./components/TestInputExample";
import Cat from "./components/cat";
import Cafe from "./components/Cafe";

const App = () => {

  const showData = () => {

  }
  return (
    <View>
      <Text>Hello React Native</Text>
      <Logo />
      <Button
        onPress={showData}
        title = 'Click Me'
      />
      {/* <Stysheet/> */}
      {/* <TextInputExample/> */}
      {/* <Cafe /> */}
    </View>
  );
};

export default App;
