import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { useState } from 'react';

export default function Alumno(props) {
  const [mostrarMatricula, setMostrarMatricula] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
        style={styles.imagen}
      />
      <Text style={styles.text}>{props.nombre}</Text>

      {mostrarMatricula && (
        <Text style={styles.matricula}>Matrícula: {props.matricula}</Text>
      )}

      <Button
        title={mostrarMatricula ? 'Ocultar Matrícula' : 'Ver Matrícula'}
        onPress={() => setMostrarMatricula(!mostrarMatricula)}
        color="#4496d8"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fdfdfd',
    borderRadius: 16,
    padding: 14,
    margin: 10,
    alignItems: 'center',
  },
  imagen: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  text: {
    color: '#180202',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
  },
  matricula: {
    color: '#4496d8',
    fontWeight: '600',
    marginBottom: 6,
  },
});