import { View, Text, TextInput, StyleSheet, TouchableOpacity, Animated, Platform, Button } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function SignupScreen({ navigation }) {
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [birthDateFocused, setBirthDateFocused] = useState(false);
  const [teamChoiceFocused, setTeamChoiceFocused] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());

  // Create animated values for each input
  const nameBorderAnim = useRef(new Animated.Value(0)).current;
  const emailBorderAnim = useRef(new Animated.Value(0)).current;
  const passwordBorderAnim = useRef(new Animated.Value(0)).current;
  const birthDateBorderAnim = useRef(new Animated.Value(0)).current;
  const teamChoiceBorderAnim = useRef(new Animated.Value(0)).current;

  // Fade animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const titleFadeAnim = useRef(new Animated.Value(0)).current;
  const buttonScaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start animations when component mounts
    Animated.sequence([
      Animated.timing(titleFadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(buttonScaleAnim, {
        toValue: 1,
        friction: 3,
        tension: 40,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDate(date);
    hideDatePicker();
  };

  // Animation function
  const animateBorder = (animValue, toValue) => {
    Animated.timing(animValue, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: titleFadeAnim }}>
        <Text style={styles.titleH2}>Crie sua conta</Text>
      </Animated.View>

      <Animated.View style={[styles.inputContainer, { opacity: fadeAnim }]}>
        <TextInput 
          placeholder="Nome" 
          placeholderTextColor="white"
          style={styles.input}
          onFocus={() => {
            setNameFocused(true);
            animateBorder(nameBorderAnim, 1);
          }}
          onBlur={() => {
            setNameFocused(false);
            animateBorder(nameBorderAnim, 0);
          }}
        />
        <Animated.View style={[
          styles.bottomLine,
          {
            width: nameBorderAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%']
            }),
            backgroundColor: nameBorderAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['white', '#ff0000']
            })
          }
        ]} />
      </Animated.View>

      <Animated.View style={[styles.inputContainer, { opacity: fadeAnim }]}>
        <TextInput 
          placeholder="Email" 
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
      </Animated.View>

      <Animated.View style={[styles.inputContainer, { opacity: fadeAnim }]}>
        <TextInput 
          placeholder="Senha" 
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
      </Animated.View>

      <Animated.View style={[styles.inputContainer, { opacity: fadeAnim }]}>
        <TextInput 
          placeholder="Para qual time você torce?"
          placeholderTextColor="white"
          style={styles.input}
          onFocus={() => {
            setTeamChoiceFocused(true);
            animateBorder(teamChoiceBorderAnim, 1);
          }}
          onBlur={() => {
            setTeamChoiceFocused(false);
            animateBorder(teamChoiceBorderAnim, 0);
          }}
        />
        <Animated.View style={[
          styles.bottomLine,
          {
            width: teamChoiceBorderAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '100%']
            }),
            backgroundColor: teamChoiceBorderAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['white', '#ff0000']
            })
          }
        ]} />
      </Animated.View>

      <Animated.View style={[styles.inputContainer, { opacity: fadeAnim }]}>
        <Text style={styles.input}>Insira sua data de nascimento
          <TouchableOpacity onPress={showDatePicker}>
            <Text style={styles.dateText}>{date.toLocaleDateString('pt-BR')}</Text>  
          </TouchableOpacity>
        </Text>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          date={date}
          maximumDate={new Date()}
          minimumDate={new Date(1900, 0, 1)}
        />
      </Animated.View>

      <Animated.View style={[
        styles.buttonContainer,
        {
          opacity: fadeAnim,
          transform: [{
            scale: buttonScaleAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.8, 1]
            })
          }]
        }
      ]}>
        <TouchableOpacity style={styles.buttonCadastro} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.loginContainer, { opacity: fadeAnim }]}>
        <Text style={styles.loginText}>Já tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Fazer login</Text>
        </TouchableOpacity>
      </Animated.View>
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
    fontSize: 30, 
    marginBottom: 20, 
    textAlign: 'center', 
    fontWeight: 'bold', 
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
  buttonContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  buttonCadastro: { 
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
  },
  loginLink: {
    color: '#0000ff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  dateText: {
    color: 'white',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center'
  },
});
