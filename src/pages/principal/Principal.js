import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {  SafeAreaView } from 'react-native-safe-area-context';

import EmpregoList from '../../Componentes/EmpregoList';

export default function({ navigation }) {



    return(
        <View style={styles.container}>

            <SafeAreaView style={styles.containerEmpr}>
                
            </SafeAreaView>
            
            <EmpregoList emprego="Restaurante" />

        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DDE0E1',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }

});