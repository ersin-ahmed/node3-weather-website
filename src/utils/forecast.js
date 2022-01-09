const request = require('request');

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=5532553ca7b3c7ba3eceeae34bbc1272&query=${lat},${long}&units=m`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services!', undefined);
    } else if (body.error) {
      console.log(body.error.info);
    } else {
      callback(
        undefined,
        // currentTemp: response.body.current.temperature,
        // feelslikeTemp: response.body.current.feelslike,
        // humidity: response.body.current.humidity,
        // weatherDesc: response.body.current.weather_descriptions[0],
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees. The Humidity is ${body.current.humidity}%. The Wind Speed is ${body.current.wind_speed} kmh.`
      );
    }
  });
};

module.exports = forecast;
