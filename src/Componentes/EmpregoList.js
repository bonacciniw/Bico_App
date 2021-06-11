import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function EmpregoList(props) {
    return  <View style={styles.containerEmpr}>
                <Text>{props.emprego}</Text>
            </View>
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