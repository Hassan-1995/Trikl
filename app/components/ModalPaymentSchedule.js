import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

const PaymentModal = ({ onClose }) => {
  const [amount, setAmount] = useState("");

  const paymentSchedule = [
    { id: "1", date: "May 15", amount: "$100.00" },
    { id: "2", date: "Jun 15", amount: "$100.00" },
    { id: "3", date: "Jul 15", amount: "$100.00" },
    { id: "4", date: "Aug 15", amount: "$50.00" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Schedule</Text>

      {/* Payment Schedule Table */}
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

      {/* Pay Button */}
      <TouchableOpacity style={styles.button} onPress={() => alert("Payment Initiated")}>
        <Text style={styles.buttonText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  table: {
    backgroundColor: "#174EA6",
    borderRadius: 10,
    padding: 10,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  rowLight: {
    backgroundColor: "#174EA6",
  },
  rowDark: {
    backgroundColor: "#0E3C78",
  },
  cell: {
    fontSize: 16,
    color: "#fff",
  },
  label: {
    fontSize: 18,
    color: "#fff",
    marginTop: 20,
  },
  input: {
    backgroundColor: "#0E3C78",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  button: {
    backgroundColor: "#1E63EC",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default PaymentModal;
