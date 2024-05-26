import React from 'react';
import { View, Text, StyleSheet, Button, Linking } from 'react-native';

export default function BenefitsScreen() {
  const handleWhatsApp = () => {
    Linking.openURL('whatsapp://send?phone=+5511999999999');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Benefícios</Text>
      <Text style={styles.benefit}>Cupom de desconto X</Text>
      <Text style={styles.benefit}>Cupom de desconto Y</Text>
      <Button title="Contactar via WhatsApp" onPress={handleWhatsApp} />
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
  benefit: {
    fontSize: 18,
    marginTop: 10,
  },
});
