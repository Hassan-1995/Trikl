import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenCopy from '../screens/HomeScreenCopy';
import InvestmentScreen from '../screens/InvestmentScreen';
import InvestmentPlanScreen from '../screens/InvestmentPlanScreen';
import SuitabilityAssesmentScreen from '../screens/SuitabilityAssesmentScreen';
import PlannerScreen from '../screens/PlannerScreen';
import PaymentScreen from '../screens/PaymentScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator=()=>(
    <Stack.Navigator mode='modal' screenOptions={{ headerShown: false }} >
        <Stack.Screen name='HomeScreenCopy' component={HomeScreenCopy} />
        <Stack.Screen name='InvestmentScreen' component={InvestmentScreen} />
        <Stack.Screen name='InvestmentPlanScreen' component={InvestmentPlanScreen} />
        <Stack.Screen name='SuitabilityAssesmentScreen' component={SuitabilityAssesmentScreen} />
        <Stack.Screen name='PlannerScreen' component={PlannerScreen} />
        <Stack.Screen name='PaymentScreen' component={PaymentScreen} />
    </Stack.Navigator>
)

export default HomeNavigator;