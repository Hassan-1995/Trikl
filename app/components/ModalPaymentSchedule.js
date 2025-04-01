import {useState,React} from "react";

import { View, StyleSheet, Image, Dimensions, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import { DataTable, Provider as PaperProvider } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import { Svg, Circle } from "react-native-svg";
import AppText from "./AppText";
import colors from "../config/colors";
import AppButton from "./AppButton";
const { width, height } = Dimensions.get("window");

function ModalPaymenSchedule({ item, tempValue,onClose }) {
  console.log("Item in Payment Schedule Modal",item);
  const [amount, setAmount] = useState("");
  const navigation = useNavigation();

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const goal = item.goal || 1;
  const invested = item.invested || 0;
  const investedPercentage = Math.min((invested / goal) * 100, 100);
  const strokeDashoffset = (1 - investedPercentage / 100) * circumference;

  const handlePress = () => {
    console.log("Fund Selected",tempValue);
    navigation.navigate("PlanSummary",{tvm:tempValue,fund:item});
  };

  return (
    <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Payment Details</Text>
          
          <PaperProvider>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Transaction</DataTable.Title>
                <DataTable.Title>Units</DataTable.Title>
                <DataTable.Title>Price</DataTable.Title>
                <DataTable.Title>Total</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row style={{ backgroundColor: '#E0E0E0' }}> 
                <DataTable.Cell>0305 - 2000</DataTable.Cell>
                <DataTable.Cell>1100</DataTable.Cell>
                <DataTable.Cell>$1000</DataTable.Cell>
                <DataTable.Cell>$330.00</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell>0309 - 2000</DataTable.Cell>
                <DataTable.Cell>177.0</DataTable.Cell>
                <DataTable.Cell>$1000</DataTable.Cell>
                <DataTable.Cell>$550.00</DataTable.Cell>
              </DataTable.Row>
            </DataTable>
          </PaperProvider>
          
          <TextInput
            style={styles.input}
            placeholder="Pay Now ($)"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Pay Now</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#12203F",
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
    marginTop: 10,
  },
  button: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});

export default ModalPaymenSchedule;
