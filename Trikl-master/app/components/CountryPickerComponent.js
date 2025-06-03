import React, { useState } from 'react';

import { View, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';

import countries from '../assets/countries.json'; // IMPORTANT
import defaultStyles from '../config/styles';


function CountryPickerComponent({ onSelectCountry }) {

    const [selectedCountry, setSelectedCountry] = useState('');

    const handleCountryChange = (itemValue) => {
        setSelectedCountry(itemValue);
        onSelectCountry(itemValue);
    };

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedCountry}
                onValueChange={handleCountryChange}
            >
                <Picker.Item label="Select a Country" value="" key="placeholder" style={styles.picker}/>
                    {countries.map((country) => (
                        <Picker.Item 
                            label={[country.emoji +"    "+ country.name]} 
                            value={country.code} 
                            key={country.code}
                            style={styles.picker}
                        />
                    ))}
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        width: '100%',
        overflow: 'hidden',
        marginVertical: 10,
    },
    picker:{
        fontSize: 18, 
        backgroundColor: defaultStyles.colors.light 
    }, 
});

export default CountryPickerComponent;