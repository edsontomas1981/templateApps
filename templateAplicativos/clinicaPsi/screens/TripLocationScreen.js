import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function TripLocationScreen() {
  const [origin, setOrigin] = useState({ latitude: -23.55052, longitude: -46.633308 }); // Coordenadas de exemplo para São Paulo
  const [destination, setDestination] = useState({ latitude: -23.5489, longitude: -46.6388 }); // Coordenadas de exemplo para São Paulo

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecionar Localidades</Text>
      <TextInput
        style={styles.input}
        placeholder="Origem"
        // Adicione a lógica para definir a origem com base na entrada do usuário
      />
      <TextInput
        style={styles.input}
        placeholder="Destino"
        // Adicione a lógica para definir o destino com base na entrada do usuário
      />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: (origin.latitude + destination.latitude) / 2,
          longitude: (origin.longitude + destination.longitude) / 2,
          latitudeDelta: Math.abs(origin.latitude - destination.latitude) + 0.1,
          longitudeDelta: Math.abs(origin.longitude - destination.longitude) + 0.1,
        }}
      >
        <Marker coordinate={origin} title="Origem" />
        <Marker coordinate={destination} title="Destino" />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#cac7bf',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
    marginTop: 10,
  },
});
