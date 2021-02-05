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
import {isLoading, setToken, setUsername} from '../store/actions';
import {connect} from 'react-redux';

const LogInForm = (props) => {
  const {navigation} = props;
  const [usernameLog, setUsernameLog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');
  const [error, setError] = useState('');
  const loginUser = () => {
    axios
      .post('http://192.168.178.25:3000/api/user/login', {
        username: usernameLog,
        password: passwordLog,
      })
      .then((response) => {
        if (response.data.msg) {
          setError(response.data.msg),
            //setUsernameLog(''),
            setPasswordLog('');
        } else {
          navigation.navigate('WeatherApp');
          props.setUsername(usernameLog);
          setUsernameLog('');
          setPasswordLog('');
          setError('');
          props.isLoading(true);
          props.setToken(response.data);
          console.log('TOKEN', response.data); //JWT TOKEN
        }
      });
  };
  return (
    <SafeAreaView>
      {props.isLoading.value ? (
        navigation.navigate('WeatherApp')
      ) : (
        <View style={styles.container}>
          <TextInput
            onChangeText={(value) => setUsernameLog(value)}
            placeholder="username or email"
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => {}}
            style={styles.input}
            value={usernameLog}
          />
          <TextInput
            onChangeText={(value) => setPasswordLog(value)}
            placeholder="password"
            secureTextEntry
            returnKeyType="send"
            ref={(input) => {}}
            style={styles.input}
            value={passwordLog}
          />
          <Text style={{color: 'red', justifyContent: 'center'}}>{error}</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              usernameLog.trim() === ''
                ? setError('Please enter username and password')
                : loginUser();
            }}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    token: state.token,
    username: state.username,
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isLoading: (set) => dispatch(isLoading(set)),
    setToken: (set) => dispatch(setToken(set)),
    setUsername: (set) => dispatch(setUsername(set)),
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
