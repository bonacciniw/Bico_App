import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import iconPesquisa from '../../../assets/pesquisar.png'

export default function({ navigation }) {



    return(
        <View style={styles.container}>

            <View style={styles.formBarraPesquisa}>
                <TextInput 
                    style={styles.barraPesquisa}
                    textAlign="left"
                    placeholderTextColor="#D9DBDC"
                    placeholder="Pesquisar">    
                </TextInput> 
                <Image source={iconPesquisa} style={styles.imagem}/>                 
            </View>

            <View style={styles.formGrupoRecomendacao}>
                <View style={styles.formRecomendacao}>
                    <Text>Restaurantes</Text>
                </View>
                <View style={styles.formRecomendacao}>
                    <Text>Restaurantes</Text>
                </View>
            </View>
            <View style={styles.formGrupoRecomendacao}>
                <View style={styles.formRecomendacao}>
                    <Text>Restaurantes</Text>
                </View>
                <View style={styles.formRecomendacao}>
                    <Text>Restaurantes</Text>
                </View>
            </View>
            <View style={styles.formGrupoRecomendacao}>
                <View style={styles.formRecomendacao}>
                    <Text>Restaurantes</Text>
                </View>
                <View style={styles.formRecomendacao}>
                    <Text>Restaurantes</Text>
                </View>
            </View>
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DDE0E1',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    Text: {
        fontSize: 30
    },
    barraPesquisa: {
        backgroundColor: '#1199C5',
        width: 290 
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
        marginTop: 50,
        marginBottom: 10
    },
    formRecomendacao: {
        backgroundColor: '#1087AC',
        width: 170,
        height: 25,
        borderWidth: 0.2,
        borderRadius: 15,
        marginHorizontal: 5,
        alignItems: 'center'
    },
    formGrupoRecomendacao: {
        justifyContent: "flex-start",
        flexDirection: "row",
        width: 360,
        height: 50,
        marginBottom: -15

    }

});