const WeatherState = {
  cityName: 'Sarajevo',
  weatherCondition: 'Rain',
  temperature: {
    temp: 0,
    feels_like: -4.19,
    temp_min: 0,
    temp_max: 0,
    pressure: 1009,
    humidity: 80,
  },
  list: [
    {id: 0, title: 'Sarajevo'},
    {id: 1, title: 'Munich'},
    {id: 2, title: 'Dubai'},
  ],
  isLoading: false,
  token: '',
  username: '',
  visibility: 50,
  wind: {
    speed: 0,
    deg: 0,
    gust: 0,
  },
};

module.exports = WeatherState;
console.log('LOG LIST STATE :', WeatherState.list);
