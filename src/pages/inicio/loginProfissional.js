import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { Formik } from 'formik';
import styles from '../../Styles/StylesInicio';
//import { AsyncStorage } from '@react-native-async-storage/async-storage';

import api from '../../services/api';

import fundo from '../../../assets/fundo_login.jpeg';
import ico from '../../../assets/ico.png'
//import { color } from 'react-native-reanimated';


export default function loginProfissional({ navigation }){
    const [ email, setEmail] = useState(null);
    const [ senha, setSenha] = useState(null);
    const entrou = false;
    
    /*useEffect(() => {
        const usua = AsyncStorage.getItem('email');
        const senh = AsyncStorage.getItem('senha');

        if (usua && senh )  {
            navigation.navigate('Principal');
        };
    }, []);*/

    async function handleSubmitCadastro() {
        navigation.navigate('Cadastro');
    };

    async function login(email, senha) {
        console.log(JSON.stringify(values, null, 2));
        api.get("/login", { email, senha })
        .then(response => {
            console.log(response);
            navigation.navigate('Principal');
        })
        .catch(error => {
            console.log(error);
        });
    }


    return (
    <View style={styles.container}>
        <Formik
            initialValues={{ email: '', senha: '' }}
            onSubmit={(values) => {
                navigation.navigate('Principal');
                if (values.email == '') 
                    alert(`E-mail invalido!`)
                else if (values.senha == '') 
                    alert(`Senha invalida!`)
                else {
                    login(values);
                } 
            }}
        >
            {(props) => (
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
                            value={props.values.email}
                            onChangeText={props.handleChange('email')}
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
                            value={props.values.senha}
                            onChangeText={props.handleChange('senha')}
                        />            
                    </View>

                    <TouchableOpacity style={styles.labelBold}>
                        <Text>Esqueceu sua senha?</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={props.handleSubmit} style={styles.button}>
                        <Text style={styles.labelEntrar} >ENTRAR</Text>
                    </TouchableOpacity>

                    <Text style={styles.labelCadastro}>Ainda não possui cadastro? Crie um 
                        <Text onPress={handleSubmitCadastro}  style={styles.labelBold}> clicando aqui</Text>
                    </Text>
                </ImageBackground>
            )}
        </Formik>    
    </View>
    );
}
