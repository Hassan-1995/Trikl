import React, { useState } from 'react';

import { View, StyleSheet, TouchableOpacity, Modal, Dimensions, Image, Alert } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import AppButton from './AppButton';
import Icon from './Icon';
import ImageUpload from './ImageUpload';

const { width, height } = Dimensions.get('window');

function BankPayment({ onPress }) {

    const[screenShot, setScreenShot]=useState(false);
    const [upload, setUpload] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);


    const handlePayment=()=>{
        console.log('Pressed')
        if(screenShot==false){
            setScreenShot(true)
        }else{
            if (upload==null){
                Alert.alert(
                    "Prompt message by SavvySave", 
                    "You need to attach proof of payment's transaction", 
                    [
                      { 
                        text: "OK", 
                        onPress: () => console.log("OK Pressed") 
                      }
                    ],
                  );
            }else{
                onPress(onPress)
            }
        }
    }
    const handleUpload = (data) => {
        setUpload(data)
    }
    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity onPress={onPress}>
                        <Icon
                            name={'arrow-left'}
                            size={50}
                            backgroundColor='transparent'
                            iconColor={colors.primary}
                        />
                    </TouchableOpacity>
                    <AppText style={styles.title}>SavvySave Bank Details</AppText>
                </View>
                <View style={styles.bankDetail}>
                    {
                        screenShot === false ?
                        <>
                            <AppText>Account Name</AppText>
                            <AppText>Bank Name</AppText>
                            <AppText>IBAN Number</AppText>
                        </>
                        :
                        <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={()=>setModalVisible(!modalVisible)} >
                            {
                                upload == null ?
                                    <Icon
                                        name={'card-plus-outline'}
                                        size={100}
                                        backgroundColor='transparent'
                                        iconColor={colors.primary}
                                    />
                                :
                                    <View style={styles.imageContainer}>
                                        <Image source={{ uri: upload.uri }} style={styles.image}  />
                                        <View style={styles.overlay} />
                                    </View>
                            }
                            

                            <Modal
                                animationType="slide"
                                transparent={false}
                                visible={modalVisible}
                            >
                                <ImageUpload
                                        onPress={()=>setModalVisible(!modalVisible)}
                                        onImageUpload={handleUpload}
                                />
                            </Modal>






                        </TouchableOpacity>
                    }
                </View>

                <View style={styles.disclaimerContainer}>
                    <AppText color={colors.primary}>
                        Please note that investments done other than
                        from your own personel bank account will be
                        returned.   
                    </AppText>
                    <AppButton
                        title={'Upload payment ScreenShot'}
                        onPress={handlePayment}
                    />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(110, 105, 105, 0.7)',
        justifyContent: 'flex-end',
        flex: 1
    },
    modal:{
        backgroundColor: colors.white,
        padding: 15,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    bankDetail:{
        borderWidth: 3,
        borderStyle: 'dotted',
        borderRadius: 20,
        padding: 15,
        marginVertical: 20,
    },
    disclaimerContainer:{
        marginBottom: 10
    },
    title:{
        fontSize: 25,
        fontWeight: '600'
    },
    imageContainer:{
        width: '90%',
        height: height*0.2,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.secondary,
        overflow: 'hidden'
    },
    image: {
        width: '100%', 
        height: '100%'
    },
    overlay: {
        position: 'absolute', 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(16, 75, 125, 0.5)', 
    },
});

export default BankPayment;