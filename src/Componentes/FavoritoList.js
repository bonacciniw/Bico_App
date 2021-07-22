import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import {  SafeAreaView } from 'react-native-safe-area-context';

import api from '../services/api';

import imagem from '../../assets/Job.png';

export default function FavoritoList(props) {


    /*useEffect(() => {
        async function loadFavoritos() {
            const response = await api.get('/empresa/dados', {
                params: {User}
            })
            
           // setEmpresas(response.data);
        }

        loadFavoritos();
    }, []);*/

    return (
        
        <SafeAreaView style={styles.containerEmpr}>
            <ImageBackground style={styles.imagemFundo}>
                <Image 
                    source={imagem}
                    style={styles.imagem}
                />
            </ImageBackground>
            <View style={styles.styleFundo}>
                <Text style={styles.Texto}>{props.nome}</Text>
                <Text style={styles.Texto}>{props.emprego}</Text>
            </View>
        </SafeAreaView> 
    )
}


const styles = StyleSheet.create({
    containerEmpr: {
        backgroundColor: '#CDDFFA',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        width: 350,
        height: 80
    },

    imagemFundo: {
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#1087AC',
        flex: 1
    },

    imagem: {
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
    },

    styleFundo: {
        marginLeft: 14,
        marginRight: 10,
        flexDirection: 'row',
        flex: 3
    },

    Texto: {
        fontSize: 20,
        marginRight: 10
    }

});