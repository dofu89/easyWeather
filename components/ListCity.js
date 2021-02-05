import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';

import {setCity, removeCity} from '../store/actions';
import {connect} from 'react-redux';

const ListCity = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => props.setCity(props.item.title)}>
        <View style={styles.listItemView}>
          <Text style={styles.list}>{props.item.title}</Text>
          <Icons
            name="remove"
            size={20}
            color="rgba(255,0,0,0.4)"
            onPress={() => props.removeCity(props.item.id)}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    cityName: state.cityName,
    weatherCondition: state.weatherCondition,
    temperature: state.temperatur,
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCity: (set) => dispatch(setCity(set)),
    removeCity: (id) => dispatch(removeCity(id)),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    fontSize: 18,
    color: 'white',
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCity);
