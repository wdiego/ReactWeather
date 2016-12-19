var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=3c07bbbb63baae12f6e015abb48af5fa&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl)
      .then(function (res) {
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      })
      .catch(function (res) {
        throw new Error('Unable to fetch weather for that location.');
      });
  }
};


// 3c07bbbb63baae12f6e015abb48af5fa
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=3c07bbbb63baae12f6e015abb48af5fa&units=metric