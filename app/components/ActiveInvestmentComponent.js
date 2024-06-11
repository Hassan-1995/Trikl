import React from 'react';

import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

function ActiveInvestmentComponent({ assets }) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.goalImageContainer}>
                <Image
                    source={assets.image}
                    style={styles.image} 
                />
            </View>
            <View style={styles.goalReportContainer}>
                <View style={styles.title}>
                    <AppText style={styles.header}>{assets.title}</AppText>
                    <View style={[styles.status, assets.status == 'On' ? {backgroundColor: colors.safe}: {backgroundColor: colors.danger}]}>
                        <AppText style={{color: 'white'}}>{assets.status} Track</AppText>
                    </View>
                </View>

                <View style={styles.goalInformation}>
                    <View style={styles.goalInformationNumeric} >
                        <AppText  numberOfLines={1} ellipsizeMode="tail">${assets.invested} of ${assets.goal}</AppText>
                        <View style={styles.goalInformationBar} >
                            <View style={[styles.overlay, { width: `${(assets.invested/assets.goal)*100}%` }]} />
                        </View>
                    </View>
                    <View>
                        {/* <AppText style={styles.header}>{((assets.invested/assets.goal)*100).toFixed(2)}%</AppText> */}
                        <AppText style={styles.header}>{((assets.invested/assets.goal) * 100).toFixed(1)}%</AppText>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.tertiary,
        padding: 5,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        marginVertical: 5,
        overflow: 'hidden',
        width: '100%',
        height: 100,
    },
    title:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    status:{
        backgroundColor: 'pink', 
        paddingHorizontal: 10, 
        paddingVertical: 5, 
        borderRadius: 15, 
        textAlign: 'center'
    },
    goalImageContainer:{
        width: '30%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width: 50, 
        height: 50,
    },
    goalReportContainer:{
        width: '70%',
        height: '100%',
        justifyContent: 'space-between'
    },
    overlay: {
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // width: '90%',
        backgroundColor: colors.primary, 
    },
    goalInformation:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems:'center'
    },
    goalInformationNumeric:{
        width: '80%'
    },
    goalInformationBar:{
        backgroundColor: colors.secondary, 
        width: '80%', 
        height: 20, 
        borderRadius: 10, 
        overflow: 'hidden'
    },
    header:{
        fontWeight: '900'
    },
});

export default ActiveInvestmentComponent;