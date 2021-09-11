import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import { Formik, useFormik, Form } from 'formik';
import api from '../../services/api';

import Logo from '../../../assets/Icon_empresa.png';

export default function({ navigation }) { 

    /*const [ cmailuser, setEmail] = useState('');
    const [ csenhuser, setSenha] = useState('');
    const [ senha2, setSenha2] = useState('');*/

    async function handleSubmit() {
        
        if (csenhuser === senha2 ){
            await api.post('/user/cadastro', {
                cmailuser,
                csenhuser
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });

            //const { _id } = response.data;

            //await AsyncStorage.setItem('cmailuser', cmailuser);
            //await AsyncStorage.setItem('csenhuser', csenhuser);

            navigation.navigate('Login');
        };    
    };

    const formik = useFormik({
        initialValues: {
          email: '',
          senha: '',
          senha2: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return (
        <View style={styles.container}>
            
            <Image 
                source={Logo}
                style={styles.logo}
            />
    
            <Formik
                initialValues={{ email: '', senha: '', senha2: '' }}
                onSubmit={(values) => {
                    if (values.email == '') 
                        alert(`E-mail invalido!`)
                    else if (values.senha == '') 
                        alert(`Senha invalida!`)
                    else {
                        Alert('Esta funcionando');
                    } 
                }}
            >
                {(props) => (
                    <View style={styles.container}>
                        <Text style={styles.label}>E-MAIL</Text>
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
                                onChangeText={props.handleChange}
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
                                onChangeText={props.handleChange}
                            />            
                        </View>

                        <Text style={styles.label}>CONFIRMAR SENHA SENHA</Text>
                        <View style={styles.form} >
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
                                onChangeText={props.handleChange}
                            />            
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
        marginTop: 50
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
        marginTop: 50
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
    }
});
