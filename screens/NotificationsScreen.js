import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function NotificationsScreen() {
  const navigation = useNavigation();
  const [notifications, setNotifications] = useState({
    matchReminders: true,
    scoreUpdates: true,
    teamNews: false,
    specialOffers: false,
    soundEnabled: true,
    vibrationEnabled: true
  });

  const toggleSwitch = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#1a1a1a' }}>
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

      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Notificações</Text>
          <Text style={styles.subtitle}>Gerencie suas preferências de notificação</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notificações do App</Text>
          <View style={styles.settingsCard}>
            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Ionicons name="notifications-outline" size={24} color="#ff0000" />
                <View style={styles.settingText}>
                  <Text style={styles.settingLabel}>Lembretes de Partidas</Text>
                  <Text style={styles.settingDescription}>Receba lembretes antes das partidas</Text>
                </View>
              </View>
              <Switch
                value={notifications.matchReminders}
                onValueChange={() => toggleSwitch('matchReminders')}
                trackColor={{ false: '#767577', true: '#ff0000' }}
                thumbColor={notifications.matchReminders ? '#fff' : '#f4f3f4'}
              />
            </View>

            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Ionicons name="football-outline" size={24} color="#ff0000" />
                <View style={styles.settingText}>
                  <Text style={styles.settingLabel}>Atualizações de Placar</Text>
                  <Text style={styles.settingDescription}>Receba atualizações em tempo real</Text>
                </View>
              </View>
              <Switch
                value={notifications.scoreUpdates}
                onValueChange={() => toggleSwitch('scoreUpdates')}
                trackColor={{ false: '#767577', true: '#ff0000' }}
                thumbColor={notifications.scoreUpdates ? '#fff' : '#f4f3f4'}
              />
            </View>

            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Ionicons name="newspaper-outline" size={24} color="#ff0000" />
                <View style={styles.settingText}>
                  <Text style={styles.settingLabel}>Notícias do Time</Text>
                  <Text style={styles.settingDescription}>Receba novidades do seu time</Text>
                </View>
              </View>
              <Switch
                value={notifications.teamNews}
                onValueChange={() => toggleSwitch('teamNews')}
                trackColor={{ false: '#767577', true: '#ff0000' }}
                thumbColor={notifications.teamNews ? '#fff' : '#f4f3f4'}
              />
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferências</Text>
          <View style={styles.settingsCard}>
            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Ionicons name="volume-high-outline" size={24} color="#ff0000" />
                <View style={styles.settingText}>
                  <Text style={styles.settingLabel}>Som</Text>
                  <Text style={styles.settingDescription}>Ativar sons de notificação</Text>
                </View>
              </View>
              <Switch
                value={notifications.soundEnabled}
                onValueChange={() => toggleSwitch('soundEnabled')}
                trackColor={{ false: '#767577', true: '#ff0000' }}
                thumbColor={notifications.soundEnabled ? '#fff' : '#f4f3f4'}
              />
            </View>

            <View style={styles.settingItem}>
              <View style={styles.settingInfo}>
                <Ionicons name="phone-portrait-outline" size={24} color="#ff0000" />
                <View style={styles.settingText}>
                  <Text style={styles.settingLabel}>Vibração</Text>
                  <Text style={styles.settingDescription}>Ativar vibração nas notificações</Text>
                </View>
              </View>
              <Switch
                value={notifications.vibrationEnabled}
                onValueChange={() => toggleSwitch('vibrationEnabled')}
                trackColor={{ false: '#767577', true: '#ff0000' }}
                thumbColor={notifications.vibrationEnabled ? '#fff' : '#f4f3f4'}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 10,
  },
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
    color: '#999',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
  },
  settingsCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 10,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingText: {
    marginLeft: 15,
    flex: 1,
  },
  settingLabel: {
    fontSize: 16,
    color: 'white',
    marginBottom: 2,
  },
  settingDescription: {
    fontSize: 14,
    color: '#999',
  },
}); 