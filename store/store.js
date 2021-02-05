import {createStore, applyMiddleware} from 'redux';
import weatherReducer from './reducer';
import rootReducer from './index';

import {persistStore, persistReducer} from 'redux-persist';
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfing = {
  key: 'root',
  storage: AsyncStorage,
  //whitelist: ['weatherReducer','WeatherState','initialState']
};
const persitedReducer = persistReducer(persistConfing, weatherReducer);

const store = createStore(persitedReducer, applyMiddleware(createLogger()));

let persistedStore = persistStore(store);

export {store, persistedStore};
