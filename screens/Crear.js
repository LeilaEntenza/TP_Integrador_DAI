import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-web';

export default function Crear() {
    return (
      <View style={styles.container}>
        <Text style={styles.textoCrear}>Crear evento</Text>
        <Text style={styles.descripcion}>Nombre</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.descripcion}>Descripción</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.descripcion}>Fecha de inicio</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.descripcion}>Duración</Text>
        <TextInput style={styles.input}/>
        <Text style={styles.descripcion}>Precio</Text>
        <TextInput style={styles.input}/>
        <Pressable style={styles.pressableB}>
          <Text>a</Text>
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