import React from 'react';
import {
    SafeAreaView,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    View
} from 'react-native';
import { Feather } from '@expo/vector-icons';


import colors from '../styles/colors';
import wateringImg from '../assets/watering.png'; //arquivo custom.d.ts faz esse import funcionar
import fonts from '../styles/fonts';

export function Welcome() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <Text style={styles.title}>
                    Gerencie {'\n'}
                    suas plantas de{'\n'}
                    forma fácil.
                 </Text>

                <Image
                    source={wateringImg}
                    style={styles.image}
                    resizeMode="contain" //refatorando pro tamanho do container
                />


                <Text style={styles.subtitle}>
                    Não esqueça mais de regar as plantas.
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                >
                    <Feather
                        name="chevron-right"
                        style={styles.buttonIcon}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 28
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text
    },
    image: {
        height: Dimensions.get('window').width * 0.7 //tamanho da tela de forma dinamica
        //Dimensions pegar (.get) da janela (window) e multiplic a largura por 0.7
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 56,
        borderRadius: 16,
        marginBottom: 20
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 32
    }
});