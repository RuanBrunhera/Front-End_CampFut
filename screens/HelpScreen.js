import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function HelpScreen() {
  const navigation = useNavigation();
  const [expandedFaq, setExpandedFaq] = useState(null);

  

  const faqs = [
    {
      id: 1,
      question: 'Como adicionar uma nova partida?',
      answer: 'Para adicionar uma nova partida, vá até a tela inicial e clique no botão "Nova Partida". Preencha as informações necessárias como times, data, hora e local.'
    },
    {
      id: 2,
      question: 'Como visualizar estatísticas?',
      answer: 'As estatísticas podem ser visualizadas na tela de detalhes da partida. Basta clicar em uma partida na lista para ver todas as estatísticas disponíveis.'
    },
    {
      id: 3,
      question: 'Como alterar minhas informações?',
      answer: 'Para alterar suas informações, acesse a tela de perfil e clique no ícone de edição ao lado da informação que deseja modificar.'
    },
    {
      id: 4,
      question: 'Como receber notificações?',
      answer: 'Você pode gerenciar suas notificações na tela de configurações. Lá você pode ativar ou desativar diferentes tipos de notificações.'
    }
  ];

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
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
          <Text style={styles.title}>Ajuda</Text>
          <Text style={styles.subtitle}>Encontre respostas para suas dúvidas</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Perguntas Frequentes</Text>
          <View style={styles.faqCard}>
            {faqs.map((faq) => (
              <TouchableOpacity
                key={faq.id}
                style={styles.faqItem}
                onPress={() => toggleFaq(faq.id)}
              >
                <View style={styles.faqHeader}>
                  <Text style={styles.question}>{faq.question}</Text>
                  <Ionicons
                    name={expandedFaq === faq.id ? 'chevron-up' : 'chevron-down'}
                    size={24}
                    color="#666"
                  />
                </View>
                {expandedFaq === faq.id && (
                  <Text style={styles.answer}>{faq.answer}</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contato</Text>
          <View style={styles.contactCard}>
            <TouchableOpacity style={styles.contactItem}>
              <Ionicons name="mail-outline" size={24} color="#ff0000" />
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>Email</Text>
                <Text style={styles.contactValue}>suporte@campfut.com</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contactItem}>
              <Ionicons name="chatbubble-outline" size={24} color="#ff0000" />
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>Chat</Text>
                <Text style={styles.contactValue}>Disponível 24/7</Text>
              </View>
            </TouchableOpacity>
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
  faqCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 10,
  },
  faqItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 16,
    color: 'white',
    flex: 1,
    marginRight: 10,
  },
  answer: {
    fontSize: 14,
    color: '#999',
    marginTop: 10,
    lineHeight: 20,
  },
  contactCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 15,
    padding: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  contactInfo: {
    marginLeft: 15,
  },
  contactLabel: {
    fontSize: 16,
    color: 'white',
    marginBottom: 2,
  },
  contactValue: {
    fontSize: 14,
    color: '#999',
  },
}); 