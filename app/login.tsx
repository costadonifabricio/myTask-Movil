import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const backgroundImageUrl =
  "https://imgs.search.brave.com/lbXbFx-qlUwE39b4Fz9jxoUVZNtPmyAt-91tZxyTS8M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/NDk0OTUzNC9lcy9m/b3RvL2ZvbmRvLWRl/LW1hZGVyYS1ncmlz/LXRleHR1cmEtYWJz/dHJhY3RhLWRlLW1h/ZGVyYS1ncmlzLndl/YnA_Yj0xJnM9MTcw/NjY3YSZ3PTAmaz0y/MCZjPTk2Z1hDdWNw/NFNzV0RXMG1zRWV5/ZGFnWTJUa05NRlk5/WXlGemVkWjJIQnc9"; // Puedes reemplazar esto con la URL de tu imagen

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
      <View style={styles.background} />
      <View style={styles.content}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    zIndex: -1,
  },
  content: {
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
    width: "30%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  button: {
    width: "30%",
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
