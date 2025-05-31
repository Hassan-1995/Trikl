// DonutChart.js
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { PieChart } from "react-native-svg-charts";
import { G, Text as SvgText } from "react-native-svg";
import colors from "../config/colors";

// Helper to get colors
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

  const total = data.reduce((sum, item) => sum + Number(item.value), 0);// change accordingly
  const screenWidth = Dimensions.get("window").width;
  const chartSize = screenWidth * 0.45;

  const chartData = data.map((item, index) => ({
    key: `${item.title}-${index}`,
    value: Number(item.value),
    svg: { fill: getColor(index) },
    arc: { outerRadius: '100%', padAngle: 0 },
    title: item.title,
  }));

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { pieCentroid, data } = slice;
      const percentage = ((data.value / total) * 100).toFixed(1);
      return (
        <G key={`label-${index}`}>
          <SvgText
            x={pieCentroid[0]}
            y={pieCentroid[1]}
            fill="white"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize={12}
            fontWeight="bold"
          >
            {`${percentage}%`}
          </SvgText>
        </G>
      );
    });
  };

  return (
    <View style={styles.chartWithLegend}>
      <PieChart
        style={{ height: chartSize, width: chartSize }}
        data={chartData}
        innerRadius="60%"
        outerRadius="90%"
        labelRadius={chartSize / 2}
      >
        <Labels />
      </PieChart>

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
  chartWithLegend: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
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
