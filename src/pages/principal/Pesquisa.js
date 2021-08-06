import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import iconPesquisa from '../../../assets/pesquisar.png'
import Styles from '../../Styles/StylesAbasPrincipais';

export default function({ navigation }) {
    return(
        <View style={Styles.containerPesquisa}>

            <View style={Styles.formBarraPesquisa}>
                <TextInput 
                    style={Styles.barraPesquisa}
                    textAlign="left"
                    placeholderTextColor="#D9DBDC"
                    placeholder="Pesquisar">    
                </TextInput> 
                <Image source={iconPesquisa} style={Styles.imagem}/>                 
            </View>

            <View style={Styles.formGrupoRecomendacao}>
                <View style={Styles.formRecomendacao}>
                    <Text>Restaurantes</Text>
                </View>
                <View style={Styles.formRecomendacao}>
                    <Text>Restaurantes</Text>
                </View>
            </View>
            <View style={Styles.formGrupoRecomendacao}>
                <View style={Styles.formRecomendacao}>
                    <Text>Restaurantes</Text>
                </View>
                <View style={Styles.formRecomendacao}>
                    <Text>Restaurantes</Text>
                </View>
            </View>
            <View style={Styles.formGrupoRecomendacao}>
                <View style={Styles.formRecomendacao}>
                    <Text>Restaurantes</Text>
                </View>
                <View style={Styles.formRecomendacao}>
                    <Text>Restaurantes</Text>
                </View>
            </View>
        </View>
    );

}