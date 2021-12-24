import Lists from "../components/Lists.vue";
import List from "../components/Items.vue";
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
      path: "/list/:listName",
      name: "List",
      props: true,
      component: List,
    },
  ],
});

export default router;
