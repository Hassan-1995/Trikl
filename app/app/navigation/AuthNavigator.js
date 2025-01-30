import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import HomeScreen from '../screens/HomeScreen';
import HomeScreenCopy from "../screens/HomeScreenCopy";
import LoginScreen from "../screens/LoginScreen";
import InvestmentPlanScreen from "../screens/InvestmentPlanScreen";
import InvestmentScreen from "../screens/InvestmentScreen";
import PlanSummary from "../screens/PlanSummary";
import PaymentScreen from "../screens/PaymentScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SuitabilityAssesmentScreen from "../screens/SuitabilityAssesmentScreen";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

    <Stack.Screen name="HomeScreenCopy" component={HomeScreenCopy} />
    {/* <Stack.Screen name='HomeScreen' component={HomeScreen} /> */}
    <Stack.Screen name="InvestmentScreen" component={InvestmentScreen} />
    <Stack.Screen
      name="InvestmentPlanScreen"
      component={InvestmentPlanScreen}
    />
    <Stack.Screen
      name="SuitabilityAssesmentScreen"
      component={SuitabilityAssesmentScreen}
    />

    <Stack.Screen name="PlanSummary" component={PlanSummary} />
    <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
