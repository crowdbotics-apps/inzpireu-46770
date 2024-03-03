import { useSelector } from "react-redux";
import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView, StyleSheet, Button } from "react-native";

const WelcomeScreen = ({
  navigation
}) => {
  const {
    entities: Signups
  } = useSelector(state => state.Signups);
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group}>
          <Image style={styles.logo} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <Text style={styles.text}>Join Our Mentoring Platform!</Text>
          <Text style={styles.subText}>
            Connect, learn, and grow with experts.
          </Text>
          <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} color="#007BFF" data={Signups} style={styles.TRCYFVUn} />
        </View>
        <Text style={styles.footer}>
          Empowering connections, one mentorship at a time.
        </Text>
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
  },
  TRCYFVUn: {
    position: "absolute",
    top: 0,
    left: 157,
    width: 100
  }
});
export default WelcomeScreen;