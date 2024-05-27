import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import YouTubeEmbed from '../components/YouTubeEmbed';

const { width: screenWidth } = Dimensions.get('window');

const carouselItems = [
  {
    title: "Pergunta 1",
    text: "Resposta para a pergunta 1.",
  },
  {
    title: "Pergunta 2",
    text: "Resposta para a pergunta 2.",
  },
  {
    title: "Pergunta 3",
    text: "Resposta para a pergunta 3.",
  },
  // Adicionando um item vazio para indicar mais perguntas
  {
    title: "Mais perguntas...",
    text: "Toque para rolar mais perguntas.",
  },
];

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/images/backgroundTelas.png')}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View>
              <Text style={styles.titulo}>Olá, Edson! 👋</Text>
            </View>
            <View>
              <Image
                source={require('../assets/images/icone.png')}
                style={styles.imagem}
              />
            </View>
          </View>
        </View>

        <View style={styles.viewMiniBtns}>
          <TouchableOpacity style={styles.miniBtns}>
            <Icon name="calendar" size={45} color="#ab896f" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.miniBtnsMeio}>
            <Icon name="stethoscope" size={45} color="#ab896f" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.miniBtnsMeio}>
            <Icon name="medkit" size={45} color="#ab896f" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.miniBtnsMeio}>
            <Icon name="smile-o" size={45} color="#ab896f" />
          </TouchableOpacity>
        </View>
        <View style={styles.cardVideo}>
          <YouTubeEmbed style={styles.video} videoId="oWdbRuUhwNQ" />
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
                <Text style={styles.carouselTitle}>{item.title}</Text>
                <Text style={styles.carouselText}>{item.text}</Text>
              </TouchableOpacity>
            ))}
            {/* Adicionando um item vazio no final para indicar mais perguntas */}
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
    backgroundColor: '#eeeae4',
    borderRadius: 10,

    // Sombra
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra
    elevation: 5, // Elevação (apenas para Android)
  },
  card: {
    marginTop: 0,
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#eeeae4',
    borderRadius: 15,
    height: 150,

    // Sombra
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra
    elevation: 5, // Elevação (apenas para Android)
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
    backgroundColor: '#eeeae4',
    borderRadius: 10,
    alignItems: 'center',
  },
  miniBtnsMeio: {
    padding: 10,
    backgroundColor: '#eeeae4',
    borderRadius: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  viewMiniBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eeeae4',
    padding: 10,
    borderRadius: 15,

    // Sombra
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra
    elevation: 5, // Elevação (apenas para Android)
  },
  carouselContainer: {
    marginTop: 5,
    alignItems: 'center',
    backgroundColor: '#eeeae4',
    borderRadius: 15,
    padding: 15,
    // Sombra
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra
    elevation: 5, // Elevação (apenas para Android)
  },
  carouselContent: {
    backgroundColor: '#eeeae4',
    borderRadius: 15,
    padding:10,

  },
  carouselItem: {
    backgroundColor: '#eeeae4',
    borderRadius: 10,
    width: screenWidth - 120,
    padding: 40,
    marginHorizontal: 10,
    // Sombra
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 3.84, // Raio da sombra
    elevation: 5, // Elevação (apenas para Android)
  },
  carouselTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  carouselText: {
    fontSize: 14,
    color:'#AAAAAA',
  },
});
