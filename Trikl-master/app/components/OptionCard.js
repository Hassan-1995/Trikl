import React from 'react';

import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function OptionCard(props) {
    return (
        <View style={styles.container}>
            <AppText style={styles.title}>Almost There!</AppText>
            <AppText style={styles.subTitle}>Estimated time - 2 minutes</AppText>
            <AppText style={styles.description}>Please wait for KYC approval before starting your investment</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor: colors.primary,
        borderRadius: 30,
        overflow: 'hidden',
        paddingHorizontal: 25,
        paddingVertical: 35,
        width: '100%',
    },
    description:{
        color: colors.white,
        fontWeight: '600',
        textAlign: 'center',
        paddingTop: 30,
    },
    subTitle:{
        color: colors.white,
        fontSize: 15,
        paddingTop: 10,
    },
    title:{
        color: colors.white,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default OptionCard;