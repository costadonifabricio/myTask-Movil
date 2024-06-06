import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function EditTaskScreen({ route }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    // Aquí iría el código para cargar los datos de la tarea
  }, []);

  const handleSubmit = () => {
    // Aquí iría el código para editar la tarea
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Autor"
        value={author}
        onChangeText={setAuthor}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha"
        value={date}
        onChangeText={setDate}
      />
      <View style={styles.buttonContainer}>
        <Button title="Editar tarea" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  input: {
    width: "30%", 
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    width: "30%",
    marginTop: 10,
  },
});
