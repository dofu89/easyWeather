import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {weatherConditions} from '../utils/WeatherConditions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {color} from 'react-native-reanimated';

const CurrentCity = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainOne}>
        <View style={styles.cityDate}>
          <Text style={{margin: 10, fontSize: 35, color: 'white'}}>
            Sarajevo
          </Text>
          <Text style={{fontSize: 20, color: 'gray'}}>
            Thu 5 December 8:41 am
          </Text>
        </View>
        <View style={styles.weatherTemp}>
          <MaterialCommunityIcons
            name={'weather-cloudy'}
            size={100}
            color="#FFF"
          />
          <Text style={{fontSize: 80, color: 'white'}}>27˚</Text>
        </View>
        <View style={styles.feelsLike}>
          <Text style={{marginBottom: 15, fontSize: 20, color: 'white'}}>
            34˚ / 26˚ Feels like 30˚
          </Text>
          <Text style={{fontSize: 20, color: 'white'}}>Cloudy</Text>
        </View>
        <Text style={{textAlign: 'right', color: 'white'}}>
          Yesterday 34˚ / 26˚
        </Text>
      </View>
      <View style={styles.mainTwo}>
        <View style={styles.first}>
          <MaterialCommunityIcons
            name={'water-outline'}
            size={30}
            color="#FFF"
          />
          <View style={{marginLeft: -25}}>
            <Text style={{color: 'white'}}>Precipitation</Text>
            <Text style={{color: 'white'}}>10%</Text>
          </View>
          <Text style={{fontSize: 40, color: 'white'}}>|</Text>
          <MaterialCommunityIcons
            name={'weather-sunny'}
            size={30}
            color="yellow"
          />
          <View style={{marginLeft: -25}}>
            <Text style={{color: 'white'}}>UV Index</Text>
            <Text style={{color: 'white'}}>Low</Text>
          </View>
        </View>
        <Text>Hourly</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(172, 103, 202)',
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
    backgroundColor: 'rgba(193,190,186,0.8)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
});

export default CurrentCity;
