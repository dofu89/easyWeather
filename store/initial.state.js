const WeatherState = {
  cityName: 'Sarajevo',
  weatherCondition: 'Rain',
  temperature: 15,
  list: [
    {id: 0, title: 'Sarajevo'},
    {id: 1, title: 'Munich'},
    {id: 2, title: 'Dubai'},
  ],
  isLoading: false,
  token: '',
  username: '',
};

module.exports = WeatherState;
console.log('LOG LIST STATE :', WeatherState.list);
