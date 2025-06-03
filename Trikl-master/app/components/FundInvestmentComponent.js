import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { StoreContext } from "../../GlobalState";
import ModalFundSelectionScreenComponent from "./ModalFundSelectionScreenComponent";
import Icon from "./Icon";

function FundInvestmentComponent({ assets, tempValue, handleFundSelect }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [fund,setFund]=useState({
    id: '2',
    name: 'Stable Income Fund',
    oneYearReturn: '7.8%',
    fiveYearReturn: '38.2%',
    inceptionReturn: '95.1%',
    riskProfile: 'Moderate Risk',
  });

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => openModal(assets)}
      >
        <View style={styles.imageContainer}>
          <Image source={assets.image} style={styles.image} />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.headerRow}>
            <AppText style={styles.fundName}>{assets.TemplateName}</AppText>
            <View
              style={[
                styles.status,
                assets.status === "On"
                  ? { backgroundColor: colors.safe }
                  : { backgroundColor: colors.danger },
              ]}
            >
              <Text style={styles.statusText}>{assets.status} Track</Text>
            </View>
          </View>

          <View style={styles.metricsRow}>
            <AppText>1Y: <Text style={styles.value}>{fund.oneYearReturn}</Text></AppText>
            <AppText>5Y: <Text style={styles.value}>{fund.fiveYearReturn}</Text></AppText>
            <AppText>Since Inception: <Text style={styles.value}>{fund.inceptionReturn}</Text></AppText>
          </View>

          <Text style={styles.riskProfile}>{fund.riskProfile}</Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={{ alignItems: "flex-end" }}
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
              <ModalFundSelectionScreenComponent
                item={selectedItem}
                tempValue={tempValue}
                setModal={setModalVisible}
                handleFundSelect={handleFundSelect}
              />
            )}
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.tertiary,
    padding: 10,
    borderRadius: 15,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    width: 60,
    height: 60,
    marginRight: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  infoContainer: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fundName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  status: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
  },
  metricsRow: {
    flexDirection: "column",
    marginTop: 6,
  },
  value: {
    color: "green",
    fontWeight: "bold",
  },
  riskProfile: {
    marginTop: 4,
    color: "#A0522D",
    fontStyle: "italic",
    fontSize: 13,
  },
  modalContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  modalContent: {
    flex: 1,
  },
});

export default FundInvestmentComponent;
