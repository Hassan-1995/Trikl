import React, { useEffect, useState } from 'react';

import { View, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
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

function CustomDialpad(props) {
    const [pin, setPin] = useState([]);
    const [color, setColor] = useState('');

    const handlePress=(item)=>{
        if(pin.length<4){
            if(typeof(item) == 'number'){
                setPin(prevArray => [...prevArray, item]);
                indicatiorContent.forEach((number, index) => {
                    indicatiorContent[pin.length] = item;
                });
                setColor(colors.primary);
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
            console.log(pin)
            setPin([]);
            indicatiorContent = Array(pinLength).fill(null);
        }
    }



    return (
        <View style={styles.container}>
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
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginBottom: 30,
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
});

export default CustomDialpad;