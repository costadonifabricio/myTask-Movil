import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const backgroundImageUrl =
  "https://imgs.search.brave.com/lbXbFx-qlUwE39b4Fz9jxoUVZNtPmyAt-91tZxyTS8M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/NDk0OTUzNC9lcy9m/b3RvL2ZvbmRvLWRl/LW1hZGVyYS1ncmlz/LXRleHR1cmEtYWJz/dHJhY3RhLWRlLW1h/ZGVyYS1ncmlzLndl/YnA_Yj0xJnM9MTcw/NjY3YSZ3PTAmaz0y/MCZjPTk2Z1hDdWNw/NFNzV0RXMG1zRWV5/ZGFnWTJUa05NRlk5/WXlGemVkWjJIQnc9";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = () => {
    if (!username.trim() || username.length < 5 || username.length > 10) {
      setErrorMessage(
        "El nombre de usuario debe tener entre 5 y 10 caracteres"
      );
    } else if (!email.trim()) {
      setErrorMessage("Ingrese una dirección de correo electrónico");
    } else if (!validateEmail(email)) {
      setErrorMessage("Ingrese una dirección de correo electrónico válida");
    } else if (!password.trim() || !validatePassword(password)) {
      setErrorMessage(
        "La contraseña debe tener al menos 5 caracteres, una letra mayúscula, una letra minúscula y un símbolo"
      );
    } else {
      setErrorMessage("");
      navigation.navigate("login", { username, password });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})/;
    return passwordRegex.test(password);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: backgroundImageUrl }}
        style={styles.background}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Registro</Text>
          {errorMessage ? (
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          ) : null}
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
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
    color: "black",
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
  errorMessage: {
    color: "red",
    marginBottom: 10,
  },
});
