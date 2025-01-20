import 'react-native-gesture-handler'; 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonListScreen from './dossier/practica28/screens/PokemonListScreen'; 
import PokemonDetailsScreen from './dossier/practica28/screens/PokemonDetailsScreen';
import PrincipalScreen from './dossier/practica30/PrincipalScreen';



const App = () => {

  return (
    <PrincipalScreen />
  );
};

export default App;

