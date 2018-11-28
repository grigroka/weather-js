'use strict';
// Init weather object
const weather = new Weather('London', 'UK');
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
// weather.changeLocation('Kaunas', 'LT');
function getWeather() {
  weather
    .getWeather()
    .then(results => {
      console.log(results);
    })
    .catch(err => console.log(err));
}
