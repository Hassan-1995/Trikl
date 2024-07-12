import React, { useState } from 'react';

import { View, StyleSheet, Platform, Dimensions } from 'react-native';

import Slider from '@react-native-community/slider';
import AppText from './AppText';
import colors from '../config/colors';

const { width, height } = Dimensions.get('window');

const scale = Platform.select({
    ios: 2, // Set scale factor for iOS
    android: 2, // Set scale factor for Android
    default: 1, // Default scale factor for other platforms
});



function SliderComponent(props) {

    const [value, setValue] = useState(0); // Initial value for the slider

    const handleChange = (newValue) => {
        setValue(newValue);
    };

   
    return (
        <View style={styles.container}>
            <AppText>{width}</AppText>
            <AppText>{height}</AppText>
            <AppText>{height/width}</AppText>
            <Slider            
                style={{ width: '100%' }}
                minimumValue={0}
                maximumValue={100}
                minimumTrackTintColor="#FF0000"
                maximumTrackTintColor="#000000"
                thumbTintColor="#00FF00"
                value={value}
                onValueChange={(newValue) => setValue(newValue)}
                // thumbImage={require('../assets/favicon.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    customThumb: {
        width: 40, // Set desired width for the custom thumb
        height: 40, // Set desired height for the custom thumb
        borderRadius: 20, // Add border radius for a circular thumb
        backgroundColor: 'blue', // Set the background color for the custom thumb
    },
});

export default SliderComponent;