import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';

import Home from './screens/Home';
import Crear from './screens/Crear';
import Inscribirse from './screens/Inscribirse';
import Login from './screens/Login';
import Registrar from './screens/Registrar';

const Tab = createBottomTabNavigator();
const Tabs = () =>{
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarIcon: ({ color }) => (

            <Ionicons name="home" size={24} color={color} />

           ), }}/>
      <Tab.Screen name="Crear" component={Crear}
        options={{
          tabBarIcon: ({ color }) => (

            <Ionicons name="add-outline" size={24} color={color} />

           ), }}/>
      <Tab.Screen name="Inscribirse" component={Inscribirse}
          options={{
            tabBarIcon: ({ color }) => (
  
              <Ionicons name="person" size={24} color={color} />
  
             ), }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tabs/>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
