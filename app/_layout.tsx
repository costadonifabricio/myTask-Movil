import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./login";
import HomeScreen from "./home";
import RegisterScreen from "./register";
import WelcomeScreen from "./welcome";
import NotFoundScreen from "./+not-found";

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator

    >
      <Stack.Screen name="+not-found" component={NotFoundScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
