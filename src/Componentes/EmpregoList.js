import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import {  SafeAreaView } from 'react-native-safe-area-context';

import api from '../services/api';

import imagem from '../../assets/Job.png';

export default function EmpregoList(props) {


    useEffect(() => {
        async function loadEmpresas() {
            const response = await api.get('/empresa/dados')

           // setEmpresas(response.data);
        }

        loadEmpresas();
    }, []);

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
                <Text style={styles.Texto}>{props.local}</Text>
                <Text style={styles.Texto}>{props.emprego}</Text>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    logo: {
        marginBottom: 75
    },

    containerEmpr: {
        backgroundColor: '#CDDFFA',
        alignItems: 'center',
        height: 250,
        width: 350,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "flex-start"
    },

    imagemFundo: {
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        width: 130,
        height: 250,
        backgroundColor: '#1087AC'
    },

    imagem: {
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        width: 100,
        height: 100
    },

    styleFundo: {
        marginLeft: 14,
        marginRight: 10,
        height: 250,
    },

    Texto: {
        fontSize: 20,
        marginRight: 10
    }

});