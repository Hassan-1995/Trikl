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
import SuitabilityAssesmentScreen from './app/screens/SuitabilityAssesmentScreen';
import AccountOnBoardingScreen from './app/screens/AccountOnBoardingScreen';
import DateInput from './app/components/DateInput';
import CountryPickerComponent from './app/components/CountryPickerComponent';
import ContactNumberComponent from './app/components/ContactNumberComponent';

import ImageCapture from './app/components/ImageCapture';
import ImageUpload from './app/components/ImageUpload';
import AttachmentComponent from './app/components/AttachmentComponent';
import AttachmentsScreen from './app/screens/AttachmentsScreen';
import HomeScreenCopy from './app/screens/HomeScreenCopy';
import ChartComponent from './app/components/ChartComponent';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AlertBox from './app/components/AlertBox';

export default function App() {
  const [initialInvestment,setInitialInvestment] =  useState(500);


  return (
    // <WelcomeScreen/>
    // <LoginScreen/>
    // <RegisterScreen/>
    // <HomeScreenCopy/>
    // <InvestmentScreen/>
    // <InvestmentPlanScreen/>
    // <SuitabilityAssesmentScreen/>

    // <PlannerScreen/>
    // <PaymentScreen/>


    // <AlertBox/>



    <NavigationContainer theme={myTheme}>
      <AuthNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
