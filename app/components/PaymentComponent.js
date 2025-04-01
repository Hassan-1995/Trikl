
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
import ModalFundSelectionScreenComponent from "./ModalFundSelectionScreenComponent";
import Icon from "./Icon";

function PaymentCard({item, assets, tempValue }) {
   const [modalVisible, setModalVisible] = useState(false);
   const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    console.log("Selected Fund in Modal",item);
    // setSelectedItem(item);
  //   setModalVisible(true);
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.header}>
          <Text style={styles.title}>
            {item.title}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>{item.label1}</Text>
          <Text style={styles.value}>{item.value1}</Text>
        </View>
        {item.label2 && (
          <View style={styles.row}>
            <Text style={styles.label}>{item.label2}</Text>
            <Text style={styles.value}>{item.value2}</Text>
          </View>
        )}
        <View style={styles.footer}>
          <Text style={styles.price}>{item.price}</Text>
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => openModal(item)}
          >
            {item.buttonText}
          </Button>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 15,
    padding: 15,
    elevation: 3,
  },
  header: {
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 3,
  },
  label: {
    color: "gray",
  },
  value: {
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#FBC6A4",
    borderRadius: 20,
  },
});

export default PaymentCard;
