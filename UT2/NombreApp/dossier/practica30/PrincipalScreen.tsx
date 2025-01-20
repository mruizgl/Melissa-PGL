import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

interface LocationEntry {
  latitude: number;
  longitude: number;
  timestamp: string;
}

const App = () => {
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState<LocationEntry[]>([]);


  const checkAndRequestLocationPermission = async () => {
    const permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    const result = await check(permission);

    if (result !== RESULTS.GRANTED) {
      const requestResult = await request(permission);
      return requestResult === RESULTS.GRANTED;
    }
    return true;
  };

  const saveLocation = async () => {
    const hasPermission = await checkAndRequestLocationPermission();
    if (!hasPermission) {
      Alert.alert('Permiso denegado', 'Es necesario otorgar permisos de ubicación para guardar la posición.');
      return;
    }


    Geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const timestamp = new Date().toISOString();

        const newEntry: LocationEntry = { latitude, longitude, timestamp };

        try {
          const storedData = await AsyncStorage.getItem('location-history');
          const parsedData: LocationEntry[] = storedData ? JSON.parse(storedData) : [];
          const updatedData = [...parsedData, newEntry];
          await AsyncStorage.setItem('location-history', JSON.stringify(updatedData));

          setMessage(`Guardado: Lat ${latitude}, Lon ${longitude}`);
        } catch (error) {
          Alert.alert('Error', 'No se pudo guardar la ubicación.');
        }
      },
      (error) => {
        console.error('Error al obtener la ubicación:', error);
        Alert.alert('Error', 'No se pudo obtener la ubicación actual.');
      },
      {
        enableHighAccuracy: false, 
        timeout: 30000,            
        maximumAge: 1000,
      }
    );
  };

  const loadHistory = async () => {
    try {
      const storedData = await AsyncStorage.getItem('location-history');
      const parsedData: LocationEntry[] = storedData ? JSON.parse(storedData) : [];
      setHistory(parsedData);
    } catch (error) {
      Alert.alert('Error', 'No se pudo cargar el historial.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Guardar Ubicación Actual" onPress={saveLocation} />
      <Text style={styles.message}>{message}</Text>

      <Button title="Ver Historial de Ubicaciones" onPress={loadHistory} />
      {history.length > 0 ? (
        <View style={styles.history}>
          {history.map((entry, index) => (
            <Text key={index} style={styles.historyItem}>
              {`#${index + 1} - Lat: ${entry.latitude}, Lon: ${entry.longitude}, Hora: ${entry.timestamp}`}
            </Text>
          ))}
        </View>
      ) : (
        <Text style={styles.noHistory}>No hay historial disponible.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  message: {
    marginVertical: 20,
    fontSize: 16,
    color: 'green',
    textAlign: 'center',
  },
  history: {
    marginTop: 20,
  },
  historyItem: {
    fontSize: 14,
    marginBottom: 10,
    color: 'black',
  },
  noHistory: {
    marginTop: 20,
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
});

export default App;
