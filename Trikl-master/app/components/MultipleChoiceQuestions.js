import React, { useState } from 'react';

import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';


function Choices({ assets, selectedBox, onPress }) {
    return (
        <TouchableOpacity onPress={() => onPress(assets.key)}>
            <View style={[
                selectedBox === assets.key ? styles.pressedItemContainer : styles.itemContainer
            ]}>
                <AppText style={selectedBox === assets.key ? styles.pressedItemText : styles.itemText}>{assets.option}</AppText>
            </View>
        </TouchableOpacity>
    );
}

function MultipleChoiceQuestions({ questionNumber, question, answer, numberOfQuestions, onPress, selectedBox, setSelectedBox }) {
    const handlePress = (boxId) => {
        setSelectedBox(boxId);
        onPress(boxId)
    };

    return (
        <View style={styles.container}>
            <AppText style={styles.title}>Question {questionNumber} of {numberOfQuestions}</AppText>
            <AppText style={styles.question}>{question}</AppText>
            <FlatList
                data={answer}
                keyExtractor={option => option.key}
                renderItem={({ item }) =>
                    <Choices
                        assets={item}
                        selectedBox={selectedBox}
                        onPress={handlePress}
                    />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
    },
    itemContainer: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: colors.light,
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 5,
    },
    pressedItemContainer: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: colors.primary,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    itemText: {
        fontSize: 16,
        color: '#333',
    },
    pressedItemText:{
        fontSize: 16,
        color: colors.white,
    },
    title:{
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.primary,
    },
    question:{
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.secondary,
    },
});

export default MultipleChoiceQuestions;