
<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  name: 'App',
  components: { AppHeader, AppFooter, AppMain }
};
</script>

<template>
  <div class="d-flex flex-column justify-content-between  vh-100">

    <AppHeader />
    <div class="flex-grow-1">

      <RouterView />
    </div>

    <AppFooter />
  </div>
</template>

<style>
body {

  background-image: linear-gradient(53deg,
      rgb(18, 1, 1) 32%,
      rgb(255, 0, 0) 63%,
      rgb(255, 57, 57) 82%,
      rgba(219, 37, 74, 1) 100%)
}
</style>