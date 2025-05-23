import React from 'react';
import { StyleSheet } from 'react-native';
import *as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import LogoContainer from '../components/LogoContainer';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
})

function RegisterScreen(props) {
    return (
        <Screen style={styles.container} >
            <LogoContainer/>
            <AppForm
                initialValues={{name:'', email:'', password:''}}
                onSubmit={(values) => console.log(values)}
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
                    icon={'email'}
                    keyboardType="email-address"
                    name={'email'}
                    placeholder='Email'
                    textContentType='emailAddress'
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
                <SubmitButton title={'Register'} />
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

export default RegisterScreen;