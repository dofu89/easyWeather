import React, {useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import WeatherContainer from './WeatherContainer';
import AddCity from '../components/AddCity';
import ListCity from './ListCity';
import {weatherConditions} from '../utils/WeatherConditions';

import {
  getTemp,
  setCity,
  getWeatherCondition,
  isLoading,
  getVisibility,
  getWind,
} from '../store/actions';
import {connect} from 'react-redux';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

const WeatherApp = (props) => {
  const {navigation} = props;
  const API_KEY = '5b1432a17346656691ae8d94addc43db';

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=${API_KEY}&units=metric`,
      );
      response = await response.data;
      console.log('GLAVNI OBJEKT', response.main);
      await props.getTemp(response.main);
      await props.getWeatherCondition(response.weather[0].main);
      await props.getVisibility(response.visibility);
      await props.getWind(response.wind);
    }

    fetchMyAPI();
  }, [props.cityName]);

  return (
    <LinearGradient
      colors={[
        weatherConditions[props.weatherCondition].color,
        weatherConditions[props.weatherCondition].color1,
      ]}
      style={[styles.container]}>
      <View style={styles.names}>
        <WeatherContainer navigation={navigation} />
      </View>
      <FlatList
        data={props.list}
        renderItem={({item}) => (
          <ListCity item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => `key-${item.id}`}
      />
      <AddCity />
    </LinearGradient>
  );
};
const mapStateToProps = (state) => {
  return {
    cityName: state.cityName,
    weatherCondition: state.weatherCondition,
    temperature: state.temperature,
    list: state.list,
    isLoading: state.isLoading,
    username: state.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCity: (set) => dispatch(setCity(set)),
    getTemp: (data) => dispatch(getTemp(data)),
    getWeatherCondition: (data) => dispatch(getWeatherCondition(data)),
    isLoading: () => dispatch(isLoading()),
    //addCity: (city) => dispatch(addCity(city)),
    getVisibility: (set) => dispatch(getVisibility(set)),
    getWind: (set) => dispatch(getWind(set)),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  names: {
    height: 190,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
