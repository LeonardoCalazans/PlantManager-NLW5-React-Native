import React, {useEffect, useState} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Sharing from 'expo-sharing';

import userImg from '../assets/user.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Header(){
    const [userName, setUserName] = useState<string>();
    const [userPhoto, setUserPhoto] = useState<string>();
    

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            const image = await AsyncStorage.getItem('@plantmanager:image');
            setUserName(user || '');
            setUserPhoto(image || "../assets/User.png")
        }

        loadStorageUserName();
    },[]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>

            <Image 
                source={{uri: userPhoto}}
                style={styles.image}
                // onPress={handleUserImage}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
        // backgroundColor: colors.red,
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 100,
        backgroundColor: colors.gray
    },
    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }
});