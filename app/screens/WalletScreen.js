import React from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import Icon from "../components/Icon";

const balance = 1234.56;
const transactions = [
  { id: "1", date: "2024-06-10", type: "Deposit", amount: 1000.0 },
  { id: "2", date: "2024-06-09", type: "Withdrawal", amount: 500.0 },
  { id: "3", date: "2024-06-08", type: "Transfer", amount: 2000.0 },
];

function WalletScreen({ props, route }) {
  // console.log("WALLET SCREEN: ", route.params);

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: 50, height: 50, borderRadius: 25, marginRight: 10 }}
      />
      <View
        style={{
          // width: "100%",
          flexGrow: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <AppText style={styles.transactionTitle}>Title</AppText>
          <AppText style={styles.transactionTitle}>Sub-Title</AppText>
        </View>
        <TouchableOpacity style={styles.button}>
          <AppText>Pay View</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.balanceSection}>
          <AppText style={styles.balanceTitle}>WALLET</AppText>

          <View style={styles.box}>
            <View style={styles.amount}>
              <View style={styles.currencyBox}>
                <AppText
                  style={{
                    textAlign: "center",
                    fontSize: 25,
                    color: colors.secondary,
                  }}
                >
                  Rs
                </AppText>
              </View>
              <AppText style={styles.balanceAmount}>
                {`${balance.toFixed(2)}`}
              </AppText>
            </View>
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity style={styles.fundsButton}>
              <AppText
                style={{
                  color: colors.primary,
                  fontWeight: "medium",
                  fontSize: 16,
                }}
              >
                Add Funds
              </AppText>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Icon
                  name={"plus"}
                  iconColor={colors.tertiary}
                  backgroundColor={colors.primary}
                  size={30}
                />
                <AppText>Hello</AppText>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.fundsButton}>
              <AppText
                style={{
                  color: colors.primary,
                  fontWeight: "medium",
                  fontSize: 16,
                }}
              >
                Withdraw Funds
              </AppText>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Icon
                  name={"plus"}
                  iconColor={colors.tertiary}
                  backgroundColor={colors.primary}
                  size={30}
                />
                <AppText>Hello</AppText>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.transactionHistory}>
          <AppText style={styles.sectionTitle}>
            Transaction History{" "}
            <AppText style={styles.sectionSubTitle}>
              (For last seven days)
            </AppText>
          </AppText>
          <FlatList
            data={transactions}
            keyExtractor={(item) => item.id}
            renderItem={renderTransaction}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  amount: {
    flexDirection: "row",
    alignItems: "center",
  },
  fundsButton: {
    width: "45%",
    padding: 10,
    height: 100,
    borderColor: colors.secondary,
    borderRadius: 20,
    backgroundColor: colors.light,
    borderWidth: 1,
    justifyContent: "space-evenly",
  },
  box: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: colors.primary,
    padding: 10,
    marginBottom: 10,
  },
  currencyBox: {
    width: 60,
    height: 60,
    borderRadius: 30,
    textAlign: "center",
    marginRight: 10,
    justifyContent: "center",
    backgroundColor: "white",
  },
  balanceSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  balanceTitle: {
    fontSize: 18,
    color: colors.secondary,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.white,
  },
  button: {
    backgroundColor: colors.tertiary,
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionHistory: {
    marginTop: 20,
  },
  sectionSubTitle: {
    color: colors.secondary,
    fontSize: 15,
    marginBottom: 10,
  },
  sectionTitle: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: "row",
    // justifyContent: "space-between",
    padding: 15,
    backgroundColor: colors.light,
    borderBottomWidth: 1,
    marginBottom: 2,
    borderRadius: 20,
    borderBottomColor: "#eee",
  },
  transactionTitle: {
    fontSize: 14,
    color: colors.dark,
  },
  transactionType: {
    fontSize: 14,
    color: "gray",
  },
  transactionAmount: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default WalletScreen;
