import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {setToken, setUsername} from '../store/actions';

import {connect} from 'react-redux';
import axios from 'axios';

/*const arr = [
  {id: 1, name: 'dofu'},
  {id: 2, name: 'fudo'},
];*/

const Item = ({name}) => (
  <View>
    <Text>{name}</Text>
  </View>
);

const Profile = (props) => {
  const [users, setUsers] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const jtwToken = props.token;
  //'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmQyNTQ5MGU3Y2E3YTFlMjA3N2I5OGEiLCJ1c2VybmFtZSI6ImJlcmkiLCJpYXQiOjE2MDc2Mjg3ODF9.KMoeL_tttNGOgfmrsOKEJHs8iIm41mYdi-Q43myV-XU';
  //verify user token
  const authAxios = axios.create({
    baseURL: 'http://192.168.178.25:3000/api/user/users',
    headers: {
      'auth-token': jtwToken,
    },
  });
  console.log('TAKO SE TO RADI', props.token);
  useEffect(() => {
    const userList = async () => {
      try {
        let response = await authAxios.get(
          'http://192.168.178.25:3000/api/user/users',
        );
        response = await response.data;
        console.log('KONZOLE', response[1]);
        setName(response[1]);
        setUsers(response[0]);
        await props.setUsername(response[1]);
      } catch (err) {
        setError(err);
      }
    };

    userList();
  }, []);
  const renderItem = ({item}) => <Item name={item} />;

  const {navigation} = props;

  console.log(users);

  return (
    <SafeAreaView style={styles.container}>
      {/*<FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => `key-${item + 1}`}
      />*/}
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Welcome {`${name}`}</Text>
      </View>
      <View style={styles.regUsers}>
        <Text>Number of Registered users on EasyWeather:</Text>
        <Text>{users.length}</Text>
      </View>
      <Text>{error}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  nameContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
  regUsers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    token: state.token,
    username: state.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isLoading: (set) => dispatch(isLoading(set)),
    setToken: (set) => dispatch(setToken(set)),
    setUsername: (set) => dispatch(setUsername(set)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
