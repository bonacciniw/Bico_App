import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { Formik } from 'formik';
import styles from '../../Styles/StylesInicio';
//import { AsyncStorage } from '@react-native-async-storage/async-storage';

import api from '../../services/api';

import fundo from '../../../assets/fundo_login.jpeg';
import ico from '../../../assets/ico.png'
//import { color } from 'react-native-reanimated';


export default function Login({ navigation }){

    function handleSubmitLoginProf() {
        navigation.navigate('LoginPessoa');
    }

    function handleSubmitLoginEmpr() {
        navigation.navigate('LoginEmpresa');
    }

    function handleSubmitPrincipal() {
        navigation.navigate('Principal');
    }


    return (
    <View style={styles.container}>
        <Formik>
            {(props) => (
                <ImageBackground  source={fundo}  style={styles.image}>
                    <View style={styles.fitaLabelModoLogin}>
                        <Text style={styles.labelTituloModoLogin}>Como deseja acessar a plataforma?</Text>
                    </View>
                    <Image 
                        source={ico}
                        style={styles.logo}
                    />
                    
                    <View style={styles.ViewerModologin} >
                        <View style={styles.inputModoLogin}>
                            <Text style={styles.labelModoLogin} textAlign="center" onPress={handleSubmitLoginProf}>Como profissional</Text>         
                        </View>
                    </View>
                    <View style={styles.ViewerModologin} >
                        <View style={styles.inputModoLogin}>
                            <Text style={styles.labelModoLogin} textAlign="center" onPress={handleSubmitLoginEmpr}>Como empresa</Text>       
                        </View>
                    </View>
                    <View style={styles.ViewerModologin} >
                        <View style={styles.inputModoLoginVisitante} >
                            <Text style={styles.labelModoLogin} textAlign="center" onPress={handleSubmitPrincipal}>Como visitante, quero conhecer!</Text>       
                        </View>
                    </View>
                </ImageBackground>
            )}
        </Formik>    
    </View>
    );
}
