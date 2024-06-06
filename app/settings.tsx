import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuraciones de la aplicación</Text>
      <TouchableOpacity style={styles.settingItem}>
        <Text style={styles.settingText}>Cambiar a modo oscuro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingItem}>
        <Text style={styles.settingText}>Cambiar de idioma</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  settingItem: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: "30%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  settingText: {
    fontSize: 18,
    color: "#333",
  },
});
