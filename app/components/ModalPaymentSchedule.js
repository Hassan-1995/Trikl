import {useState,React} from "react";

import { View, StyleSheet, Image, Dimensions } from "react-native";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { DataTable } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import { Svg, Circle } from "react-native-svg";
import AppText from "./AppText";
import colors from "../config/colors";
import AppButton from "./AppButton";
const { width, height } = Dimensions.get("window");

function PaymentModal({ item,allPayments, onClose }){
  console.log("in Payment Modal",item,allPayments)
  const [amount, setAmount] = useState(item?.totalAmount);
  const [schedule, setSchedule] = useState([]);
  const paymentSchedule = [
    { id: "1", date: "May 15", amount: "$100.00" },
    { id: "2", date: "Jun 15", amount: "$100.00" },
    { id: "3", date: "Jul 15", amount: "$100.00" },
    { id: "4", date: "Aug 15", amount: "$50.00" },
  ];





const handePay=()=>{
  console.log("In handle Pay",amount,item)
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

        {paymentSchedule.map((item, index) => (
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
        placeholder="$"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
   
     
        <AppButton title={"Move Forward"} onPress={handePay} />

        {/* <Image source={item.image} style={styles.image} /> */}
      </View>
  
  );
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
    flexDirection: "row", // Align items in a row
    justifyContent: "space-between", // Space between elements
    padding: 10, // Add padding for better spacing
    marginHorizontal: 10, // Add margin to avoid stretching
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
});

export default PaymentModal ;
