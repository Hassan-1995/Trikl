import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import {uploadFile} from '../backendintegration/index';

import AppButton from './AppButton';
import AppText from './AppText';


function ImageUpload({ onImageUpload, onPress, setLink }) {
    const [filelink, setFileLink] = useState(null);
    const [file, setFile] = useState(null);


    const handleUpload = async () => {
        if(file){
        const resp= await uploadFile(file,setFileLink);
        console.log("File Link:",resp);
        setLink(resp);
        }else{
            alert("No file to Upload");
        }
        onImageUpload(fileLink);
        onPress();
    }
  const pickDocument = async () => {
    try {
        let result = await DocumentPicker.getDocumentAsync({});
        if (result.type !== 'cancel') {
            setFile(result.assets[0]);
        }
        onImageUpload(result.assets[0])
        
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <View style={styles.container}>
        <AppButton title="Pick a document" onPress={pickDocument} />
        {
            file && 
                (
                    <>
                        <View style={styles.fileInfo}>
                            {/* <AppText>URI: {file.uri}</AppText> */}

                            <AppText>Type: {file.mimeType}</AppText>
                            <AppText>Size: {file.size} bytes</AppText>
                            <AppText>Name: {file.name}</AppText>
                        </View>
                        <View style={{ justifyContent: 'flex-end', width: '50%' }}>
                            <AppButton
                                title={'Upload'}
                                onPress={handleUpload}
                            />
                        </View>
                    </>
                )
        }
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fileInfo: {
        marginTop: 20,
        paddingHorizontal: 10,
        justifyContent: 'flex-end'
    },
  });
  

export default ImageUpload;