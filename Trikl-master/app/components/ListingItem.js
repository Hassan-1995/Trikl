import React from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import PosterBoard from './PosterBoard';
import GoalCardPicker from './GoalCardPicker';
import EnquiryCard from './EnquiryCard';
import colors from '../config/colors';

function ListingItem({ items, onPress }) {

    const handlePress=(value)=>{
        onPress(value)
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <PosterBoard/>
                <GoalCardPicker
                    assets={items}
                    onPress={handlePress}
                />
                <EnquiryCard/>
                <EnquiryCard/>
                <EnquiryCard/>
                <EnquiryCard/>
                <EnquiryCard/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 10,
        paddingTop: 30,
    },
    scrollView:{
        paddingHorizontal: 20,
        // marginTop: 20,
    },
});

export default ListingItem;