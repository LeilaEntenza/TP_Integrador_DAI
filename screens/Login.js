import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-web';


export default function Login({ onLogin }) {
  return (
<View style={styles.container}>
        <Text style={styles.textoCrear}>Iniciar sesión</Text>
        <Text style={styles.descripcion}>Nombre</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.descripcion}>Contraseña</Text>
        <TextInput style={styles.input}/>
        <Pressable onPress={onLogin ? onLogin : () => {}} style={styles.pressableB}>
          <Text>Iniciar sesión</Text>
        </Pressable>
        <Pressable style={styles.pressableB}>
          <Text>No tengo una cuenta</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
  );
}

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1f7e6',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        backgroundColor: 'white',
        width: "60%",
        height: "40px",
        fontSize: "20px",
        alignItems: "center",
        padding: "0.5%",
        borderRadius: "10px"
      },
      descripcion: {
        fontSize: "20px",
        width: "60%",
        textAlign: "start"
      },
      textoCrear: {
        fontSize: "25px",
      },
      pressableB:{
        
      }
    });
