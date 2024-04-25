import React from 'react';

import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import AppText from './AppText';
import colors from '../config/colors';

function SummaryCard(props) {
    return (
        <LinearGradient
            colors={[colors.primary, colors.dark]}
            style={styles.container}
        >
            <View style={[styles.horzontalContainer, {marginBottom: 20}]} >
                <View style={styles.smallContainer}>
                    <AppText style={styles.title}>Total Balance</AppText>
                        <View style={styles.values}>
                            <AppText style={styles.currencySymbol}>PKR</AppText>
                            <AppText style={styles.amount}>0</AppText>
                        </View>
                </View>
                <View style={styles.smallContainer} >
                    <AppText style={styles.title}>Processing Balance</AppText>
                        <View style={styles.values}>
                            <AppText style={styles.currencySymbol}>PKR</AppText>
                            <AppText style={styles.amount}>0</AppText>
                        </View>
                </View>
            </View>
            <View style={styles.horzontalContainer} >
                <View style={styles.smallContainer}>
                    <AppText style={styles.title}>Total Profit</AppText>
                        <View style={styles.values}>
                            <AppText style={styles.currencySymbol}>PKR</AppText>
                            <AppText style={styles.amount}>0</AppText>
                        </View>
                </View>
                <View style={styles.smallContainer} >
                    <AppText style={styles.title}>Active Investments</AppText>
                    <AppText style={styles.amount}>0</AppText>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    amount:{
        color: colors.white,
        fontSize: 25,
        fontWeight: 'bold',
    },
    container:{
        borderRadius: 30,
        padding: 15,
        paddingVertical: 30,
        marginHorizontal: 5,
        marginTop: 20,
    },
    currencySymbol:{
        color: colors.white,
        fontSize: 15,
        paddingRight: 10,
    },
    horzontalContainer:{
        flexDirection: 'row', 
        width: '100%', 
    }, 
    smallContainer:{
        width: '50%',
    },
    title:{
        color: colors.white,
    },
    values:{
        alignItems: 'baseline',
        flexDirection: 'row',
    },
});

export default SummaryCard;