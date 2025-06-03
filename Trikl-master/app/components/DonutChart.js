// DonutChart.js
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Pie from "react-native-pie";
import colors from "../config/colors";

const screenWidth = Dimensions.get("window").width;
const chartSize = screenWidth * 0.45;

const getColor = (index) => {
  const colorPalette = [
    "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF",
    "#FF9F40", "#00A5A8", "#F7464A", "#46BFBD", "#FDB45C",
  ];
  return colorPalette[index % colorPalette.length];
};

const DonutChart = ({ data }) => {
  if (!data || data.length === 0 || data.every(d => Number(d.value) === 0)) {
    return <Text style={{ textAlign: 'center', marginVertical: 20 }}>____</Text>;
  }

  const total = data.reduce((sum, item) => sum + Number(item.value), 0);

  const chartData = data.map((item, index) => ({
    percentage: (Number(item.value) / total) * 100,
    color: getColor(index),
  }));

  return (
    <View style={styles.container}>
      <View style={{ width: chartSize, height: chartSize }}>
        <Pie
          radius={chartSize / 2.5}
          innerRadius={chartSize / 5}
          sections={chartData}
          dividerSize={1}
          strokeCap={"butt"}
        />
        <View style={styles.gauge}>
          <Text style={styles.total}>{total}</Text>
        </View>
      </View>

      <View style={styles.legendContainerRight}>
        {data.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: getColor(index) }]} />
            <Text style={styles.legendLabel}>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  gauge: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  total: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.dark,
  },
  legendContainerRight: {
    marginLeft: 20,
    justifyContent: "center",
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  legendColor: {
    width: 12,
    height: 12,
    marginRight: 5,
    borderRadius: 2,
  },
  legendLabel: {
    fontSize: 12,
    color: colors.dark,
  },
});

export default DonutChart;
