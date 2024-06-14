import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreenCopy from '../screens/HomeScreenCopy';
import HomeScreen from '../screens/HomeScreen';
import HomeNavigator from './HomeNavigator';
import AccountProfileScreen from '../screens/AccountProfileScreen';
import WalletScreen from '../screens/WalletScreen';
import AccountNavigator from './AccountNavigator';


const Tab = createBottomTabNavigator();

const AppNavigator=()=>(
    <Tab.Navigator>
        <Tab.Screen 
            name='Home' component={HomeNavigator}
            options={{ 
                headerShown: false, 
                tabBarIcon: ({color, size})=> <MaterialCommunityIcons name='home' color={color} size={size} />
            }}  
        />
        <Tab.Screen 
            name='Wallet' 
            component={WalletScreen}
            options={{ 
                // headerShown: false, 
                tabBarIcon: ({color, size})=> <MaterialCommunityIcons name='wallet' color={color} size={size} />
            }}  
        />
        <Tab.Screen 
            name='Statements' 
            component={HomeScreen}
            options={{ 
                // headerShown: false, 
                tabBarIcon: ({color, size})=> <MaterialCommunityIcons name='file-document' color={color} size={size} />
            }}  
        />
        <Tab.Screen 
            name='Account' 
            component={AccountNavigator}
            options={{ 
                // headerShown: false, 
                tabBarIcon: ({color, size})=> <MaterialCommunityIcons name='account' color={color} size={size} />
            }}  
        />
    </Tab.Navigator>
)

export default AppNavigator;