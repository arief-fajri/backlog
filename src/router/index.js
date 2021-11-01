import {
    createRouter,
    createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
import Histogram from "../views/Histogram.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/histogram",
        name: "histogram",
        component: Histogram,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;