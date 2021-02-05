import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {weatherConditions} from '../utils/WeatherConditions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {isLoading} from '../store/actions';

import {connect} from 'react-redux';

const WeatherContainer = (props) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cityNameStyle}>
        <MaterialCommunityIcons
          name="logout"
          size={28}
          color="rgba(255,0,0,0.7)"
          onPress={() => {
            props.isLoading(false);
            navigation.replace('LogIn');
          }}
        />
        <Text style={styles.name}>{props.cityName}</Text>
        <TouchableOpacity
          style={styles.profile}
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Text style={styles.profileName}>{props.username}</Text>
          <MaterialCommunityIcons name="face" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{props.weatherCondition}</Text>
        <MaterialCommunityIcons
          name={weatherConditions[props.weatherCondition].icon}
          size={48}
          color="#FFF"
        />
      </View>
      <Text style={styles.tempText}>{props.temperature.toFixed(0)}˚</Text>
    </SafeAreaView>
  );
};
//console.log(isLoading);
const mapStateToProps = (state) => {
  return {
    cityName: state.cityName,
    weatherCondition: state.weatherCondition,
    temperature: state.temperature,
    isLoading: state.isLoading,
    username: state.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCity: (set) => dispatch(setCity(set)),
    isLoading: (set) => dispatch(isLoading(set)),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginRight: '45%',
  },
  tempText: {
    fontSize: 48,
    textAlign: 'center',
    color: '#FFF',
  },
  body: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    color: '#FFF',
  },
  profile: {
    alignItems: 'center',
  },
  cityNameStyle: {
    flex: 1,
    fontSize: 48,
    color: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 3,
  },
  logout: {
    color: 'firebrick',
    position: 'relative',
  },
  name: {
    //flex: 1,
    color: '#FFF',
    fontSize: 48,
    //justifyContent: 'center',
  },
  icon: {
    //marginRight: 95,
  },
  profileName: {
    fontSize: 14,
    color: 'white',
    textTransform: 'capitalize',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
