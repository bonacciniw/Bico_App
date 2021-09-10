import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import {  SafeAreaView } from 'react-native-safe-area-context';

export default (props) => {
    return ( 
        <SafeAreaView style={styles.containerEmpr}>
            <Text style={styles.label}>{props.descricao}</Text>
            <View style={styles.form} >
                <TextInput 
                    style={styles.input}
                    textAlign="center"
                    secureTextEntry={true}
                    placeholderTextColor="#D9DBDC"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder={props.placeholder}
                    value={props.value}                
                />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    input: {
        backgroundColor: '#1199C5',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    form: {
        width: 250,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    label: {
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    }
});