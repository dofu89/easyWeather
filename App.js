/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistedStore} from './store/store';
import WeatherApp from './components/WeatherApp';
import Routes from './src/Routes';

import {PersistGate} from 'redux-persist/es/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
