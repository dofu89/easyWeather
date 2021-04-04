import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {weatherConditions} from '../utils/WeatherConditions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

import TimeDate from './TimeDate';

import {connect} from 'react-redux';

const CurrentCity = (props) => {
  return (
    <LinearGradient
      colors={[
        weatherConditions[props.weatherCondition].color,
        weatherConditions[props.weatherCondition].color1,
      ]}
      style={[styles.container]}>
      <View style={styles.mainOne}>
        <View style={styles.cityDate}>
          <Text style={{margin: 10, fontSize: 35, color: 'white'}}>
            {props.cityName}
          </Text>
          <Text style={{fontSize: 20, color: 'white'}}>
            <TimeDate />
          </Text>
        </View>
        <View style={styles.weatherTemp}>
          <MaterialCommunityIcons
            name={weatherConditions[props.weatherCondition].icon}
            size={100}
            color="#FFF"
          />
          <Text style={{fontSize: 80, color: 'white'}}>
            {props.temperature.temp.toFixed(0)}˚
          </Text>
        </View>
        <View style={styles.feelsLike}>
          <Text style={{marginBottom: 15, fontSize: 20, color: 'white'}}>
            {props.temperature.temp_min.toFixed(0)}˚/{' '}
            {props.temperature.temp_max.toFixed(0)}˚ Feels like{' '}
            {props.temperature.feels_like.toFixed(0)}˚
          </Text>
          <Text style={{fontSize: 20, color: 'white'}}>
            {props.weatherCondition}
          </Text>
        </View>
        <Text style={{textAlign: 'right', color: 'white', marginRight: 10}}>
          Pressure: {props.temperature.pressure} mbar
        </Text>
      </View>
      <View style={styles.mainTwo}>
        <View style={styles.first}>
          <MaterialCommunityIcons name={'eye-outline'} size={30} color="#FFF" />
          <View style={{marginLeft: -25}}>
            <Text style={{color: 'white'}}>Visibility</Text>
            <Text style={{color: 'white'}}>{props.visibility}</Text>
          </View>
          <Text style={{fontSize: 40, color: 'white'}}>|</Text>
          <MaterialCommunityIcons
            name={'water-percent'}
            size={35}
            color="#FFF"
          />
          <View style={{marginLeft: -25}}>
            <Text style={{color: 'white'}}>Humidity</Text>
            <Text style={{color: 'white'}}>{props.temperature.humidity}%</Text>
          </View>
        </View>
        <Text style={{color: 'white', marginLeft: 10}}>Wind</Text>
        <View style={styles.secodn}>
          <MaterialCommunityIcons
            name={'weather-windy'}
            size={120}
            color="#FFF"
          />
          <Text style={{color: 'white', fontSize: 20}}>
            {props.wind.speed.toFixed(1)} km/h
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const mapStateToProps = (state) => {
  return {
    cityName: state.cityName,
    weatherCondition: state.weatherCondition,
    temperature: state.temperature,
    visibility: state.visibility,
    wind: state.wind,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainOne: {
    flex: 1,
  },
  cityDate: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  weatherTemp: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    padding: 20,
  },
  feelsLike: {
    flex: 1,
    alignItems: 'center',

    justifyContent: 'flex-start',
  },
  mainTwo: {
    flex: 1,
  },
  first: {
    backgroundColor: 'rgba(255, 255, 255,0.3)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  secodn: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255,0.3)',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default connect(mapStateToProps)(CurrentCity);
