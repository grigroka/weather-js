'use strict';
// Init weather object
const weather = new Weather('London', 'UK');
// Init UI
const ui = new UI();
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
// weather.changeLocation('Kaunas', 'LT');
function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
