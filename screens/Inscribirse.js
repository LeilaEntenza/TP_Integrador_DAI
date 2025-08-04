import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { Picker } from '@react-native-picker/picker';

export default function Inscribirse() {
  const [selectedSport, setSelectedSport] = useState();
    return (
        
      <View style={styles.container}>
        <Text style={styles.textoCrear}>Inscribirse</Text>
        <Text style={styles.descripcion}>Nombre</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.descripcion}>Evento</Text>
        <Picker
        selectedValue={selectedSport}
        onValueChange={(itemValue, itemIndex) => setSelectedSport(itemValue)}
        style={styles.picker}
      >
          <Picker.Item label="Select a sport..." value={null} />
          <Picker.Item label="Football" value="football" />
          <Picker.Item label="Baseball" value="baseball" />
          <Picker.Item label="Hockey" value="hockey" />
        </Picker>
        <Pressable style={styles.pressableB}>
          <Text style={styles.textoPressable}>Inscribirse</Text>
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
      borderRadius: "10px",
      border: '1px solid grey'
    },
    descripcion: {
      fontSize: "20px",
      width: "60%",
      textAlign: "start",
      margin: '0.5%'
    },
    textoCrear: {
      fontSize: "25px",
    },
    pressableB:{
      width: '10%',
      borderRadius: '15px',
      backgroundColor: '#8ca9c2',
      padding: '1%',
      margin: '1%',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px;'
    },
    textoPressable: {
      textAlign: 'center',
      fontSize: '18px',
      color: 'white'
    },
    picker: {
      width: '60%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      backgroundColor: '#fffff',
      fontSize: "20px",
      borderRadius: "10px",
    },
    });