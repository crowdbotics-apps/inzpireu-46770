import { useSelector } from "react-redux";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Button, View } from "react-native";

const RoleManagement = () => {
  const {
    entities: UserDetails
  } = useSelector(state => state.UserDetails);
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.buttonContainer}>
          <Button title="Mentor" onPress={() => console.log("Mentor Selected")} data={UserDetails} />
          <Button title="Mentee" onPress={() => console.log("Mentee Selected")} data={UserDetails} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  scrollViewContent: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%"
  }
});
export default RoleManagement;