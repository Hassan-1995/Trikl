import React from 'react';

import { View, StyleSheet, Image, Dimensions } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import LogoContainer from '../components/LogoContainer';
import Screen from '../components/Screen';

const { width, height } = Dimensions.get('window');

function WelcomeScreen({ navigation }) {
    return (
        <Screen>
            <View style={styles.container}>
            <View style={styles.imageContainer}>
                <LogoContainer/>
                <AppText style={styles.header}>Smarter way to invest and save for the future.</AppText>
                <View style={styles.gifContainer} >
                    <Image
                        source={require('../assets/moneyPlant.gif')}
                        style={styles.gif}
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton
                    title={'Get Started'}
                    onPress={()=> navigation.navigate('RegisterScreen')}
                    color='primary'
                />
                <AppButton
                    title={'Existing User'}
                    onPress={()=>  navigation.navigate('LoginScreen')}
                    color='secondary'
                />
            </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    buttonContainer:{
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    container:{
        flex: 1, 
        backgroundColor: '#fbfbfb'
    },
    gif: {
        width: width,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        fontSize: 25, 
        fontWeight: 'bold', 
        textAlign: 'center'
    },
    gifContainer:{
        width: width, 
        alignItems: 'center',
    },
    imageContainer:{
        flexGrow: 1, 
        justifyContent: 'space-evenly' 
    },
        });

export default WelcomeScreen;