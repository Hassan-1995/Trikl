import React, { useEffect, useState } from "react";

import { View, StyleSheet, ScrollView } from "react-native";
import ToggleSwitch from "toggle-switch-react-native";

import Screen from "../components/Screen";
import CustomSlider from "../components/CustomSlider";
import AppText from "../components/AppText";
import colors from "../config/colors";
import PreferenceInvestmentOptionComponent from "../components/PreferenceInvestmentOptionComponent";
import AppButton from "../components/AppButton";

function PlanSummary({ navigation, route }) {
  const values = route.params.map((str) => parseInt(str, 10));
  const [target, setTarget] = useState(values[0]);
  const [initialInvestment, setInitialInvestment] = useState(values[1]);
  const [recurringInvestment, setRecurringInvestment] = useState(values[2]);

  const [toggle, setToggle] = useState(true);

  const [button, setButton] = useState(null);

  const handlePayment = () => {
    console.log(button);
    navigation.navigate("PaymentScreen");
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
        <View style={styles.sectionContainer}>
          <AppText style={styles.toggleTittle}>Enable Auto Investing </AppText>
          <ToggleSwitch
            isOn={toggle}
            onColor={colors.secondary}
            offColor={colors.tertiary}
            thumbOnStyle={{ backgroundColor: colors.primary }}
            thumbOffStyle={{ backgroundColor: colors.primary }}
            size="large"
            onToggle={(isOn) => setToggle((previousState) => !previousState)}
          />
        </View>
        <View style={{ alignItems: "center", marginVertical: 30 }}>
          <PreferenceInvestmentOptionComponent
            onChange={(value) => {
              setButton(value);
            }}
          />
          <AppText>You will reach your goal in </AppText>
          <AppText style={styles.resultContainer}>1 Year and 9 Months </AppText>
          <AppText>This in 106 days faster than saving in cash</AppText>
        </View>

        <View style={styles.disclaimerContainer}>
          <AppText textAlign="center" color={colors.primary} fontWeight="700">
            Dicliamer
          </AppText>
          <AppText textAlign="center" color={colors.primary}>
            The time calculated is based on fund performance in past. This time
            may {"\n"} vary based on market condition.
          </AppText>
          {button === null ? (
            <></>
          ) : (
            <AppButton title={"Proceed to Payment"} onPress={handlePayment} />
          )}
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
