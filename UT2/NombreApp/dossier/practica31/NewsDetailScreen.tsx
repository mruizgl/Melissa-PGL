import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const NewsDetailScreen = ({ route }: any) => {
  const { htmlContent } = route.params;

  return (
    <View style={styles.container}>
      <WebView originWhitelist={['*']} source={{ html: htmlContent }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default NewsDetailScreen;
