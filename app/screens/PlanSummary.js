import React, { useState,useEffect } from "react";

import { ScrollView, StyleSheet, View } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import CustomSlider from "../components/CustomSlider";
import PreferenceInvestmentOptionComponent from "../components/PreferenceInvestmentOptionComponent";
import {timeToTargetFutureValue} from "../backendintegration/helperFunctions";
import {addGoal} from "../backendintegration/index";
import Screen from "../components/Screen";
import colors from "../config/colors";

function PlanSummary({ navigation, route }) {

  const values =[1000,200,30] //route?.params?.amount.map((str) => parseInt(str, 10));
  const frequency ={id:2,value:'monthly'}; //route?.params?.button;
  const [goal, setGoal] = useState({goalD:0,goalName:"Dummy Goal"});
  const [target, setTarget] = useState(values[0]);
  const [initialInvestment, setInitialInvestment] = useState(values[1]);
  const [recurringInvestment, setRecurringInvestment] = useState(values[2]);
  const [time, setTime] = useState(0);
  const [result, setResult] = useState("Result appears  here");
  console.log("PLanner:", route?.params);

  const [toggle, setToggle] = useState(true);

  const [button, setButton] = useState(frequency);
const rate=10;

//useeffect for tvm
useEffect(() => {
  console.log("PlanSummary Routes after Fund Selection",route.params);
  // Effect runs once when the component mounts
  const duration=timeToTargetFutureValue(target,initialInvestment,recurringInvestment,frequency.id,rate);
  console.log("Total Days of:",target,initialInvestment,recurringInvestment,frequency.id,rate);
  console.log("Total Days",duration);
  setResult(duration.label);
  setTime(duration.days)

}, [target,initialInvestment,recurringInvestment,frequency]);

  function savegoal(plannedInvestmentValues){
    try{
  const resp= addGoal(goal,target,initialInvestment,frequency.value,recurringInvestment,time);
   console.log("Response after adding Goal",resp);
}catch(error){
  console.log("Error  after adding Goal",error);

}
    

    }
  

  const handlePayment = () => {
   
    // save goaladd either payment or KYC
    const plannedInvestmentValues = {
      targetAmount: target,
      initialInvestment: initialInvestment,
      recurringInvestment: recurringInvestment,
      recurringType: { button },
    };
    savegoal(plannedInvestmentValues);
    console.log({ target, initialInvestment, recurringInvestment, button });
    // navigation.navigate("PaymentScreen", plannedInvestmentValues);
    navigation.navigate("WalletScreen", plannedInvestmentValues);
  };

  return (
    <Screen>
      <ScrollView>
        <CustomSlider
          minimumValue={0}
          maximumValue={1000000}
          typedValue={target}
          onChange={(value) => {
            setTarget(Math.floor(value));
          }}
          title="Your target amount"
          trackBarHeight={15}
          thumbSize={25}
        />
        <CustomSlider
          minimumValue={0}
          maximumValue={100000}
          typedValue={initialInvestment}
          onChange={(value) => {
            setInitialInvestment(Math.floor(value));
          }}
          title="Your initial investment"
          trackBarHeight={15}
          thumbSize={25}
        />
        <CustomSlider
          minimumValue={0}
          maximumValue={10000}
          typedValue={recurringInvestment}
          onChange={(value) => {
            setRecurringInvestment(Math.floor(value));
          }}
          title="You are auto investing"
          trackBarHeight={15}
          thumbSize={25}
        />
        {/* <View style={styles.sectionContainer} >
            <AppText style={styles.toggleTittle} >Enable Auto Investing </AppText>
            <ToggleSwitch
                isOn={toggle}
                onColor={colors.secondary}
                offColor={colors.tertiary}
                thumbOnStyle={{ backgroundColor: colors.primary}}
                thumbOffStyle={{ backgroundColor: colors.primary}}
                size="large"
                onToggle={(isOn ) => setToggle(previousState => !previousState)}
            />
        </View> */}
        <View style={{ alignItems: "center", marginVertical: 10 }}>
          <PreferenceInvestmentOptionComponent
            preSelectedId={frequency.id}
            onChange={(id, value) => setButton({ id, value })}
          />
          <AppText>You will reach your goal in </AppText>
          <AppText style={styles.resultContainer}>{result} </AppText>
          <AppText>This in 106 days faster than saving in cash</AppText>
        </View>

        <View style={styles.disclaimerContainer}>
          <AppText textAlign="center" color={colors.primary} fontWeight="700">
            Dicliamer
          </AppText>
          <AppText
            style={{ fontSize: 12, textAlign: "center" }}
            color={colors.primary}
          >
            The calculated time is based on past fund performance {"\n"} and may
            vary with market conditions.
          </AppText>

          <AppButton title={"Proceed to Payment"} onPress={handlePayment} />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
  },
  toggleTittle: {
    fontWeight: "900",
  },
  resultContainer: {
    fontSize: 25,
    fontWeight: "900",
    marginVertical: 20,
  },
  disclaimerContainer: {
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "center",
    marginBottom: 10,
  },
});

export default PlanSummary;
