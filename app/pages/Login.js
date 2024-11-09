import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "./../Shared/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Login() {
  return (
    <View>
      <Image source={require("./../../assets/images/image13.png")} />
      <View style={styles.container}>
        <Text style={styles.welcomText}>Wellcom to Codebox</Text>
        <Text style={{ textAlign: "center", marginTop: 80, fontSize: 20 }}>
          Login/Signup
        </Text>
        <View style={styles.button}>
          <FontAwesome
            name="google"
            size={24}
            color="white"
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: Colors.white }}>Sign IN with Google</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginTop: -25,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  welcomText: {
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
