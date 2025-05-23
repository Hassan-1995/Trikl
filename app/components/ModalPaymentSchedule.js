import { useState, React, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import { DataTable } from "react-native-paper";
import AppButton from "./AppButton";
import colors from "../config/colors";

const { width, height } = Dimensions.get("window");

const paymentSchedule = [
  { id: "1", date: "May 15", amount: "$100.00" },
  { id: "2", date: "Jun 15", amount: "$100.00" },
  { id: "3", date: "Jul 15", amount: "$100.00" },
  { id: "4", date: "Aug 15", amount: "$50.00" },
  { id: "5", date: "Sep 15", amount: "$100.00" },
  { id: "6", date: "Oct 15", amount: "$100.00" },
];

function PaymentModal({ item, allPayments, onClose, handleInvestmentRequest }) {
  console.log("in Payment Modal", item, allPayments);
  const [amount, setAmount] = useState(item?.totalAmount);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const resp = filterschedule(item, allPayments);
    console.log("filtered in useeffect", resp);
    setSchedule(resp);
  }, []);

  const handePay = () => {
    console.log("In hayandle P", amount, item);
    handleInvestmentRequest(item, amount);
  };
//
  return (
    <View style={styles.container}>
      <DataTable style={styles.table}>
        <DataTable.Header>
          <DataTable.Title style={styles.headerText}>Due Date</DataTable.Title>
          <DataTable.Title style={styles.headerText}>Amount</DataTable.Title>
        </DataTable.Header>

        <View style={styles.scrollContainer}>
          <ScrollView>
            {schedule.map((item, index) => (
              <DataTable.Row
                key={item.id}
                style={[index % 2 === 0 ? styles.rowLight : styles.rowDark]}
              >
                <DataTable.Cell style={styles.cell}>{(new Date(item?.due_date)).toDateString()}</DataTable.Cell>
                <DataTable.Cell style={styles.cell}>{item.amount}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </ScrollView>
        </View>
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

      <AppButton title={"Submit Request"} onPress={handePay} />
    </View>
  );
}

const filterschedule = (grouped, allPayments) => {
  const pmtschedule = allPayments.filter((pmt) => pmt.goal_id == grouped.goal_id);
  console.log("filteredSchedule", grouped, pmtschedule);
  return pmtschedule;
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  table: {
    marginBottom: 16,
  },
  scrollContainer: {
    maxHeight: 48 * 5, // 5 rows * approx. 48px each
  },
  rowLight: {
    backgroundColor: "#f2f2f2",
  },
  rowDark: {
    backgroundColor: "#ffffff",
  },
  headerText: {
    fontWeight: "bold",
  },
  cell: {
    justifyContent: "flex-start",
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
});

export default PaymentModal;
