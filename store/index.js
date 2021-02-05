import {combineReducers} from 'redux';

import weatherReducer from './reducer';

const rootReducer = combineReducers({
  weatherReducer,
});

export default rootReducer;
