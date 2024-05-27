import React, { useEffect, useState } from 'react';

import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../config/colors';
import AppText from './AppText';

function GoalCard({ assets, selectedBox, setSelectedBox, onPress }) {  

    const handlePress = (boxId) => {
        setSelectedBox(boxId);
        onPress(boxId)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>handlePress(assets.value)}>
                <LinearGradient
                    colors={[colors.secondary, colors.light]}
                    style={[
                        selectedBox === assets.value ? styles.pressedBox : styles.box
                    ]}
                >
                    <Image style={styles.vectorImage} source={assets.image} />
                    {/* <AppText>{assets.value} and {selectedBox}</AppText> */}
                </LinearGradient>
            </TouchableOpacity>
            <AppText style={styles.title}>{assets.title}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    box:{
        height: 100,
        width: 100,
        // borderWidth: 3,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        alignItems: 'center',
        marginHorizontal: 5,
        // backgroundColor: 'blue'
    },
    pressedBox:{
        // backgroundColor: 'red',
        height: 100,
        width: 100,
        borderWidth: 2,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        paddingVertical: 5,
        fontWeight: '700',
    },
    vectorImage:{
        width: 50,
        height: 50,
    },
});

export default GoalCard;