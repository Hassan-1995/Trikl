import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Svg, Path } from "react-native-svg";
import AppText from "./AppText";
import colors from "../config/colors";

const { width } = Dimensions.get("window");

function ModalHomeScreenComponent({ item }) {
  const segments = [
    { percentage: 0.3, color: "#00796B" },
    { percentage: 0.2, color: "#43A047" },
    { percentage: 0.2, color: "#FBC02D" },
    { percentage: 0.3, color: "#1E88E5" },
  ];

  const renderPieChart = () => {
    const radius = 50;
    let angle = 0;
    const paths = segments.map((seg, index) => {
      const startAngle = angle;
      const sweepAngle = seg.percentage * 360;
      angle += sweepAngle;

      const largeArc = sweepAngle > 180 ? 1 : 0;
      const x1 = radius + radius * Math.cos((Math.PI * startAngle) / 180);
      const y1 = radius + radius * Math.sin((Math.PI * startAngle) / 180);
      const x2 = radius + radius * Math.cos((Math.PI * angle) / 180);
      const y2 = radius + radius * Math.sin((Math.PI * angle) / 180);

      return (
        <Path
          key={index}
          d={`M${radius},${radius} L${x1},${y1} A${radius},${radius} 0 ${largeArc} 1 ${x2},${y2} Z`}
          fill={seg.color}
        />
      );
    });

    return (
      <Svg height={120} width={120}>
        {paths}
      </Svg>
    );
  };

  return (
    <View style={styles.modal}>
      <AppText style={styles.title}>{item.goalName}</AppText>
      <View style={styles.chartContainer}>{renderPieChart()}</View>
      <AppText style={styles.planName}>Investment Plan</AppText>

      {/* Table Rows */}
      <View style={[styles.row, styles.shadedRow]}>
        <AppText style={styles.label}>Target Value</AppText>
        <AppText style={styles.value}>${item.goalTarget.toLocaleString()}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.label}>Actual Portfolio</AppText>
        <AppText style={styles.value}>${item?.invested?.toLocaleString()}</AppText>
      </View>
      <View style={[styles.row, styles.shadedRow]}>
        <AppText style={styles.label}>Initial Investment</AppText>
        <AppText style={styles.value}>${item?.initialContribution?.toLocaleString()}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.label}>Recurring Amount</AppText>
        <AppText style={styles.value}>${item?.recurringAmount?.toLocaleString()}</AppText>
      </View>

      <View style={styles.statusBox}>
        <AppText style={styles.statusText}>✅ You're on track</AppText>
      </View>

      {item.status === "Draft" ? (
        <TouchableOpacity style={styles.activateButton}>
          <AppText style={styles.activateText}>Activate</AppText>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.okButton}>
          <AppText style={styles.okText}>OK</AppText>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    width: width * 0.9,
    alignSelf: "center",
    elevation: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#000",
  },
  chartContainer: {
    alignSelf: "center",
    marginBottom: 10,
  },
  planName: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  shadedRow: {
    backgroundColor: "#F5F5F5",
    borderRadius: 4,
  },
  label: {
    fontSize: 16,
    color: "#444",
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statusBox: {
    backgroundColor: "#E6F4EA",
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  statusText: {
    color: "#2E7D32",
    fontSize: 16,
    fontWeight: "600",
  },
  okButton: {
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    marginTop: 20,
    paddingVertical: 12,
    alignItems: "center",
  },
  okText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  activateButton: {
    backgroundColor: "#1E88E5",
    borderRadius: 20,
    marginTop: 20,
    paddingVertical: 12,
    alignItems: "center",
  },
  activateText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ModalHomeScreenComponent;
