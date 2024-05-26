import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe a biblioteca de ícones
import YouTubeEmbed from '../components/YouTubeEmbed';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.titulo}>Olá, Edson! 👋</Text>
          </View>          
          <View>
            <Image 
              source={require('../assets/images/icone.png')} // Substitua pelo caminho da sua imagem
              style={styles.imagem} 
            />
          </View>
        </View>
      </View>
      
      

      <View style={styles.viewMiniBtns}>
        <TouchableOpacity style={styles.miniBtns}>
          <Icon name="calendar" size={50} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.miniBtnsMeio}>
          <Icon name="user" size={50} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.miniBtnsMeio}>
          <Icon name="heart" size={50} color="#000" />
        </TouchableOpacity>
      </View>
      <YouTubeEmbed style={styles.video} videoId="oWdbRuUhwNQ" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#cac7bf',
  },
  block: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#eeeae4',
    borderRadius: 5,
  },
  block: {
    marginBottom: 20,
    width:200,
    padding: 20,
    backgroundColor: '#eeeae4',
    borderRadius: 5,
  },
  card: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#eeeae4',
    borderRadius: 15,
    height: 150,
  },
  cardHeader: {
    flexDirection: 'row', // Adiciona uma direção de linha para o layout
    justifyContent: 'space-between', // Espaço entre os itens
    alignItems: 'center', // Alinha os itens ao centro
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagem: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },

  miniBtns: {
    padding: 10,
    backgroundColor: '#ccc', // Cor de fundo para visualizar melhor o botão
    borderRadius: 5,
    backgroundColor: '#eeeae4',
    alignItems: 'center', // Centraliza horizontalmente o ícone
    width:80
  },
  miniBtnsMeio: {
    padding: 10,
    backgroundColor: '#ccc', // Cor de fundo para visualizar melhor o botão
    borderRadius: 5,
    backgroundColor: '#eeeae4',
    marginLeft:10,
    alignItems: 'center', // Centraliza horizontalmente o ícone
    width:80
  },

  viewMiniBtns: {
    flexDirection:'row',
    justifyContent: 'space-between', // Espaço entre os itens
    backgroundColor: '#ccc', // Cor de fundo para visualizar melhor o botão
    backgroundColor: '#cac7bf',
  },
});
