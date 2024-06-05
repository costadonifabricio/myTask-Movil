import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = () => {
    if (!username.trim()) {
      setErrorMessage("Ingrese un nombre de usuario");
      setSuccessMessage("");
    } else if (!password.trim()) {
      setErrorMessage("Ingrese una contraseña");
      setSuccessMessage("");
    } else {
      // Verificamos las credenciales del usuario (simulado)
      if (username === "usuario" && password === "contraseña") {
        // Si las credenciales son válidas, redirigimos al usuario a la pantalla de inicio
        setErrorMessage("");
        setSuccessMessage("¡Inicio de sesión exitoso!");
        // Limpia los campos de entrada después del inicio de sesión exitoso
        setUsername("");
        setPassword("");
      } else {
        // Si las credenciales son inválidas, mostramos un mensaje de error
        setErrorMessage("Credenciales incorrectas. Inténtelo de nuevo.");
        setSuccessMessage("");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      {successMessage ? (
        <Text style={styles.successMessage}>{successMessage}</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("register")}>
        <Text style={styles.link}>¿No tienes una cuenta? Regístrate</Text>
      </TouchableOpacity>
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
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  link: {
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline",
  },
  errorMessage: {
    color: "red",
    marginBottom: 10,
  },
  successMessage: {
    color: "green",
    marginBottom: 10,
  },
});
