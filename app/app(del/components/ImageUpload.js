import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

import AppButton from './AppButton';
import AppText from './AppText';


function ImageUpload({ onImageUpload, onPress }) {
    const [file, setFile] = useState(null);

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
                                onPress={onPress}
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