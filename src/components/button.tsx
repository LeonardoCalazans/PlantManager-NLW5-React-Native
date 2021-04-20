import React from 'react';
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';
import colors from '../../styles/colors';

interface ButtonProps extends TouchableOpacityProps{
    //nada mais é do que uma especia de contrato, quando alguem usar o component tem que respeitar esse contrato
    title: string;
    //passando um parametro e é tipado
}

export function Button({ title, ... rest } : ButtonProps){
    return(
        <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.7}
            {...rest}
        >
            <Text style={styles.buttonText}>
              { title }
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        paddingHorizontal: 15,
        borderRadius: 16,
        marginBottom: 20
    },
    buttonText: {
        color: colors.white,
        fontSize: 24
    }
});