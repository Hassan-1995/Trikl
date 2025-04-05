import React, { useState,useContext } from "react";

import { ScrollView, StyleSheet, View } from "react-native";
import {StoreContext} from "../../GlobalState";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import GoalCardPicker from "../components/GoalCardPicker";
import Screen from "../components/Screen";
import colors from "../config/colors";

const items = [
  { goalName: "Travel", value: 1, image: require("../assets/travel.png") },
  {
    goalName: "Education",
    value: 2,
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
  { goalName: "Others", value: 4, image: require("../assets/others.png") },
];

function InvestmentScreen({ navigation, route }) {
 
  const [option, setOption] = useState(route.params);

     const contextData = useContext(StoreContext);

   //  console.log("Context in InvestmentPlanScreen", contextData);
  console.log("goal", option);

  const handlePress = (item) => {
    const temp = items.find((data) => data.value === item);
    console.log("Goal TemplateId",item,temp);
    setOption(temp);
    const goal={
      goalName:temp?.goalName,
      templateId:item}
    
    console.log("Selected option:", option);
 
  };
  const handleContinue = () => {
    const goal={
      goalName:option?.goalName,
      templateId:option.value}
      contextData.setGoal(goal);
      navigation.navigate("InvestmentPlanScreen", option);
  }
  return (
    <Screen style={styles.container}>
      <AppText style={styles.title}>What are you investing for?</AppText>
      <View style={styles.headers}>
        <AppText style={styles.title}>{option.goalName}</AppText>
        {/* TODO app a text input here */}
      </View>
      <ScrollView horizontal={false} contentContainerStyle={styles.scrollView}>
        <GoalCardPicker
          label={"Suggested  Goals:"}
          assets={items}
          onPress={handlePress}
        />
        <GoalCardPicker
          label="Thematic Portfolios"
          assets={items}
          horizontal={false}
          numberOfColumns={3}
          onPress={handlePress}
        />
      </ScrollView>

      <AppButton
        title={"Continue"}
        onPress={() => {handleContinue();      
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 5,
    marginTop: 10,
  },
  headers: {
    width: "80%",
    marginVertical: 10,
    padding: 10,
    backgroundColor: colors.light,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.primary,
    alignSelf: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "900",
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default InvestmentScreen;
