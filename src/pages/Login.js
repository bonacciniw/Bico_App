import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';
import { TouchableOpacity } from '@react-navigation/native';
//import { AsyncStorage } from '@react-native-async-storage/async-storage';

import api from '../services/api';

import Logo from '../../assets/Icon_empresa.png';


export default function Login({ navigation }){
    const [ cmailuser, setEmail] = useState('');
    const [ csenhuser, setSenha] = useState('');

    /*useEffect(() => {
        const usua = AsyncStorage.getItem('cmailuser');
        const senh = AsyncStorage.getItem('csenhuser');

        if (usua && senh )  {
            navigation.navigate('Principal');
        };
    }, []);*/

    async function handleSubmit() {
        
        await api.get('/user/dados', {
            cmailuser,
            csenhuser
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

        //await AsyncStorage.setItem('cmailuser', cmailuser);
        //await AsyncStorage.setItem('csenhuser', csenhuser);

        navigation.navigate('Principal');
    };

    async function handleSubmitCadastro() {
        navigation.navigate('Cadastro');
    };


    return (
    <KeyboardAvoidingView enabled={Platform.Os === 'ios'} style={styles.container}>
        <Image 
            source={Logo}
            style={styles.logo}
        />
        
        <Text style={styles.label}>LOGIN</Text>
        <View style={styles.form} >
            <TextInput 
                style={styles.input}
                textAlign="center"
                textContentType='emailAddress'
                placeholder="E-mail"
                placeholderTextColor="#D9DBDC"
                keyboardType="email-address"
                autoCompleteType="email"
                autoCapitalize="none"
                autoCorrect={false}
                value={cmailuser}
                onChangeText={setEmail}
            />            
        </View>

        <Text style={styles.label}>SENHA</Text>
        <View style={styles.form} >
            <TextInput 
                style={styles.input}
                textAlign="center"
                textContentType='password'
                secureTextEntry={true}
                placeholder="Senha"
                placeholderTextColor="#D9DBDC"
                autoCompleteType="password"
                autoCapitalize="none"
                autoCorrect={false}
                value={csenhuser}
                onChangeText={setSenha}
            />            
        </View>

        <Text style={styles.labelBold}>Esqueceu sua senha?</Text>

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text>ENTRAR</Text>
        </TouchableOpacity>

        <Text style={styles.labelCadastro}>Ainda não possui cadastro? Crie um 
            <Text onPress={handleSubmitCadastro}  style={styles.labelBold}> clicando aqui</Text>
        </Text>
    </KeyboardAvoidingView>
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
    },

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

    button:{
        backgroundColor: '#1199C5',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    },

    labelCadastro: {
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    labelBold: {
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "bold",
        marginTop: 5,
        textDecorationLine: 'underline'
    }
});
