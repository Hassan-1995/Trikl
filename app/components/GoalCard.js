import React, { useState } from 'react';

import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../config/colors';
import AppText from './AppText';

function GoalCard({ assets, onPress }) {

    const [selectedBox, setSelectedBox] = useState('');


    const handlePress = (boxId) => {
        onPress(assets)
        setSelectedBox(0);
        setSelectedBox(boxId);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                // onPress={() => {
                //     onPress(assets)
                //     setSelectedBox(assets.value)
                // }}  
                onPress={() => handlePress(assets.value)}
            >
                <LinearGradient
                    colors={[colors.secondary, colors.light]}

                    // style={[styles.box]}
                    style={[styles.box, selectedBox === 1 &&  styles.selectedBox]}
                >
                    <Image
                        style={styles.vectorImage}
                        source={assets.image}
                    />
                    <AppText>{assets.value}</AppText>
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
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        alignItems: 'center',
        marginHorizontal: 5,
    },
    selectedBox:{
        // backgroundColor: 'red',
        height: 100,
        width: 100,
        borderWidth: 5,
        borderRadius: 25
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