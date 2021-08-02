import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

import Slider from '@react-native-community/slider';
import sunIcon from '../utils/images/sun.png';

const SunControl = (props) => {
  const [sun, setSun] = useState(0);
  const [sunRise, setSunRise] = useState('');
  const [sunSet, setSunSet] = useState('');

  useEffect(() => {
    setSun(Date.now);
  }, []);

  useEffect(() => {
    const sunRiseTime = moment(props.sun.sunrise * 1000)
      .utcOffset('+02:00')
      .format(' HH:mm');

    setSunRise(sunRiseTime);
  }, []);

  useEffect(() => {
    const sunSetTime = moment(props.sun.sunset * 1000)
      .utcOffset('+02:00')
      .format(' HH:mm');

    setSunSet(sunSetTime);
  }, []);

  if (sun >= props.sun.sunrise * 1000 && sun <= props.sun.sunset * 1000) {
    <View style={styles.sliderView}>
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
    </View>;
  } else {
    <Text>NOC</Text>;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          position: 'absolute',
          top: 5,
        }}>
        Sun position
      </Text>
      {sun >= props.sun.sunrise * 1000 && sun <= props.sun.sunset * 1000 ? (
        <View style={styles.sliderView}>
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
        </View>
      ) : (
        <Text style={{color: 'white', fontSize: 18}}>
          is from the other side
        </Text>
      )}
      {/*<Text>{console.log(new Date(props.sun.sunrise * 1000).toString())}</Text>
      <Text>
        {
          (console.log(new Date(props.sun.sunset * 1000).toString()),
          console.log(props.sun.sunset * 1000))
        }
      </Text>
      <Text>
        Sunrise{sunRise} - {sunSet}Sunset
      </Text>*/}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    sun: state.sun,
  };
};

const styles = StyleSheet.create({
  sliderView: {
    transform: [{scaleX: 0.2}, {scaleY: 0.2}],
  },
  slider: {
    width: 1400,
    height: 40,
  },
});

export default connect(mapStateToProps)(SunControl);
