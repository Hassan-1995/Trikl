import React, { useEffect, useState } from "react";

import { View, StyleSheet, Alert } from "react-native";
import AmountInput from "../components/AmountInput";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import PreferenceInvestmentOptionComponent from "../components/PreferenceInvestmentOptionComponent";
import AppText from "../components/AppText";

const items = [
  {
    title: "Education",
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
  const [activeComponent, setActiveComponent] = useState(items[0]);
  const [number, setNumber] = useState(null);
  const [button, setButton] = useState({ value: "_____", id: 1 });
  const [amount, setAmount] = useState([]);

  console.log("InvestmentPlanScreen", route.params);

  useEffect(() => {
    if (amount.length == 3) {
      // navigation.navigate('PlannerScreen', amount)
      setAmount([]);
      Alert.alert(
        "Prompt message by SavvySave",
        "We need to asses your investment suitability.\nPlease answer some questions.",
        [
          {
            text: "OK",
            // onPress: () => console.log("OK Pressed")
            onPress: () => {
              navigation.navigate("SuitabilityAssesmentScreen", {
                amount,
                button,
              });
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
  console.log("Button from investmentPlanScreen ", button.value);

  const handleAmount = (value) => {
    setNumber(value);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <AmountInput
          title={route.params.goalName}
          subTitle={activeComponent.subTitle}
          description={activeComponent.description}
          initialValue={number}
          onAmount={handleAmount}
        />
        {activeComponent.keyId == 3 && (
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
        )}
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
