import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./login";
import HomeScreen from "./home";
import RegisterScreen from "./register";

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
