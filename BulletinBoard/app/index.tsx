import React, { useState } from 'react';
import { Text, View, Button, TextInput, Alert, StyleSheet, ScrollView } from 'react-native';

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function Index() {
  const [isCreatingPost, setIsCreatingPost] = useState(false); // To toggle between the feed and post creation form
  const [posts, setPosts] = useState<Post[]>([]); // State to manage posts
  const [title, setTitle] = useState(''); // To manage title input
  const [content, setContent] = useState(''); // To manage content input

  // Function to handle post submission
  const handleSubmit = () => {
    if (!title || !content) {
      Alert.alert('Error', 'Both title and content are required.');
      return;
    }

    // Create new post
    const newPost: Post = {
      id: Date.now(), // Using timestamp as a unique ID
      title,
      content,
    };

    setPosts((prevPosts) => [...prevPosts, newPost]); // Update posts state
    Alert.alert('Success', 'Your post has been created!');
    setTitle(''); // Clear the title input
    setContent(''); // Clear the content input
    setIsCreatingPost(false); // Go back to the feed view
  };

  return (
    <View style={styles.container}>
      {isCreatingPost ? (
        // Post creation form
        <View>
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
          <Button
            title="Cancel"
            onPress={() => setIsCreatingPost(false)}
            color="red"
            style={styles.cancelButton}
          />
        </View>
      ) : (
        // Feed of posts
        <View style={styles.feedContainer}>
          <Text style={styles.header}>Post Feed</Text>
          <ScrollView style={styles.scrollView}>
            {posts.length === 0 ? (
              <Text>No posts available.</Text>
            ) : (
              posts.map((post) => (
                <View key={post.id} style={styles.postContainer}>
                  <Text style={styles.postTitle}>{post.title}</Text>
                  <Text>{post.content}</Text>
                </View>
              ))
            )}
          </ScrollView>
          <Button title="Create Post" onPress={() => setIsCreatingPost(true)} />
        </View>
      )}
    </View>
  );
}

// Styling
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
  feedContainer: {
    flex: 1,
  },
  scrollView: {
    marginBottom: 20,
  },
  postContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
