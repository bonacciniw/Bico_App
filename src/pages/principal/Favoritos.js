import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';

import FavoritoList from '../../Componentes/FavoritoList';
import Styles from '../../Styles/StylesAbasPrincipais';

export default function({ navigation }) {
    return(
        <View style={Styles.container}>
            <ScrollView style={Styles.scrollView}>
                    <FavoritoList nome="Lucas Souza" local="Londrina" emprego="Restaurante"/>
                    <FavoritoList nome="Jose da Silva" local="Ibiporã" emprego="Loja"/>
                    <FavoritoList nome="Rafael Siqueira" local="Londrina" emprego="Marmoraria"/>
                    <FavoritoList nome="Marcela Duarte" local="Cambe" emprego="Faxineira"/>
                    <FavoritoList nome="Felipe Ramos" local="Cambe" emprego="Barbearia"/>
                    <FavoritoList nome="Barbara Menezes" local="Londrina" emprego="Baba"/>
            </ScrollView>
        </View> 
    );

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    Text: {
        fontSize: 30
    }

});