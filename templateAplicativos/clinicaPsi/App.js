import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import FAQScreen from './screens/FAQScreen';
import NearbyPlacesScreen from './screens/NearbyPlacesScreen';
import BenefitsScreen from './screens/BenefitsScreen';
import { handleEmailPress } from './handlers/emailUtil'; // Ajuste o caminho conforme necessário

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
  return (
    <ImageBackground source={require('./assets/images/background.png')} style={styles.backgroundImage}>
      <DrawerContentScrollView {...props}>
        <View style={styles.headerLeft}>
          <Image source={require('./assets/images/logo.png')} style={styles.logo} />
        </View>
        <DrawerItemList {...props} />
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => {
            // Lógica para logout e navegação para a tela de login
            props.navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }],
            });
          }}
        >
          <View style={styles.drawerItemContent}>
            <Icon name="logout" size={24} color="#FFFFFF" />
            <Text style={styles.drawerItemText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </ImageBackground>
  );
}

function DrawerNavigator() {
  var usuario = "Edson";
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        drawerStyle: {
          backgroundColor: 'transparent', // Definir como transparente para mostrar a imagem de fundo
        },
        drawerActiveTintColor: '#FFFFFF', // Cor dos itens ativos
        drawerInactiveTintColor: '#AAAAAA', // Cor dos itens inativos
        headerLeft: () => (
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Icon name="menu" size={25} color="#ab896f" />
            </TouchableOpacity>
            <Text style={styles.drawerItemText}>Olá, {usuario}</Text>
          </View>
        ),
        headerRight: () => (
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton} onPress={() => { /* lógica para logout */ }}>
              <Icon name="email" size={25} color="#ab896f" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => { /* lógica para logout */ }}>
              <Icon name="logout" size={25} color="#ab896f" />
            </TouchableOpacity>
          </View>
        ),
        headerTitle: '',
        headerStyle: {
          height: 80,
          backgroundColor: '#dcc4b4', // Adiciona a cor de fundo
        },
      })}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="FAQ" component={FAQScreen} />
      <Drawer.Screen name="Locais" component={NearbyPlacesScreen} />
      <Drawer.Screen name="Benefits" component={BenefitsScreen} />
    </Drawer.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="App" component={DrawerNavigator} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    height: 80,
  },
  container: {
    backgroundColor: '#cac7bf',
  },
  menu: {
    backgroundColor: '#cac7bf',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  drawerItem: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  drawerItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerItemText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#ab896f',
  },
});
