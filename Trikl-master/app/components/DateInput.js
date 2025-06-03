import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import defaultStyles from '../config/styles';
import Screen from './Screen';

function DateInput({width='100%', onPress, title="date", icon="calendar-month-outline", onDateChange, ...otherProps }) {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        // setShow(Platform.OS === 'ios');
        setDate(currentDate);
        onDateChange(date.toDateString())
        setShow(false);
    };
    const showDatepicker = () => {
        setShow(true);
    };
    return (
            <TouchableOpacity style={[styles.container, {width}]} onPress={showDatepicker}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
                <Text style={styles.text} >{date.toDateString()}</Text>
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="date"
                        display="spinner"
                        onChange={onChange}
                    />
                )}
            </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        // width: '100%',
        padding: 15,
        marginVertical: 10,
        alignItems: 'center',
    },
    text:{
        color: defaultStyles.colors.dark,
        fontSize: 18,
        textTransform: 'uppercase',
    },
    icon:{
        marginRight: 10,
    },
});

export default DateInput;