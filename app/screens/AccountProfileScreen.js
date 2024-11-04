import React from 'react';
import { View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import colors from '../config/colors';

function AccountProfileScreen({ navigation }) {

    const handleEditProfile=()=>{
        console.log('hello')
        navigation.navigate('AccountOnBoardingScreen')
    }


    return (
        <Screen>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.profileSection}>
                <Image source={require('../assets/user.png')} style={styles.profilePicture} />
                <AppText style={styles.username}>Username</AppText>
                <AppText style={styles.fullName}>Full Name</AppText>
            </View>
            
            <View style={styles.infoSection}>
                <AppText style={styles.infoTitle}>Email</AppText>
                <AppText style={styles.infoValue}>user@example.com</AppText>
            </View>

            <View style={styles.infoSection}>
                <AppText style={styles.infoTitle}>Phone Number</AppText>
                <AppText style={styles.infoValue}>123-456-7890</AppText>
            </View>

            <View style={styles.infoSection}>
                <AppText style={styles.infoTitle}>Date of Birth</AppText>
                <AppText style={styles.infoValue}>January 1, 1990</AppText>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleEditProfile}>
                <AppText style={styles.buttonText}>Edit Profile</AppText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <AppText style={styles.buttonText}>Change Password</AppText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <AppText style={styles.buttonText}>Notification Settings</AppText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <AppText style={styles.buttonText}>Logout</AppText>
            </TouchableOpacity>
          </ScrollView>
        </Screen>
    );
};

const styles = StyleSheet.create({
  container: {},
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  fullName: {
    fontSize: 16,
    color: colors.secondary,
  },
  infoSection: {
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 16,
    color: colors.secondary,
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  button: {
    backgroundColor: colors.light,
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: colors.primary,
    fontWeight: 'bold',
    // fontSize: 16,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

export default AccountProfileScreen;
