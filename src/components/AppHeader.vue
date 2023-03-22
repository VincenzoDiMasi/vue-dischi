<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-trasparent text-white">
    <div class="container-fluid text-white mt-5">
      <a class="navbar-brand text-white fs-3 " href="#">MY GAMES</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link text-white fs-3" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white fs-3 " :to="{ name: 'videogames' }">Videogames</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white fs-3" :to="{ name: 'contact' }">Contacts</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped ></style>
