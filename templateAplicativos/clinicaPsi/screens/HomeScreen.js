import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width: screenWidth } = Dimensions.get('window');

const carouselItems = [
  { uri: 'https://via.placeholder.com/200', title: 'Veículo 1' },
  { uri: 'https://via.placeholder.com/200', title: 'Veículo 2' },
  { uri: 'https://via.placeholder.com/200', title: 'Veículo 3' },
  { uri: 'https://via.placeholder.com/200', title: 'Veículo 4' },
];

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/images/backgroundTelas.png')}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.viewMiniBtns}>
          <TouchableOpacity style={styles.miniBtns}>
            <Icon name="calendar" size={45} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.miniBtnsMeio}>
            <Icon name="car" size={45} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.miniBtnsMeio}>
            <Icon name="history" size={45} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.miniBtnsMeio}>
            <Icon name="smile-o" size={45} color="#000000" />
          </TouchableOpacity>
        </View>

        <View style={styles.cardVideo}>
          <View style={styles.header}>
            <Text style={styles.title}>Última Viagem</Text>
            <Icon name="car" size={20} color="#000000" />
          </View>
          <View style={styles.tripInfo}>
            <View style={styles.tripDetails}>
              <Icon name="map-marker" size={20} color="#FF6347" />
              <Text style={styles.tripText}>Origem: Rua A, 123</Text>
            </View>
            <View style={styles.tripDetails}>
              <Icon name="map-marker" size={20} color="#4682B4" />
              <Text style={styles.tripText}>Destino: Rua B, 456</Text>
            </View>
            <View style={styles.tripDetails}>
              <Icon name="clock-o" size={20} color="#000000" />
              <Text style={styles.tripText}>Horário: 12:34 PM</Text>
            </View>
          </View>
          <View style={styles.footer}>
            <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.driverImage} />
            <Text style={styles.driverName}>Motorista: João Silva</Text>
            <Text style={styles.tripFare}>R$ 25,00</Text>
          </View>
        </View>

        <View style={styles.carouselContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContent}
          >
            {carouselItems.map((item, index) => (
              <TouchableOpacity key={index} style={styles.carouselItem}>
                <Image source={{ uri: item.imageUrl }} style={styles.carouselImage} />
              </TouchableOpacity>
            ))}
            <View style={{ width: 30 }} />
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  cardVideo: {
    marginTop: 15,
    marginBottom: 20,
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    marginTop: 0,
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#aaaaaa',
    borderRadius: 15,
    height: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagem: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    padding: 5,
  },
  miniBtns: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
  },
  miniBtnsMeio: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  viewMiniBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  carouselContainer: {
    marginTop: 5,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  carouselContent: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 10,
  },
  carouselItem: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: screenWidth - 120,
    padding: 40,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  carouselImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
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
  driverImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  driverName: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  tripFare: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
