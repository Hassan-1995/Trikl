import React, { useState } from 'react';

import { View, StyleSheet } from 'react-native';

import AppText from './AppText';
import AppTextInput from './AppTextInput';

function AmountInput({ title, subTitle, description, initialValue, onChangeText='', onAmount }) {
    

    const handleText=(value)=>{
        onAmount(value)
    }

    return (
        <View style={styles.container}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText textAlign='center' style={styles.subTitle}>{subTitle}</AppText>
            <View style={{flexDirection:'row', alignItems: 'center',justifyContent: 'space-evenly' }}>
                <AppText style={styles.currency} >PKR</AppText>
                <AppTextInput
                    value={initialValue}
                    width='60%'
                    keyboardType="numeric"
                    style={styles.input}
                    onChangeText={(value)=>{
                            handleText(value)
                        }
                    }
                />
            </View>
            <AppText textAlign='center'>{description}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    currency:{
        fontSize: 40, 
        fontWeight: '900',
        marginHorizontal:10,
    },
    input:{
        fontSize: 30,
        flex: 1,
        fontWeight: '900',
    },
    subTitle:{ 
        fontSize: 25,
        fontWeight: '900',
        marginBottom: 30,
    },
    title:{ 
        fontSize: 25, 
        fontWeight: '900',
        marginBottom: 50,
    },
});

export default AmountInput;