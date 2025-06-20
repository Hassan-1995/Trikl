import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PieChart from 'react-native-pie-chart';

const DonutChart = () => {
  const widthAndHeight = 160;

  const chartitems = [
    { title: "ETF-Sovereign Bond", value: 15600 },
    { title: "Commodities", value: 15600 },
    { title: "ETF-Equities", value: 15600 },
  ];

  const total = chartitems.reduce((sum, item) => sum + item.value, 0);

  // Blue color palette
  const colors = ['#4A90E2', '#5DADE2', '#85C1E9', '#AED6F1', '#D6EAF8'];

  const series = chartitems.map((item, index) => ({
    value: item.value,
    color: colors[index % colors.length],
    label: {
      text: `${((item.value / total) * 100).toFixed(1)}%`,
    },
  }));

  return (
    <View style={styles.container}>
      <PieChart
        widthAndHeight={widthAndHeight}
        series={series}
        cover={{ radius: 0.5, color: '#fff' }}
      />
      <View style={styles.legendContainer}>
        {chartitems.map((item, i) => (
          <View style={styles.legendItem} key={i}>
            <View style={[styles.legendColorBox, { backgroundColor: colors[i % colors.length] }]} />
            <Text style={styles.legendText}>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  legendContainer: {
    marginLeft: 15,
    justifyContent: 'center',
    flexShrink: 1,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    flexWrap: 'wrap',
  },
  legendColorBox: {
    width: 10,
    height: 10,
    marginRight: 6,
    borderRadius: 2,
  },
  legendText: {
    fontSize: 12,
    color: '#333',
    flexShrink: 1,
  },
});

export default DonutChart;
