import {useState,React} from "react";

import { View,SafeAreaView,ScrollView, StyleSheet, Image, Dimensions,TextInput,TouchableOpacity } from "react-native";
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component'; // Import Table components

import { useNavigation } from "@react-navigation/native";

import { Svg, Circle } from "react-native-svg";
import AppText from "./AppText";
import colors from "../config/colors";
import AppButton from "./AppButton";
const { width, height } = Dimensions.get("window");

const tableHead = ['Date', 'Amount'];
const tableData = [
    ['2024-07-28', '$100.00'],
    ['2024-08-28', '$100.00'],
    ['2024-09-28', '$100.00'],
    ['2024-10-28', '$100.00'], //Added more data, so it scrolls.
    ['2024-11-28', '$100.00'],
    ['2024-12-28', '$100.00'],
];

function RepaymentModal({ item, tempValue,onClose }) {
  const [amount, setAmount] = useState('300.00');
  // const [fontsLoaded] = useFonts({
  //     Nunito_600SemiBold,
  //     Nunito_700Bold,
  // });

  // if (!fontsLoaded) {
  //     return null; // Or a loading indicator
  // }

  const navigation = useNavigation();

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const goal = item.goal || 1;
  const invested = item.invested || 0;
  const investedPercentage = Math.min((invested / goal) * 100, 100);
  const strokeDashoffset = (1 - investedPercentage / 100) * circumference;

  const handlePress = () => {
    console.log("Pay Pressed",tempValue);
    navigation.navigate("PlanSummary",{tvm:tempValue,fund:item});
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
                <AppText style={styles.modalTitle}>Payment Details</AppText>
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <AppText style={styles.closeButtonText}>&times;</AppText>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.paymentScheduleContainer}>
                <AppText style={styles.scheduleHeader}>Payment Schedule</AppText>
                <Table borderStyle={styles.tableBorder}>
                    <Row data={tableHead} style={styles.tableHead} textStyle={styles.tableHeadText} />
                    <TableWrapper>
                        <Rows data={tableData} textStyle={styles.tableDataText} />
                    </TableWrapper>
                </Table>
            </ScrollView>

            <View style={styles.inputGroup}>
                <AppText style={styles.inputLabel}>Amount to Pay</AppText>
                <TextInput
                    style={styles.input}
                    placeholder="Enter amount"
                    value={amount}
                    onChangeText={setAmount}
                    keyboardType="numeric"
                />
            </View>

            <TouchableOpacity style={styles.payButton} onPress={handlePress}>
                <AppText style={styles.payButtonText}>Pay Now</AppText>
            </TouchableOpacity>
        </View>
    </View>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      justifyContent: 'center',
      alignItems: 'center',
  },
  modalContent: {
      backgroundColor: '#f0f9ff', // Light blue
      borderRadius: 16,
      padding: 20,
      width: '90%',
      maxWidth: 400,
      maxHeight: height * 0.8, // Limit height and enable scrolling
      position: 'relative',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
  },
  modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#e0f2fe', // Lighter blue border
  },
  modalTitle: {
      fontSize: 20,
      fontFamily: 'Nunito_700Bold',
      color: '#0369a1', // Darker blue
      margin: 0,
  },
  closeButton: {
      position: 'relative',
      padding: 0,
      margin: 0,
  },
  closeButtonText: {
      color: '#4b5563',
      fontSize: 24,
      fontWeight: 'bold',
  },
  paymentScheduleContainer: {
      marginBottom: 20,
      maxHeight: height * 0.3, // Limit the height of the table
  },
  scheduleHeader: {
      fontSize: 16,
      fontFamily: 'Nunito_600SemiBold',
      color: '#0369a1', // Darker blue
      marginBottom: 10,
  },
  tableBorder: {
      borderWidth: 1,
      borderColor: '#e0f2fe', // Lighter blue border
      borderRadius: 8,
      overflow: 'hidden', //Clip the border.
  },
  tableHead: {
      backgroundColor: '#e0f7fa', // Very light blue
      height: 40,
  },
  tableHeadText: {
      fontSize: 14,
      fontFamily: 'Nunito_600SemiBold',
      color: '#0369a1', // Dark blue
      textAlign: 'left',
      paddingLeft: 5,
  },
  tableDataText: {
      fontSize: 14,
      color: '#1f2937',
      paddingLeft: 5,
  },
  inputGroup: {
      marginBottom: 20,
  },
  inputLabel: {
      display: 'block',
      marginBottom: 8,
      fontSize: 16,
      fontFamily: 'Nunito_600SemiBold',
      color: '#0369a1', // Darker blue
  },
  input: {
      width: '100%',
      padding: 10,
      borderWidth: 1,
      borderColor: '#67e8f9', // Light blue border
      borderRadius: 8,
      fontSize: 16,
      color: '#1f2937',
      backgroundColor: '#fff',
  },
  payButton: {
      backgroundColor: '#3b82f6', // Tailwind's blue-500
      color: 'white',
      paddingVertical: 12,
      borderRadius: 8,
      fontSize: 18,
      fontFamily: 'Nunito_600SemiBold',
      cursor: 'pointer',
      width: '100%',
      alignItems: 'center',
  },
  payButtonText: {
      color: 'white',
      fontSize: 18,
      fontFamily: 'Nunito_600SemiBold'
  }
});

export default RepaymentModal;
