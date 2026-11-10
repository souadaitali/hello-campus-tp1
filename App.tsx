
import { View, Text, StyleSheet } from 'react-native';

const produits = [
  { nom: "Clavier", prix: 120, stock: 0 },
  { nom: "Souris", prix: 80, stock: 0 },
  { nom: "Écran", prix: 900, stock: 0 },
  { nom: "Casque", prix: 240, stock: 3 }
];

export default function App() {
  const disponibles = produits.filter(p => p.stock > 0);

  const valeurStock = produits.reduce(
    (total, p) => total + p.prix * p.stock, 0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titre}>Catalogue des produits</Text>
      <Text>Nombre de produits disponibles : {disponibles.length}</Text>
      <Text>Valeur totale du stock : {valeurStock} MAD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
