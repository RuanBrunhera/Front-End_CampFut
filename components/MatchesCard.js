import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MatchesCard({ partidas }) {
  const navigation = useNavigation();

  const renderScore = (placar, isHome = true) => {
    if (!placar) return '-';
    const scores = placar.split('x');
    return scores.length === 2 ? (isHome ? scores[0] : scores[1]) : '-';
  };

  return (
    <View style={styles.card}>
      <View style={styles.scoreContainer}>
        <View style={styles.teamContainer}>
          <Text style={styles.times} numberOfLines={1}>{partidas[0].casa}</Text>
          <Text style={styles.score}>{renderScore(partidas[0].placar, true)}</Text>
        </View>
        <Text style={styles.vs}>VS</Text>
        <View style={styles.teamContainer}>
          <Text style={styles.times} numberOfLines={1}>{partidas[0].visitante}</Text>
          <Text style={styles.score}>{renderScore(partidas[0].placar, false)}</Text>
        </View>
      </View>
      <TouchableOpacity 
        style={styles.detalhePartida} 
        onPress={() => navigation.navigate('Partidas', { 
          screen: 'MatchDetails',
          params: { partida: partidas[0] }
        })}
      >
        <Text style={styles.detalhePartidaText}>
          Ver detalhes da partida
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  teamContainer: {
    flex: 1,
    alignItems: 'center',
  },
  vs: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 15,
    color: '#666'
  },
  times: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: 'white'
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff0000',
    textAlign: 'center'
  },
  detalhePartida: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0000',
    width: '70%',
    alignSelf: 'center',
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
  },
  detalhePartidaText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  }
});

