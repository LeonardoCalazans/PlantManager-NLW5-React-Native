import React from 'react';
import { 
    StyleSheet, 
    Text,
} from 'react-native';
import {
    RectButton,
    RectButtonProps
} from 'react-native-gesture-handler'; //botão que ja traz por default que ja trás o botão pre configurado pela interface

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps {
    title: string;
    active?: boolean; // essa interrogação quer dizer que o campo não é obrigatorio, typscript
}

export function EnvironmentButton ({ 
    title,
    active = false,
    ...rest
} : EnvironmentButtonProps){
    return(
        <RectButton
            style={[
                styles.container,
                active && styles.containerActive
            ]}
            {...rest}
        >
            <Text style={[
                styles.text,
                active && styles.textActive
            ]}>
                { title }
            </Text>
        </RectButton>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        width: 76,
        height: 40,
        // paddingVertical: 7,
        // paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginHorizontal: 5
    },
    containerActive: {
        backgroundColor: colors.green_light
    },
    text: {
        color: colors.heading,
        fontFamily: fonts.text,
    },
    textActive: {
        fontFamily: fonts.heading,
        color: colors.green_dark,
    }
})