import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FAQScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FAQ</Text>
      <Text style={styles.question}>Pergunta 1</Text>
      <Text style={styles.answer}>Resposta 1</Text>
      <Text style={styles.question}>Pergunta 2</Text>
      <Text style={styles.answer}>Resposta 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  answer: {
    fontSize: 16,
    marginTop: 10,
  },
});
