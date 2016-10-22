const request = require('request');

var getWeather = (lat, long, callback) => {

  request({
    url: `https://api.darksky.net/forecast/89b418137e156f76398b310bae0d8562/${lat},${long}`,
    json: true
  }, (error, response, body) => {
      if (error) {
        callback('Unable to connect to the Forecast.io servers.');
      } else if (response.statusCode === 400) {
        callback('Unable to fetch weather.');
      } else if (response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      }
  });
};

module.exports.getWeather = getWeather;
