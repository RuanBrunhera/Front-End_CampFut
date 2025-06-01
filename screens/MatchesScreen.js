import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MatchesCard from '../components/MatchesCard';
import { useMatches } from '../context/MatchContext';
import { useNavigation } from '@react-navigation/native';

export default function MatchesScreen() {
  const navigation = useNavigation();
  const { matches } = useMatches();

  const ListHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>Relatório das partidas</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={matches}
        ListHeaderComponent={ListHeader}
        renderItem={({ item }) => (
          <MatchesCard partidas={[item]} />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  listContainer: {
    paddingBottom: 20,
  },
  headerContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: 10,
    borderRadius: 8,
  },
  addButtonText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 16,
  },
});
