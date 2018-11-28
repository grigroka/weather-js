'use strict';
// Init weather object
const weather = new Weather('London', 'UK');
// Init UI
const ui = new UI();
// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
// Change location event
document.querySelector('#w-change-btn').addEventListener('click', e => {
  const city = document.querySelector('#city').value;
  const countryCode = document.querySelector('#country-code').value;
  weather.changeLocation('Kaunas', 'LT');
  // Get and display weather
  getWeather();
  // Close modal
  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
