import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SliderComponent from './app/components/SliderComponent';
import CustomSlider from './app/components/CustomSlider';
import GoalCard from './app/components/GoalCard';
import Screen from './app/components/Screen';
import { useState } from 'react';
import AppText from './app/components/AppText';
import PlannerScreen from './app/screens/PlannerScreen';
import PreferenceInvestmentOptionComponent from './app/components/PreferenceInvestmentOptionComponent';
import InvestmentScreen from './app/screens/InvestmentScreen';
import HomeScreen from './app/screens/HomeScreen';
import AmountInput from './app/components/AmountInput';
import InvestmentPlanScreen from './app/screens/InvestmentPlanScreen';


export default function App() {
  const[number,setNumber] = useState();



  return (
    // <InvestmentScreen/>
    <InvestmentPlanScreen/> 
    // <HomeScreen/>
    // <PlannerScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
