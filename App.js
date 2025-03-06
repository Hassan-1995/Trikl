import { useState,createContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import PlanSummary from "./app/screens/PlanSummary";
import InvestmentPlanScreen from "./app/screens/InvestmentPlanScreen";
import InvestmentScreen from "./app/screens/InvestmentScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import CredentialScreen from "./app/screens/CredentialScreen";
import HomeScreen from "./app/screens/HomeScreen";

import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";

import CustomSlider from "./app/components/CustomSlider";
import myTheme from "./app/navigation/navigationTheme";
import LoginScreen from "./app/screens/LoginScreen";
import PaymentScreen from "./app/screens/PaymentScreen";
import BankPayment from "./app/components/BankPayment";
import SuitabilityAssesmentScreen from "./app/screens/SuitabilityAssesmentScreen";
import AccountOnBoardingScreen from "./app/screens/AccountOnBoardingScreen";
import DateInput from "./app/components/DateInput";
import CountryPickerComponent from "./app/components/CountryPickerComponent";
import ContactNumberComponent from "./app/components/ContactNumberComponent";

import ImageCapture from "./app/components/ImageCapture";
import ImageUpload from "./app/components/ImageUpload";
import AttachmentComponent from "./app/components/AttachmentComponent";
import AttachmentsScreen from "./app/screens/AttachmentsScreen";
import HomeScreenCopy from "./app/screens/HomeScreenCopy";
import { StoreProvider } from './GlobalState';
import ChartComponent from "./app/components/ChartComponent";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AlertBox from "./app/components/AlertBox";
import AccountProfileScreen from "./app/screens/AccountProfileScreen";
import WalletScreen from "./app/screens/WalletScreen";
import StatementsScreen from "./app/screens/StatementsScreen";
import StatementComponent from "./app/components/StatementComponent";
import FundSelectionScreen from "./app/screens/FundSelectionScreen";

export default function App() {
  const [initialInvestment, setInitialInvestment] = useState(500);
  const [user,setUser]=useState({
    "user_Id":0,
    "user_name":"Guest",
    "user_email":"guest@finomics.com.pk",
    "user_password":"$2a$10$nJw/VAS5C17H3BZGevLxj.sALm34IhYYZns6fvRFE.0V5WH.lp7eK"
 });

 //const StoreContext = createContext();

 //const StoreProvider = StoreContext.Provider

  return (
   // <AccountOnBoardingScreen/>
   // <AttachmentsScreen/>
    // <WelcomeScreen/>
    // <LoginScreen/>
    // <RegisterScreen/>
    // <HomeScreenCopy/>
    // <InvestmentScreen/>
    // <InvestmentPlanScreen/>
    // <SuitabilityAssesmentScreen/>

  //   <PlanSummary/>
    // <PaymentScreen/>

    // <StatementComponent/>

    // <AlertBox/>
    // <AccountProfileScreen/>
    // <StatementsScreen/>
   // <WalletScreen />

    //  <StoreProvider value={{ user, setUser }}>
     <NavigationContainer theme={myTheme}>
       <AppNavigator />
     </NavigationContainer>
    // </StoreProvider>

    // <NavigationContainer theme={myTheme}>
    //   <AuthNavigator/>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
