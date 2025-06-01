import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import MatchesScreen from '../screens/MatchesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MatchDetailsScreen from '../screens/MatchDetailsScreen';
import AddMatchScreen from '../screens/AddMatchScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Cadastro" component={SignupScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Partidas" component={MatchesScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Perfil" component={ProfileScreen} options={{headerShown: false}}/>
        <Stack.Screen 
          name="MatchDetails" 
          component={MatchDetailsScreen} 
          options={{
            headerShown: false,
            title: 'Detalhes da Partida',
            headerStyle: {
              backgroundColor: '#2a2a2a',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="AddMatch" 
          component={AddMatchScreen} 
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}