import React from 'react';
import { FlatList, TextInput, Text, View, TouchableOpacity } from 'react-native';

type Pokemon = {
  name: string;
  url: string;
};

type Props = {
  query: string;
  onSearch: (text: string) => void;
  searchResults: Pokemon[];
  onPress: (url: string) => void;
};

const SearchPokemon: React.FC<Props> = ({ query, onSearch, searchResults, onPress }) => (
  <View>
    <TextInput
      style={{ borderWidth: 1, padding: 10 }}
      placeholder="Search Pokémon"
      value={query}
      onChangeText={onSearch}
    />
    <FlatList
      data={searchResults}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPress(item.url)}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

export default SearchPokemon;
