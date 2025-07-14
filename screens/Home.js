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
        fontSize: '25px',
        marginBottom: '2%',
        marginTop: '2%'
    },
    eventTexto: {
        fontSize: '20px'
    },
    eventos: {
        width: '60%',
        backgroundColor: 'white',
        padding: '2%',
        borderRadius: '15px',
        boxShadow: 'rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(220, 255, 230, 0.8) -6px -2px 16px 0px;'
    },
  });
  