import { Link } from 'expo-router';
import { StyleSheet, Text, View, Image } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

export default function App() {
  const [isCheckedSulamerica, setCheckedSulamerica] = useState(false);
  const [isCheckedUnimed, setCheckedUnimed] = useState(false);
  const [isCheckedBradesco, setCheckedBradesco] = useState(false);
  const [isCheckedAmil, setCheckedAmil] = useState(false);
  const [isCheckedBiosaude, setCheckedBiosaude] = useState(false);
  const [isCheckedBiovida, setCheckedBiovida] = useState(false);
  const [isCheckedOutros, setCheckedOutros] = useState(false);
  const [isCheckedSemPlano, setCheckedSemPlano] = useState(false);

  return (
    <View style={styles.container}>
      <Image style={styles.imglogo} source={require('../src/logo.png')} />
      <Text style={styles.finalizar}>Pra finalizar, qual seu</Text>
      <Text style={styles.finalizando}>plano de saúde?</Text>
      <Text style={styles.campo}>Selecione os planos:</Text>

      <View style={styles.linha}>
        <Checkbox style={styles.checkbox} value={isCheckedSulamerica} onValueChange={setCheckedSulamerica} color={isCheckedSulamerica ? '#0B3B60' : undefined}/>
        <Text style={styles.planos}>Sulamérica</Text>
      </View>

      <View style={styles.linha}>
        <Checkbox style={styles.checkbox} value={isCheckedUnimed} onValueChange={setCheckedUnimed} color={isCheckedUnimed ? '#0B3B60' : undefined}/>
        <Text style={styles.planos}>Unimed</Text>
      </View>

      <View style={styles.linha}>
        <Checkbox style={styles.checkbox} value={isCheckedBradesco} onValueChange={setCheckedBradesco} color={isCheckedBradesco ? '#0B3B60' : undefined}/>
        <Text style={styles.planos}>Bradesco</Text>
      </View>

      <View style={styles.linha}>
        <Checkbox style={styles.checkbox} value={isCheckedAmil} onValueChange={setCheckedAmil} color={isCheckedAmil ? '#0B3B60' : undefined}/>
        <Text style={styles.planos}>Amil</Text>
      </View>

      <View style={styles.linha}>
        <Checkbox style={styles.checkbox} value={isCheckedBiosaude} onValueChange={setCheckedBiosaude} color={isCheckedBiosaude ? '#0B3B60' : undefined}/>
        <Text style={styles.planos}>Biosaúde</Text>
      </View>

      <View style={styles.linha}>
        <Checkbox style={styles.checkbox} value={isCheckedBiovida} onValueChange={setCheckedBiovida} color={isCheckedBiovida ? '#0B3B60' : undefined}/>
        <Text style={styles.planos}>Biovida</Text>
      </View>

      <View style={styles.linha}>
        <Checkbox style={styles.checkbox} value={isCheckedOutros} onValueChange={setCheckedOutros} color={isCheckedOutros ? '#0B3B60' : undefined}/>
        <Text style={styles.planos}>Outros</Text>
      </View>

      <View style={styles.linha}>
        <Checkbox style={styles.checkbox} value={isCheckedSemPlano} onValueChange={setCheckedSemPlano} color={isCheckedSemPlano ? '#0B3B60' : undefined}/>
        <Text style={styles.planos}>Não tenho plano</Text>
      </View>

      <Link href="/cadastro2" style={styles.botaov}>Voltar</Link>
      <Link href="/app_logado/" style={styles.botao}>Cadastrar</Link>
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
  finalizar: {
    color: '#6B6E71',
    fontSize: 24,  
    fontWeight: 'bold',
  },
  finalizando: {
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
    fontWeight:'bold',
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'left',
    marginTop: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  planos: {
    fontSize: 16,
    color: '#0B3B60',
    minWidth: 300,
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
    height: '7%',
  },
  botaov: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
    backgroundColor:"#90989F",
    padding: 20,
    borderRadius: 10,
    fontWeight: 'bold',
    width: '80%',
    height: '7%',
  },
});
