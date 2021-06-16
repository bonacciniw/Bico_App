
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, Image, StyleSheet} from 'react-native';


//import Abertura from './pages/Abertura';
import Cadastro from './pages/inicio/Cadastro';
import Login from './pages/inicio/Login';
import Principal from './pages/principal/Principal';
import Empregos from './pages/principal/Empregos';
import Favoritos from './pages/principal/Favoritos';
import Pesquisa from './pages/principal/Pesquisa';
import Perfil from './pages/Cadastro/Perfil'

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
                    <Tab.Screen 
                        name ="Principal" 
                        component={Principal} 
                        options={{
                            tabBarLabel: 'Principal',
                            tabBarColor: "#007FA7",
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="home" color={"#000000"} size={26} />
                            ),
                        }
                    } />
                    <Tab.Screen 
                        name ="Empregos"
                        component={Empregos} 
                        options={{
                            tabBarLabel: 'Bicos',
                            tabBarColor: "#007FA7",
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="briefcase" color={"#000000"} size={26} />
                            ),
                        }}
                    />
                    <Tab.Screen 
                        name ="Pesquisa" 
                        component={Pesquisa}
                        options={{
                            tabBarLabel: 'Pesquisa',
                            tabBarColor: "#007FA7",
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="magnify" color={"#000000"} size={29} />
                            ),
                        }} 
                    />
                    <Tab.Screen 
                        name ="Favoritos" 
                        component={Favoritos}
                        options={{
                            tabBarLabel: 'Favoritos',
                            tabBarColor: "#007FA7",
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="heart" color={"#000000"} size={26} />
                            ),
                        }} 
                    />
                    <Tab.Screen 
                        name ="Perfil" 
                        component={Perfil} 
                        options={{
                            tabBarLabel: 'Perfil',
                            tabBarColor: "#007FA7",
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="account" color={"#000000"} size={26} />
                            ),
                        }} 
                    />
                </Tab.Navigator>
    }

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" 
                component={Login}
                options={{
                    headerLeft: ()=> null,
                    headerShown: false
                }} 
            />
            <Stack.Screen 
                name="Cadastro" 
                component={Cadastro} 
                options={{
                    headerStyle: {
                        height: 70,
                        backgroundColor: "#1199C5"
                    }
                }}
            />
            <Stack.Screen 
                name="Principal" 
                children={createBottomTabs}
                options={{
                    headerLeft: ()=> null,
                    headerShown: false
                }}                
            />
        </Stack.Navigator>
    )
}