import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Post {
  id: number;
  title: string;
  content: string;
}

interface FeedProps {
  posts: Post[];
}

const Feed: React.FC<FeedProps> = ({ posts }) => {
  return (
    <View>
      {posts.map((post) => (
        <View key={post.id} style={styles.postContainer}>
          <Text style={styles.postTitle}>{post.title}</Text>
          <Text>{post.content}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Feed;
