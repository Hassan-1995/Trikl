import React from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../config/colors';
import CustomDialpad from '../components/CustomDialpad';

function CredentialScreen(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <AppText style={styles.title} >Login with Pin</AppText>
                <AppText>Four digit passcode for secure Login</AppText>
                <AppText style={styles.description} >Login Number ****139</AppText>
            </View>
            <CustomDialpad/>
            <View style={styles.bottomSection}>
                <AppText>Forget PIN? </AppText>
                <TouchableOpacity>
                    <AppText style={styles.forgetPassword} >Reset pin</AppText>
                </TouchableOpacity>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    bottomSection:{
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 30,
    },
    container:{
        alignItems: 'center',
        paddingTop: 50,
        height: '30%',
        justifyContent: 'space-evenly',
    },
    description:{
        fontSize: 15,
    },
    forgetPassword:{
        textDecorationLine: 'underline',
        color: colors.primary,
    },
    title:{
        fontSize: 25,
        fontWeight: '700',
    },
});

export default CredentialScreen;