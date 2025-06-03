import React from 'react';

import { View, StyleSheet, FlatList } from 'react-native';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import StatementComponent from '../components/StatementComponent';
import LogoContainer from '../components/LogoContainer';
import colors from '../config/colors';


const items = [
    { id: 1, date: '2024-01-01', type: 'Education', amount: 500, investment: 'Stock A' },
    { id: 2, date: '2024-02-15', type: 'Travel', amount: 300, investment: 'Stock B' },
    { id: 3, date: '2024-03-20', type: 'Wedding', amount: 50, investment: 'Fund C' },
    { id: 4, date: '2024-04-10', type: 'Electronics', amount: 700, investment: 'Stock D' },
    { id: 5, date: '2024-05-25', type: 'Education', amount: 400, investment: 'Stock A' },
];

function StatementsScreen(props) {
    return (
        <Screen>
            <LogoContainer/>
            <View style={styles.container}>
                <AppText style={styles.header}>Statements</AppText>
                <View style={styles.summary}>
                    <AppText style={styles.subHeader}>Total Investment: $1950</AppText>
                    <AppText style={styles.subHeader}>Total Returns: $750</AppText>
                    <AppText style={styles.subHeader}>Net Gain/Loss: $-1200</AppText>
                </View>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => 
                        <StatementComponent 
                            assets={item} 
                        />
                    }
                />     
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.primary,
    },
    subHeader:{
        fontSize: 18,
        color: colors.secondary,            
    },
    summary: {
        marginBottom: 20,
        borderBottomWidth: 2,
        borderColor: colors.primary
    },

});

export default StatementsScreen;