import React, { useState } from 'react';

import { View, StyleSheet, Dimensions,TouchableOpacity, Modal, Image } from 'react-native';
import Icon from './Icon';
import colors from '../config/colors';
import AppText from './AppText';
import ImageCapture from './ImageCapture';
import ImageUpload from './ImageUpload';

const { width, height } = Dimensions.get('window');

function AttachmentComponent({ onSelectAttachment }) {

    const [imageCaptureComponent, setImageCaptureComponent] = useState(false);
    const [picture, setPicture] = useState(null);
    const [imageUploadComponent, setImageUploadComponent] = useState(false);
    const [upload, setUpload] = useState(null);


    const handleImageCaptureComponent = () => {
        setImageCaptureComponent(true)
    };
    const handlePicture = (data) => {
        setPicture(data)
        setUpload(null)
        onSelectAttachment(data)
    };
    const handleImageUploadComponent = () => {
        setImageUploadComponent(true)
    }
    const handleUpload = (data) => {
        console.log("in handle upload of Attachment ",data);
        
        setUpload(data)
        setPicture(null)
        onSelectAttachment(data.uri)
    }
    return (
        <View style={styles.container}>
            
            <View style={styles.displayContainer}>
                <AppText style={styles.title}>Preview:</AppText>
                {
                    (picture==null && upload==null) ? 
                    <View style={styles.emptyDisplay}>
                        <Icon
                            name={'folder-outline'}
                            size={height*0.2}
                            backgroundColor='transparent'
                            iconColor={colors.secondary}
                        />
                    </View>
                    :
                    <>
                        {   picture &&
                            <View style={styles.imageContainer}>
                                <Image source={{ uri: picture }} style={styles.image} />
                                <View style={styles.overlay} />
                            </View>
                        }
                        {   upload &&
                            // <View style={styles.fileInfo}>
                            //     <AppText>Type: {upload.mimeType}</AppText>
                            //     <AppText>Size: {upload.size} bytes</AppText>
                            //     <AppText>Name: {upload.name}</AppText>
                            // </View>
                            <View style={styles.imageContainer}>
                                <Image source={{ uri: upload.uri }} style={styles.image}  />
                                <View style={styles.overlay} />
                            </View>
                            
                        }
                    </>
                    
                }
                
            </View>


            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleImageCaptureComponent}>
                    <Icon
                        name={'image-outline'}
                        size={70}
                        backgroundColor='transparent'
                        iconColor={colors.primary}
                    />
                    <AppText>Take Picture</AppText>
                </TouchableOpacity>
                
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={imageCaptureComponent}
                    >
                        <ImageCapture
                            onPress={()=>setImageCaptureComponent(!imageCaptureComponent)}
                            onImageCapture={handlePicture}
                        />
                    </Modal>
                
                <TouchableOpacity style={styles.button} onPress={handleImageUploadComponent}>
                    <Icon
                        name={'file-upload-outline'}
                        size={70}
                        backgroundColor='transparent'
                        iconColor={colors.primary}
                        />
                    <AppText>Upload File</AppText>
                </TouchableOpacity>

                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={imageUploadComponent}
                    >
                        <ImageUpload
                            onPress={()=>setImageUploadComponent(!imageUploadComponent)}
                            onImageUpload={handleUpload}
                        />
                    </Modal>





            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 10,
        width: width,
        height: height*0.25,
        flexDirection: 'row',
        overflow: 'hidden',
        paddingHorizontal: 5,
        backgroundColor: colors.light,
        borderRadius: 25,
    },
    displayContainer:{
        width: '70%',
        height: '100%',
        alignItems: 'center',
    },
    buttonContainer:{
        width: '30%',
        height: '100%',
    },
    button:{
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
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
    fileInfo: {
        height: '80%',
        justifyContent: 'center',
    },
    emptyDisplay:{
        borderWidth: 3, 
        borderColor: colors.primary,
        width: '90%', 
        alignItems: 'center', 
        borderRadius: 20, 
        borderStyle: 'dashed'
    },
    title:{
        fontWeight: '900', 
        color: colors.secondary 
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

export default AttachmentComponent;