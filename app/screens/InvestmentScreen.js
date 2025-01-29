import React, { useState } from "react";

import { ScrollView, StyleSheet, View } from "react-native";
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

  console.log("goal", option);

  const handlePress = (item) => {
    const temp = items.find((data) => data.value === item);
    setOption({
      goalName: temp.goalName,
      goalID: temp.value,
    });
    console.log("Selected option:", option);
  };

  return (
    <Screen style={styles.container}>
      <AppText style={styles.title}>What are you investing for?</AppText>
      <View style={styles.headers}>
        <AppText style={styles.title}>{option.goalName}</AppText>
      </View>
      <ScrollView horizontal={false} contentContainerStyle={styles.scrollView}>
        <GoalCardPicker
          label={"Suggested  Goals \n & Other (Custom Goals)"}
          assets={items}
          onPress={handlePress}
        />
        <GoalCardPicker
          label="Thematic Portfolios & General Saving"
          assets={items}
          horizontal={false}
          numberOfColumns={3}
          onPress={handlePress}
        />
      </ScrollView>

      <AppButton
        title={"Continue"}
        onPress={() => {
          console.log("items:", option);
          navigation.navigate("InvestmentPlanScreen", option);
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
