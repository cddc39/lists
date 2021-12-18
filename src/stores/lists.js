import { defineStore } from "pinia";

export const useListsStore = defineStore({
  id: "lists",
  state: () => ({ lists: ["groceries", "cosmetics", "home"] }),
  getters: {},
  actions: {
    createList(list) {
      this.lists.push(list);
    },
  },
});
