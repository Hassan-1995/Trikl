import React, { useState } from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import Screen from '../components/Screen';
import GoalCardPicker from '../components/GoalCardPicker';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

const items = [
    { title: 'Travel', value: 1, image: require('../assets/travel.png')},
    { title: 'Education', value: 2, image: require('../assets/education.png')},
    { title: 'Electronics', value: 3, image: require('../assets/electronics.png')},
    { title: 'Car', value: 5, image: require('../assets/car.png')},
    { title: 'Furniture', value: 6, image: require('../assets/furniture.png')},
    { title: 'Wedding', value: 7, image: require('../assets/wedding.png')},
    { title: 'Music', value: 8, image: require('../assets/music.png')},
    { title: 'Jewelry', value: 9, image: require('../assets/jewelry.png')},
    { title: 'Fitness', value: 10, image: require('../assets/fitness.png')},
    { title: 'Others', value: 4, image: require('../assets/others.png')},
]



function InvestmentScreen({ navigation }) {
    
    const [option,setOption] = useState('');

    const handlePress = (item) => {
        setOption(items.find(data => data.value === item));
        console.log("Selected item:", item);
        console.log("Selected option:", option);
      };

    return (
        <Screen style={styles.container}>
            <AppText style={styles.title} >What are you investing for?</AppText>
            <View style={styles.headers}>
                <AppText style={styles.title}>{option.title}</AppText>
            </View>
            <ScrollView horizontal={false} contentContainerStyle={styles.scrollView}>
                <GoalCardPicker
                    label='Thematic Portfolios &\n General Saving'
                    assets={items}
                    onPress={handlePress}
                />
                <GoalCardPicker
                    label='Suggested  Goals & \nOther (Custom Goals)'
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
                        onPress={()=>{
                            console.log("items:", option)  
                            navigation.navigate('InvestmentPlanScreen', option)  
                        }}
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
        // paddingHorizontal: 5, 
        marginTop: 10,
    },
    headers:{
        width: '80%', 
        marginVertical: 10,
        padding: 10, 
        backgroundColor: colors.light,  
        borderRadius: 20, 
        borderWidth: 2, 
        borderColor: colors.primary, 
        alignSelf:'center'
    },
    title:{
        textAlign: 'center', 
        fontSize: 24, 
        fontWeight: '900',
    },
    scrollView: {
        flexGrow: 1,
    },
});

export default InvestmentScreen;