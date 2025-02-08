import React from 'react';
import {fillOnboarding,useronboarding} from '../backendintegration/index';

import { View, StyleSheet, ScrollView } from 'react-native';
import *as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, AppFormDate, SubmitButton, AppFormCountry, AppFormContactNumber, AppFormAttachment } from '../components/forms';
import LogoContainer from '../components/LogoContainer';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    guardian: Yup.string().required().label('Guardian Name'),
    email: Yup.string().required().email().label('Email'),
    date: Yup.string().label('Date'),
    country: Yup.string().required().label('Country'),
    contact: Yup.object().shape({
        dial_code: Yup.string().required('Dial code is required'),
        dial_number: Yup.string().required('Contact number is required'),
    }).required().label('Contact'),
})

function AccountOnBoardingScreen({ navigation }) {

    const handleOnSubmit=async(values)=>{
        const payload=fillOnboarding(values);
        console.log("Values before",values);
        console.log("Payload after",payload);
        const response= await useronboarding(payload);
        navigation.navigate('AttachmentsScreen')
    }

    return (
        <Screen>
            <ScrollView contentContainerStyle={styles.scrollView}>
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
                        },
                    }}
                    onSubmit={handleOnSubmit}
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
                        icon={'shield-account-outline'}
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
                    <View style={styles.buttonContainer}>
                        <SubmitButton title={'Save and Continue'}/>
                    </View>
                </AppForm>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{},
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
});

export default AccountOnBoardingScreen;