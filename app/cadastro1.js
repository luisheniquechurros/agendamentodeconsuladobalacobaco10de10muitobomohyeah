import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.imglogo} source={require('../src/logo.png')} />
      <Text style={styles.pedirdados}>Insira alguns dados</Text>
      <Text style={styles.pedirdadosb}>básicos</Text>
      <Text style={styles.campo}>Nome</Text>
      <TextInput style={styles.inputnome} placeholder="Digite seu nome completo" placeholderTextColor="#A9A9A9"/>
      <Text style={styles.campo}>Email</Text>
      <TextInput style={styles.inputemail} placeholder="Insira seu endereço de email" placeholderTextColor="#A9A9A9"/>
      <Text style={styles.campo}>Crie uma Senha</Text>
      <TextInput style={styles.inputsenha} placeholder="Insira sua senha" placeholderTextColor="#A9A9A9" secureTextEntry={true}/>
      <Text style={styles.campo}>Repita a senha</Text>
      <TextInput style={styles.inputsenha} placeholder="Insira sua senha" placeholderTextColor="#A9A9A9" secureTextEntry={true}/>
      <Link href="/cadastro2" style={styles.botao}>Avançar</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imglogo: {
    marginBottom: 72,
  },
  pedirdados: {
    color: '#6B6E71',
    fontSize: 24,  
    fontWeight: 'bold',
  },
  pedirdadosb: {
    color: '#6B6E71',
    marginBottom: 48,
    fontSize: 24,  
    fontWeight: 'bold',
  },
  campo: {
    color: '#0B3B60',
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginBottom: 5,
    fontSize: 16,
  },
  inputemail: {
    width: 311,
    height: 48,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 24,
  },
  inputnome: {
    width: 311,
    height: 48,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 24,
  },
  inputsenha: {
    width: 311,
    height: 48,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 24,
  },
  botao: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor:"#0B3B60",
    padding: 20,
    borderRadius: 10,
    fontWeight: 'bold',
    width: '80%',
    height: '8%',
  },
  esqueceuasenha: {
    fontSize: 16,
    color: '#0B3B60',
    textDecorationLine: 'underline',
    marginBottom:40,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  cadastre: {
    color: "#6B6E71",
    fontSize: 16,
  },
  cadastrar: {
    color: "#339CFF",
    fontSize: 16,
  }
});
