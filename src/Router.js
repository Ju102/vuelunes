import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import CollatzComponent from "./components/CollatzComponent.vue";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";

const Rutas = [
    { path: "/", component: HomeComponent },
    { path: "/collatz", component: CollatzComponent},
    { path: "/multiplicar", component: TablaMultiplicar}
]

const router = createRouter({
    history: createWebHistory(),
    routes: Rutas,
});

export default router; 