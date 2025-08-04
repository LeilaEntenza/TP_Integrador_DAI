import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
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
          <Text style={styles.textoPressable}>Crear</Text>
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
    });