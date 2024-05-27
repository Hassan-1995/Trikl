import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import PlannerScreen from './app/screens/PlannerScreen';
import InvestmentPlanScreen from './app/screens/InvestmentPlanScreen';
import InvestmentScreen from './app/screens/InvestmentScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import CredentialScreen from './app/screens/CredentialScreen';
import HomeScreen from './app/screens/HomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import CustomSlider from './app/components/CustomSlider';
import myTheme from './app/navigation/navigationTheme';
import LoginScreen from './app/screens/LoginScreen';
import PaymentScreen from './app/screens/PaymentScreen';
import BankPayment from './app/components/BankPayment';

export default function App() {
  const [initialInvestment,setInitialInvestment] =  useState(500);


  return (
    // <HomeScreen/>
    // <InvestmentScreen/>
    // <CredentialScreen/>
    // <RegisterScreen/>
    // <LoginScreen/>
    // <HomeScreen/>
    // <PaymentScreen/>
    // <BankPayment/>

    <NavigationContainer theme={myTheme}>
      <AuthNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
