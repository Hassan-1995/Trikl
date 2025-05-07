import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenCopy from "../screens/HomeScreenCopy";
import InvestmentScreen from "../screens/InvestmentScreen";
import InvestmentPlanScreen from "../screens/InvestmentPlanScreen";
import SuitabilityAssesmentScreen from "../screens/SuitabilityAssesmentScreen";
import PlanSummary from "../screens/PlanSummary";
import PaymentScreen from "../screens/PaymentScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import AccountOnBoardingScreen from "../screens/AccountOnBoardingScreen";
import AttachmentsScreen from "../screens/AttachmentsScreen";
import WalletScreen from "../screens/WalletScreen";
import FundSelectionScreen from "../screens/FundSelectionScreen";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: true }}>

    <Stack.Screen name="Login Screen" component={LoginScreen} />
    <Stack.Screen name="HomeScreenCopy" component={HomeScreenCopy} />

<Stack.Screen
  name="SuitabilityAssesmentScreen"
  component={SuitabilityAssesmentScreen}
/>
<Stack.Screen name="Register Screen" component={RegisterScreen} />
    <Stack.Screen
      name="AccountOnBoardingScreen"
      component={AccountOnBoardingScreen}
    />
    {/* Temporary Solution: that's not how login screen works */}
    <Stack.Screen name="FundSelection" component={FundSelectionScreen} />
    <Stack.Screen
      name="InvestmentPlanScreen"
      component={InvestmentPlanScreen}
    />
    <Stack.Screen name="AttachmentsScreen" component={AttachmentsScreen} />
    <Stack.Screen name="PlanSummary" component={PlanSummary} />

    <Stack.Screen name="WalletScreen" component={WalletScreen} />

    {/*  */}
    {/*  */}

    <Stack.Screen name="InvestmentScreen" component={InvestmentScreen} />


    <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
