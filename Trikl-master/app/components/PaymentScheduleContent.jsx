import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

const PaymentScheduleContent = ({ onPay }) => {
  const data = [
    { date: '05/01/2024', amount: '$400' },
    { date: '06/01/2024', amount: '$400' },
    { date: '07/01/2024', amount: '$400' },
  ];

  return (
    <View style={styles.modalContainer}>
      <Text style={styles.title}>Payment Schedule</Text>
      <Text style={styles.subtitle}>Investment Plan</Text>
      
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Date</Text>
        <Text style={styles.headerText}>Payment</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.rowText}>{item.date}</Text>
            <Text style={styles.rowText}>{item.amount}</Text>
          </View>
        )}
      />

      <TextInput
        style={styles.input}
        placeholder="$"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.payButton} onPress={onPay}>
        <Text style={styles.payText}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    width: '85%',
    backgroundColor: '#e8f0fc',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#3478f6',
    width: '100%',
    textAlign: 'center',
    paddingVertical: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 10,
    color: '#265a9b',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#d1e4f7',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  headerText: {
    fontWeight: 'bold',
    color: '#265a9b',
  },
  rowText: {
    fontSize: 16,
    color: '#265a9b',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#f3f9ff',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#c9e0f5',
  },
  payButton: {
    marginTop: 20,
    backgroundColor: '#3478f6',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 30,
    width: '100%',
    alignItems: 'center',
  },
  payText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PaymentScheduleContent;
