import { StyleSheet, Text, View } from 'react-native';

export default function Alumno(props){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>{props.nombre}</Text>
      <Text style={styles.text}>{props.matricula}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fdfdfd',
    borderRadius: 100,
    padding: 10,
    margin: 10
  },
  text: {
    color: '#180202',
  }
});
