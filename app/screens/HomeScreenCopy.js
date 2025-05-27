import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList, ScrollView, StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { PieChart } from "react-native-svg-charts";
import { G, Text as SvgText } from "react-native-svg";

import Screen from "../components/Screen";
import SummaryCard from "../components/SummaryCard";
import GoalCardPicker from "../components/GoalCardPicker";
import ActiveInvestmentComponent from "../components/ActiveInvestmentComponent";

import { sqlquery } from "../backendintegration/index";
import { portfolio_Query } from "../backendintegration/sqlQueries";
import { StoreContext } from "../../GlobalState";
import colors from "../config/colors";

// Helper to get colors
const getColor = (index) => {
  const colorPalette = [
    "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF",
    "#FF9F40", "#00A5A8", "#F7464A", "#46BFBD", "#FDB45C",
  ];
  return colorPalette[index % colorPalette.length];
};

// Donut Chart Component
const DonutChart = ({ data }) => {
  if (!data || data.length === 0 || data.every(d => Number(d.invested) === 0)) {
    return <Text style={{ textAlign: 'center', marginVertical: 20 }}>No data to display</Text>;
  }

  const total = data.reduce((sum, item) => sum + Number(item.invested), 0);

  const chartData = data.map((item, index) => ({
    key: `${item.title}-${index}`,
    value: Number(item.invested),
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
    <View style={{ alignItems: "center", marginVertical: 20 }}>
      <PieChart
        style={{ height: 200, width: 200 }}
        data={chartData}
        innerRadius="60%"
        outerRadius="90%"
        labelRadius={100}
      >
        <Labels />
      </PieChart>

      <View style={styles.legendContainer}>
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

// Draft goals
const draftGoalItems = [
  { goalName: "Create New", value: 0, image: require("../assets/others.png") },
  { goalName: "Education", value: 2, image: require("../assets/education.png") },
  { goalName: "Electronics", value: 3, image: require("../assets/electronics.png") },
  { goalName: "Car", value: 5, image: require("../assets/car.png") },
  { goalName: "Furniture", value: 6, image: require("../assets/furniture.png") },
  { goalName: "Wedding", value: 7, image: require("../assets/wedding.png") },
  { goalName: "Music", value: 8, image: require("../assets/music.png") },
  { goalName: "Jewelry", value: 9, image: require("../assets/jewelry.png") },
  { goalName: "Fitness", value: 10, image: require("../assets/fitness.png") },
  { goalName: "Others", value: 4, image: require("../assets/travel.png") },
];

// Sample chart data
const items = [
  {
    title: "ETF-Sovereign Bond",
    invested: 15600,
  },{
    title: "ETF-Commodities",
    invested: 5600,
  },
  {
    title: "ETF-Equities",
    invested: 15600,
  },
];

function HomeScreenCopy({ navigation }) {
  const contextData = useContext(StoreContext);
  const [usergoals, setuserGoals] = useState([]);
  const [userPortfolio, setUserPortfolio] = useState([]);
  const [draftGoals, setDraftGoals] = useState(draftGoalItems.slice(0, 1));

  useEffect(() => {
    (async () => {
      const storedGoals = await AsyncStorage.getItem("localgoals");
      let existingList = storedGoals ? JSON.parse(storedGoals) : [];
      setDraftGoals(draftGoals.concat(existingList));
    })();
  }, []);

  useEffect(() => {
    async function getUserPortfolios() {
      try {
        const resp = await sqlquery(portfolio_Query);
        if (resp) {
          setUserPortfolio(resp);
        }
      } catch (err) {
        console.error("Failed to fetch user portfolios", err);
      }
    }
    getUserPortfolios();
  }, [contextData.reload]);

  useEffect(() => {
    async function getUserGoals() {
      try {
        const sql = `
          SELECT ug.*, tg.*, 
            (SELECT SUM(amount) FROM PaymentSchedule 
             WHERE goal_id = ug.goalId AND due_date < CURRENT_DATE) 
             AS total_amount_due 
          FROM UserGoal ug 
          LEFT JOIN TemplateGoals tg ON ug.templateId = tg.goal_id;
        `;
        const resp = await sqlquery(sql);
        if (resp) {
          setuserGoals(resp);
        }
      } catch (err) {
        console.error("Failed to fetch user goals:", err);
      }
    }
    getUserGoals();
  }, [contextData.reload]);

  const handlePress = (asset) => {
    navigation.navigate("InvestmentScreen", { option: asset });
  };

  return (
    <Screen>
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.background}
      />
      <SummaryCard
        totalBalance={10000}
        processingBalance={450006}
        totalProfit={789}
        activeInvestment={10}
      />
      <View style={styles.container}>
        <ScrollView>
          <GoalCardPicker
            assets={draftGoals}
            label={"Start a New Plan or Resume Drafts"}
            onPress={handlePress}
          />

          <DonutChart data={items} />

          <FlatList
            data={usergoals}
            keyExtractor={(item) => item?.goalId?.toString()}
            renderItem={({ item }) => (
              <ActiveInvestmentComponent assets={item} />
            )}
          />
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    height: 300,
    width: "100%",
    zIndex: -1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 40,
  },
  legendContainer: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
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

export default HomeScreenCopy;
