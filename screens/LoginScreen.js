import { View, Text, TextInput, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { useState, useRef } from 'react';

export default function LoginScreen({ navigation }) {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  
  // Create animated values for each input
  const emailBorderAnim = useRef(new Animated.Value(0)).current;
  const passwordBorderAnim = useRef(new Animated.Value(0)).current;

  // Animation function
  const animateBorder = (animValue, toValue) => {
    Animated.timing(animValue, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleLogin = () => {
    // Your login logic here
    navigation.navigate('MainApp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleH2}>Bem-Vindo(a) ao</Text>
      <Text style={styles.titleH1}>*nome do app*</Text>
      
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Insira seu email" 
          placeholderTextColor="white"
          style={styles.input}
          onFocus={() => {
            setEmailFocused(true);
            animateBorder(emailBorderAnim, 1);
          }}
          onBlur={() => {
            setEmailFocused(false);
            animateBorder(emailBorderAnim, 0);
          }}
        />
        <Animated.View style={[
          styles.bottomLine,
          {
            width: emailBorderAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%']
            }),
            backgroundColor: emailBorderAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['white', '#ff0000']
            })
          }
        ]} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Insira sua senha" 
          placeholderTextColor="white"
          secureTextEntry 
          style={styles.input}
          onFocus={() => {
            setPasswordFocused(true);
            animateBorder(passwordBorderAnim, 1);
          }}
          onBlur={() => {
            setPasswordFocused(false);
            animateBorder(passwordBorderAnim, 0);
          }}
        />
        <Animated.View style={[
          styles.bottomLine,
          {
            width: passwordBorderAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%']
            }),
            backgroundColor: passwordBorderAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['white', '#ff0000']
            })
          }
        ]} />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.cadastroContainer}>
        <Text style={styles.cadastroText}>Ainda não tem conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.cadastroLink}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20,
    backgroundColor: '#1a1a1a'
  },
  titleH2: { 
    fontSize: 20, 
    marginBottom: 20, 
    textAlign: 'center',
    color: 'white'
  },
  titleH1: { 
    fontSize: 30, 
    marginBottom: 20, 
    textAlign: 'center', 
    fontWeight: 'bold', 
    fontStyle: 'italic',
    color: 'white'
  },
  inputContainer: {
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: { 
    padding: 15, 
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 5,
  },
  bottomLine: {
    height: 2,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  button: { 
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  cadastroContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  cadastroText: {
    color: 'white',
    fontSize: 16,
  },
  cadastroLink: {
    color: '#0000ff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});