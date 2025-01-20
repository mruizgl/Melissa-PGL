import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import * as rssParser from 'react-native-rss-parser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const NewsScreen = () => {
  type RootStackParamList = {
    NewsScreen: undefined; 
    NewsDetail: { htmlContent: string };
    [key: string]: object | undefined; 
  };

 
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'NewsScreen'>>();

  const [articulos, setArticulos] = useState<rssParser.Feed | null>(null);
  const url = 'https://www.xataka.com/feedburner.xml';

  
  const getCache = async () => {
    try {
      const response = await axios.get(url);
      const responseData = await rssParser.parse(response.data);
      await AsyncStorage.setItem(url, JSON.stringify(responseData));
      setArticulos(responseData);
    } catch (error) {
      const cachedData = await AsyncStorage.getItem(url);
      if (cachedData) {
        setArticulos(JSON.parse(cachedData));
      }
    }
  };

  useEffect(() => {
    getCache();
  }, []);

  const handlePress = (htmlContent: string) => {
    navigation.navigate('NewsDetail', { htmlContent });
  };

  return (
    <View style={styles.container}>
      {articulos ? (
        <FlatList
          data={articulos.items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item.content)}>
              <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 10,
  },
});

export default NewsScreen;
