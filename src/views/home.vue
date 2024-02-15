<template>
  <div>
    <input type="text" v-model="city" placeholder="Rechercher une ville" />
    <button @click="searchWeather">Rechercher</button>

    <div v-if="weatherData">
      <h2>{{ weatherData.name }}</h2>
      <p>{{ weatherData.weather[0].description }}</p>
      <p>Température: {{ weatherData.main.temp }}°C</p>
      <p>Humidité: {{ weatherData.main.humidity }}%</p>
      <p>Vitesse du vent: {{ weatherData.wind.speed }} km/h</p>
    </div>

    <div v-if="forecastData">
      <h3>Prévisions pour les prochains jours :</h3>
      <ul>
        <li v-for="forecast in forecastData.list" :key="forecast.dt">
          <p>{{ formatDate(forecast.dt) }}</p>
          <p>{{ forecast.weather[0].description }}</p>
          <p>Température: {{ forecast.main.temp }}°C</p>
          <p>Humidité: {{ forecast.main.humidity }}%</p>
          <p>Vitesse du vent: {{ forecast.wind.speed }} km/h</p>
        </li>
      </ul>
    </div>

    <div v-for="cityName in cities" :key="cityName">
      <button @click="searchWeatherByCity(cityName)">{{ cityName }}</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
   name:'HomeWiew',
  data() {
    return {
      city: '',
      weatherData: null,
      forecastData: null,
    
    };
  },
  methods: {
    searchWeather() {
      const apiKey = 'a42e8a606f13ac47dddfd232d6a00eb4';
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=a42e8a606f13ac47dddfd232d6a00eb4&units=metric`)
        .then(response => {
          this.weatherData = response.data;
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        });

      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=${apiKey}&units=metric`)
        .then(response => {
          this.forecastData = response.data;
          
        })
        .catch(error => {
          console.log(error);
        });
    },
    formatDate(timestamp) {
      const date = new Date(timestamp * 1000);
      const day = date.getDate();
      const month = date.getMonth() + 1;
     
      return `${day}/${month}`;
    },
    searchWeatherByCity(cityName) {
      this.city = cityName;
      this.searchWeather();
    }
  }
};
</script>