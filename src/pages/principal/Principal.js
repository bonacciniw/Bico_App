import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput} from 'react-native';

import EmpregoList from '../../Componentes/EmpregoList';
import Styles from '../../Styles/StylesAbasPrincipais';
import iconPesquisa from '../../../assets/pesquisar.png'
import api from '../../services/api';

export default function({ navigation }) {

    
    /*const response = api.get('/profissional/groupProfissionais', {})
    .then(response => {
        return response.json();
    })
    .catch(error => {
        console.log(error);
    })
    .then(json => {
        const Cadastros = json.
    });*/

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
             <EmpregoList nome="Jose da Silva" local="Ibiporã" emprego="Vendedor(a)"/>
             <EmpregoList nome="Lucas Souza" local="Londrina" emprego="Programador(a)"/>
             <EmpregoList nome="Marcos Araujo" local="Londrina" emprego="Garçom"/>
             <EmpregoList nome="Ana Milena" local="Cambe" emprego="Cuidadora"/>
           </ScrollView> 
        </View>
    );

}