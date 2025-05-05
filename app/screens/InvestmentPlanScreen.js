import React, { useEffect, useState,useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet, Alert } from "react-native";
import AmountInput from "../components/AmountInput";
import {StoreContext} from "../../GlobalState";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import PreferenceInvestmentOptionComponent from "../components/PreferenceInvestmentOptionComponent";
import AppText from "../components/AppText";

const items = [
  {
   
    subTitle: "What is your target for this goal?",
    description:
      "You are setting up the total amount which you would like to achieve.",
    keyId: 1,
  },
  {
    title: "Education",
    subTitle: "What is your first investment?",
    description: "You can start from as low as PKR 500.",
    keyId: 2,
  },
  {
    title: "Education",
    subTitle: "How much do you want to invest daily?",
    description: "This is the amount that will be invested on ",
    keyId: 3,
  },
];

function InvestmentPlanScreen({ navigation, route }) {
  
    const contextData = useContext(StoreContext);
  const [activeComponent, setActiveComponent] = useState(items[0]);
  const [number, setNumber] = useState(0);
  const [target, setTarget] = useState(0);
  const [initial, setInitial] = useState(0);
  const [recurring, setRecurring] = useState(0);
  const [frequency, setFrequency] = useState("");
  const [button, setButton] = useState({ value: "_____", id: 1 });
  const [amount, setAmount] = useState([]);
  const [usergoal, setUserGoal] = useState(contextData.goal);
 
  console.log("InvestmentPlanScreen", route.params);
  console.log("Context in InvestmentPlanScreen", contextData);

//   useEffect(() => {
//     if (amount.length == 3) {
//       // navigation.navigate('PlanSummary', amount)
//       setAmount([]);
//       const handletvm=()=>{
//         const tvm={
//           goal:usergoal,
//           target:amount[0],
//           initial:amount[1],
//           pmt:amount[2],
//           frequency:button
//         };
// console.log("Compiled TVM in Investment Planner",tvm);
//   navigation.navigate("SuitabilityAssesmentScreen",tvm);

//       }
//       Alert.alert(
//         "Prompt message by SavvySave",
//         "We need to asses your investment suitability.\nPlease answer some questions.",
//         [
//           {
//             text: "OK",
//             // onPress: () => console.log("OK Pressed")
//             onPress: () => {
//               handletvm();
//               // navigation.navigate("SuitabilityAssesmentScreen", {
//               //   amount,
//               //   button,
//               // });
//             },
//           },
//         ]
//       );
//     }
//   }, [amount]);

  //useeffect for tvm
  useEffect(() => {
    let goal=usergoal;
    let tvm={
      target:target,
      initial:initial,
      recurring:recurring,
      frequency:frequency,
      

    }
    goal.target=target,
    goal.initial=initial,
    goal.recurring=recurring,
    goal.frequency=frequency,
    console.log("TVM in Use effect",tvm)
    contextData.setGoal(goal)
    contextData.settvm(tvm)
    
  }, [target,initial,recurring,frequency]);

  const handlePress = (keyId) => {
    console.log("IN continue", keyId, items[keyId]);
    
    setAmount([...amount, number]);
    filltvm(keyId, number, button);
    
    if (keyId == 3) {
      
      console.log("last question answered, moving to Risk Profiling", keyId);
      console.log("Input Values", amount, button);
// handle as per user
if (contextData.user?.status== "guest") {
  guestUser(contextData.goal);
   }else if (contextData.user?.status == "prospect") {
    prospectUser(contextData.goal);
    navigation.navigate("SuitabilityAssesmentScreen", {goalID: asset.id,
      goalName: value,
    });
  }else if (contextData.user?.status == "registered") {
    navigation.navigate("PlanSummary", {goalID: asset.id,
      goalName: value,
    });
};

      // updateLocalGoal(contextData.goal);
      // navigation.navigate("SuitabilityAssesmentScreen",route.param);
    } else {
      setActiveComponent(items[keyId]);
    }
    
    // Call filltvm and pass number and button directly
    setNumber(0);
   
  };
{

}
 function filltvm(keyId, value, buttonVal) {
  console.log("filling tvm",keyId, value, buttonVal);
  let updatedTarget = target;
  let updatedInitial = initial;
  let updatedRecurring = recurring;
  let updatedFrequency = frequency;

  switch (keyId) {
    case 1:
      setTarget(value);
      updatedTarget = value;
      break;
    case 2:
      setInitial(value);
      updatedInitial = value;
      break;
    case 3:
      setRecurring(value);
      setFrequency(buttonVal.value);
      updatedRecurring = value;
      updatedFrequency = buttonVal.value;
      break;
    default:
      break;
  }


  console.log("✅ Updated TVM Values", {
    keyId,
    target: updatedTarget,
    initial: updatedInitial,
    recurring: updatedRecurring,
    frequency: updatedFrequency,
  });
}
async function guestUser(goal){
  alert("Updating your provided details as guest user");
  updateLocalGoal(goal);
  navigation.navigate("Register Screen",route.param);
}
async function prospectUser(goal){
  alert("Updating your provided details as prospect user");
  updateLocalGoal(goal);
  navigation.navigate("SuitabilityAssesmentScreen",route.param);
}
async function updateLocalGoal(goal) {
    
  try {
    const storedGoals = await AsyncStorage.getItem('localgoals');
     let existingList = storedGoals ? JSON.parse(storedGoals) : [];
console.log("retreive existing list",existingList);
    const index = existingList.findIndex(item => item.goalName === goal.goalName);

    if (index !== -1) {
      existingList[index]=goal;
      await AsyncStorage.setItem('localgoals', JSON.stringify(existingList));
      alert(" Goal updated successfully");

    } else {
alert("Goal Not found");
    }
  } catch (error) {
    console.error('Error handling goal in AsyncStorage:', error);
  }
}
  const handleAmount = (value) => {


    setNumber(value);
  };

  return (
    <Screen>
      <View style={styles.container}>
        {activeComponent.keyId == 3 && (
          <>
            {/* <AppText style={{ paddingLeft: 10 }}>{button.value} basis.</AppText> */}
            <View
              style={{
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <PreferenceInvestmentOptionComponent
                onChange={(id, value) => setButton({ id, value })}
              />
            </View>
          </>
        )}

        <AmountInput
          title={route.params.goalName}
          subTitle={activeComponent.subTitle}
          description={activeComponent.description}
          initialValue={number}
          onAmount={handleAmount}
        />
        {/* {activeComponent.keyId == 3 && (
          <>
            <AppText style={{ paddingLeft: 10 }}>{button.value} basis.</AppText>
            <View
              style={{
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <PreferenceInvestmentOptionComponent
                onChange={(id, value) => setButton({ id, value })}
              />
            </View>
          </>
        )} */}
        {number === null ||
        (activeComponent.keyId === 3 && button.value === "_____") ? (
          <></>
        ) : (
          <View style={styles.buttonContainer}>
            <AppButton
              title={"Continue"}
              onPress={() => {
                handlePress(activeComponent.keyId);
              }}
            />
          </View>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    // position: "absolute",
    // bottom: 20,
    flexGrow: 1,
    justifyContent: "flex-end",

    paddingHorizontal: 20,
  },
});

export default InvestmentPlanScreen;
