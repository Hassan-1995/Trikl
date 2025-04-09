
import { Card, Button } from "react-native-paper";
import React, { useState } from "react";

import {
  
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import PaymentModal  from "./ModalPaymentSchedule";
import Icon from "./Icon";
import ModalFundSelectionScreenComponent from "./ModalFundSelectionScreenComponent";

function PaymentCard({item, assets, tempValue,allPayments,handleInvestmentRequest }) {
   const [modalVisible, setModalVisible] = useState(false);
   const [selectedItem, setSelectedItem] = useState(null);
console.log("Item in Payment  Card",item);
  const openModal = (selecteditem) => {
    console.log("Item in Open Modal",selecteditem);
    setSelectedItem(item);
     setModalVisible(true);
  };
  const onClose = (item) => {
    console.log("closing Payment Modal",item);
        setModalVisible(false);
  };

  return (
    <>
     <View style={styles.card}>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{item.goalName}</Text>
      <Text style={styles.label}>Amount Due</Text>
      <Text style={styles.amount}>{item?.totalAmount}</Text>
    </View>
    <TouchableOpacity style={styles.button}onPress={()=>openModal(item)}>
      <Text style={styles.buttonText}>Pay Now</Text>
    </TouchableOpacity>
  </View>
    <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={{
                // justifyContent: "center",
                // flexGrow: 1,
                alignItems: "flex-end",
                // width: "100%",
              }}
              onPress={() => setModalVisible(false)}
            >
              <Icon
                name={"close-box-outline"}
                backgroundColor="transparent"
                iconColor={colors.danger}
                size={50}
              />
            </TouchableOpacity>
            {selectedItem && (
              <>
                <PaymentModal item={selectedItem} tempValue={tempValue}  handleInvestmentRequest={handleInvestmentRequest} setModal={setModalVisible} allPayments={allPayments} />
              </>
            )}
          </View>
        </View>
      </Modal>
    </>
   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  textContainer: {
    flexShrink: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  label: {
    fontSize: 14,
    color: '#6e6e6e',
    marginBottom: 2,
  },
  amount: {
    fontSize: 22,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#24406b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default PaymentCard;
