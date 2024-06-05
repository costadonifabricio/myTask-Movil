import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.message}>Gracias por iniciar sesión.</Text>
      <Link href="/listask" style={styles.link}>Lista de tareas</Link>
      <Link href="/addtask" style={styles.link}>Agregar tarea</Link>
      <Link href="/editask" style={styles.link}>Editar tarea</Link>
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
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  message: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
  },
  link: {
    fontSize: 18,
    color: "#1E90FF",
    marginBottom: 10,
    textDecorationLine: "underline",
  },
});
