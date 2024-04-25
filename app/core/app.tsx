import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard, TeamRegistrationScreen } from '../screens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Dashboard} />
        <Stack.Screen name="Home" component={TeamRegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
