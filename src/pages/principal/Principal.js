import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import EmpregoList from '../../Componentes/EmpregoList';

import iconPesquisa from '../../../assets/pesquisar.png'

export default function({ navigation }) {

    return(
        <View style={styles.container}>

            <View style={styles.formBarraPesquisa}>
                <TextInput 
                    style={styles.barraPesquisa}
                    textAlign="center"
                    placeholderTextColor="#D9DBDC">    
                </TextInput> 
                <Image source={iconPesquisa} style={styles.imagem}/>                 
            </View>

           <ScrollView style={styles.scrollView}>
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


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollView: {
        marginHorizontal: 20,
        flex: 1,
        marginTop: 20
    },
    barraPesquisa: {
        backgroundColor: '#1199C5',
        width: 250 
    },
    imagem: {
        resizeMode: "cover",
        alignItems: 'center',
        width: 40,
        height: 40,
        right: 10
    },
    formBarraPesquisa: {
        backgroundColor: '#1199C5',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 350,
        height: 40,
        justifyContent: "flex-end",
        flexDirection: "row",
        marginTop: 50
    }
});