import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import InvestmentPlanScreen from '../screens/InvestmentPlanScreen';
import InvestmentScreen from '../screens/InvestmentScreen';
import PlannerScreen from '../screens/PlannerScreen';           
import PaymentScreen from '../screens/PaymentScreen';           

const Stack = createNativeStackNavigator();

const AuthNavigator=()=>(
    <Stack.Navigator>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />

        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name='InvestmentScreen' component={InvestmentScreen} />
        <Stack.Screen name='InvestmentPlanScreen' component={InvestmentPlanScreen} />
        <Stack.Screen name='PlannerScreen' component={PlannerScreen} />
        <Stack.Screen name='PaymentScreen' component={PaymentScreen} />
    </Stack.Navigator>
)

export default AuthNavigator;