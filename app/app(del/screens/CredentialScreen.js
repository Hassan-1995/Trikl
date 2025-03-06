import React, { useState } from 'react';

import { View, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../config/colors';

const { width, height } = Dimensions.get("window");

const dialPadSize = width * 0.2;
const dialPadTextSize = dialPadSize * 0.4;
const indicatorSize = dialPadSize*0.6;
const pinLength = 4;

const dialPadContent = [1, 2, 3, 4, 5, 6, 7, 8, 9, '' , 0, "X"];
let indicatiorContent = Array(pinLength).fill(null);

function NumButton ({ number, onPress }) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.numberButton}>
                {
                    number === "X" ? (
                        <MaterialCommunityIcons name="backspace-outline" size={24} />  
                    ):
                    <AppText style={{ fontSize: dialPadTextSize }}>{number}</AppText>
                }
            </View>
        </TouchableOpacity>
    )
};

function Indicatior({ signal, bgColor } ){
    return(
        <View style={{flexDirection: 'row', marginBottom: 20}}>
            <View style={styles.indicator} >
                {
                    typeof(signal) == 'number' ?
                        <View style={[styles.indicatorHighlight, { backgroundColor: bgColor }]}/>
                    :
                    <AppText></AppText>
                }
            </View>
        </View>
    )
};
function CredentialScreen({ modalVisibility }) {

    const [pin, setPin] = useState([]);
    const [color, setColor] = useState('');

    const handlePress=(item)=>{
        if(pin.length<=3){
            if(typeof(item) == 'number'){
                setPin(prevArray => [...prevArray, item]);
                indicatiorContent.forEach((number, index) => {
                    indicatiorContent[pin.length] = item;
                });
                setColor(colors.primary);
                if(pin.length==3){
                    setTimeout(() => {
                        const value = false;
                        modalVisibility(value);
                      }, 1000)
                } 
            }
            if(typeof(item) == 'string'){
                if (pin.length > 0){
                    setPin(prevArray => prevArray.slice(0, -1));
                    indicatiorContent.forEach((number, index) => {
                        indicatiorContent[pin.length-1] = [];
                    });
                }
            }
        }else{
            console.log('pin ',pin)
            setPin([]);
            indicatiorContent = Array(pinLength).fill(null);
        }
        console.log('pin.length', pin.length)
    }


    return (
        <Screen>
            <View style={styles.container}>
                <AppText style={styles.title} >Login with Pin</AppText>
                <AppText style={styles.subTitle}>Four digit passcode sent to your registered email.</AppText>
                <AppText style={styles.description} >Please enter passcode</AppText>
            </View>
            <View style={styles.numpadContainer}>
                <FlatList
                    horizontal={true}
                    data={indicatiorContent}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item })=>
                        <Indicatior
                            signal={item}
                            bgColor={color}
                        />
                    }
                />
                <FlatList
                    data={dialPadContent}
                    keyExtractor={(_, index) => index.toString()}
                    numColumns={3}
                    renderItem={({ item }) => 
                        <>
                            {
                                item !== '' ? (
                                    <NumButton
                                        number={item}
                                        onPress={()=>{handlePress(item)}}
                                    />
                                ):
                                <View style={{ width: dialPadSize, margin: 5 }} />
                            }
                        </>
                    }
                />
            </View>
            <View style={styles.bottomSection}>
                <AppText>Haven't received an email? </AppText>
                <TouchableOpacity>
                    <AppText style={styles.forgetPassword}>Sent Again</AppText>
                </TouchableOpacity>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    bottomSection:{
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: 30,
    },
    container:{
        alignItems: 'center',
        paddingTop: 50,
        height: '30%',
        justifyContent: 'space-evenly',
    },
    description:{
        fontSize: 15,
    },
    forgetPassword:{
        textDecorationLine: 'underline',
        color: colors.primary,
    },
    indicator: {
        width: indicatorSize,
        height: indicatorSize,
        justifyContent:'center',
        alignItems: 'center',
        borderRadius: indicatorSize/2,
        backgroundColor: 'transpaent',
        borderColor: colors.secondary,
        borderWidth: 3,
        marginHorizontal: 10,
    },
    indicatorHighlight:{
        backgroundColor:'transparent', 
        width: indicatorSize*0.8, 
        height: indicatorSize*0.8, 
        borderRadius: indicatorSize/2
    },
    numberButton:{ 
        borderColor: colors.primary,
        borderWidth: 2,
        width: dialPadSize,
        height: dialPadSize,
        borderRadius: dialPadSize/2,
        margin: 5, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    numpadContainer:{
        alignItems: 'center',
        marginBottom: 30,
    },
    subTitle:{
        textAlign: 'center',
    },
    title:{
        fontSize: 25,
        fontWeight: '700',
    },
});

export default CredentialScreen;