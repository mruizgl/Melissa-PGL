import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from './NewsScreen'; 
import NewsDetailScreen from './NewsDetailScreen'; 


type RootStackParamList = {
  NewsScreen: undefined; 
  NewsDetail: { htmlContent: string };
  [key: string]: object | undefined; 
};

const Stack = createStackNavigator<RootStackParamList>();

const PrincipalScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NewsScreen">
        <Stack.Screen name="NewsScreen" component={NewsScreen} />
        <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PrincipalScreen;
