import React from 'react';

import { StyleSheet, ScrollView } from 'react-native';
import *as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, AppFormDate, SubmitButton, AppFormCountry, AppFormContactNumber } from '../components/forms';
import LogoContainer from '../components/LogoContainer';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    guardian: Yup.string().required().label('Guardian Name'),
    email: Yup.string().required().email().label('Email'),
    date: Yup.string().required().label('Date'),
    country: Yup.string().required().label('Country'),
    contact: Yup.object().shape({
        dial_code: Yup.string().required('Dial code is required'),
        dial_number: Yup.string().required('Contact number is required'),
    }).required().label('Contact'),
})

function AccountOnBoardingScreen(props) {
    return (
        <Screen>
            <ScrollView>
                <LogoContainer/>
                <AppForm
                    initialValues={{
                        name:'', 
                        guardian:'', 
                        email:'', 
                        date:'', 
                        country:'', 
                        contact: { 
                            dial_code: '',
                            dial_number: ''
                        }
                    }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <AppFormField
                        autoCapitalise='none' 
                        autoCorrect={false}
                        icon={'account'}
                        name={'name'}
                        placeholder='Name'
                    />
                    <AppFormField
                        autoCapitalise='none' 
                        autoCorrect={false}
                        icon={'account'}
                        name={'guardian'}
                        placeholder="Father's or Hsusband's name"
                    />
                    <AppFormDate
                        name={'date'}
                    />
                    <AppFormCountry
                        name={'country'}
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
                    <AppFormContactNumber
                        name={'contact'}
                    />
                    <SubmitButton title={'Save and Continue'}/>
                </AppForm>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{},
});

export default AccountOnBoardingScreen;