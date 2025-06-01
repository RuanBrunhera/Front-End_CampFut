import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function UpcomingMatches({ matches }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Ionicons name="calendar-outline" size={24} color="#ff0000" />
        <Text style={styles.sectionTitle}>Próximas Partidas</Text>
      </View>
      {matches.map((match) => (
        <View key={match.id} style={styles.matchCard}>
          <View style={styles.matchInfo}>
            <Text style={styles.teamName}>{match.casa}</Text>
            <Text style={styles.vs}>VS</Text>
            <Text style={styles.teamName}>{match.visitante}</Text>
          </View>
          <View style={styles.matchDateTime}>
            <Text style={styles.dateTime}>{match.data} - {match.hora}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
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
  vs: {
    color: '#666',
    fontSize: 14,
    marginHorizontal: 10,
  },
  matchDateTime: {
    marginTop: 10,
    alignItems: 'center',
  },
  dateTime: {
    color: '#ccc',
    fontSize: 14,
  },
}); 