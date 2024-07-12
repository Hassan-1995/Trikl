import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function StatementComponent({assets}) {
    return (
        <View style={styles.container}>
            <View style={styles.infoSection}>
                <AppText style={styles.infoTitle}>Date</AppText>
                <AppText style={styles.infoValue}>{assets.date}</AppText>
            </View>
            <View style={styles.infoSection}>
                <AppText style={styles.infoTitle}>Type</AppText>
                <AppText style={styles.infoValue}>{assets.type}</AppText>
            </View>
            <View style={styles.infoSection}>
                <AppText style={styles.infoTitle}>Amount</AppText>
                <AppText style={styles.infoValue}>$ {assets.amount}</AppText>
            </View>
            <View style={styles.infoSection}>
                <AppText style={styles.infoTitle}>Investment</AppText>
                <AppText style={styles.infoValue}>{assets.investment}</AppText>
            </View>
            <TouchableOpacity style={styles.detailsButton} onPress={() => {/* Navigate to details screen */}}>
                <Text style={styles.detailsButtonText}>Details</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 10,
        paddingBottom: 5,
        borderBottomWidth: 2,
        marginBottom: 10,
    },
    infoSection: {
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    infoTitle: {
        fontSize: 16,
        color: colors.secondary,
    },
    infoValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.primary,
    },
    detailsButton: {
        backgroundColor: colors.primary,
        padding: 10,
    },
    detailsButtonText: {
        color: colors.white,
        fontSize: 16,
        textAlign: 'center',
    },
});

export default StatementComponent;