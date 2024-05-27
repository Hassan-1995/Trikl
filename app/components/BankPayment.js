import React, { useState } from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import AppButton from './AppButton';
import Icon from './Icon';



function BankPayment({ onPress }) {

    const[screenShot, setScreenShot]=useState(false);

    const handlePayment=()=>{
        console.log('Pressed')
        if(screenShot==false){
            setScreenShot(true)
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity onPress={onPress}>
                        <Icon
                            name={'arrow-left'}
                            size={50}
                            backgroundColor='transparent'
                            iconColor={colors.primary}
                        />
                    </TouchableOpacity>
                    <AppText style={styles.title}>Trikl Bank Details</AppText>
                </View>
                <View style={styles.bankDetail}>
                    {
                        screenShot === false ?
                        <>
                            <AppText>Account Name</AppText>
                            <AppText>Bank Name</AppText>
                            <AppText>IBAN Number</AppText>
                        </>
                        :
                        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Icon
                                name={'card-plus-outline'}
                                size={100}
                                backgroundColor='transparent'
                                iconColor={colors.primary}
                            />
                        </TouchableOpacity>
                    }
                </View>

                <View style={styles.disclaimerContainer}>
                    <AppText color={colors.primary}>
                        Please note that investments done other than
                        from your own personel bank account will be
                        returned.   
                    </AppText>
                    <AppButton
                        title={'Upload payment ScreenShot'}
                        onPress={handlePayment}
                    />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(110, 105, 105, 0.7)',
        justifyContent: 'flex-end',
        flex: 1
    },
    modal:{
        backgroundColor: colors.white,
        padding: 15,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    bankDetail:{
        borderWidth: 3,
        borderStyle: 'dotted',
        borderRadius: 20,
        padding: 15,
        marginVertical: 20,
    },
    disclaimerContainer:{
        marginBottom: 10
    },
    title:{
        fontSize: 25,
        fontWeight: '600'
    },
});

export default BankPayment;