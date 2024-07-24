import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SelectTripScreen() {
  const trips = [
    { id: '1', origem: 'Rua A, 123', destino: 'Rua B, 456', horario: '12:34 PM', motorista: 'João Silva', tarifa: 'R$ 25,00' },
    { id: '2', origem: 'Avenida C, 789', destino: 'Avenida D, 101', horario: '01:45 PM', motorista: 'Maria Souza', tarifa: 'R$ 30,00' },
    // Adicione mais viagens conforme necessário
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.tripInfo}>
        <View style={styles.tripDetails}>
          <Icon name="map-marker" size={20} color="#FF6347" />
          <Text style={styles.tripText}>Origem: {item.origem}</Text>
        </View>
        <View style={styles.tripDetails}>
          <Icon name="map-marker" size={20} color="#4682B4" />
          <Text style={styles.tripText}>Destino: {item.destino}</Text>
        </View>
        <View style={styles.tripDetails}>
          <Icon name="clock-o" size={20} color="#000000" />
          <Text style={styles.tripText}>Horário: {item.horario}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.driverName}>Motorista: {item.motorista}</Text>
        <Text style={styles.tripFare}>{item.tarifa}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecionar Viagem</Text>
      <FlatList
        data={trips}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  tripInfo: {
    marginBottom: 10,
  },
  tripDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  tripText: {
    marginLeft: 10,
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  driverName: {
    fontSize: 16,
  },
  tripFare: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
