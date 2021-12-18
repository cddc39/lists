import Lists from "../components/Lists.vue";
import List from "../components/List.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Lists",
      component: Lists,
    },
    {
      path: "/list/:id",
      name: "List",
      props: true,
      component: List,
    },
  ],
});

export default router;
