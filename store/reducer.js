import {
  SET_CITY,
  ADD_CITY,
  REMOVE_CITY,
  GET_TEMP,
  GET_WEATHER_CONDITION,
  IS_LOADING,
  SET_TOKEN,
  SET_USERNAME,
  SET_VISIBILITY,
  GET_WIND,
} from './actionTypes';

const initialState = require('./initial.state');

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      return {
        ...state,
        cityName: (state.cityName = action.data),
      };
    case ADD_CITY:
      return {
        ...state,
        list: [...state.list, {id: Math.random(), title: action.data}],
      };
    case REMOVE_CITY:
      return {
        ...state,
        list: [...state.list.filter((city) => city.id != action.data)],
      };
    case GET_TEMP:
      return {
        ...state,
        temperature: (state.temperature = action.data),
      };
    case GET_WEATHER_CONDITION:
      return {
        ...state,
        weatherCondition: (state.weatherCondition = action.data),
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: (state.isLoading = action.data),
      };
    case SET_TOKEN:
      return {
        ...state,
        token: (state.token = action.data),
      };
    case SET_USERNAME:
      return {
        ...state,
        username: (state.username = action.data),
      };
    case SET_VISIBILITY:
      return {
        ...state,
        visibility: (state.visibility = action.data),
      };
    case GET_WIND:
      return {
        ...state,
        wind: (state.wind = action.data),
      };
    default:
      return state;
  }
};

export default weatherReducer;
