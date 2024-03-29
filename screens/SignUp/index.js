import { useSelector } from "react-redux";
import React from "react";
import { StyleSheet, View, TextInput, Button, SafeAreaView, Image } from "react-native";

const SignUpPage = () => {
  const {
    entities: Signups
  } = useSelector(state => state.Signups);
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.logo} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" data={Signups} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sign Up" onPress={() => {}} data={Signups} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#f9f9f9"
  },
  logoContainer: {
    marginBottom: 20
  },
  logo: {
    width: 100,
    height: 100
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  },
  buttonContainer: {
    marginTop: 10,
    width: '80%'
  }
});
export default SignUpPage;