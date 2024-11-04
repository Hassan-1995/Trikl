import React from 'react';

import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import AppText from './AppText';
import colors from '../config/colors';

function SummaryCard({ totalBalance, processingBalance, totalProfit, activeInvestment}) {
    return (
        <LinearGradient
            colors={[colors.primary, colors.dark]}
            style={styles.container}
        >
            <View style={[styles.horzontalContainer, {marginBottom: 10}]} >
                <View style={styles.smallContainer}>
                    <AppText style={styles.title}>Total Balance</AppText>
                        <View style={styles.values}>
                            <AppText style={styles.currencySymbol}>PKR</AppText>
                            <AppText style={styles.amount} numberOfLines={1} ellipsizeMode="tail">{totalBalance.toLocaleString(Math.floor(totalBalance))}</AppText>
                        </View>
                </View>
                <View style={styles.smallContainer} >
                    <AppText style={styles.title}>Processing Balance</AppText>
                        <View style={styles.values}>
                            <AppText style={styles.currencySymbol}>PKR</AppText>
                            <AppText style={styles.amount} numberOfLines={1} ellipsizeMode="tail">{processingBalance.toLocaleString(Math.floor(processingBalance))}</AppText>
                        </View>
                </View>
            </View>
            <View style={styles.horzontalContainer} >
                <View style={styles.smallContainer}>
                    <AppText style={styles.title}>Total Profit</AppText>
                        <View style={styles.values}>
                            <AppText style={styles.currencySymbol}>PKR</AppText>
                            <AppText style={styles.amount} numberOfLines={1} ellipsizeMode="tail"> {totalProfit.toLocaleString(Math.floor(totalProfit))}</AppText>
                        </View>
                </View>
                <View style={styles.smallContainer} >
                    <AppText style={styles.title}>Active Investments</AppText>
                    <AppText style={styles.amount} numberOfLines={1} ellipsizeMode="tail">{activeInvestment.toLocaleString(Math.floor(activeInvestment))}</AppText>
                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    amount:{
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        width: '70%',
    },
    container:{
        borderRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 20,
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
        overflow: 'hidden',
    },
    title:{
        color: colors.white,
        width: '100%',
    },
    values:{
        alignItems: 'center',
        flexDirection: 'row',
    },
});

export default SummaryCard;