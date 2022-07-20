import { StyleSheet, View, TextInput , Button } from "react-native";
import React, {useState} from "react";

const UserNamePassword = () => {
  const [name, setEmail] = useState("");
  const [email, setPassword] = useState("");

    const showAlert = ()=> {
      if (!name) alert("Please Enter Name");
      else if (!email) alert("Please Enter Email");
      else alert(`Name : ${name}\n Email : ${email}`);
    }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 400,
      }}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Name"
          onChangeText={(name) => setEmail(name)}
          value={name}
        />

        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Email"
          onChangeText={(email) => setPassword(email)}
          value={email}
        />

        <View style={{ marginTop: 15 }}>
          <Button onPress={showAlert} title="Submit" color="#800080" />
        </View>
      </View>
    </View>
  );
};

export default UserNamePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    width: '100%',
    backgroundColor: '#E6E6FA',
    borderRadius: 10,
  },
  textInputStyle: {
    width: "100%",
    height: 40,
    paddingHorizontal: 15,
    borderWidth: 1,
    marginTop: 15,
  },
});