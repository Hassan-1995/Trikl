import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountProfileScreen from '../screens/AccountProfileScreen';
import AccountOnBoardingScreen from '../screens/AccountOnBoardingScreen';
import AttachmentsScreen from '../screens/AttachmentsScreen';

const Stack = createNativeStackNavigator();

const AccountNavigator=()=>(
    <Stack.Navigator mode='modal' screenOptions={{ headerShown: false }} >
        <Stack.Screen name='AccountProfileScreen' component={AccountProfileScreen} />
        <Stack.Screen name='AccountOnBoardingScreen' component={AccountOnBoardingScreen} />
        <Stack.Screen name='AttachmentsScreen' component={AttachmentsScreen} />
    </Stack.Navigator>
)

export default AccountNavigator;