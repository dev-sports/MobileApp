import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Dashboard, HomeScreen } from '../screens';

const Tab = createBottomTabNavigator();


const Footer : React.FC = () =>  {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={Dashboard} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  };

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#eee',
    borderTopWidth: 1,
    borderColor: '#ddd'
  },
  footerText: {
    fontSize: 16
  }
});

export default Footer;
