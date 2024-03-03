import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group}>
          <Image style={styles.logo} source={require("./InzpireU (4).png")} />
          <Text style={styles.text}>
            Welcome to our mentoring platform!
          </Text>
          <Text style={styles.subText}>
            Connect, learn, and grow with experts.
          </Text>
        </View>
        <Text style={styles.footer}>Empowering connections, one mentorship at a time.</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  group: {
    alignItems: "center"
  },
  logo: {
    height: 180,
    width: 180,
    padding: 40,
    borderRadius: 30,
    margin: 40
  },
  text: {
    textAlign: "center",
    fontSize: 28,
    color: "#828AB0",
    fontWeight: "700"
  },
  subText: {
    textAlign: "center",
    fontSize: 20,
    color: "#828AB0",
    fontWeight: "500",
    marginTop: 10
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    color: "#828AB0",
    fontWeight: "700",
    marginTop: 20
  }
});
export default WelcomeScreen;