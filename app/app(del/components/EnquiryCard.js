import React from 'react';

import { View, StyleSheet } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';
import Icon from './Icon';

function EnquiryCard(props) {
    return (
        <View style={styles.container}>
            <View style={styles.message}>
                <AppText style={styles.title}>Comppleted your investment?</AppText>
                <AppText style={styles.subTitle}>What's new in SavvySave</AppText>
            </View>
            <View style={styles.icon}>
                <Icon
                    name={'arrow-right'}
                    size={40}
                    backgroundColor='transparent'
                    iconColor={colors.primary}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.tertiary,
        paddingVertical: 10,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        marginVertical: 5,
    },
    icon:{
        width: '20%',
        justifyContent:'center',
        alignItems: 'center',
    },
    message:{
        width: '80%',
        paddingLeft: 20,
    },
    title:{
        fontWeight: '700' ,
        color: colors.black,
    },
});

export default EnquiryCard;