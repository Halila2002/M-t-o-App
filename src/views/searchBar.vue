<template>

  <div class="search-bar-container">
    <div class=" search-bar mt-4 ">
      <label for="cityInput" class="form-label">Rechercher une ville :</label>
      <div class="input-group">
        <input type="text" id="cityInput" v-model="city" class="form-control" placeholder="Entrez le nom de la ville" />
        <button @click="search" class="btn btn-primary">Rechercher</button>
      </div>
    </div>
  </div>
</template>

<script>


import axios from 'axios';

export default {
  // Vos autres options de composant

  methods: {
    async getWeatherData(city) {
      try {
        const apiKey = 'a42e8a606f13ac47dddfd232d6a00eb4';

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        const response = await axios.get(apiUrl);

        // Traitez les données de réponse ici
        console.log(response.data);
      } catch (error) {
        // Gérez les erreurs ici
        console.error('Erreur lors de la récupération des données météo', error);
      }
    },

    // Appelez cette méthode avec le nom de la ville lorsque vous en avez besoin
    // this.getWeatherData('Paris');

  

  },
};
</script>



<style scoped>
/* Styles spécifiques au composant SearchBar */
.search-bar-container {
  text-align: center;
  background-image: url('@/assets/1.jpeg'); 
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center;
}

.search-bar {
  background-color: rgba(255, 255, 255, 0.8); /* Ajout d'une couleur de fond semi-transparente */
  border-radius: 15px; /* Bordures arrondies */
  padding: 20px;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

input {
  border-radius: 5px; /* Bordures arrondies pour l'entrée de texte */
  margin-right: 10px;
}

button {
  border-radius: 8px; /* Bordures arrondies pour le bouton */
}
</style>
