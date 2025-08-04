import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default function Home() {
    return (
      <View style={styles.container}>
        <Text style={styles.textoTitulo}>Eventos</Text>
        <View style={styles.eventos}>
            <View>
                <Text style={styles.textoTitulo}>Eventos default</Text>
                <Text style={styles.eventTexto}>Detalle evento</Text>
            </View>    
            <View>
                <Text style={styles.textoTitulo}>Eventos default</Text>
                <Text style={styles.eventTexto}>Detalle evento</Text>
            </View>    
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
    textoTitulo: {
        fontSize: 25,
        marginBottom: '1%',
        marginTop: 8
    },
    eventTexto: {
        fontSize: 20,
        marginBottom: '0.5%'
    },
    eventos: {
        width: '60%',
        backgroundColor: 'white',
        padding: 8,
        borderRadius: 15,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
  });
