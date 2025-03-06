import React from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import colors from '../config/colors';


const balance = 1234.56; 
const transactions = [
  { id: '1', date: '2024-06-10', type: 'Deposit', amount: 1000.00 },
  { id: '2', date: '2024-06-09', type: 'Withdrawal', amount: 500.00 },
  { id: '3', date: '2024-06-08', type: 'Transfer', amount: 2000.00 },
];


function WalletScreen(props) {

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <AppText style={styles.transactionDate}>{item.date}</AppText>
      <AppText style={styles.transactionType}>{item.type}</AppText>
      <AppText style={styles.transactionAmount}>{`PKR ${item.amount.toFixed(0)}`}</AppText>
    </View>
  );

  return (
      <Screen>
        <View style={styles.container}>
        <View style={styles.balanceSection}>
            <AppText style={styles.balanceTitle}>Current Balance</AppText>
            <AppText style={styles.balanceAmount}>{`PKR ${balance.toFixed(2)}`}</AppText>
        </View>

        <TouchableOpacity style={styles.button}>
            <AppText style={styles.buttonText}>Add Funds</AppText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <AppText style={styles.buttonText}>Withdraw Funds</AppText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <AppText style={styles.buttonText}>Transfer Funds</AppText>
        </TouchableOpacity>

        <View style={styles.transactionHistory}>
            <AppText style={styles.sectionTitle}>Transaction History <AppText style={styles.sectionSubTitle}>(For last seven days)</AppText></AppText>
            <FlatList
                data={transactions}
                keyExtractor={(item) => item.id}
                renderItem={renderTransaction}
            />
        </View>
        </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  balanceSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  balanceTitle: {
    fontSize: 18,
    color: colors.secondary,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary
  },
  button: {
    backgroundColor: colors.light,
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionHistory: {
    marginTop: 20,
  },
  sectionSubTitle:{
      color: colors.secondary,
      fontSize: 15,
      marginBottom: 10,
  },
  sectionTitle: {
      color: colors.primary,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  transactionDate: {
    fontSize: 14,
    color: 'gray',
  },
  transactionType: {
    fontSize: 14,
    color: 'gray',
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default WalletScreen;
