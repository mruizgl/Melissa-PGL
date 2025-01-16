import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import { fetchPokemonDetails } from '../service/PokemonService';

const PokemonDetailsScreen: React.FC<{ route: any }> = ({ route }) => {
  const { url } = route.params;
  const [pokemon, setPokemon] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPokemonDetails(url)
      .then(setPokemon)
      .catch(() => setError('Failed to load Pokémon details.'));
  }, [url]);

  if (error) return <Text>{error}</Text>;

  if (!pokemon) return <Text>Loading...</Text>;

  const stats = pokemon.stats && pokemon.stats.length > 0 ? pokemon.stats.map((stat: any) => (
    <View key={stat.stat.name} style={styles.statContainer}>
      <Text style={styles.statName}>{stat.stat.name}</Text>
      <Text style={styles.statValue}>{stat.base_stat}</Text>
    </View>
  )) : null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: pokemon.sprites.front_default }}
          style={styles.mainImage}
        />
      </View>
      
      <Text style={styles.pokemonName}>{pokemon.name.toUpperCase()}</Text>

      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>Stats</Text>
        {stats ? stats : <Text>No stats available.</Text>}
      </View>

      <Text style={styles.sectionTitle}>Sprites</Text>
      <FlatList
        horizontal
        data={Object.values(pokemon.sprites).filter((sprite) => typeof sprite === 'string')}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => <Image source={{ uri: item }} style={styles.spriteImage} />}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  mainImage: {
    width: 150,
    height: 150,
    borderRadius: 75, 
    borderWidth: 2,
    borderColor: '#ddd',
  },
  pokemonName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  statName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statValue: {
    fontSize: 18,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    width: '100%',
    textAlign: 'center',
  },
  spriteImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
});

export default PokemonDetailsScreen;
