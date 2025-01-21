import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { NewsContext } from '../context/NewsContext';
import { WebView } from 'react-native-webview';

type RouteParams = {
  articleId: string;
};

export default function ArticleScreen() {

  const { params } = useRoute<RouteProp<{ Article: RouteParams }, 'Article'>>();
  const { articles } = useContext(NewsContext);

  const selectedArticle = articles.find((article) => article.id === params.articleId);

  if (!selectedArticle) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Artículo no encontrado.</Text>
      </View>
    );
  }

  return <WebView source={{ uri: selectedArticle.links[0].url }} style={{ flex: 1 }} />;
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});
