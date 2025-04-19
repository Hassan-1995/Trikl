import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path, G, Text as SVGText } from 'react-native-svg';

const ModalFundSelectionScreenComponent = ({handleFundSelect,item,tempValue,setModal}) => {
  // Sample data for the pie chart
  const pieData = [
    { value: 40, color: '#F44336', label: 'Fund A' },
    { value: 20, color: '#9C27B0', label: 'Fund B' },
    { value: 30, color: '#FFC107', label: 'Fund C' },
    { value: 10, color: '#3F51B5', label: 'Fund D' },
  ];

  const total = pieData.reduce((acc, curr) => acc + curr.value, 0);
  let startAngle = 0;
  const radius = 80;
  const innerRadius = 60;

  // Function to calculate the SVG path for a pie slice
  const getPath = (value, radius, innerRadius, startAngle) => {
    const endAngle = startAngle + (value / total) * 360;
    const largeArcFlag = value / total > 0.5 ? 1 : 0;

    const startX1 = radius * Math.cos((startAngle * Math.PI) / 180);
    const startY1 = radius * Math.sin((startAngle * Math.PI) / 180);
    const endX1 = radius * Math.cos((endAngle * Math.PI) / 180);
    const endY1 = radius * Math.sin((endAngle * Math.PI) / 180);

    const startX2 = innerRadius * Math.cos((startAngle * Math.PI) / 180);
    const startY2 = innerRadius * Math.sin((startAngle * Math.PI) / 180);
    const endX2 = innerRadius * Math.cos((endAngle * Math.PI) / 180);
    const endY2 = innerRadius * Math.sin((endAngle * Math.PI) / 180);

    const path = `
      M ${startX1} ${startY1}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX1} ${endY1}
      L ${endX2} ${endY2}
      A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${startX2} ${startY2}
      Z
    `;
    return { path, endAngle };
  };

  const getLabelPosition = (radius, innerRadius, angle) => {
    const midRadius = (radius + innerRadius) / 2;
    const x = midRadius * Math.cos((angle * Math.PI) / 180);
    const y = midRadius * Math.sin((angle * Math.PI) / 180);
    return { x, y };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Portfolio Allocation</Text>
      <View style={styles.chartAndLegend}>
        <Svg width={200} height={200}>
          <G transform={`translate(100, 100)`}>
            {pieData.map((item, index) => {
              const { path, endAngle } = getPath(item.value, radius, innerRadius, startAngle);
              const midAngle = startAngle + (item.value / total) * 180;
              const { x, y } = getLabelPosition(radius, innerRadius, midAngle);
              startAngle = endAngle;
              const percentage = ((item.value / total) * 100).toFixed(1); // Calculate percentage
              return (
                <G key={index}>
                  <Path d={path} fill={item.color} />
                  <SVGText
                    x={x}
                    y={y}
                    fontSize="10"
                    fill="#000"
                    textAnchor={x > 0 ? 'start' : 'end'}
                    alignmentBaseline="middle"
                  >
                    {percentage}%
                  </SVGText>
                </G>
              );
            })}
          </G>
        </Svg>
        <View style={styles.legend}>
          {pieData.map((item, index) => (
            <View key={index} style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: item.color, width: 10, height: 10, borderRadius: 5 }]} />
              <Text style={[styles.legendLabel, { fontSize: 12 }]}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>
      <Text style={styles.description}>
        {`Lisinyou alle fropaard buttesd writh
        nofesrs wou thalliration.`}
      </Text>
      <TouchableOpacity style={styles.selectButton}>
        <Text style={styles.selectButtonText}>Select of</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  selectButton: {
    backgroundColor: '#FF9800',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignSelf: 'center',
  },
  selectButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chartAndLegend: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  legend: {
    marginLeft: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  legendColor: {
    width: 10, // Even smaller
    height: 10, // Even smaller
    borderRadius: 5, // Even smaller
    marginRight: 5,
  },
  legendLabel: {
    fontSize: 12,
    color: '#333',
  },
});

export default ModalFundSelectionScreenComponent;
