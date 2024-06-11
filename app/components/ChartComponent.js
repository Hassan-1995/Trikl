import React from 'react';
import { PieChart } from "react-native-chart-kit";

import { View, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


  const chartColor = [
    '#104b7d', '#1b598b', '#266799', '#3175a7', '#3c81b5',
    '#478ec3', '#529ad1', '#5da6df', '#68b2ed', '#73befb',
  ];


function ChartComponent({ assets }) {
    
    const data = assets.map((item, index) => ({
        name: item.title,
        percentage: (item.invested / item.goal) * 100,
        color: chartColor[index % chartColor.length], // Use the color from the colors array
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
    }));
    data.sort((a, b) => b.percentage - a.percentage);
    const topFiveItems = data.slice(0, 5);
    
    
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 0.7) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.8,
        useShadowColorFromDataset: false // optional
    };

    return (
        <View style={styles.container}>
            <PieChart
                data={topFiveItems}
                width={width}
                height={200}
                chartConfig={chartConfig}
                accessor={"percentage"}
                backgroundColor={"transparent"}
                paddingLeft={"0"}
                center={[0, 0]}
                // absolute
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        // justifyContent: 'center',
        // backgroundColor: 'blue',
    },
});

export default ChartComponent;