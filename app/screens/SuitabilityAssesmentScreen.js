import React, { useState } from "react";

import { View, StyleSheet, ScrollView, Modal } from "react-native";
import Screen from "../components/Screen";
import {findRiskProfile} from "../backendintegration/helperFunctions";
import {submitRiskProfiling} from "../backendintegration/index";
import MultipleChoiceQuestions from "../components/MultipleChoiceQuestions";
import AppButton from "../components/AppButton";
import LogoContainer from "../components/LogoContainer";
import BankPayment from "../components/BankPayment";
import AlertBox from "../components/AlertBox";

const questionnaire = [
  {
    "question": "What is your age group?",
    "keyId": 1,
    "category": "Demographics",
    "answers": [
      { "key": "1", "option": "Below 30", "riskScore": 80 },
      { "key": "2", "option": "30 – 45", "riskScore": 60 },
      { "key": "3", "option": "46 – 60", "riskScore": 40 },
      { "key": "4", "option": "Above 60", "riskScore": 20 }
    ]
  },
  {
    "question": "What is your primary financial goal?",
    "keyId": 2,
    "category": "Investment Goals",
    "answers": [
      { "key": "1", "option": "Capital preservation", "riskScore": 20 },
      { "key": "2", "option": "Stable income", "riskScore": 40 },
      { "key": "3", "option": "Growth with some risk", "riskScore": 60 },
      { "key": "4", "option": "High growth with high risk", "riskScore": 80 }
    ]
  },
  {
    "question": "What is your investment time horizon?",
    "keyId": 3,
    "category": "Investment Strategy",
    "answers": [
      { "key": "1", "option": "Less than 3 years", "riskScore": 20 },
      { "key": "2", "option": "3 – 5 years", "riskScore": 40 },
      { "key": "3", "option": "6 – 10 years", "riskScore": 60 },
      { "key": "4", "option": "More than 10 years", "riskScore": 80 }
    ]
  },
  {
    "question": "How would you react if your investment dropped by 20% in a short period?",
    "keyId": 4,
    "category": "Risk Tolerance",
    "answers": [
      { "key": "1", "option": "Sell immediately to avoid further losses", "riskScore": 20 },
      { "key": "2", "option": "Wait and monitor the market", "riskScore": 40 },
      { "key": "3", "option": "Buy more at a lower price", "riskScore": 60 },
      { "key": "4", "option": "Take it as a normal market movement", "riskScore": 80 }
    ]
  },
  {
    "question": "How much of your portfolio are you comfortable investing in high-risk assets?",
    "keyId": 5,
    "category": "Portfolio Allocation",
    "answers": [
      { "key": "1", "option": "0 – 10%", "riskScore": 20 },
      { "key": "2", "option": "11 – 30%", "riskScore": 40 },
      { "key": "3", "option": "31 – 60%", "riskScore": 60 },
      { "key": "4", "option": "61 – 100%", "riskScore": 80 }
    ]
  },
  {
    "question": "What is your level of investment knowledge?",
    "keyId": 6,
    "category": "Investor Experience",
    "answers": [
      { "key": "1", "option": "No knowledge", "riskScore": 20 },
      { "key": "2", "option": "Basic understanding", "riskScore": 40 },
      { "key": "3", "option": "Moderate knowledge", "riskScore": 60 },
      { "key": "4", "option": "Advanced/expert", "riskScore": 80 }
    ]
  },
  {
    "question": "How do you feel about investing in volatile markets?",
    "keyId": 7,
    "category": "Risk Tolerance",
    "answers": [
      { "key": "1", "option": "Very uncomfortable", "riskScore": 20 },
      { "key": "2", "option": "Slightly uncomfortable", "riskScore": 40 },
      { "key": "3", "option": "Neutral", "riskScore": 60 },
      { "key": "4", "option": "Comfortable with high volatility", "riskScore": 80 }
    ]
  },
  {
    "question": "How would you describe your current financial situation?",
    "keyId": 8,
    "category": "Financial Stability",
    "answers": [
      { "key": "1", "option": "Highly dependent on savings", "riskScore": 20 },
      { "key": "2", "option": "Stable with some surplus savings", "riskScore": 40 },
      { "key": "3", "option": "No major financial liabilities", "riskScore": 60 },
      { "key": "4", "option": "Significant wealth accumulation", "riskScore": 80 }
    ]
  },
  {
    "question": "What is your expected annual return on investment?",
    "keyId": 9,
    "category": "Investment Goals",
    "answers": [
      { "key": "1", "option": "4 – 6%", "riskScore": 20 },
      { "key": "2", "option": "7 – 10%", "riskScore": 40 },
      { "key": "3", "option": "11 – 15%", "riskScore": 60 },
      { "key": "4", "option": "Above 15%", "riskScore": 80 }
    ]
  },
  {
    "question": "What type of investments do you prefer?",
    "keyId": 10,
    "category": "Portfolio Allocation",
    "answers": [
      { "key": "1", "option": "Fixed deposits, government bonds", "riskScore": 20 },
      { "key": "2", "option": "Balanced mutual funds", "riskScore": 40 },
      { "key": "3", "option": "Stocks, ETFs, REITs", "riskScore": 60 },
      { "key": "4", "option": "Startups, Crypto, Venture Capital", "riskScore": 80 }
    ]
  }
];

function SuitabilityAssesmentScreen({ navigation, route }) {
  console.log("Values from TVM in Suitability",route.params);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBox, setSelectedBox] = useState(null);
  const [feedback, setFeedback] = useState([]);
  const [riskProfile, setRiskProfile] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const activeComponent = questionnaire[currentIndex];

  const handlePress = (value) => {
    console.log("CurrentQuestion",questionnaire[currentIndex]);
    const riskRespnse={questionId:questionnaire[currentIndex],selectedanswer:questionnaire[currentIndex].answers[value-1]}
    console.log("Value in handlePress",riskRespnse)
    const tempArray = [...feedback];
    tempArray[currentIndex] = riskRespnse;
    setFeedback(tempArray);
    console.log("Feedback", tempArray);
  };

  const handleForwardPress = () => {
    if (currentIndex < questionnaire.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedBox(currentIndex + 1);
    } else {

        console.log("completed Assessment", feedback);
        handleriskCalculation();
      
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
  function handleriskCalculation(){
    let riskscore=0;
    console.log("all Risk Risponses",feedback);
    for(var i=0; i<feedback.length;i++){
riskscore =feedback[i].selectedanswer.riskScore
    }
    console.log("Total  Risk Sore",riskscore);
    const profile= findRiskProfile(riskscore);
    console.log("Total  Risk Sore",riskscore,profile);
    setRiskProfile(profile);
  };
  const handleriskFinalize=async() => {
    try{
    const resp= await submitRiskProfiling(feedback);
    setModalVisible(!modalVisible);

    console.log("Params in -handle riskProfile",route.params);
    console.log("Risk Profile in  -handle riskProfile",resp);
            //   navigation.navigate("PlanSummary", route.params);
              navigation.navigate("FundSelection", {riskProfile:riskProfile,tvm:route.params});
    console.log("Submitted Risk Profile",resp,feedback);
  //  navigation.navigate("PlanSummary", route.params);
    }catch(error){
      console.log("Error Submitting Risk Profile",error);
    };

  
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
          onPress={() => {handleriskFinalize();
            // setModalVisible(!modalVisible);
            // console.log(route.params);
            // // navigation.navigate("PlanSummary", route.params);
            // navigation.navigate("FundSelection", route.params);
            
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
