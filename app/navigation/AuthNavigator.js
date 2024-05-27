import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InvestmentScreen from '../screens/InvestmentScreen';
import InvestmentPlanScreen from '../screens/InvestmentPlanScreen';
import PlannerScreen from '../screens/PlannerScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator=()=>(
    <Stack.Navigator>
        <Stack.Screen name='InvestmentScreen' component={InvestmentScreen} />
        <Stack.Screen name='InvestmentPlanScreen' component={InvestmentPlanScreen} />
        <Stack.Screen name='PlannerScreen' component={PlannerScreen} />
    </Stack.Navigator>
)

export default AuthNavigator;