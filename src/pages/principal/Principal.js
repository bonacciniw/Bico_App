import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import EmpregoList from '../../Componentes/EmpregoList';
import Styles from '../../Styles/StylesAbasPrincipais';
import iconPesquisa from '../../../assets/pesquisar.png'

export default function({ navigation }) {
    return(
        <View style={Styles.container}>

            <View style={Styles.formBarraPesquisa}>
                <TextInput 
                    style={Styles.barraPesquisa}
                    textAlign="left"
                    placeholderTextColor="#D9DBDC"
                    placeholder="Pesquisar">    
                </TextInput> 
                <Image source={iconPesquisa} style={Styles.imagem}/>                 
            </View>

           <ScrollView style={Styles.scrollView}>
                <EmpregoList nome="Lucas Souza" local="Londrina" emprego="Restaurante"/>
                <EmpregoList nome="Jose da Silva" local="Ibiporã" emprego="Loja"/>
                <EmpregoList nome="Rafael Siqueira" local="Londrina" emprego="Marmoraria"/>
                <EmpregoList nome="Marcela Duarte" local="Cambe" emprego="Faxineira"/>
                <EmpregoList nome="Felipe Ramos" local="Cambe" emprego="Barbearia"/>
                <EmpregoList nome="Barbara Menezes" local="Londrina" emprego="Baba"/>
           </ScrollView> 
        </View>
    );

}