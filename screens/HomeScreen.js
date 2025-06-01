import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import UpcomingMatches from '../components/UpcomingMatches';
import AddMatchScreen from '../screens/AddMatchScreen';
import { useMatches } from '../context/MatchContext';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { matches } = useMatches();

  // Mock data for recent results
  const recentResults = [
    { id: '1', casa: 'Flamengo', visitante: 'Vasco', placar: '2x1' },
    { id: '2', casa: 'São Paulo', visitante: 'Palmeiras', placar: '1x1' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-vindo ao CampFut</Text>
        <Text style={styles.subtitle}>Acompanhe suas partidas</Text>
      </View>

      <UpcomingMatches matches={matches} />

      {/* Resultados Recentes Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="trophy-outline" size={24} color="#ff0000" />
          <Text style={styles.sectionTitle}>Resultados Recentes</Text>
        </View>
        {recentResults.map((match) => (
          <View key={match.id} style={styles.matchCard}>
            <View style={styles.matchInfo}>
              <Text style={styles.teamName}>{match.casa}</Text>
              <Text style={styles.score}>{match.placar}</Text>
              <Text style={styles.teamName}>{match.visitante}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => navigation.navigate('AddMatch')}
        >
          <Ionicons name="add-circle-outline" size={32} color="#ff0000" />
          <Text style={styles.actionText}>Nova Partida</Text>
        </TouchableOpacity>
      
        <TouchableOpacity 
          style={styles.actionButton} 
          onPress={() => navigation.navigate('Partidas')}
        >
          <Ionicons name="stats-chart-outline" size={32} color="#ff0000" />
          <Text style={styles.actionText}>Ver Estatísticas</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
  },
  section: {
    marginBottom: 20,
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  matchCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  matchInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  teamName: {
    color: 'white',
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  score: {
    color: '#ff0000',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    marginBottom: 20,
  },
  actionButton: {
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: 15,
    borderRadius: 10,
    width: '45%',
  },
  actionText: {
    color: 'white',
    marginTop: 5,
    fontSize: 14,
  },
});
