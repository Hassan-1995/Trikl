import React from "react";

import { View, StyleSheet, Image, Dimensions } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Svg, Circle } from "react-native-svg";
import AppText from "./AppText";
import colors from "../config/colors";
import AppButton from "./AppButton";
const { width, height } = Dimensions.get("window");

function RepaymentModal({ item, tempValue }) {
  const navigation = useNavigation();

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const goal = item.goal || 1;
  const invested = item.invested || 0;
  const investedPercentage = Math.min((invested / goal) * 100, 100);
  const strokeDashoffset = (1 - investedPercentage / 100) * circumference;

  const handlePress = () => {
    console.log("Fund Selected",tempValue);
    navigation.navigate("PlanSummary",{tvm:tempValue,fund:item});
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          width: width,
          alignSelf: "center",
        }}
      >
        <Svg height="150" width="150" viewBox="0 0 120 120">
          <Circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#ddd"
            strokeWidth="15"
            fill="none"
          />
          <Circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#4caf50"
            strokeWidth="15"
            fill="none"
            strokeDasharray={`${circumference}, ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
          />
        </Svg>

        <View
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: [{ translateX: -20 }, { translateY: -10 }], // Adjust for centering
          }}
        >
          <AppText
            style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
          >
            {((item.invested / item.goal) * 100).toFixed(1)}%
          </AppText>
        </View>
      </View>

      <View style={{ marginTop: 150 }}>
        <AppText style={[styles.subHeading, { paddingHorizontal: 10 }]}>
          I am currently {item?.status?.toLowerCase()} track to achieve my desired
          goal.
        </AppText>
        <View style={styles.title}>
          <AppText style={[styles.heading, { color: "white" }]}>
            {item.title}
          </AppText>
        </View>
        <View style={styles.goal}>
          <View>
            <AppText style={styles.heading}>Target Value</AppText>
            <AppText style={styles.description}>
              I will due to pay date.
            </AppText>
          </View>
          <View>
            <AppText style={styles.subHeading}>
              Rs {item.goal?.toLocaleString()}
            </AppText>
          </View>
        </View>
        <View style={styles.goal}>
          <View>
            <AppText style={styles.heading}>Invested Value</AppText>
            <AppText style={styles.description}>
              I paid this amount to date.
            </AppText>
          </View>
          <View>
            <AppText style={styles.subHeading}>
              {/* Rs {item.invested?.toLocaleString()} */}
            </AppText>
          </View>
        </View>
        <View style={styles.goal}>
          <View>
            <AppText style={styles.heading}>Due Value</AppText>
            <AppText style={styles.description}>
              I have to pay remaing balance.
            </AppText>
          </View>
          <View>
            <AppText style={styles.subHeading}>
              {/* Rs {Math.abs(item.invested - item.goal).toLocaleString()} */}
            </AppText>
          </View>
        </View>
        <AppButton title={"Move Forward"} onPress={handlePress} />

        {/* <Image source={item.image} style={styles.image} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    backgroundColor: colors.secondary,
    margin: 15,
    padding: 15,
    borderRadius: 15,
    color: colors.white,
  },
  goal: {
    flexDirection: "row", // Align items in a row
    justifyContent: "space-between", // Space between elements
    padding: 10, // Add padding for better spacing
    marginHorizontal: 10, // Add margin to avoid stretching
    borderBottomWidth: 2,
    borderColor: colors.tertiary,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.secondary,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    color: "#777",
    textAlign: "justify",
    lineHeight: 20,
  },
});

export default RepaymentModal;
