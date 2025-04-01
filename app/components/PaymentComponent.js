
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
  //  const [modalVisible, setModalVisible] = useState(false);
  //  const [selectedItem, setSelectedItem] = useState(null);

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
  container: {
    backgroundColor: colors.tertiary,
    padding: 5,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    marginVertical: 5,
    overflow: "hidden",
    width: "100%",
    height: 100,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  status: {
    backgroundColor: "pink",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    textAlign: "center",
  },
  goalImageContainer: {
    width: "30%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
  goalReportContainer: {
    width: "70%",
    height: "100%",
    justifyContent: "space-between",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // width: '90%',
    backgroundColor: colors.primary,
  },
  goalInformation: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalInformationNumeric: {
    width: "80%",
  },
  goalInformationBar: {
    backgroundColor: colors.secondary,
    width: "80%",
    height: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  header: {
    fontWeight: "900",
  },
});

export default PaymentCard;
