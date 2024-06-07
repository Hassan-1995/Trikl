import React, { useState } from 'react';

import { View, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import ImageCapture from './ImageCapture';
import AppText from './AppText';
import Icon from './Icon';
import colors from '../config/colors';

function AttachmentComponents(props) {

    const [imageCaptureComponent, setImageCaptureComponent] = useState(false);
    const [picture, setPicture] = useState(null);

    const handleImageCaptureComponent = () => {
        setImageCaptureComponent(true)
    }
    const handlePicture = (data) => {
        setPicture(data)
    }

    return (

        <View style={styles.container}>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={handleImageCaptureComponent}>
                {
                    picture==null ?
                        <Icon
                            name={'image-outline'}
                            size={150}
                            backgroundColor='transparent'
                            iconColor={colors.primary}
                        />
                    :
                        // <AppText>hello</AppText>
                        <Image source={{ uri: picture }} style={styles.image} />

                }
                
                <AppText>Take a Picture</AppText>
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
            </TouchableOpacity>
            <AppText>OR</AppText>
            <TouchableOpacity style={{alignItems: 'center'}} >
                <Icon
                    name={'file-upload-outline'}
                    size={150}
                    backgroundColor='transparent'
                    iconColor={colors.primary}
                />
                <AppText>Upload from Device</AppText>
                
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.secondary
    },
});

export default AttachmentComponents;