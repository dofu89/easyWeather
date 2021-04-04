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

export const setCity = (set) => {
  return {
    type: SET_CITY,
    data: set,
  };
};

export const addCity = (city) => {
  return {
    type: ADD_CITY,
    data: city,
  };
};

export const removeCity = (id) => {
  return {
    type: REMOVE_CITY,
    data: id,
  };
};

export const getTemp = (data) => {
  return {
    type: GET_TEMP,
    data: data,
  };
};

export const getWeatherCondition = (data) => {
  return {
    type: GET_WEATHER_CONDITION,
    data: data,
  };
};

export const isLoading = (set) => {
  return {
    type: IS_LOADING,
    data: set,
  };
};

export const setToken = (set) => {
  return {
    type: SET_TOKEN,
    data: set,
  };
};

export const setUsername = (set) => {
  return {
    type: SET_USERNAME,
    data: set,
  };
};

export const getVisibility = (set) => {
  return {
    type: SET_VISIBILITY,
    data: set,
  };
};

export const getWind = (set) => {
  return {
    type: GET_WIND,
    data: set,
  };
};
