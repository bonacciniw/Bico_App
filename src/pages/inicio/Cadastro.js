import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import { Formik, useFormik, Form } from 'formik';
import api from '../../services/api';
import Yup from 'yup';
import ValidateCadastro from '../../Componentes/schema/CadastroSchema';

import Logo from '../../../assets/ico.png';

export default function({ navigation }) { 

    async function cadastro(dados) {
        let nome = dados.nome;
        let email = dados.email;
        let senha = dados.senha;
        
        await api.post('/cadastro', {
                nome, email, senha
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
            //navigation.navigate('Login'); 
    };

    return (
        <View style={styles.container}>
            
            <Image 
                source={Logo}
                style={styles.logo}
            />
    
            <Formik
                initialValues={{ nome: '', email: '', senha: '', senha2: '' }}
                validateOnChange
                validationSchema={ValidateCadastro}
                onSubmit={(values) => {
                    cadastro(values);
                }}
            >
                {(props) => (
                    <View style={styles.container}>
                        
                        <View style={styles.form} >
                            <Text style={styles.label}>NOME</Text>  
                            <TextInput 
                                style={styles.input}
                                textAlign="center"
                                textContentType='emailAddress'
                                placeholder="Nome completo"
                                placeholderTextColor="#D9DBDC"
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={props.values.nome}
                                onChangeText={text => props.setFieldValue('nome', text)}
                            />
                            { props.errors.nome && <Text style={styles.errors}>{props.errors.nome}</Text> }
                        </View>

                        
                        <View style={styles.form} >
                            <Text style={styles.label}>E-MAIL</Text>
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
                                onChangeText={text => props.setFieldValue('email', text)}
                            /> 
                            { props.errors.email && <Text style={styles.errors}>{props.errors.email}</Text> }
                        </View>

                        
                        <View style={styles.form} >
                            <Text style={styles.label}>SENHA</Text>
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
                                onChangeText={text => props.setFieldValue('senha', text)}
                            />
                            { props.errors.senha && <Text style={styles.errors}>{props.errors.senha}</Text> }      
                        </View>

                        
                        <View style={styles.form} >
                            <Text style={styles.label}>CONFIRMAR SENHA SENHA</Text>
                            <TextInput 
                                style={styles.input}
                                textAlign="center"
                                textContentType='password'
                                secureTextEntry={true}
                                placeholder="Confirmar Senha"
                                placeholderTextColor="#D9DBDC"
                                autoCompleteType="password"
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={props.values.senha2}
                                onChangeText={text => props.setFieldValue('senha2', text)}
                            />    
                            { props.errors.senha2 && <Text style={styles.errors}>{props.errors.senha2}</Text> }        
                        </View>
                        <TouchableOpacity style={styles.button} type="submit" onPress={props.handleSubmit}>
                            <Text>CADASTRAR</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>

            <Text style={styles.labelCadastro}>Ao clicar em cadastrar você concorda com os
                <TouchableOpacity>
                    <Text style={styles.labelBold}>TERMOS DE USO</Text>
                </TouchableOpacity>
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    logo: {      
        width:  200,
        height:  100
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
        width: 300,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 40
    },

    label: {
        fontSize: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },

    button:{
        backgroundColor: '#1199C5',
        borderWidth: 0.2,
        borderRadius: 50,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginBottom: 5
    },

    labelCadastro: {
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        paddingLeft: 10
    },

    labelBold: {
        fontSize: 15,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "bold",
        marginTop: 5,
        textDecorationLine: 'underline'
    },

    errors: {
        color: 'red'
    }
});
