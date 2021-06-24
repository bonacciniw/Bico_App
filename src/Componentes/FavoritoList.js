import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  SafeAreaView } from 'react-native-safe-area-context';

import api from '../services/api';

export default function FavoritoList(User) {


    useEffect(() => {
        async function loadFavoritos() {
            const response = await api.get('/empresa/dados', {
                params: {User}
            })
            
           // setEmpresas(response.data);
        }

        loadFavoritos();
    }, []);

    return ( 
        <SafeAreaView style={styles.containerEmpr}>
            <Text>{props.User}</Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    logo: {
        marginBottom: 75
    },

    containerEmpr: {
        backgroundColor: '#CDDFFA',
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        width:350
    }

});