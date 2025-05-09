import React, { useState,useEffect,useContext } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import * as Yup from "yup";

import {login} from '../backendintegration/index';
import {StoreContext} from "../../GlobalState";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import LogoContainer from "../components/LogoContainer";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import HomeScreenCopy from "./HomeScreenCopy";
import AccountOnBoardingScreen from "./AccountOnBoardingScreen";

//  Import the Explore icon image
const exploreIcon = require("../assets/explore.png"); // Adjust path as needed

const validationSchema = Yup.object().shape({
  name: Yup.string().label("Name"),
  password: Yup.string().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
     const contextData = useContext(StoreContext);
  const handleSubmit = async(values) => {
    
    const resp= await login(values,contextData.setUser);
    console.log("in login  handle submit",values,contextData);
    navigation.navigate("HomeScreenCopy");
  };

  return (
    <Screen style={styles.container}>
      <LogoContainer />
      <AppForm
        initialValues={{ name: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalise="none"
          autoCorrect={false}
          icon={"account"}
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

        {/* 📍 Pressable Explore Icon */}
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreenCopy")}>
            <Image source={exploreIcon} style={styles.exploreIcon} />
          </TouchableOpacity>
        </View>
      </AppForm>

      {/* <TouchableWithoutFeedback
        onPress={() => navigation.navigate("HomeScreenCopy")}
      >
        <AppText>Explore the app.</AppText>
      </TouchableWithoutFeedback> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  iconContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  exploreIcon: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default LoginScreen;
