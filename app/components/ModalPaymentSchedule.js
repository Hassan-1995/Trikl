import {useState,React,useEffect} from "react";

import { View, StyleSheet, Image, Dimensions } from "react-native";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { DataTable } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import { Svg, Circle } from "react-native-svg";
import AppText from "./AppText";
import colors from "../config/colors";
import AppButton from "./AppButton";
const { width, height } = Dimensions.get("window");


  const paymentSchedule = [
    { id: "1", date: "May 15", amount: "$100.00" },
    { id: "2", date: "Jun 15", amount: "$100.00" },
    { id: "3", date: "Jul 15", amount: "$100.00" },
    { id: "4", date: "Aug 15", amount: "$50.00" },
  ];

function PaymentModal({ item,allPayments, onClose,handleInvestmentRequest }){
  console.log("in Payment Modal",item,allPayments)
  const [amount, setAmount] = useState(item?.totalAmount);
  const [schedule, setSchedule] = useState(paymentSchedule);
  
  // first useeffect for Payment Modal
    useEffect(() => {
    const resp=  filterschedule(item,allPayments);
    console.log("filtered in useeffect",resp);
    setSchedule(resp);
      },[]);






const handePay=()=>{
  console.log("In handle Pay",amount,item)
  handleInvestmentRequest(item,amount);
}




  const handlePress = () => {
    console.log("Fund Selected",tempValue);
   // navigation.navigate("PlanSummary",{tvm:tempValue,fund:item});
  };

  return (
    <View style={styles.container}>
 <DataTable style={styles.table}>
        <DataTable.Header>
          <DataTable.Title style={styles.headerText}>Due Date</DataTable.Title>
          <DataTable.Title style={styles.headerText}>Amount</DataTable.Title>
        </DataTable.Header>

        {schedule.map((item, index) => (
          <DataTable.Row key={item.id} style={[index % 2 === 0 ? styles.rowLight : styles.rowDark]}>
            <DataTable.Cell style={styles.cell}>{item.date}</DataTable.Cell>
            <DataTable.Cell style={styles.cell}>{item.amount}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>

       
      
      
           {/* Amount Input */}
           <Text style={styles.label}>Amount</Text>
<TextInput
  style={styles.input}
  placeholder="$ Enter amount"
  placeholderTextColor="#888"
  keyboardType="numeric"
  value={amount}
  onChangeText={setAmount}
/>
   
     
        <AppButton title={"Move Forward"} onPress={handePay} />

        {/* <Image source={item.image} style={styles.image} /> */}
      </View>

  );
}
const filterschedule=(grouped,allPayments)=>{
 const  pmtschedule= allPayments.filter(pmt=>pmt.goal_id==grouped.goal_id);
console.log("filteredSchedule",grouped,pmtschedule);
return pmtschedule;
}

const styles = StyleSheet.create({
  container: {},
  title: {
    backgroundColor: colors.secondary,
    margin: 15,
    padding: 15,
    borderRadius: 15,
    color: colors.white,
  },
  goal: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginHorizontal: 10,
    borderBottomWidth: 2,
    borderColor: colors.tertiary,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.secondary,
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    color: "#777",
    textAlign: "justify",
    lineHeight: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 8,
    color: colors.primary,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    color: "#000",
    marginBottom: 20,
  },
  rowLight: {
    backgroundColor: "#f2f2f2", // Light grey for alternate rows
  },
  rowDark: {
    backgroundColor: "#ffffff", // White for alternate rows
  },
  headerText: {
    fontWeight: "bold",
  },
  cell: {
    justifyContent: "flex-start",
  },
});

export default PaymentModal ;
