import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import axios from 'axios';

const RegisterForm = (props) => {
  const {navigation} = props;
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const registerUser = async () => {
    try {
      let response = await axios
        .post('http://192.168.178.25:3000/api/user/register', {
          username: usernameReg,
          password: passwordReg,
        })
        .then(
          setUsernameReg(''),
          setPasswordReg(''),
          navigation.navigate('LogIn'),
        );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          onChangeText={(value) => setUsernameReg(value)}
          placeholder="username or email"
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onSubmitEditing={() => {}}
          style={styles.input}
          value={usernameReg}
        />
        <TextInput
          onChangeText={(value) => setPasswordReg(value)}
          placeholder="password"
          secureTextEntry
          returnKeyType="send"
          ref={(input) => {}}
          style={styles.input}
          value={passwordReg}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            (usernameReg && passwordReg).trim() === ''
              ? console.log('Enter user and pw')
              : registerUser();
          }}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#7DF6E2ed',
    margin: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  buttonContainer: {
    backgroundColor: '#0BE3BF',
    paddingVertical: 10,
    margin: 5,
    borderRadius: 50,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default RegisterForm;
