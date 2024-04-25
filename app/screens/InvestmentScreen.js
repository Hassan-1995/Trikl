import React, { useState } from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import Screen from '../components/Screen';
import GoalCardPicker from '../components/GoalCardPicker';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

const items = [
    { title: 'Travel', value: 1, image: require('../assets/kaaba.png')},
    { title: 'Education', value: 2, image: require('../assets/education.png')},
    { title: 'Electronics', value: 3, image: require('../assets/electronics.png')},
    { title: 'Travel', value: 5, image: require('../assets/kaaba.png')},
    { title: 'Education', value: 6, image: require('../assets/education.png')},
    { title: 'Electronics', value: 7, image: require('../assets/electronics.png')},
    { title: 'Travel', value: 8, image: require('../assets/kaaba.png')},
    { title: 'Education', value: 9, image: require('../assets/education.png')},
    { title: 'Electronics', value: 10, image: require('../assets/electronics.png')},
    { title: 'Others', value: 4, image: require('../assets/others.png')},
]



function InvestmentScreen(props) {
    
    const [option,setOption] = useState('');

    const handlePress = (item) => {
        setOption(item);
        console.log("Selected item:", item);
        console.log("Selected option:", option.title);
      };

    return (
        <Screen style={styles.container}>
            <AppText style={styles.title} >What are you investing for?</AppText>
            <View style={styles.headers}>
                <AppText style={styles.title}>{option.title}</AppText>
            </View>
            <GoalCardPicker
                label='Suggested Goals'
                assets={items}
                onPress={handlePress}
            />
            <ScrollView>
                <GoalCardPicker
                    label='Pick an Icon for your goal'
                    assets={items}
                    horizontal={false}
                    numberOfColumns={3}
                    onPress={handlePress}
                />
            </ScrollView>
            {
                option !==''?
                    <AppButton
                        title={'Continue'}
                    />
                :
                    <>
                    </>
            }
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 5, 
        marginTop: 10,
    },
    headers:{
        width: '80%', 
        marginTop: 10,
        padding: 10, 
        backgroundColor: 'white',  
        borderRadius: 20, 
        borderWidth: 2, 
        borderColor: colors.primary, 
        alignSelf:'center'
    },
    title:{
        textAlign: 'center', 
        fontSize: 25, 
        fontWeight: '900',
    },

});

export default InvestmentScreen;