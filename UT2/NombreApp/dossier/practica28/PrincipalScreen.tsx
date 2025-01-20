import 'react-native-gesture-handler'; 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonListScreen from './screens/PokemonListScreen'; 
import PokemonDetailsScreen from './screens/PokemonDetailsScreen';
import SearchPokemonScreen from './screens/SearchPokemonScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const PokemonStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="PokemonList" component={PokemonListScreen} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetailsScreen} />
    </Stack.Navigator>
  );

  const SearchStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchPokemonScreen} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetailsScreen} />
    </Stack.Navigator>
  );

const PrincipalScreen = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Pokémon List" component={PokemonStack} />
        <Tab.Screen name="Search Pokémon" component={SearchStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default PrincipalScreen;

