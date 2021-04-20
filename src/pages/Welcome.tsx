import React, {useState} from 'react';
import { SafeAreaView, Text, Image, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

import wateringImg from '../assets/watering.png'; //arquivo custom.d.ts faz esse import funcionar
import { Button } from '../components/button';

export function Welcome(){
    // useState
    const [visible, setVisible] = useState(false);

    function handleVisibility(){
        setVisible(true)
    }
    // 
    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
            Gerencie {'\n'} 
            suas plantas {'\n'} 
            de forma fácil.
        </Text>
        
        {
            visible &&
        <Image source={wateringImg} style={styles.image} />
        }

        <Text style={styles.subtitle}>
            Não esqueça mais de regar as plantas.
            Nós cuidamos de lembrar você sempre que precisar.
        </Text>
        <Button title="Avançar" onPress={handleVisibility}/* propriedade extendida vai jogar no ...rest*//>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading

    },
    image: {
        width: 292,
        height: 294
    }
});