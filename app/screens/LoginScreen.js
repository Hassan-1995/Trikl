import React from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import LogoContainer from "../components/LogoContainer";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import HomeScreenCopy from "./HomeScreenCopy";
import AccountOnBoardingScreen from "./AccountOnBoardingScreen";

const validationSchema = Yup.object().shape({
  name: Yup.string().label("Name"), // temporary: name needs to be required
  password: Yup.string().min(4).label("Password"), // temporary: password needs to be required
});

function LoginScreen({ navigation }) {
  const handleSubmit = (values) => {
    console.log(values);
    // navigation.navigate("HomeScreenCopy");
    navigation.navigate("AccountOnBoardingScreen");
  };

  return (
    <Screen style={styles.container}>
      <LogoContainer />
      <AppForm
        initialValues={{ name: "", password: "" }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalise="none"
          autoCorrect={false}
          icon={"account"}
          // keyboardType="email-address"
          name={"name"}
          placeholder="Name"
        />
        <AppFormField
          autoCapitalise="none"
          autoCorrect={false}
          icon={"lock"}
          name={"password"}
          placeholder="Password"
          secureTextEntry={true}
          textContentType="emailAddress"
        />
        <SubmitButton title={"Login"} />
      </AppForm>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("HomeScreenCopy")}
      >
        <AppText>Explore the app.</AppText>
      </TouchableWithoutFeedback>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
