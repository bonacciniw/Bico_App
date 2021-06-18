import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  SafeAreaView } from 'react-native-safe-area-context';


export default function EmpregoList(props) {
    return  <SafeAreaView style={styles.containerEmpr}>
                <Text>{props.emprego}</Text>
            </SafeAreaView>
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