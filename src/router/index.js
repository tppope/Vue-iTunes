import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Tunes from "../views/Tunes.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/tunes",
        name: "Tunes",
        component: Tunes,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
export default router;
//# sourceMappingURL=index.js.map