import React from 'react';

import { ScrollView, StyleSheet, View } from 'react-native';
import SummaryCard from '../components/SummaryCard';
import Screen from '../components/Screen';
import { LinearGradient } from 'expo-linear-gradient';
import PosterBoard from '../components/PosterBoard';
import GoalCardPicker from '../components/GoalCardPicker';
import EnquiryCard from '../components/EnquiryCard';
import colors from '../config/colors';


const items = [
    { title: 'Travel', value: 1, image: require('../assets/travel.png')},
    { title: 'Education', value: 2, image: require('../assets/education.png')},
    { title: 'Electronics', value: 3, image: require('../assets/electronics.png')},
    { title: 'Others', value: 4, image: require('../assets/others.png')},
]

function HomeScreen({ navigation }) {

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
        paddingTop: 30,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 500,
    },
    scrollView:{
        paddingHorizontal: 20,
        // marginTop: 20,
    },
});

export default HomeScreen;