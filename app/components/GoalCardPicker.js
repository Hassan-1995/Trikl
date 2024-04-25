import React, { useState } from 'react';

import { View, StyleSheet, FlatList, Image, TouchableHighlight } from 'react-native';
import GoalCard from './GoalCard';
import AppText from './AppText';
import colors from '../config/colors';

function GoalCardPicker({ assets, horizontal=true, numberOfColumns=0, label='Label is Missing', onPress}) {
    
    const [value, setValue] = useState();

    return (
        <View style={styles.container}>
            <AppText style={styles.header}>{label}</AppText>
                <View style={{alignItems:'center'}}> 
                    <FlatList
                        horizontal={horizontal}
                        numColumns={numberOfColumns}
                        data={assets}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) =>
                            <GoalCard
                                assets={item}
                                // onPress={onPress}
                                onPress={onPress}
                                // onPress={() => onPress(assets)}

                            />
                        }
                        contentContainerStyle={{ flexGrow: 1 }}
                    />
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 20,
    },
    header:{
        fontSize: 30,
        color: colors.primary,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
});

export default GoalCardPicker;