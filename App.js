import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import TransactionListScreen from './screens/TransactionListScreen';
import TransactionDetailScreen from './screens/TransactionDetailScreen';
import SummaryScreen from './screens/SummaryScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="TransactionList" 
        component={TransactionListScreen}
        options={{ title: 'Transactions List' }}
      />
      <Stack.Screen 
        name="TransactionDetail" 
        component={TransactionDetailScreen}
        options={{ title: 'Transaction Detail' }}
      />
    </Stack.Navigator>
  );
}

function SummaryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Summary" 
        component={SummaryScreen}
        options={{ title: 'Summary' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Transactions') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Summary') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen 
          name="Transactions" 
          component={TransactionsStack}
        />
        <Tab.Screen 
          name="Summary" 
          component={SummaryStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
