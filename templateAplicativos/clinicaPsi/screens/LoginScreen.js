import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação
    navigation.replace('App');
  };

  return (
    <ImageBackground source={require('../assets/images/background.png')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.loginBox}>
          {/* <Text style={styles.title}>Login</Text> */}
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity style={styles.botao} onPress={handleLogin}>
            <Text style={styles.textoBotao}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#2196F3', // Cor de fundo
    padding: 10,                // Espaçamento interno
    borderRadius: 20,            // Cantos arredondados
    alignItems: 'center',       // Centraliza o texto do botão
    marginTop: 10,              // Espaçamento superior
    backgroundColor:'#ccac94'
  },
  textoBotao: {                 // Estilo do texto
    color: 'white',             // Cor do texto
    fontWeight: 'bold',         // Negrito
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  loginBox: {
    width: '100%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: 'transparent', // Torna o fundo transparente
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.01,   // Reduz a opacidade da sombra para um efeito mais sutil
    shadowRadius: 0.84,
    
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  cardHeader: {
    flexDirection: 'row', // Alinha os elementos em linha
    alignItems: 'center', // Alinha verticalmente ao centro
    justifyContent: 'space-between', // Distribui os elementos com espaço entre eles
    marginBottom: 10,
  },
  imagem: {
    width: 50,
    height: 50,
    borderRadius: 25, // Para deixar a imagem redonda (opcional)
  },

});
