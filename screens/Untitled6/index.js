import { useSelector } from "react-redux";
plaintext;
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, SafeAreaView, Text } from "react-native";

const SignUpPage = () => {
  const {
    entities: Signups
  } = useSelector(state => state.Signups);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Handle the sign-up logic here
    console.log(firstName, lastName, email, password);
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput style={styles.input} placeholder="Enter your first name" value={firstName} onChangeText={setFirstName} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput style={styles.input} placeholder="Enter your last name" value={lastName} onChangeText={setLastName} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry />
      </View>
      <Button title="Sign Up" onPress={handleSignUp} data={Signups} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#000000"
  },
  inputContainer: {
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6
  },
  label: {
    marginBottom: 5
  }
});
export default SignUpPage;