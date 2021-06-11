
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//import Abertura from './pages/Abertura';
import Cadastro from './pages/inicio/Cadastro';
import Login from './pages/inicio/Login';
import Principal from './pages/principal/Principal';
import Empregos from './pages/principal/Empregos';
import Favoritos from './pages/principal/Favoritos';
import Pesquisa from './pages/principal/Pesquisa';
import Perfil from './pages/Cadastro/Perfil'

import IconPrincipal from '../assets/home.png';
import IconEmprego from '../assets/Icon_empresa.png';
import IconFavoritos from '../assets/favorito.png';
import IconPesquisa from '../assets/pesquisar.png';
import IconPerfil from '../assets/user.png';

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
                    <Tab.Screen name ="Empregos" component={Empregos} />
                    <Tab.Screen name ="Favoritos" component={Favoritos} />
                    <Tab.Screen name ="Pesquisa" component={Pesquisa} />
                    <Tab.Screen name ="Perfil" component={Perfil} />
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