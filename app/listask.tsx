import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TaskListScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/tasks.json")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <View style={styles.container}>
      {tasks.map((task) => (
        <TouchableOpacity
          key={task.id}
          style={styles.taskItem}
          onPress={() => navigation.navigate("viewtask", { taskId: task.id })}
        >
          <Text style={styles.taskTitle}>{task.title}</Text>
        </TouchableOpacity>
      ))}
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
  taskItem: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    width: "20%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
