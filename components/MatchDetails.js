import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MatchDetails = ({ partida }) => {
  const navigation = useNavigation();

  const renderScore = (placar) => {
    if (!placar) return '-';
    const scores = placar.split('x');
    return scores.length === 2 ? `${scores[0]} x ${scores[1]}` : '-';
  };

  // Generate match statistics based on the score
  const generateMatchStats = (placar) => {
    if (!placar) {
      return {
        casa: {
          posseBola: 50,
          gols: 0,
          faltas: 0,
          escanteios: 0,
          laterais: 0,
          cartoesVermelhos: 0,
          cartoesAmarelos: 0,
          substituicoes: 0
        },
        visitante: {
          posseBola: 50,
          gols: 0,
          faltas: 0,
          escanteios: 0,
          laterais: 0,
          cartoesVermelhos: 0,
          cartoesAmarelos: 0,
          substituicoes: 0
        }
      };
    }

    const [homeScore, awayScore] = placar.split('x').map(Number);
    const totalGoals = homeScore + awayScore;
    const homePossession = Math.floor(45 + Math.random() * 10); // Random between 45-55%

    return {
      casa: {
        posseBola: homePossession,
        gols: homeScore,
        faltas: Math.floor(5 + Math.random() * 5),
        escanteios: Math.floor(3 + Math.random() * 4),
        laterais: Math.floor(8 + Math.random() * 5),
        cartoesVermelhos: Math.floor(Math.random() * 2),
        cartoesAmarelos: Math.floor(1 + Math.random() * 3),
        substituicoes: Math.floor(1 + Math.random() * 3)
      },
      visitante: {
        posseBola: 100 - homePossession,
        gols: awayScore,
        faltas: Math.floor(5 + Math.random() * 5),
        escanteios: Math.floor(3 + Math.random() * 4),
        laterais: Math.floor(8 + Math.random() * 5),
        cartoesVermelhos: Math.floor(Math.random() * 2),
        cartoesAmarelos: Math.floor(1 + Math.random() * 3),
        substituicoes: Math.floor(1 + Math.random() * 3)
      }
    };
  };

  const matchStats = generateMatchStats(partida.placar);

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 10, marginTop: 10 }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="arrow-back" size={24} color="white" />
            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold'}}>Voltar</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.teamName}>{partida.casa}</Text>
          <Text style={styles.score}>{renderScore(partida.placar)}</Text>
          <Text style={styles.teamName}>{partida.visitante}</Text>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.teamStats}>
            <Text style={styles.statValue}>{matchStats.casa.posseBola}%</Text>
            <Text style={styles.statValue}>{matchStats.casa.gols}</Text>
            <Text style={styles.statValue}>{matchStats.casa.faltas}</Text>
            <Text style={styles.statValue}>{matchStats.casa.escanteios}</Text>
            <Text style={styles.statValue}>{matchStats.casa.laterais}</Text>
            <Text style={styles.statValue}>{matchStats.casa.cartoesVermelhos}</Text>
            <Text style={styles.statValue}>{matchStats.casa.cartoesAmarelos}</Text>
            <Text style={styles.statValue}>{matchStats.casa.substituicoes}</Text>
          </View>

          <View style={styles.statLabels}>
            <Text style={styles.statLabel}>Posse de Bola</Text>
            <Text style={styles.statLabel}>Quantidade de gols</Text>
            <Text style={styles.statLabel}>Faltas</Text>
            <Text style={styles.statLabel}>Escanteios</Text>
            <Text style={styles.statLabel}>Laterais</Text>
            <Text style={styles.statLabel}>Cartões Vermelhos</Text>
            <Text style={styles.statLabel}>Cartões Amarelos</Text>
            <Text style={styles.statLabel}>Substituições</Text>
          </View>

          <View style={styles.teamStats}>
            <Text style={styles.statValue}>{matchStats.visitante.posseBola}%</Text>
            <Text style={styles.statValue}>{matchStats.visitante.gols}</Text>
            <Text style={styles.statValue}>{matchStats.visitante.faltas}</Text>
            <Text style={styles.statValue}>{matchStats.visitante.escanteios}</Text>
            <Text style={styles.statValue}>{matchStats.visitante.laterais}</Text>
            <Text style={styles.statValue}>{matchStats.visitante.cartoesVermelhos}</Text>
            <Text style={styles.statValue}>{matchStats.visitante.cartoesAmarelos}</Text>
            <Text style={styles.statValue}>{matchStats.visitante.substituicoes}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 20,
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff0000',
    marginHorizontal: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  teamStats: {
    flex: 1,
    alignItems: 'center',
  },
  statLabels: {
    flex: 1,
    alignItems: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#3a3a3a',
    paddingHorizontal: 10,
  },
  statLabel: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 12,
    height: 40,
    textAlignVertical: 'center',
  },
  statValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 12,
    height: 40,
    textAlignVertical: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
});

export default MatchDetails; 