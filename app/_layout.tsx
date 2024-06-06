import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./login";
import HomeScreen from "./home";
import RegisterScreen from "./register";
import WelcomeScreen from "./welcome";
import NotFoundScreen from "./+not-found";
import AddTaskScreen from "./addtask";
import TaskListScreen from "./listask";
import EditTaskScreen from "./editask";
import ViewTaskScreen from "./viewtask";
import SettingsScreen from "./settings";

const Stack = createStackNavigator();

export default function RootLayout() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="+not-found" component={NotFoundScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="register" component={RegisterScreen} />
      <Stack.Screen name="addtask" component={AddTaskScreen} />
      <Stack.Screen name="listask" component={TaskListScreen} />
      <Stack.Screen name="editask" component={EditTaskScreen} />
      <Stack.Screen name="viewtask" component={ViewTaskScreen} />
      <Stack.Screen name="settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
