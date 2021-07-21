import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
//import { AsyncStorage } from '@react-native-async-storage/async-storage';

import api from '../../services/api';

import fundo from '../../../assets/fundo_login.jpeg';
import ico from '../../../assets/ico.png'
//import { color } from 'react-native-reanimated';


export default function Login({ navigation }){
    const [ cmailuser, setEmail] = useState(null);
    const [ csenhuser, setSenha] = useState(null);
    //var erro;
    

    /*async function validarCampos() {
        if ( cmailuser == null ){
            return "Preencha seu E-mail";
        }
        if ( csenhuser == null ){
            return "Preencha a senha";
        }else
            return ""
    };*/

    /*useEffect(() => {
        const usua = AsyncStorage.getItem('cmailuser');
        const senh = AsyncStorage.getItem('csenhuser');

        if (usua && senh )  {
            navigation.navigate('Principal');
        };
    }, []);*/

    async function handleSubmit() {
        /*const  response = await api.get('/user/dados', {
            cmailuser,
            csenhuser
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });*/

        //await AsyncStorage.setItem('cmailuser', cmailuser);
        //await AsyncStorage.setItem('csenhuser', csenhuser);

        //if(response.sucess == true) {
            navigation.navigate('Principal');
        //}
    };

    async function handleSubmitCadastro() {
        navigation.navigate('Cadastro');
    };


    return (
    <View style={styles.container}>
        <ImageBackground  source={fundo}  style={styles.image}>
            <Image 
                source={ico}
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

            <TouchableOpacity style={styles.labelBold}>
                <Text>Esqueceu sua senha?</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.labelEntrar} >ENTRAR</Text>
            </TouchableOpacity>

            <Text style={styles.labelCadastro}>Ainda não possui cadastro? Crie um 
                <Text onPress={handleSubmitCadastro}  style={styles.labelBold}> clicando aqui</Text>
            </Text>
        </ImageBackground>    
    </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        marginBottom: 75,
        width:  200,
        height:  200
    },

    container: {
        backgroundColor: '#DDE0E1',
        flex: 1,
        justifyContent: 'center'
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
    },

    labelEntrar: {
        color: "#00000F"
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
    },

    validar: {
        fontSize: 20,
        color: "#FFFFFF"
    }
});
