import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import ContactsPage from "../pages/ContactsPage.vue";
import VideogameDetailPage from "../pages/VideogameDetailPage.vue";
import VideoGamesPage from "../pages/VideoGamesPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/contacts", name: "contact", component: ContactsPage },
    {
      path: "/videogame/:id",
      name: "videogame-details",
      component: VideogameDetailPage,
    },
    {
      path: "/videogames",
      name: "videogames",
      component: VideoGamesPage,
    },
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
  ],
});

export { router };
