<script>
const baseProjectsUrl = "http://127.0.0.1:8000/api";
import axios from "axios";
export default {
  name: "VideogameDetailPage",
  data() {
    return {
      videogame: {},
    };
  },
  computed: {
    euroPrice() {
      return `${this.videogame.price}€`;
    },
    available() {
      if (this.videogame.available) {
        return "fa-circle-check text-success";
      } else {
        return "fa-circle-xmark text-danger";
      }
    },
  },
  methods: {
    fetchVideogame() {
      const endpoint = baseProjectsUrl + "/videogame/" + this.$route.params.id;
      axios
        .get(endpoint)
        .then((res) => {
          this.videogame = res.data;
        })
        .catch(() => {
          this.$router.push({ name: "not-found" });
        })
        .then(() => { });
    },
  },
  created() {
    this.fetchVideogame();
  },
};
</script>

<template>
  <div class="container">
    <h1 class="text-center my-4">{{ videogame.title }}</h1>
    <div class="row py-3">
      <div class="col-4">
        <figure class="w-75">
          <img :src="videogame.image" :alt="videogame.title" class="img-fluid" />
        </figure>
      </div>
      <div class="col-8">
        <strong>Descrizione:</strong>
        <p class="mb-3">
          {{ videogame.description }}
        </p>
        <div class="row mt-5">
          <div class="col">
            <strong>Prezzo: </strong><span>{{ euroPrice }}</span>
          </div>
          <div class="col">
            <strong>Disponibile: </strong><i class="fa-solid" :class="available"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  color: white
}
</style>
