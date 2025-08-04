import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-web';

export default function Login({ onLogin }) {
  return (
    <View style={styles.container}>
        <Text style={styles.textoCrear}>Iniciar sesión</Text>
        <View style={styles.contForm}>
          <Text style={styles.descripcion}>Nombre</Text>
          <TextInput style={styles.input}/>
          <Text style={styles.descripcion}>Contraseña</Text>
          <TextInput style={styles.input}/>          
          <Pressable onPress={()=>navigation.navigate('Registrar')}>
            <Text style={styles.noCuenta}>No tengo una cuenta</Text>
          </Pressable>
          <Pressable onPress={onLogin ? onLogin : () => {}} style={styles.pressableB}>
            <Text style={styles.textoPressable}>Iniciar sesión</Text>
          </Pressable>

        </View>
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
        borderRadius: "10px",
        border: '1px solid grey'
      },
      descripcion: {
        fontSize: "20px",
        width: "60%",
        textAlign: "start",
        margin: '1%'
      },
      textoCrear: {
        fontSize: "25px",
      },
      pressableB:{
        width: '20%',
        borderRadius: '15px',
        backgroundColor: '#8ca9c2',
        padding: '1%',
        margin: '1%',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;'
      },
      contForm: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center"
      },
      textoPressable: {
        textAlign: 'center',
        fontSize: '15px',
        color: 'white'
      },
      noCuenta: {
        width: '100%',
        margin: '2%',
        marginTop: '4%',
        fontSize: '15px',
        textAlign: 'start'
      }
    });
