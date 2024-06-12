import React from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import LogoContainer from './LogoContainer';
import AppText from './AppText';
import colors from '../config/colors';
import AppButton from './AppButton';

function AlertBox({onPress}) {
    return (
        <View style={styles.container}>
            <LogoContainer/>
            <AppText style={styles.title}>Based on the information you provided.</AppText>
            <AppText style={styles.subTitle}>You are <AppText style={styles.underline}>Moderate Investor</AppText> </AppText>
            <ScrollView>
            <AppText style={styles.description}>
                A moderate investor seeks a balance between risk and return. 
                They are willing to accept some market volatility and risk of loss 
                for the potential of higher returns, but they avoid extreme risks. 
                Their portfolios usually include a mix of stocks and bonds to achieve
                steady growth over time. Moderate investors typically have a medium to 
                long-term investment horizon and aim for balanced, diversified portfolios.
            </AppText>
            <View style={styles.row}>
                <AppText>Risk Tolerance </AppText>
                <AppText>3/5</AppText>
            </View>
            <View style={styles.row}>
                <AppText>Investment Strategy </AppText>
                <AppText>4/5</AppText>
            </View>
            <View style={styles.row}>
                <AppText>Investment Goal </AppText>
                <AppText>5/5</AppText>
            </View>
            <View style={styles.row}>
                <AppText>Time Horizon </AppText>
                <AppText>1/5</AppText>
            </View>
            <View style={styles.row}>
                <AppText>Portfolio Composition </AppText>
                <AppText>4/5</AppText>
            </View>
            
            <AppButton
                title={'Continue'}
                onPress={onPress}
            />
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 20
    },
    title:{
        fontSize: 24,
        color: colors.primary,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingLeft: 10
    },
    subTitle:{
        fontSize: 20,
        color: colors.secondary,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingLeft: 10
    },
    description:{
        color: colors.secondary,
        paddingBottom: 10,
        paddingHorizontal: 10,
        textAlign: 'justify'
    },
    underline: {
        textDecorationLine: 'underline',
        fontSize: 20,
        color: colors.secondary,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingLeft: 10
    },
});

export default AlertBox;