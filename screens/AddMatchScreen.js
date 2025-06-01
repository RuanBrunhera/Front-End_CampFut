import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useMatches } from '../context/MatchContext';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function AddMatchScreen() {
  const navigation = useNavigation();
  const { addMatch } = useMatches();
  const [matchData, setMatchData] = useState({
    casa: '',
    visitante: '',
    data: '',
    hora: '',
  });

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    setMatchData(prev => ({
      ...prev,
      data: date.toLocaleDateString('pt-BR').split('/').slice(0, 2).join('/')
    }));
    hideDatePicker();
  };

  const handleTimeConfirm = (time) => {
    setSelectedTime(time);
    setMatchData(prev => ({
      ...prev,
      hora: time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }));
    hideTimePicker();
  };

  const handleAddMatch = () => {
    if (matchData.casa && matchData.visitante && matchData.data && matchData.hora) {
      addMatch(matchData);
      navigation.goBack();
    }
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
          <Text style={styles.title}>Nova Partida</Text>
          <Text style={styles.subtitle}>Preencha os dados da partida</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Time da Casa</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome do time da casa"
              placeholderTextColor="#666"
              value={matchData.casa}
              onChangeText={(text) => setMatchData({...matchData, casa: text})}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Time Visitante</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome do time visitante"
              placeholderTextColor="#666"
              value={matchData.visitante}
              onChangeText={(text) => setMatchData({...matchData, visitante: text})}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Data</Text>
            <TouchableOpacity onPress={showDatePicker}>
              <View style={styles.input}>
                <Text style={styles.dateTimeText}>
                  {matchData.data || 'Selecione a data'}
                </Text>
              </View>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
              date={selectedDate}
              minimumDate={new Date()}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Hora</Text>
            <TouchableOpacity onPress={showTimePicker}>
              <View style={styles.input}>
                <Text style={styles.dateTimeText}>
                  {matchData.hora || 'Selecione a hora'}
                </Text>
              </View>
            </TouchableOpacity>
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleTimeConfirm}
              onCancel={hideTimePicker}
              date={selectedTime}
              is24Hour={true}
              minuteInterval={15}
            />
          </View>

          <TouchableOpacity 
            style={styles.addButton}
            onPress={handleAddMatch}
          >
            <Text style={styles.addButtonText}>Adicionar Partida</Text>
          </TouchableOpacity>
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
    paddingTop: 20,
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
  form: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
    color: 'white',
    fontSize: 16,
  },
  dateTimeText: {
    color: 'white',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#ff0000',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 