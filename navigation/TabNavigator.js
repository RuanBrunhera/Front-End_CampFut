import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import MatchesScreen from '../screens/MatchesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MatchDetailsScreen from '../screens/MatchDetailsScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import HelpScreen from '../screens/HelpScreen';
import AddMatchScreen from '../screens/AddMatchScreen';
import { TouchableOpacity, Text, View } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MatchesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MatchesList" 
        component={MatchesScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="MatchDetails" 
        component={MatchDetailsScreen} 
        options={({ navigation }) => ({
          headerShown: false,
          title: 'Detalhes da Partida',
          headerStyle: {
            backgroundColor: '#2a2a2a',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ProfileMain" 
        component={ProfileScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Notifications" 
        component={NotificationsScreen} 
        options={{
          headerShown: false,
          title: 'Notificações',
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
        name="Help" 
        component={HelpScreen} 
        options={{
          headerShown: false,
          title: 'Ajuda',
          headerStyle: {
            backgroundColor: '#2a2a2a',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function TabNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MainTabs" 
        options={{ headerShown: false }}
      >
        {() => (
          <Tab.Navigator
            screenOptions={{
              headerShown: true,
              tabBarStyle: {
                backgroundColor: '#2a2a2a',
                borderTopWidth: 0,
                elevation: 0,
                height: 70
              },
              tabBarActiveTintColor: '#ff0000',
              tabBarInactiveTintColor: '#666',
              headerStyle: {
                backgroundColor: '#2a2a2a',
              },
              headerTintColor: 'white',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Tab.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home-outline" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen 
              name="Partidas" 
              component={MatchesStack} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="football-outline" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen 
              name="Perfil" 
              component={ProfileStack} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person-outline" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        )}
      </Stack.Screen>
      <Stack.Screen 
        name="AddMatch" 
        component={AddMatchScreen} 
        options={{
          headerShown: false,
          presentation: 'modal'
        }}
      />
    </Stack.Navigator>
  );
} 