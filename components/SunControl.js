import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Slider from '@react-native-community/slider';
import sunIcon from '../utils/images/sun.png';

let test = (
  <MaterialCommunityIcons name={'weather-sunny'} size={30} color="#FFF" />
);

const SunControl = (props) => {
  const [sun, setSun] = useState(0);

  useEffect(() => {
    setSun(Date.now);
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 20}}>Sun position</Text>
      <Slider
        style={styles.slider}
        minimumValue={props.sun.sunrise * 1000}
        maximumValue={props.sun.sunset * 1000}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        value={sun}
        disabled={true}
        thumbImage={sunIcon}
        thumbTintColor={'white'}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    sun: state.sun,
  };
};

const styles = StyleSheet.create({
  slider: {
    width: 300,
    height: 40,
  },
});

export default connect(mapStateToProps)(SunControl);
