import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

import LogInForm from './LogInForm';

const LogIn = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.logoContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WeatherApp');
          }}>
          <Image
            style={styles.logo}
            source={require('../utils/images/weather-logo.png')}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Login to see Weather App</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}
          style={styles.register}>
          <Text>Click here to Register</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <View style={styles.formContainer}>
        <LogInForm navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14EAFA',
  },
  logo: {width: 100, height: 100},
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 15,
  },
  formContainer: {},
  register: {
    paddingTop: 50,
    alignItems: 'center',
  },
});

export default LogIn;
