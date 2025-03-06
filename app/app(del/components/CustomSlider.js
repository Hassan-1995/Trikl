import React, { useState } from 'react';
import { View, StyleSheet, PanResponder, Dimensions } from 'react-native';

// values of props needs to be adjusted according to need

const { width } = Dimensions.get('window');
const trackBar = width*0.6; // change this decimal number according to need 
import AppText from './AppText';
import colors from '../config/colors';


const CustomSlider = ({ trackBarWidth = trackBar, trackBarHeight = 20, thumbSize = 30, minimumValue = 0, maximumValue = 100, onChange, title='Title is missing', typedValue=0 }) => {
  const [value, setValue] = useState(typedValue);

  const handlePanResponderMove = (event, gestureState) => {
    const newValue = Math.max(minimumValue, Math.min(maximumValue, value + gestureState.dx / width * (maximumValue - minimumValue)));
    setValue(Math.floor(newValue));
    onChange(newValue);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: handlePanResponderMove,
  });

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText>{ value.toLocaleString(Math.floor(value))}</AppText>

        </View>
        <View style={styles.sliderContainer}>
            <View style={[styles.track, { width: trackBarWidth, height: trackBarHeight }]}>
                <View style={[styles.track, {backgroundColor: colors.secondary, width: ((value*trackBarWidth)/maximumValue), height: trackBarHeight}]}/>
                <View style={[styles.thumb, { left: (value - minimumValue) / (maximumValue - minimumValue) * trackBarWidth, width: thumbSize, height: thumbSize, borderRadius: thumbSize/2 }]} {...panResponder.panHandlers} />
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '90%', 
    marginVertical: 30,
  },
  header:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 20,
  },
  sliderContainer:{
    alignItems: 'center',
    justifyContent: 'center', 
  },
  title:{
    fontWeight: '900',
  },
  thumb: {
    position: 'absolute',
    marginLeft: -10,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  track: {
    position: 'absolute',
    width: '100%',
    height: 50,
    backgroundColor: colors.tertiary,
    borderRadius: 10,
    justifyContent: 'center',
  },
});

export default CustomSlider;
