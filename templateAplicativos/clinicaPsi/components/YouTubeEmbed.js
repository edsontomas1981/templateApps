import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const YouTubeEmbed = ({ videoId }) => {
  return (
    <View >
      <View style={styles.videoContainer}>
        <WebView
          style={styles.video}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeae4',
  },
  videoContainer: {
    width: 320, // Largura desejada do vídeo
    height: (320 * 9) / 16, // Mantém a proporção 16:9
    overflow: 'hidden', // Esconde partes que ultrapassem os limites
    backgroundColor: '#eeeae4',
    marginTop:20,
    borderRadius:10,
    
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default YouTubeEmbed;

