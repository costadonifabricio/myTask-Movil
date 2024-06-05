// HomeScreen.js
import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text>Esta es la pantalla de inicio de la aplicación.</Text>
      <Link href="/login">Iniciar sesión</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
