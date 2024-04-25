import React from 'react';

import { StyleSheet } from 'react-native';
import SummaryCard from '../components/SummaryCard';
import Screen from '../components/Screen';
import ListingItem from '../components/ListingItem';
import { LinearGradient } from 'expo-linear-gradient';


const items = [
    { title: 'Travel', value: 1, image: require('../assets/kaaba.png')},
    { title: 'Education', value: 2, image: require('../assets/education.png')},
    { title: 'Electronics', value: 3, image: require('../assets/electronics.png')},
    { title: 'Others', value: 4, image: require('../assets/others.png')},
]

function HomeScreen(props) {
    return (
        <Screen style={styles.container}>
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.background}
            />
            <SummaryCard/>
            <ListingItem
                items={items}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        // paddingTop: 20,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 500,
    },
});

export default HomeScreen;