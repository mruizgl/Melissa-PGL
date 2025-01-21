import React, { useContext } from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NewsContext, Article } from '../context/NewsContext';

export default function HomeScreen({ navigation }: { navigation: any }) {
  const { articles, readArticles, markAsRead } = useContext(NewsContext);

  const renderItem = ({ item }: { item: Article }) => (
    <TouchableOpacity
      style={[
        styles.articleItem,
        readArticles.has(item.links[0].url) && styles.readArticle,
      ]}
      onPress={() => {
        markAsRead(item.links[0].url);
        navigation.navigate('Article', { articleId: item.id });
      }}
    >
      <Text style={styles.articleTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={articles}
      keyExtractor={(item) => item.id || item.title}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  articleItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  articleTitle: {
    fontSize: 16,
  },
  readArticle: {
    backgroundColor: '#e0e0e0',
  },
});
