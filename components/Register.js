import axios from 'axios';
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

import RegisterForm from './RegisterForm';

const Register = (props) => {
  const {navigation} = props;
  const googleSingin = async () => {
    try {
      await axios
        .post('http://192.168.178.25:3000/google', {
          name: 'hello from FE',
        })
        .then(console.log('name is listed'));
    } catch (err) {
      console.log(err);
    }
  };
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

        <Text style={styles.title}>Register new User</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LogIn');
          }}
          style={styles.register}>
          <Text>Go to Login Page</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.google} onPress={() => googleSingin()}>
          <Text>SingIn with Google</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <View style={styles.formContainer}>
        <RegisterForm navigation={navigation} />
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
  google: {
    alignItems: 'center',
    paddingTop: 20,
  },
});

export default Register;
