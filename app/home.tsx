import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { Link } from "expo-router";
import * as Animatable from "react-native-animatable";

const backgroundImageUrl =
  "https://imgs.search.brave.com/lbXbFx-qlUwE39b4Fz9jxoUVZNtPmyAt-91tZxyTS8M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/NDk0OTUzNC9lcy9m/b3RvL2ZvbmRvLWRl/LW1hZGVyYS1ncmlz/LXRleHR1cmEtYWJz/dHJhY3RhLWRlLW1h/ZGVyYS1ncmlzLndl/YnA_Yj0xJnM9MTcw/NjY3YSZ3PTAmaz0y/MCZjPTk2Z1hDdWNw/NFNzV0RXMG1zRWV5/ZGFnWTJUa05NRlk5/WXlGemVkWjJIQnc9"; // Puedes reemplazar esto con la URL de tu imagen

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: backgroundImageUrl }}
        style={styles.background}
      >
        <View style={styles.content}>
          <Text style={styles.welcomeText}>¡Bienvenido a mi Aplicación!</Text>
          <Animatable.Image
            animation="fadeInDown" // Animación de desvanecimiento hacia abajo
            duration={1000} // Duración de la animación en milisegundos
            source={require("../assets/images/goku.png")}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.buttonContainer}>
            <Link href="/login">
              <Text style={styles.button}>Iniciar sesión</Text>
            </Link>
            <Link href="/register">
              <Text style={styles.button}>Registrarse</Text>
            </Link>
          </View>
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
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "black", // Color del texto
  },
  image: {
    width: 300, // Ajusta el tamaño según tus necesidades
    height: 300, // Ajusta el tamaño según tus necesidades
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row", // Para colocar los botones en forma horizontal
  },
  button: {
    backgroundColor: "#007bff", // Color de fondo del botón
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 10, // Espacio entre los botones
    color: "#fff", // Color del texto del botón
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
