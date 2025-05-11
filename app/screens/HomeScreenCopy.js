import React, { useState,useEffect,useContext } from "react";

import AsyncStorage from '@react-native-async-storage/async-storage';
import{sqlquery} from "../backendintegration/index";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import SummaryCard from "../components/SummaryCard";
import {StoreContext} from "../../GlobalState";
import GoalCardPicker from "../components/GoalCardPicker";

import ActiveInvestmentComponent from "../components/ActiveInvestmentComponent";
import ChartComponent from "../components/ChartComponent";
import colors from "../config/colors";

const draftGoalItems = [
  { goalName: "Create New", value: 0,  image: require("../assets/others.png") },
  {goalName: "Education", value: 2,
    image: require("../assets/education.png"),
  },
  {
    goalName: "Electronics",
    value: 3,
    image: require("../assets/electronics.png"),
  },
  { goalName: "Car", value: 5, image: require("../assets/car.png") },
  {
    goalName: "Furniture",
    value: 6,
    image: require("../assets/furniture.png"),
  },
  { goalName: "Wedding", value: 7, image: require("../assets/wedding.png") },
  { goalName: "Music", value: 8, image: require("../assets/music.png") },
  { goalName: "Jewelry", value: 9, image: require("../assets/jewelry.png") },
  { goalName: "Fitness", value: 10, image: require("../assets/fitness.png") },
  { goalName: "Others", value: 4, image: require("../assets/travel.png") },
];

const items = [
  {
    title: "Create New",
    status: "On",
    goal: 24000,
    initial:1000,
    recurring:222,
    invested: 5000,
    value: 1,
    image: require("../assets/others.png"),
  },
  {
    title: "Travel",
    status: "Off",
    goal: 15000,
    initial:1000,
    recurring:222,
    invested: 8000,
    value: 2,
    image: require("../assets/travel.png"),
  },
  {
    title: "Education",
    status: "On",
    goal: 18000,
    initial:1000,
    recurring:222,
    invested: 10000,
    value: 2,
    image: require("../assets/education.png"),
  },
  {
    title: "Electronics",
    status: "On",
    goal: 20000,
    initial:1000,
    recurring:222,
    invested: 12000,
    value: 3,
    image: require("../assets/electronics.png"),
  },
  {
    title: "Car",
    status: "On",
    goal: 25000,
    invested: 15000,
    value: 4,
    image: require("../assets/car.png"),
  },
  {
    title: "Furniture",
    status: "Off",
    goal: 22000,
    invested: 11000,
    value: 5,
    image: require("../assets/furniture.png"),
  },
  {
    title: "Wedding",
    status: "On",
    goal: 30000,
    invested: 20000,
    value: 6,
    image: require("../assets/wedding.png"),
  },
  {
    title: "Music",
    status: "On",
    goal: 18000,
    invested: 10000,
    value: 7,
    image: require("../assets/music.png"),
  },
  {
    title: "Jewelry",
    status: "On",
    goal: 35000,
    invested: 18000,
    value: 8,
    image: require("../assets/jewelry.png"),
  },
  {
    title: "Fitness",
    status: "Off",
    goal: 20000,
    invested: 9000,
    value: 9,
    image: require("../assets/fitness.png"),
  },
];
// active goals list
const goalsList=[
    {
        "userId": 0,
        "goalId": 20,
        "goalName": "Furniture",
        "templateId": null,
        "allocationId": 10,
        "goalTarget": 1000,
        "goalDuration": -1473,
        "total_payments": 0,
        "savingFrequency": "monthly",
        "initialContribution": 4093,
        "recurringAmount": 249,
        "status": "Draft",
        "fundingStatus": "inprogress",
        "goal_id": null,
        "Template_Goal_name": null,
        "goal_icon": null,
        "Goal_description": null,
        "prompt_target": null,
        "prompt_initialContribution": null,
        "prompt_savingFrequency": null,
        "prompt_regularContribution": null,
        "goal_type": null,
        "goal_status": null,
        "total_amount_due": null
    },
    {
        "userId": 0,
        "goalId": 21,
        "goalName": "Electronics",
        "templateId": null,
        "allocationId": 5,
        "goalTarget": 63077,
        "goalDuration": 6746,
        "total_payments": 0,
        "savingFrequency": "monthly",
        "initialContribution": 3975,
        "recurringAmount": 30,
        "status": "Draft",
        "fundingStatus": "inprogress",
        "goal_id": null,
        "Template_Goal_name": null,
        "goal_icon": null,
        "Goal_description": null,
        "prompt_target": null,
        "prompt_initialContribution": null,
        "prompt_savingFrequency": null,
        "prompt_regularContribution": null,
        "goal_type": null,
        "goal_status": null,
        "total_amount_due": null
    },
    {
        "userId": 0,
        "goalId": 22,
        "goalName": "Create New",
        "templateId": null,
        "allocationId": 10,
        "goalTarget": 49195,
        "goalDuration": 4929,
        "total_payments": 0,
        "savingFrequency": "monthly",
        "initialContribution": 5679,
        "recurringAmount": 342,
        "status": "Draft",
        "fundingStatus": "inprogress",
        "goal_id": null,
        "Template_Goal_name": null,
        "goal_icon": null,
        "Goal_description": null,
        "prompt_target": null,
        "prompt_initialContribution": null,
        "prompt_savingFrequency": null,
        "prompt_regularContribution": null,
        "goal_type": null,
        "goal_status": null,
        "total_amount_due": null
    }
];

