import React from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';

export type Pokemon = { 
  name: string;
  url: string;
};

type Props = {
  pokemonList: Pokemon[];
  onPress: (url: string) => void;
};

const PokemonList: React.FC<Props> = ({ pokemonList, onPress }) => (
  <FlatList
    data={pokemonList}
    keyExtractor={(item) => item.name}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => onPress(item.url)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )}
  />
);

export default PokemonList;
