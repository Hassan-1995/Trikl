import React, { useState } from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

function PreferenceInvestmentOptionComponent({ onChange }) {
    
    const [selectedButton, setSelectedButton] = useState(null);
    
    const handlePress = (buttonId) => {
        setSelectedButton(buttonId);
        onChange(buttonId);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, selectedButton === 1 && styles.selectedButton]}
                onPress={() => handlePress(1)}
            >
                <AppText style={selectedButton === 1 && styles.selectedText}>Daily</AppText>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, selectedButton === 2 && styles.selectedButton]}
                onPress={() => handlePress(2)}
            >
                <AppText style={selectedButton === 2 && styles.selectedText}>Monthly</AppText>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, selectedButton === 3 && styles.selectedButton]}
                onPress={() => handlePress(3)}
            >
                <AppText style={selectedButton === 3 && styles.selectedText}>Yearly</AppText>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        padding: 10,
        width: '25%',
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 5,
    },
    container:{
        flexDirection: 'row',
        marginVertical: 30,
    },
    selectedButton: {
        backgroundColor: colors.primary,
        color: 'white',
        fontWeight: '900', 
    },
    selectedText: {
        // backgroundColor: colors.primary,
        color: 'white',
        fontWeight: '900', 
    },
});

export default PreferenceInvestmentOptionComponent;