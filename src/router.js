import { createRouter, createWebHistory } from "vue-router";
import DcHeros from "./pages/DcHeros.vue";
import Calender from "./pages/Calender.vue";
import Home from "./pages/Home.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/dc-heros", component: DcHeros },
  { path: "/calender", component: Calender },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
