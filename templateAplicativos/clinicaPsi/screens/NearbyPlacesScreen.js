import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NearbyPlacesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estabelecimentos Próximos</Text>
      <Text style={styles.place}>Padaria X</Text>
      <Text style={styles.place}>Mercado Y</Text>
      <Text style={styles.place}>Farmácia Z</Text>
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
  place: {
    fontSize: 18,
    marginTop: 10,
  },
});
