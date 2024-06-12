import React, { useState } from 'react';

import { View, StyleSheet, FlatList, Image, TouchableHighlight } from 'react-native';
import GoalCard from './GoalCard';
import AppText from './AppText';
import colors from '../config/colors';

function GoalCardPicker({ assets, horizontal=true, numberOfColumns=0, label='Label is Missing', onPress}) {
    const [selectedBox, setSelectedBox] = useState(null);

    const handlePress=(value)=>{
        onPress(value)
    }

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
                                selectedBox={selectedBox}
                                setSelectedBox={setSelectedBox}
                                onPress={handlePress}
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
        paddingVertical: 10,
    },
    header:{
        fontSize: 24,
        color: colors.primary,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingLeft: 10
    },
});

export default GoalCardPicker;