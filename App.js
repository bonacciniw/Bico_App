import React, { Component } from 'react';
//import Routes from './src/routes';

import Login from './src/pages/Login';

import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text } from 'react-native';


const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
          <Text>Teste</Text>
      </NavigationContainer>
    );
  }
}