import React, { useState } from "react";

import { FlatList, StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import GoalCard from "./GoalCard";

function GoalCardPicker({
  assets,
  horizontal = true,
  numberOfColumns = 0,
  label = "Label is Missing",
  onPress,
}) {
  const [selectedBox, setSelectedBox] = useState(null);

  const handlePress = (id, value) => {
    onPress(id, value);
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.header}>
        {label.split("\n ").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index !== label.split("\n").length - 1 && <Text>{"\n"}</Text>}
          </React.Fragment>
        ))}
      </AppText>

      <View style={{ alignItems: "center" }}>
        <FlatList
          horizontal={horizontal}
          numColumns={numberOfColumns}
          data={assets}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <GoalCard
              assets={item}
              selectedBox={selectedBox}
              setSelectedBox={setSelectedBox}
              onPress={handlePress}
            />
          )}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  header: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: "semibold",
    paddingBottom: 10,
    paddingLeft: 10,
  },
});

export default GoalCardPicker;
