import React from 'react';
import { Image, StyleSheet } from 'react-native';
import *as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    password: Yup.string().required().min(4).label('Password'),
})

function LoginScreen({ navigation }) {

    const handleSubmit=(values)=>{
        console.log(values)
        navigation.navigate('HomeScreen')
    }

    return (
        <Screen style={styles.container} >
            {/* <Image
                style={styles.logo}
                source={require('../assets/logo.png')} 
            /> */}
            <AppForm
                initialValues={{name:'', password:''}}
                onSubmit={(values)=>{handleSubmit(values)}}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalise='none' 
                    autoCorrect={false}
                    icon={'account'}
                    // keyboardType="email-address"
                    name={'name'}
                    placeholder='Name'
                />            
                <AppFormField
                    autoCapitalise='none' 
                    autoCorrect={false}
                    icon={'lock'}
                    name={'password'}
                    placeholder='Password'
                    secureTextEntry={true}
                    textContentType='emailAddress'
                />                        
                <SubmitButton title={'Login'} />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
    },
    logo:{
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
})

export default LoginScreen;