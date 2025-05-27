import React from 'react';

import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import SummaryCard from '../components/SummaryCard';
import Screen from '../components/Screen';
import { LinearGradient } from 'expo-linear-gradient';

import GoalCardPicker from '../components/GoalCardPicker';

import colors from '../config/colors';
import ActiveInvestmentComponent from '../components/ActiveInvestmentComponent';
import ChartComponent from '../components/ChartComponent';


const items = [
    { title: 'Travel', status: 'Off', goal: 15000, invested: 8000, value: 1, image: require('../assets/travel.png') },
    { title: 'Education', status: 'On', goal: 18000, invested: 10000, value: 2, image: require('../assets/education.png') },
    { title: 'Electronics', status: 'On', goal: 20000, invested: 12000, value: 3, image: require('../assets/electronics.png') },
    { title: 'Car', status: 'On', goal: 25000, invested: 15000, value: 5, image: require('../assets/car.png') },
    { title: 'Furniture', status: 'Off', goal: 22000, invested: 11000, value: 6, image: require('../assets/furniture.png') },
    { title: 'Wedding', status: 'On', goal: 30000, invested: 20000, value: 7, image: require('../assets/wedding.png') },
    { title: 'Music', status: 'On', goal: 18000, invested: 10000, value: 8, image: require('../assets/music.png') },
    { title: 'Jewelry', status: 'On', goal: 35000, invested: 18000, value: 9, image: require('../assets/jewelry.png') },
    { title: 'Fitness', status: 'Off', goal: 20000, invested: 9000, value: 10, image: require('../assets/fitness.png') },
    { title: 'Others', status: 'On', goal: 24000, invested: 5000, value: 4, image: require('../assets/others.png') },
];
  

function HomeScreenCopy({ navigation }) {

    const handlePress=(value)=>{
        console.log("value of button which is pressed:", value)
        if(value == 4){
            navigation.navigate('InvestmentScreen')
        }
    }
    return (
        <Screen>
            <LinearGradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.background}
            />
            <SummaryCard
                totalBalance={123}
                processingBalance={456}
                totalProfit={789}
                activeInvestment={10}
            />
            <View style={styles.container}>
                <ScrollView>
                    <GoalCardPicker
                        assets={items}
                        onPress={handlePress}
                    />
                    <ChartComponent
                        assets={items}
                    />
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => 
                            <ActiveInvestmentComponent 
                                assets={item} 
                            />
                        }
                    />                
                </ScrollView>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 10,
        paddingTop: 10,
        overflow: 'hidden',
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 500,
    },
    scrollView:{
        paddingHorizontal: 10,
        // marginTop: 20,
    },
});

export default HomeScreenCopy;