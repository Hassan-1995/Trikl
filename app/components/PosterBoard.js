import React from 'react';

import { View, StyleSheet } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import Icon from './Icon';

function PosterBoard(props) {
    return (
        <View style={styles.container}>
            <View style={styles.message}>
                <AppText style={styles.messageText}>What's new in Trikl</AppText>
            </View>
            <View style={styles.icon}>
                <Icon
                    name={'chevron-right-circle-outline'}
                    size={50}
                    backgroundColor='transparent'
                    iconColor={colors.primary}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secondary,
        paddingVertical: 15,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        borderWidth: 2,
    },
    icon:{
        width: '20%',
        justifyContent:'center',
        alignItems: 'center',
    },
    message:{
        width: '80%',
        alignItems: 'center',
    },
    messageText:{
        fontSize: 25,
        fontWeight: 900,
        color: colors.black,
    },
});

export default PosterBoard;