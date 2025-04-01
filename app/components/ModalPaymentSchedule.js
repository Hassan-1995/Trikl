import {React,  useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
//import Modal from 'react-native-modal';

const RepaymentModal = ({ isVisible, onClose }) => {
  if (!item) return null;
  const [amount, setAmount] = useState('0');

  const repaymentSchedule = [
    { date: 'May 1, 2024', amount: '$250.00' },
    { date: 'Jun 1, 2024', amount: '$250.00' },
    { date: 'Jul 1, 2024', amount: '$250.00' },
    { date: 'Aug 1, 2024', amount: '$250.00' },
  ];

  return (
    <View style={{ backgroundColor: 'dark blue', padding: 20, borderRadius: 10, width: 300 }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Repayment Schedule</Text>
    <FlatList
      data={repaymentSchedule}
      keyExtractor={(item) => item.date}
      renderItem={({ item }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
          <Text>{item.date}</Text>
          <Text>{item.amount}</Text>
        </View>
      )}
    />
    <Text style={{ marginTop: 10 }}>Amount</Text>
    <TextInput
      style={{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
      }}
      keyboardType="numeric"
      value={amount}
      onChangeText={setAmount}
    />
    <TouchableOpacity
      style={{ backgroundColor: 'blue', padding: 15, borderRadius: 5, alignItems: 'center' }}
      onPress={() =>onClose(amount) }
    >
      <Text style={{ color: 'white', fontWeight: 'bold' }}>Pay</Text>
    </TouchableOpacity>
  </View>
  );
};

export default RepaymentModal;
