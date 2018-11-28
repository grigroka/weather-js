'use strict';
class Weather {
  constructor(city, countryCode) {
    this.apiKey = 'f1beb0fc3b79ceb4360cb9cf9abe3f05';
    this.city = city;
    this.countryCode = countryCode;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.countryCode
      }&APPID=${this.apiKey}`
    );
    const responseData = await response.json();
    return responseData;
  }

  // Change weather location
  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}
