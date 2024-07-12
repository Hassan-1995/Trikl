import { useState, useRef } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from './Icon';
import AppButton from './AppButton';
import colors from '../config/colors';
import AppText from './AppText';

function ImageCapture ({ onPress, onImageCapture }) {
    const [facing, setFacing] = useState('back');
    const [permission, setPermission] = useCameraPermissions();
    const cameraRef = useRef(null);
    const [photo, setPhoto] = useState(null);

    if (!permission) {
      return <View />;
    }
  
    if (!permission.granted) {
      return (
        <View style={styles.container}>
            <AppText style={{ textAlign: 'center' }}>We need your permission to show the camera</AppText>
            <AppButton 
                onPress={setPermission} 
                title="grant permission"
            />
        </View>
      );
    }
  
    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    const takePicture=async()=>{
        if (cameraRef.current) {
            const options = { quality: 0.5, base64: true, skipProcessing: true };
            const photo = await cameraRef.current.takePictureAsync(options);
            setPhoto(photo.uri);
            console.log(photo.uri);
            onImageCapture(photo.uri);
            onPress(onPress)
        }
    }
    const handleDelete=()=>{
        setPhoto(null)
    }

  
    return (
      <View style={styles.container}>
        <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                <Icon
                    name={'camera-flip-outline'}
                    backgroundColor='transparent'
                    size={50}
                />
                <AppText style={styles.subTitle}>Flip Camera</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
                {/* {
                    photo==null ?
                    <> */}
                        <Icon
                            name={'camera-outline'}
                            backgroundColor='transparent'
                            size={50}
                        />
                        <AppText style={styles.subTitle}>Take Picture</AppText>
                    {/* </>
                    :
                    <>
                        <Icon
                            name={'camera-retake-outline'}
                            backgroundColor='transparent'
                            size={50}
                        />
                        <AppText style={styles.subTitle}>Retake Picture</AppText> 
                    </>
                    
                } */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Icon
                    name={'backspace-reverse-outline'}
                    backgroundColor='transparent'
                    size={50}
                />
                <AppText style={styles.subTitle}>Go Back</AppText>
            </TouchableOpacity>
          </View>
        </CameraView>
        {/* {
            photo && (
                <View style={styles.preview}>
                    <AppText style={styles.text}>Photo Preview:</AppText>
                    <Image source={{ uri: photo }} style={styles.image} />
                    <AppButton
                        title={'Delete'}
                        onPress={handleDelete}
                    />
                </View>
        )} */}
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        paddingBottom: 10,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.secondary,
    },
    preview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
    },
    subTitle:{
        color: colors.white,
    },
  });

export default ImageCapture;
