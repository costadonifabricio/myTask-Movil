import { Link } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import * as Animatable from "react-native-animatable";

export default function NotFoundScreen() {
  return (
    <>
      <View style={styles.container}>
      <Animatable.Image
            animation="fadeInDown"
            duration={200} 
            source={require("../assets/images/notfound.png")}
          />
        <h1>404 - Página no encontrada</h1>
        <Link href="/home">Volver a Home</Link>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
