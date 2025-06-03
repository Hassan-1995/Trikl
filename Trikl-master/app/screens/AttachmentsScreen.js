import React from "react";

import { View, StyleSheet, ScrollView } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormDate,
  SubmitButton,
  AppFormCountry,
  AppFormContactNumber,
  AppFormAttachment,
} from "../components/forms";
import LogoContainer from "../components/LogoContainer";

const validationSchema = Yup.object().shape({
  idCardNumber: Yup.string().required().label("Identification"),
  idCardAttachment: Yup.string().required().label("ID Attachment"),
  billingNumber: Yup.string().required().label("Address"),
  billingNumberAttachment: Yup.string().required().label("Address Attachment"),
  funds: Yup.string().required().label("Fund"),
  fundsAttachment: Yup.string().required().label("Funds Attachment"),
});

function AttachmentsScreen(props) {
  const handleSubmit = (values) => {
    console.log("Form subitted with values: ", values);

    const formData = new FormData();

    formData.append("idCardNumber", values.idCardNumber);
    formData.append("billingNumber", values.billingNumber);
    formData.append("funds", values.funds);

    formData.append("idCardAttachment", {
      imageUri: values.idCardAttachment,
      name: "idCardAttachment.jpg",
      type: "image/jpeg",
    });
    formData.append("billingNumberAttachment", {
      imageUri: values.billingNumberAttachment,
      name: "billingNumberAttachment.jpg",
      type: "image/jpeg",
    });
    formData.append("fundsAttachment", {
      imageUri: values.fundsAttachment,
      name: "fundsAttachment.jpg",
      type: "image/jpeg",
    });

    console.log("Form Data: ", formData.get("fundsAttachment"));
  };
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <LogoContainer />
        <AppForm
          initialValues={{
            idCardNumber: "",
            idCardAttachment: "",
            billingNumber: "",
            billingNumberAttachment: "",
            funds: "",
            fundsAttachment: "",
          }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            autoCapitalise="none"
            autoCorrect={false}
            icon={"card-account-details-outline"}
            name={"idCardNumber"}
            placeholder="Government Issued Identification"
          />
          <AppFormAttachment name={"idCardAttachment"} />
          <View
            style={{ height: 2, width: "100%", backgroundColor: "black" }}
          />
          <AppFormField
            autoCapitalise="none"
            autoCorrect={false}
            icon={"map-marker-outline"}
            name={"billingNumber"}
            placeholder="House/Billing Address"
          />
          <AppFormAttachment name={"billingNumberAttachment"} />
          <View
            style={{ height: 2, width: "100%", backgroundColor: "black" }}
          />
          <AppFormField
            autoCapitalise="none"
            autoCorrect={false}
            icon={"bank"}
            name={"funds"}
            placeholder="Source of Income"
          />
          <AppFormAttachment name={"fundsAttachment"} />
          <View
            style={{ height: 2, width: "100%", backgroundColor: "black" }}
          />
          <View style={styles.buttonContainer}>
            <SubmitButton title={"Save and Continue"} />
          </View>
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
});

export default AttachmentsScreen;
