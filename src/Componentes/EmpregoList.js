import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import {  SafeAreaView } from 'react-native-safe-area-context';

import imagem from '../../assets/Job.png';

export default function EmpregoList(props) {

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
    containerEmpr: {
        backgroundColor: '#CDDFFA',
        alignItems: 'center',
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
        height: 250,
        backgroundColor: '#1087AC',
        flex: 1
    },

    imagem: {
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
    },

    styleFundo: {
        marginLeft: 14,
        marginRight: 10,
        flex: 2
    },

    Texto: {
        fontSize: 20,
        marginRight: 10
    }

});