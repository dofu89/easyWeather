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
        <View style={styles.cityDate}>
          <Text style={{margin: 10, fontSize: 35, color: 'white'}}>
            {props.cityName}
          </Text>
          <Text style={{fontSize: 20, color: 'white'}}>
            Thu 5 December 8:41 am
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
        <Text style={{textAlign: 'right', color: 'white'}}>
          Pressure: {props.temperature.pressure}
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
        <Text>Wind</Text>
        <View style={styles.secodn}>
          <Text>{props.wind.speed}</Text>
        </View>
      </View>
    </SafeAreaView>
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
  },
});

export default connect(mapStateToProps)(CurrentCity);
