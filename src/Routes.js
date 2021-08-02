import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

import LogIn from '../components/LogIn';
import Register from '../components/Register';
import WeatherApp from '../components/WeatherApp';
import Profile from '../components/Profile';
import CurrentCity from '../components/CurrentCity';

const Stack = createStackNavigator();

const Routes = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{header: () => null}}
        //initialRouteName={props.isLoading ? 'WeatherApp' : 'LogIn'}  ---> with auth
        initialRouteName={'WeatherApp'}>
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="WeatherApp" component={WeatherApp} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="CurrentCity" component={CurrentCity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps)(Routes);
