import { View, Text, FlatList, StyleSheet } from 'react-native';

const partidasMock = [
  { id: '1', casa: 'Flamengo', visitante: 'Vasco', placar: '2x1' },
  { id: '2', casa: 'São Paulo', visitante: 'Palmeiras', placar: '1x1' },
];

export default function MatchesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatório das partidas</Text>
      <FlatList
        data={partidasMock}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.casa} vs {item.visitante}</Text>
            <Text>{item.placar}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  card: { padding: 15, backgroundColor: '#eee', borderRadius: 8, marginBottom: 10 }
});
