import React, { useEffect, useState } from "react";

import { View, StyleSheet, Alert } from "react-native";
import AmountInput from "../components/AmountInput";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";

const items = [
  {
    title: "Education",
    subTitle: "What is your target for this goal?",
    description:
      "You are setting up the total amount which you would like to achieve for Education.",
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
    description:
      "This is the amount you will invest automantically on daily basis.",
    keyId: 3,
  },
];

function InvestmentPlanScreen({ navigation, route }) {
  const [activeComponent, setActiveComponent] = useState(items[0]);
  const [number, setNumber] = useState(null);
  const [amount, setAmount] = useState([]);

  console.log("InvestmentPlanScreen", route.params.title);

  useEffect(() => {
    if (amount.length == 3) {
      // navigation.navigate('PlanSummary', amount)
      setAmount([]);
      Alert.alert(
        "Prompt message by SavvySave",
        "We need to asses your investment suitability.\nPlease answer some questions.",
        [
          {
            text: "OK",
            // onPress: () => console.log("OK Pressed")
            onPress: () => {
              navigation.navigate("SuitabilityAssesmentScreen", amount);
            },
          },
        ]
      );
    }
  }, [amount]);

  const handlePress = (keyId) => {
    setActiveComponent(items[keyId]);
    setAmount([...amount, number]);
    setNumber(null);
    if (keyId == 3) {
      setActiveComponent(items[0]);
    }
  };

  const handleAmount = (value) => {
    setNumber(value);
  };

  return (
    <Screen>
      <AmountInput
        title={route.params.title}
        subTitle={activeComponent.subTitle}
        description={activeComponent.description}
        initialValue={number}
        onAmount={handleAmount}
      />
      {number === null ? (
        <></>
      ) : (
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <AppButton
            title={"Continue"}
            onPress={() => {
              handlePress(activeComponent.keyId);
            }}
          />
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default InvestmentPlanScreen;
