<!-- Home.vue -->

<template>
  <div class="home-container">
    <div class="background-image">
      <div class="content">
        <h1>Bienvenue sur l'Application Météo</h1>
        <div class="weather-info">
          <SearchBar @search="handleSearch" />
          <CurrentWeather v-if="currentWeather" :weatherData="currentWeather" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
     name: 'home';
    return {
      currentWeather: null,
    };
  },
  methods: {
    handleSearch(city) {
      // Exemple fictif : Mettre à jour les données météorologiques pour la ville spécifiée
      this.currentWeather = {
        name: city,
        main: {
          temp: 25,
          humidity: 60,
        },
        weather: [
          {
            description: 'Ensoleillé',
          },
        ],
      };
    },
  },
};
</script>

<style scoped>
/* Styles spécifiques à la page Home */
.home-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Image de fond (ajustez le chemin d'accès à votre image) */
  background-image: url('@/assets/weather-background.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.7;
}

.content {
  position: relative;
  z-index: 1;
  padding: 20px;
  color: #fff;
}

h1 {
  text-align: center;
}


</style>
