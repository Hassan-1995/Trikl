import React, { useEffect,useState,useContext } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import Screen from "../components/Screen";
import {StoreContext} from "../../GlobalState";
import {addGoal,qlquery, sqlquery} from "../backendintegration/index";
import FundInvestmentComponent from "../components/FundInvestmentComponent";
import colors from "../config/colors";
import AppText from "../components/AppText";

const items = [
  {
    title: "Create New",
    status: "On",
    goal: 24000,
    invested: 5000,
    value: 4,
    image: require("../assets/others.png"),
  },
  {
    title: "Travel",
    status: "Off",
    goal: 15000,
    invested: 8000,
    value: 1,
    image: require("../assets/travel.png"),
  },
  {
    title: "Education",
    status: "On",
    goal: 18000,
    invested: 10000,
    value: 2,
    image: require("../assets/education.png"),
  },
  {
    title: "Electronics",
    status: "On",
    goal: 20000,
    invested: 12000,
    value: 3,
    image: require("../assets/electronics.png"),
  },
  {
    title: "Car",
    status: "On",
    goal: 25000,
    invested: 15000,
    value: 5,
    image: require("../assets/car.png"),
  },
  {
    title: "Furniture",
    status: "Off",
    goal: 22000,
    invested: 11000,
    value: 6,
    image: require("../assets/furniture.png"),
  },
  {
    title: "Wedding",
    status: "On",
    goal: 30000,
    invested: 20000,
    value: 7,
    image: require("../assets/wedding.png"),
  },
  {
    title: "Music",
    status: "On",
    goal: 18000,
    invested: 10000,
    value: 8,
    image: require("../assets/music.png"),
  },
  {
    title: "Jewelry",
    status: "On",
    goal: 35000,
    invested: 18000,
    value: 9,
    image: require("../assets/jewelry.png"),
  },
  {
    title: "Fitness",
    status: "Off",
    goal: 20000,
    invested: 9000,
    value: 10,
    image: require("../assets/fitness.png"),
  },
];

function FundSelectionScreen({ navigation, route }) {
    const contextData = useContext(StoreContext);

    console.log("Context in funds Selection", contextData);
  console.log("Values From Suitability in funds Selection ", route?.params);
  const[riskProfile,setRiskProfile]=useState(route?.params?.riskProfile);
  const[tvm,setTvm]=useState(route?.params?.tvm);
  const[portfolios,setportfolios]=useState(items);

// first useeffect for sql query
  useEffect(() => {
    console.log("RISK Profile and TVM in FundSelection",riskProfile,tvm);
    console.log("ROUTES  in FundSelection",route?.params);

    async function  getfunds(riskprofile){
      sql="SELECT * FROM `Template_Portfolios`WHERE RiskProfileID ="+riskprofile;
      const response= await sqlquery(sql,setportfolios);
      console.log("SQL response in Fund selection",response,portfolios)
  
    }
  getfunds("6");
  },[]);
  const handleFundSelect = (item) => {
    console.log("Selected Fund in Fund Selection Screen", item);
    contextData.setFund(item);
     navigation.navigate("PlanSummary",{route:route?.params,fund:item});
   navigation.navigate("PlanSummary",{tvm:tempValue,fund:item});

  };

  // const handlePress = (id, value) => {
  //   console.log("ID number " + id + " is pressed which has value of ", value);
  //   // if (value == 4) {
  //   navigation.navigate("InvestmentScreen", {
  //     goalID: id,
  //     goalName: value,
  //   });
  //   // }
  // };
  return (
    <Screen>
      <AppText style={styles.header}>Your Funds</AppText>
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            data={portfolios}
            keyExtractor={(item) => item?.TemplateName?.toString()}
            renderItem={({ item }) => (
              <FundInvestmentComponent assets={item} tempValue={route?.params} handleFundSelect={handleFundSelect} />
            )}
          />
        </ScrollView>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    overflow: "hidden",
  },
  header: {
    fontSize: 24,
    fontWeight: "900",
    padding: 10,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 500,
  },
  scrollView: {
    paddingHorizontal: 10,
    // marginTop: 20,
  },
});

export default FundSelectionScreen;
