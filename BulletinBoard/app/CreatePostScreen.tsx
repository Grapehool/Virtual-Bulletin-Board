import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const CreatePostScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!title || !content) {
      Alert.alert('Error', 'Both fields are required.');
      return;
    }

    // Handle post creation logic (e.g., send data to API)
    Alert.alert('Post Created', 'Your post was successfully created!');
    setTitle('');
    setContent('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a Post</Text>

      <TextInput
        style={styles.input}
        placeholder="Post Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.textArea}
        placeholder="Post Content"
        value={content}
        onChangeText={setContent}
        multiline
      />

      <Button title="Submit Post" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  textArea: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
});

export default CreatePostScreen;
