import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import Abertura from './pages/Abertura';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Principal from './pages/Principal';


const Routes = NavigationContainer(
    createStackNavigator({
        //Abertura,
        Login,
        Cadastro        
    }),

    createBottomTabNavigator({
        Principal
    })
);


export default Routes;