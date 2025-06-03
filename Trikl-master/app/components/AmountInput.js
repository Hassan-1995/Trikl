import React, { useState } from "react";

import { View, StyleSheet } from "react-native";

import AppText from "./AppText";
import AppTextInput from "./AppTextInput";

function AmountInput({
  title,
  subTitle,
  description,
  initialValue,
  onChangeText = "",
  onAmount,
}) {
  const handleText = (value) => {
    onAmount(value);
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText textAlign="center" style={styles.subTitle}>
        {subTitle}
      </AppText>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <AppText style={styles.currency}>PKR</AppText>
        <AppTextInput
          value={initialValue}
          width="70%"
          keyboardType="numeric"
          style={styles.input}
          onChangeText={(value) => {
            handleText(value);
          }}
        />
      </View>
      <AppText>{description}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    paddingHorizontal: 10,
  },
  currency: {
    fontSize: 20,
    fontWeight: "900",
    marginHorizontal: 0,
  },
  input: {
    fontSize: 20,
    flex: 1,
    fontWeight: "900",
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 50,
    alignSelf: "center",
  },
});

export default AmountInput;
