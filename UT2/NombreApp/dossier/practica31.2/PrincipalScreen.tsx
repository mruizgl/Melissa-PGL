import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NewsProvider } from './context/NewsContext';
import HomeScreen from './screens/HomeScreen';
import ArticleScreen from './screens/ArticleScreen';

const Stack = createStackNavigator();

export default function PrincipalScreen() {
  return (
    <NewsProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Noticias' }} />
          <Stack.Screen name="Article" component={ArticleScreen} options={{ title: 'Artículo' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NewsProvider>
  );
}