import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import EmpregoList from '../../Componentes/EmpregoList';

export default function({ navigation }) {



    return(
        <View style={styles.container}>

            <View style={styles.containerEmpr}>
                <Text>Teste</Text>
            </View>
            
            <EmpregoList emprego="Restaurante" />

        </View>
    );

}


const styles = StyleSheet.create({
    logo: {
        marginBottom: 75
    },

    container: {
        backgroundColor: '#DDE0E1',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});