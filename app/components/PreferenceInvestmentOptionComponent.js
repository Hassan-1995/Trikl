import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function PreferenceInvestmentOptionComponent({
  onChange,
  preSelectedId = null,
}) {
  const [selectedButton, setSelectedButton] = useState(preSelectedId);

  useEffect(() => {
    // If preSelectedId changes, update the selected button
    setSelectedButton(preSelectedId);
  }, [preSelectedId]);

  const handlePress = (buttonId, buttonValue) => {
    setSelectedButton(buttonId);
    console.log("Button value: ",buttonId, buttonValue);
    onChange(buttonId, buttonValue);
  };

  const options = [
    { id: 12, label: "Monthly" },
    { id: 4, label: "Quarterly" },
    { id: 2, label: "Semi-Annual" },
    { id: 1, label: "Annual" },
  ];

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.button,
            selectedButton === option.id && styles.selectedButton,
          ]}
          onPress={() => handlePress(option.id, option.label)}
        >
          <AppText style={selectedButton === option.id && styles.selectedText}>
            {option.label}
          </AppText>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    marginRight: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light,
    borderRadius: 5,
  },
  container: {
    flexDirection: "row",
    marginVertical: 30,
  },
  selectedButton: {
    backgroundColor: colors.primary,
  },
  selectedText: {
    color: "white",
    fontWeight: "900",
  },
});

export default PreferenceInvestmentOptionComponent;
