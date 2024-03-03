import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Button } from "react-native";

const RegistrationScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.headerText}>Register</Text>
        <Text style={styles.subText}>
          Join our community as a mentor or a mentee.
        </Text>
        <View style={styles.buttonContainer}>
          <Button title="Mentor" onPress={() => console.log("Navigate to Mentor Registration")} />
          <Button title="Mentee" onPress={() => console.log("Navigate to Mentee Registration")} />
        </View>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center"
  },
  group: {
    alignItems: "center",
    marginHorizontal: 50
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  subText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
});
export default RegistrationScreen;