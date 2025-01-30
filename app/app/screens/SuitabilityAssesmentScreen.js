import React, { useState } from "react";

import { View, StyleSheet, ScrollView, Modal } from "react-native";
import Screen from "../components/Screen";
import MultipleChoiceQuestions from "../components/MultipleChoiceQuestions";
import AppButton from "../components/AppButton";
import LogoContainer from "../components/LogoContainer";
import BankPayment from "../components/BankPayment";
import AlertBox from "../components/AlertBox";

const questionnaire = [
  {
    question: "Please select your age bracket",
    keyId: 1,
    answers: [
      { key: "1", option: "Below 25" },
      { key: "2", option: "Between 25 to 30" },
      { key: "3", option: "Between 30 to 50" },
      { key: "4", option: "Above 50" },
    ],
  },
  {
    question: "Which explains your Health Scenario the best",
    keyId: 2,
    answers: [
      { key: "1", option: "Healthy with Insurance" },
      { key: "2", option: "Healthy without Insurance" },
      { key: "3", option: "Chronic Disease" },
    ],
  },
  {
    question: "How often do you exercise?",
    keyId: 3,
    answers: [
      { key: "1", option: "Daily" },
      { key: "2", option: "Few times a week" },
      { key: "3", option: "Few times a month" },
      { key: "4", option: "Rarely" },
    ],
  },
  {
    question: "What is your preferred type of exercise?",
    keyId: 4,
    answers: [
      { key: "1", option: "Running" },
      { key: "2", option: "Cycling" },
      { key: "3", option: "Swimming" },
      { key: "4", option: "Gym workouts" },
    ],
  },
  {
    question: "How would you rate your diet?",
    keyId: 5,
    answers: [
      { key: "1", option: "Very healthy" },
      { key: "2", option: "Somewhat healthy" },
      { key: "3", option: "Average" },
      { key: "4", option: "Unhealthy" },
    ],
  },
  {
    question: "How many hours of sleep do you get on average?",
    keyId: 6,
    answers: [
      { key: "1", option: "Less than 5 hours" },
      { key: "2", option: "5-6 hours" },
      { key: "3", option: "7-8 hours" },
      { key: "4", option: "More than 8 hours" },
    ],
  },
  {
    question: "What is your stress level?",
    keyId: 7,
    answers: [
      { key: "1", option: "Very low" },
      { key: "2", option: "Moderate" },
      { key: "3", option: "High" },
      { key: "4", option: "Very high" },
    ],
  },
  {
    question: "How often do you visit a doctor for a check-up?",
    keyId: 8,
    answers: [
      { key: "1", option: "Once a month" },
      { key: "2", option: "Once every few months" },
      { key: "3", option: "Once a year" },
      { key: "4", option: "Rarely" },
    ],
  },
  {
    question: "Do you smoke?",
    keyId: 9,
    answers: [
      { key: "1", option: "Yes" },
      { key: "2", option: "No" },
    ],
  },
  {
    question: "Do you consume alcohol?",
    keyId: 10,
    answers: [
      { key: "1", option: "Yes, regularly" },
      { key: "2", option: "Yes, occasionally" },
      { key: "3", option: "No" },
    ],
  },
];

function SuitabilityAssesmentScreen({ navigation, route }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBox, setSelectedBox] = useState(null);
  const [feedback, setFeedback] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const activeComponent = questionnaire[currentIndex];

  const handlePress = (value) => {
    const tempArray = [...feedback];
    tempArray[currentIndex] = value;
    setFeedback(tempArray);
    console.log("Feedback", feedback);
  };

  const handleForwardPress = () => {
    if (currentIndex < questionnaire.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedBox(currentIndex + 1);
    } else {
      setCurrentIndex(0);
      setSelectedBox(null);
      setModalVisible(!modalVisible);
    }
  };
  const handleBackPress = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(questionnaire.length - 1);
    }
  };

  return (
    <Screen>
      <LogoContainer />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <MultipleChoiceQuestions
            questionNumber={currentIndex + 1}
            question={activeComponent.question}
            answer={activeComponent.answers}
            numberOfQuestions={questionnaire.length}
            selectedBox={selectedBox}
            setSelectedBox={setSelectedBox}
            onPress={handlePress}
          />
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            {currentIndex == 0 ? (
              <></>
            ) : (
              <AppButton title={"Back"} onPress={handleBackPress} />
            )}
          </View>
          <View style={styles.button}>
            <AppButton title={"Continue"} onPress={handleForwardPress} />
          </View>
        </View>

        <Modal animationType="slide" transparent={false} visible={modalVisible}>
          <AlertBox
            onPress={() => {
              setModalVisible(!modalVisible);
              console.log(route.params);
              navigation.navigate("PlanSummary", route.params);
            }}
          />
        </Modal>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flexGrow: 1,
    alignItems: "flex-end",
  },
  button: {
    width: "40%",
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default SuitabilityAssesmentScreen;
