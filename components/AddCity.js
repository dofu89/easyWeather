import React, {useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {setCity, addCity, isLoading} from '../store/actions';
import {connect} from 'react-redux';

const AddCity = (props) => {
  const [text, setText] = useState('');

  const onChange = (textValue) => setText(textValue);
  return (
    <View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={text}
          placeholder="Enter city name"
          placeholderTextColor="white"
        />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            text.trim() === ''
              ? alert('Please enter a city name!')
              : props.addCity(text, setText(''))
          }>
          <Text style={styles.btnText}>ADD CITY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    cityName: state.cityName,
    list: state.list,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCity: (set) => dispatch(setCity(set)),
    addCity: (city) => dispatch(addCity(city)),
    isLoading: (set) => dispatch(isLoading(set)),
  };
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
  },
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    color: 'white',
  },
  btn: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 50,
    marginBottom: 10,
    paddingHorizontal: 2,
    //paddingVertical: 10,
    width: 120,
  },
  btnText: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCity);