//- acive goals end

function HomeScreenCopy({ navigation }) {
   const contextData = useContext(StoreContext);
      console.log("context in Home ",contextData);
  const[usergoals,setuserGoals]=useState([]);
  
  const[draftGoals,setDraftGoals]=useState(draftGoalItems.slice(0,1));

  // useeffect for usergoals
  useEffect(async() => {
   // await AsyncStorage.setItem('localgoals', JSON.stringify([]));
    const storedGoals = await AsyncStorage.getItem('localgoals');
    let existingList = storedGoals ? JSON.parse(storedGoals) : [];
    console.log("stored goals",existingList,draftGoals);
setDraftGoals(draftGoals.concat(existingList));
   
async function getUserGoals(){
    const sql="SELECT ug.*, tg.*, (SELECT SUM(amount) FROM PaymentSchedule WHERE goal_id = ug.goalId AND due_date < CURRENT_DATE) AS total_amount_due FROM UserGoal ug LEFT JOIN TemplateGoals tg ON ug.templateId = tg.goal_id;"
const resp=await sqlquery(sql,setuserGoals);
console.log("UserGoals",resp,usergoals);
}
getUserGoals();
  }, [contextData.reload]);





  const handlePress = (asset) => {
    console.log("Draft goal pressed ",asset,asset.value,contextData);
    const user=contextData.user;
    const riskProfile=contextData.riskProfile;

    console.log("ID number " + asset.id + " is pressed which has value of ", asset,"for User",user);
    // route to investment screen irrespevtive of user status.
  if(asset.goalName=="Create New"){
    navigation.navigate("InvestmentScreen", {option:asset  });
  return;
  }
     if (user.status == "guest") {
    guestUser(asset,user);
     }else if (user.status =="prospect") {
      prospectUser(asset,user);
      
    }else if (user.status == "registered") {
      registeredUser(asset,user);
  }
}
function guestUser(asset,user){
  console.log("selected Draft Goal", asset);
  if(!asset.recurring){
  navigation.navigate("InvestmentScreen", {option:asset  });
}else{
  alert(" Complete Registration before proceeding");
  navigation.navigate("Register Screen", {option:asset  });
}
}
function prospectUser(asset,user){
  console.log("selected Draft for prospect", asset);
  if(!user.riskScore){
  navigation.navigate("AccountOnBoardingScreen", {option:asset  });
  }else if(!asset.recurring){
    navigation.navigate("InvestmentScreen", {option:asset  });
  
}else if(!asset.initial){
  navigation.navigate("InvestmentScreen", {option:asset  });
}
else{
  alert(" PleaseComplete your suitability Assessment" );
  navigation.navigate("SuitabilityAssesmentScreen", {option:asset  });
}
}
function registeredUser(asset,user){
  console.log("selected Draft for registered user", asset);
  if(!user.riskScore){
  navigation.navigate("FundSelection", {option:asset  });
}else if(!asset.recurring){
  navigation.navigate("InvestmentScreen", {option:asset  });

}else{
  alert(" PleaseComplete your suitability Assessment" );
  navigation.navigate("SuitabilityAssesmentScreen", {option:asset  });
}
}
  return (
    <Screen>
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.background}
      />
      <SummaryCard
        totalBalance={10000}
        processingBalance={450006}
        totalProfit={789}
        activeInvestment={10}
      />
      <View style={styles.container}>
        <ScrollView>
          <GoalCardPicker
            assets={draftGoals}
            label={"Start a New Plan or Resume Drafts"}
            onPress={handlePress}
          />
          <ChartComponent assets={items} />
          <FlatList
            data={usergoals}
            keyExtractor={(item) => item?.goalId?.toString()}
            renderItem={({ item }) => (
              <ActiveInvestmentComponent assets={item} />
            )}
          />
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 10,
    paddingTop: 10,
    overflow: "hidden",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  },
  scrollView: {
    paddingHorizontal: 10,
    // marginTop: 20,
  },
});

export default HomeScreenCopy;
