import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {weatherConditions} from '../utils/WeatherConditions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {connect} from 'react-redux';

const CurrentCity = (props) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: weatherConditions[props.weatherCondition].color},
      ]}>
      <View style={styles.mainOne}>
        <View style={styles.mainInfo}>
          <Text style={styles.cityName}>{props.cityName}</Text>
          <Text style={styles.date}>{Date.now()} Date</Text>
        </View>
        <View style={styles.mainTemp}>
          <MaterialCommunityIcons
            name={weatherConditions[props.weatherCondition].icon}
            size={60}
            color="#FFF"
          />
          <Text style={styles.mainTempText}>
            {props.temperature.temp.toFixed(0)}˚
          </Text>
        </View>

        <View style={styles.realFeel}>
          <Text>
            {props.temperature.temp_min.toFixed(0)}˚/{' '}
            {props.temperature.temp_max.toFixed(0)}˚ Feels like{' '}
            {props.temperature.feels_like.toFixed(0)}˚
          </Text>
          <Text>{props.weatherCondition}</Text>
        </View>
      </View>
      <View style={styles.mainTwo}></View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    cityName: state.cityName,
    weatherCondition: state.weatherCondition,
    temperature: state.temperature,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainInfo: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cityName: {
    color: '#ffffff',
    fontSize: 20,
  },
  date: {
    color: '#5c5c5c',
    fontSize: 15,
  },
  mainTemp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainTempText: {
    fontSize: 48,
    color: '#ffffff',
  },
  mainOne: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  mainTwo: {
    flex: 1,
  },
  realFeel: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'blue',
  },
});

export default connect(mapStateToProps)(CurrentCity);
