import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: () =>
      import(/* webpackChunkName: "sobre" */ "../views/AboutView.vue"),
  },
  {
    path: "/consulta-onile",
    name: "consulta-onile",
    component: () =>
      import(
        /* webpackChunkName: "consulta-onile" */ "../components/ConsultaOnline.vue"
      ),
  },
  {
    path: "/servicos",
    name: "servicos",
    component: () =>
      import(
        /* webpackChunkName: "servicos" */ "../components/ServicosComponent.vue"
      ),
  },
  {
    path: "/depoimentos",
    name: "depoimentos",
    component: () =>
      import(
        /* webpackChunkName: "depoimentos" */ "../components/DepoimentosComponent.vue"
      ),
  },
  {
    path: "/contato",
    name: "contato",
    component: () =>
      import(
        /* webpackChunkName: "contato" */ "../components/ContatoComponent.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
