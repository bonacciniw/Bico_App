import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//import Abertura from './pages/Abertura';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Principal from './pages/Principal';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

/*
<Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
*/

export default function Routes() {

    createBottomTabs = () => {
        return  <Tab.Navigator>
                    <Tab.Screen name ="Principal" component={Principal} />
                </Tab.Navigator>
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Principal" children={createBottomTabs} />
        </Stack.Navigator>
    )
}