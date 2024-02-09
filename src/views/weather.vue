<!-- CurrentWeather.vue -->

<template>
  <div class="current-weather">
    <h2>{{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
    <p>{{ weatherData.weather[0].description }}</p>
    <p>Température: {{ weatherData.main.temp }}°C</p>
    <p>Humidité: {{ weatherData.main.humidity }}%</p>
  </div>
</template>

<script>
export default {
  props: {
    weatherData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Styles spécifiques au composant CurrentWeather */
.current-weather {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 20px;
}

h2 {
  margin-bottom: 10px;
}
</style>
