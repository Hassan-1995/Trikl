import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';

import ToggleSwitch from 'toggle-switch-react-native'

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import colors from '../config/colors';
import Icon from '../components/Icon';
import AppButton from '../components/AppButton';
import BankPayment from '../components/BankPayment';



function PaymentScreen(props) {
    const [bank, setBank] = useState('checkbox-blank-circle-outline');
    const [credit, setCredit] = useState('checkbox-blank-circle-outline');
    const [medium, setMediun] = useState(null)
    const [modalVisible, setModalVisible] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handlePress=(value)=>{
        console.log(value)
        if(value==='credit'){
            setCredit('check-circle-outline')
            setBank('checkbox-blank-circle-outline')
            setMediun('credit')
        }
        else if(value==='bank'){
            setCredit('checkbox-blank-circle-outline')
            setBank('check-circle-outline')
            setMediun('bank')
        }
    }
    const handlePayment=()=>{
        console.log(medium)
        setModalVisible(true)
    }

    return (
        <Screen>
            <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.header}>
                <AppText style={styles.title}>Investment Payment</AppText>
                <AppText>This is what you are about to commit.</AppText>
            </View>
            <View style={styles.container}>
                <View style={styles.row}>
                    <AppText>Investment Amount</AppText>
                    <AppText>PKR 106,500</AppText>
                </View>
                <View style={styles.row}>
                    <AppText>Transaction Fee</AppText>
                    <AppText>PKR 3,008.63</AppText>
                </View>
                <View style={styles.row}>
                    <AppText>Get free automated{'\n'}transactions</AppText>
                    <ToggleSwitch
                        isOn={toggle}
                        onColor={colors.secondary}
                        offColor={colors.tertiary}
                        thumbOnStyle={{ backgroundColor: colors.primary}}
                        thumbOffStyle={{ backgroundColor: colors.primary}}
                        size="medium"
                        onToggle={(isOn ) => setToggle(previousState => !previousState)}
                    />
                </View>
                <View style={styles.row}>
                    <AppText>199/month</AppText>
                    <AppText>See benefits</AppText>
                </View>
                <View style={styles.rowHeader}>
                    <AppText>Total Amount</AppText>
                    <AppText style={styles.title}>PKR 106,500</AppText>
                </View>
                <View style={styles.paymentOptionContainer}>
                    <AppText style={styles.title}>I will pay my investment with:</AppText>


                    <View style={styles.optionButton}>
                        <View style={styles.optionButtonTitle}>
                            <TouchableOpacity onPress={()=>handlePress('credit')}>
                                <Icon
                                    name={credit}
                                    size={50}
                                    backgroundColor='transparent'
                                    iconColor={colors.primary}
                                />
                            </TouchableOpacity>
                            <AppText style={styles.title}>Credit/Debit Card</AppText>
                        </View>
                        <AppText style={styles.subTitle}>VISA and MasterCard are currently supported</AppText>
                    </View>
                    <View style={styles.optionButton}>
                        <View style={styles.optionButtonTitle}>
                            <TouchableOpacity onPress={()=>handlePress('bank')}>
                                <Icon
                                    name={bank}
                                    size={50}
                                    backgroundColor='transparent'
                                    iconColor={colors.primary}
                                />
                            </TouchableOpacity>
                            <AppText style={styles.title}>Bank Transfer</AppText>
                        </View>
                        <AppText style={styles.subTitle}>From your bank account to SavvySave account</AppText>
                    </View>
                </View>
            </View>
            {
                medium === null ?
                    <></>
                :
                <View style={{ flexGrow: 1, justifyContent: 'flex-end' }}>
                    <AppButton
                        title={'Agree and Continue'}
                        onPress={handlePayment}
                    />
                </View>
            }


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <BankPayment
                        onPress={()=>setModalVisible(!modalVisible)}
                />
            </Modal>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: 20,
        borderWidth: 3,
        borderRadius: 20,
        backgroundColor: colors.light,
        overflow: 'hidden',
        marginHorizontal: 10
    },
    header:{
        paddingLeft: 10,
        marginBottom: 20,
    },
    row:{
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        marginBottom: 15,
        alignItems: 'center',
    },
    rowHeader:{
        flexDirection: 'row',
        backgroundColor: colors.medium,
        padding: 10,
        borderTopWidth: 4,
        borderBottomWidth: 4,
        borderStyle: 'dashed',
        justifyContent: 'space-between',
        marginBottom: 15,
        alignItems: 'center',
    },
    paymentOptionContainer:{
        paddingHorizontal: 10,
    },
    title:{
        fontSize: 25,
        fontWeight: '600'
    },
    subTitle:{
        fontSize: 15,
        paddingLeft: 10,
    },
    optionButton:{
        // borderWidth: 3, 
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: colors.white
    },
    optionButtonTitle:{
        flexDirection: 'row', 
        alignItems: 'center'
    },
    scrollView: {
        flexGrow: 1,
        // justifyContent: 'center',
    },
});

export default PaymentScreen;