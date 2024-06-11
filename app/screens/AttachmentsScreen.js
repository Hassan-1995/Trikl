import React from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import *as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, AppFormDate, SubmitButton, AppFormCountry, AppFormContactNumber, AppFormAttachment } from '../components/forms';
import LogoContainer from '../components/LogoContainer';

const validationSchema = Yup.object().shape({
    
    idCardNumber: Yup.string().required().label('Identification'),
    idCardAttachment: Yup.string().required().label('ID Attachment'),
    billingNumber: Yup.string().required().label('Address'),
    billingNumberAttachment: Yup.string().required().label('Address Attachment'),
    funds: Yup.string().required().label('Fund'),
    fundsAttachment: Yup.string().required().label('Funds Attachment'),
})

function AttachmentsScreen(props) {
    return (
        <Screen>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <LogoContainer/>
                <AppForm
                    initialValues={{
                        idCardNumber:'',
                        idCardAttachment:'',
                        billingNumber:'',
                        billingNumberAttachment:'',
                        funds:'',
                        fundsAttachment:''
                    }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                    <AppFormField
                        autoCapitalise='none' 
                        autoCorrect={false}
                        icon={'card-account-details-outline'}
                        name={'idCardNumber'}
                        placeholder="Government Issued Identification"
                    />
                    <AppFormAttachment
                        name={'idCardAttachment'}
                    />
                    <AppFormField
                        autoCapitalise='none' 
                        autoCorrect={false}
                        icon={'map-marker-outline'}
                        name={'billingNumber'}
                        placeholder="House/Billing Address"
                    />
                    <AppFormAttachment
                        name={'billingNumberAttachment'}
                    />
                    <AppFormField
                        autoCapitalise='none' 
                        autoCorrect={false}
                        icon={'bank'}
                        name={'funds'}
                        placeholder="Source of Income"
                    />
                    <AppFormAttachment
                        name={'fundsAttachment'}
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
    },
    buttonContainer: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
});

export default AttachmentsScreen;