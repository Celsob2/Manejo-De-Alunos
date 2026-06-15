import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AlunosAdimplentesScreen } from '../screens/AlunosAdimplentes';
import { AlunosInadimplentesScreen } from '../screens/AlunosInadimplentes';
import { TodosAlunosScreen } from '../screens/TodosAlunos';
import { RootTabParamList } from '../types/RootTabParamList';

const Tab = createBottomTabNavigator<RootTabParamList>();

export function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#9CA3AF',
        tabBarStyle: {
          paddingTop: 6,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Todos"
        component={TodosAlunosScreen}
        options={{
          tabBarLabel: 'Todos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Inadimplentes"
        component={AlunosInadimplentesScreen}
        options={{
          tabBarLabel: 'Inadimplentes',
          tabBarActiveTintColor: '#DC2626',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="alert-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Adimplentes"
        component={AlunosAdimplentesScreen}
        options={{
          tabBarLabel: 'Adimplentes',
          tabBarActiveTintColor: '#16A34A',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkmark-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
