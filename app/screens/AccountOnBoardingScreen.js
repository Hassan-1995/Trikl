import React from 'react';

import { View, StyleSheet } from 'react-native';
import *as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField } from '../components/forms';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    guardian: Yup.string().required().label('Guardian Name'),
    email: Yup.string().required().email().label('Email'),
})

function AccountOnBoardingScreen(props) {
    return (
        <Screen>
            <AppForm
                initialValues={{name:'', guardian:'', email:''}}
                onSubmit={(values)=>console.log(values)}
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
                    icon={'account'}
                    // keyboardType="email-address"
                    name={'guardian'}
                    placeholder="Father's or Hsusband's name"
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

            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{},
});

export default AccountOnBoardingScreen;