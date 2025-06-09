import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServicesView from "@/views/ServicesView.vue";
import ContactView from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-es",
      component: HomeView,
      meta: { lang: "es" },
    },
    {
      path: "/servicios",
      name: "services-es",
      component: ServicesView,
      meta: { lang: "es" },
    },
    {
      path: "/contacto",
      name: "contact-es",
      component: ContactView,
      meta: { lang: "es" },
    },
    {
      path: "/english",
      name: "home-en",
      component: HomeView,
      meta: { lang: "en" },
    },
    {
      path: "/services",
      name: "services-en",
      component: ServicesView,
      meta: { lang: "en" },
    },
    {
      path: "/contact",
      name: "contact-en",
      component: ContactView,
      meta: { lang: "en" },
    },
  ],
});

export default router;
