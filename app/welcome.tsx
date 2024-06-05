import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.message}>Gracias por iniciar sesión.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: "center",
  },
});
