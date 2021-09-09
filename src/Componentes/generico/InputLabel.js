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
                    textContentType={props.type}
                    secureTextEntry={true}
                    placeholderTextColor="#D9DBDC"
                    autoCompleteType="password"
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
        alignItems: 'center',
        marginBottom: 10
    },

    label: {
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 25   
    },

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