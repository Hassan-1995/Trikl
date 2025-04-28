import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import {register} from '../backendintegration/index';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import LogoContainer from '../components/LogoContainer';
import Screen from '../components/Screen';
import Icon from '../components/Icon'; // Assuming you have an Icon component for the eye icon

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required()
    .label('Confirm Password'),
});

function RegisterScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlesubmit=async(values) =>{
    console.log("FormValues",values);
    const resp=await register(values);
    console.log(resp);
    if(resp.status.toString()=='201'){
        console.log("Navigateto Login",navigation);
        navigation.navigate("Login Screen");

    }


  }
  return (
    <Screen style={styles.container}>
      <LogoContainer />
      <AppForm
        initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
        onSubmit={(values) => handlesubmit(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry={!showPassword}
          textContentType="password"
          rightIcon={
            <Icon
              name={showPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowPassword(!showPassword)}
            />
          }
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="confirmPassword"
          placeholder="Confirm Password"
          secureTextEntry={!showConfirmPassword}
          textContentType="password"
          rightIcon={
            <Icon
              name={showConfirmPassword ? 'eye-off' : 'eye'}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          }
        />
        <SubmitButton title="Register" />
      </AppForm>
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
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

export default RegisterScreen;
